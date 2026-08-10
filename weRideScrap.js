(async function(){
  function formatDate(d) {
    var yyyy = d.getFullYear();
    var mm = String(d.getMonth() + 1).padStart(2, '0');
    var dd = String(d.getDate()).padStart(2, '0');
    return yyyy + "-" + mm + "-" + dd;
  }

  var today = new Date();
  var startDate = new Date(today.getFullYear(), today.getMonth(), 1);
  var endDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  var startStr = formatDate(startDate);
  var endStr = formatDate(endDate);

  var driverDefs = [
    { fullName: "amila premarathne", shortName: "amila", keywords: ["amila"] },
    { fullName: "hudu hassan", shortName: "hassan", keywords: ["hudu", "hassan"] },
    { fullName: "hadi ramezani", shortName: "hadi", keywords: ["hadi"] }
  ];

  var allUpdates = [];
  var popupSummary = "கண்டறியப்பட்ட டிரைவர் விபரங்கள் (" + startStr + " முதல் " + endStr + " வரை):\n\n";
  var totalFoundCount = 0;

  var allInputs = Array.from(document.querySelectorAll("input"));
  var dateInputs = allInputs.filter(function(inp){
    var val = (inp.value || inp.placeholder || "").toLowerCase();
    return !val.includes("search") && (val.match(/\d{4}-\d{2}-\d{2}/) || val.includes("12:00") || val.includes("11:59") || inp.type === "text");
  });

  if (dateInputs.length < 2) {
    dateInputs = allInputs.filter(function(inp){
      return !(inp.placeholder || "").toLowerCase().includes("search");
    });
  }

  var viewBtn = Array.from(document.querySelectorAll("button")).find(function(b){
    return b.innerText.trim().toLowerCase() === "view";
  });

  if (dateInputs.length < 2 || !viewBtn) {
    alert("Start Date, Stop Date பெட்டிகள் அல்லது View பட்டன் கண்டறியப்படவில்லை!");
    return;
  }

  function setInputValue(input, val) {
    if (input._flatpickr) {
      input._flatpickr.setDate(val, true);
      input._flatpickr.close();
      return;
    }

    var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
    nativeInputValueSetter.call(input, val);
    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.dispatchEvent(new Event('change', { bubbles: true }));
    input.dispatchEvent(new Event('blur', { bubbles: true }));
  }

  function closeCalendars() {
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', keyCode: 27, bubbles: true }));
    document.body.click();
  }

  for (var d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
    var curDateStr = formatDate(d);
    var startVal = curDateStr + " 12:00 AM";
    var endVal = curDateStr + " 11:59 PM";

    setInputValue(dateInputs[0], startVal);
    setInputValue(dateInputs[1], endVal);

    closeCalendars();
    await new Promise(function(res){ setTimeout(res, 500); });

    viewBtn.click();
    await new Promise(function(res){ setTimeout(res, 3000); });

    var driversForDate = {};
    var dayFound = false;
    var allElements = Array.from(document.body.querySelectorAll('*'));

    driverDefs.forEach(function(def){
      var matchedEl = allElements.find(function(el){
        if(el.children.length === 0 && el.innerText){
          var txt = el.innerText.toLowerCase();
          return def.keywords.some(function(kw){ return txt.includes(kw); });
        }
        return false;
      });

      if(matchedEl){
        var rowEl = matchedEl.closest('tr') || matchedEl.closest('[role="row"]');
        if(!rowEl) {
          rowEl = matchedEl.parentElement;
          while(rowEl && rowEl.tagName !== 'TR' && !rowEl.getAttribute('role')){
            rowEl = rowEl.parentElement;
          }
        }

        if(rowEl){
          var cells = Array.from(rowEl.querySelectorAll('td, div, span'));
          var numbers = [];

          cells.forEach(function(c){
            var txt = c.innerText ? c.innerText.replace(/\+46\d+/g, "").trim() : "";
            if(txt && !txt.includes("http")){
              var clean = txt.replace(/,/g, "").replace(/SEK/gi, "").trim();
              var val = parseFloat(clean);
              if(!isNaN(val) && val > 0){
                numbers.push(val);
              }
            }
          });

          var payout = 0;
          var bigNums = numbers.filter(function(n){ return n >= 100; });

          if(bigNums.length > 0){
            payout = bigNums[0];
          } else {
            var fullTxt = rowEl.innerText.replace(/,/g, "").replace(/\+46\d+/g, "");
            var allMatches = fullTxt.match(/\d+\.\d+/g);
            if(allMatches && allMatches.length > 0){
              payout = parseFloat(allMatches[0]);
            }
          }

          if(payout > 0){
            driversForDate[def.fullName] = payout;
            popupSummary += curDateStr + " | " + def.shortName + ": " + payout.toString().replace(".", ",") + " kr\n";
            dayFound = true;
            totalFoundCount++;
          }
        }
      }
    });

    if(dayFound){
      allUpdates.push({ date: curDateStr, drivers: driversForDate });
    }
  }

  if(totalFoundCount === 0){
    alert("குறிப்பிட்ட தேதிகளில் எந்த டிரைவர் தரவும் கண்டறியப்படவில்லை!");
    return;
  }

  var confirmSend = confirm(popupSummary + "\nமேற்கண்ட அனைத்து விபரங்களையும் Google Sheet-இல் புதுப்பிக்க விரும்புகிறீர்களா?");
  if(!confirmSend) return;

  var webAppUrl = "https://script.google.com/macros/s/AKfycbyUMwRu-nMvmDYS4h7emObdnzcd9XL4wFDSvF9zB1v7kCMXrgtWqElgW3Wn1EyIBccv9g/exec";

  fetch(webAppUrl, {
    method: "POST",
    body: JSON.stringify({ updates: allUpdates })
  })
  .then(function(res){ return res.text(); })
  .then(function(txt){ alert(txt); })
  .catch(function(err){ alert("பிழை: " + err); });
})();