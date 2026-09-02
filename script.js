/* =====================================================
   PROMO CODE — edit this one block to change or turn off
   the "book direct" discount (e.g. on the car cards).
   No other file needs to change.
   =====================================================
   - active: false hides the Promo Code field on the
     booking page entirely (customers won't see it at all).
   - code: what customers type in. Not shown anywhere on
     the site itself — it only appears on the printed card,
     so only people who got a card know it.
   - Changing the discount PERCENTAGE itself is a business
     decision applied manually when you confirm a booking
     (there's no automatic pricing engine on this site) —
     this switch only controls whether the code field shows
     up and what code it expects.
   ===================================================== */
const PROMO = {
  active: true,
  code: "DIRECT10",
};

const content = {
  en: {
    subTitle: "Your Premium Journey Starts Here – Comfort in Every Mile.",
    callBtn: "Call Us Now",
    fleetTitle: "Our Fleet",
    car1Title: "Standard Sedan",
    car1Desc: "Reliable for up to 4 passengers.",
    carPremiumTitle: "Premium Sedan",
    carPremiumDesc: "Luxury experience for business trips.",
    car2Title: "Premium Van",
    car2Desc: "Up to 7 passengers with large luggage space.",
    enqTitle: "Enquire About Your Trip Price",
    lblPickup: "Pickup (Airport/City):",
    lblDrop: "Drop-off Location:",
    lblFlight: "Flight / Vessel No (Optional):",
    lblDate: "Date:",
    lblTime: "Time:",
    lblAdults: "Adults:",
    lblKids: "Children:",
    lblBags: "Luggage Bags:",
    lblNotes: "Additional Notes / Questions:",
    lblAddons: "Extra Services / Add-ons:",
    optChild1: "Child seat 0-8 months",
    optChild2: "Child seat 9-36 months",
    optChild3: "Child seat 3+ Years",
    optCombi: "Combi (Large Luggages)",
    optPorter: "Porter Help",
    submitBtn: "Send Enquiry",
    contactTitle: "Contact Info",
    lblWhatsapp: "Chat with us on WhatsApp",
    waNoteText: "Tap to chat instantly",
    priceTitle: "Fixed Prices: Arlanda & Stockholm City",
    directionAtoC: "Arlanda Airport → Stockholm City",
    directionCtoA: "Stockholm City → Arlanda Airport",
    vehMinibus: "Minibus (7 Seater)",
    descUpTo4: "Up to 4 Passengers",
    descPremiumShort: "Luxury & Comfort",
    descUpTo7: "Up to 7 Passengers",
    badgeRecommended: "Recommended",
    bookNowBtn: "Book Now",
    enqSkipHtml:
      'Already know what you need? Skip straight to our <a href="booking.html"><strong>Direct Booking page</strong></a> to reserve your ride.',
    lblName: "Full Name:",
    lblEmail: "Email Address:",
    lblPhone: "Mobile Number:",
    trustLabel1: "Serving Stockholm since",
    trustLabel2: "Languages spoken",
    trustLabel3: "Airport availability",
    trustLabel4: "Arlanda prices, no surprises",
    contactEmailLabel: "Email:",
    contactPhoneLabel: "Phone:",
    contactWhatsappLabel: "WhatsApp:",

    // Shared nav / footer / modals (all pages)
    navHome: "Home",
    navAbout: "About",
    navServices: "Services",
    navPricing: "Pricing",
    navFAQ: "FAQ",
    navBookNow: "Book Now",
    footerAboutUs: "About Us",
    footerTermsPrivacy: "Terms & Privacy",
    footerRights: "All Rights Reserved.",
    successTitle: "✔ Thank You!",
    successBody: "Your enquiry has been sent successfully. We will contact you shortly.",
    bookingSuccessTitle: "✔ Booking Request Sent!",
    bookingSuccessBody:
      "Thanks — we've received your booking request and will confirm your price and pickup time shortly by phone, email, or WhatsApp.",
    closeBtn: "Close",
    warningScamMsg:
      "Your enquiry contains suspicious payment or scam-related keywords. Please remove these terms before submitting.",

    // About page
    aboutHeroTitle: "About Aathish Åkeri AB",
    aboutHeroSubtitle:
      "Stockholm's dependable, multilingual taxi partner for airport transfers, business travel, and everything in between.",
    aboutTrust1: "Founded",
    aboutTrust3: "Vehicle classes",
    aboutTrust4: "Airport pricing",
    aboutStoryHeading: "Our Story",
    aboutStoryP1:
      "Aathish Åkeri AB was founded in 2017 and has focused on premium taxi and airport transfer service in Stockholm since 2020, built around a simple idea: airport and city transfers should be reliable, comfortable, and honestly priced. Since then, what began as a small operation focused on Arlanda Airport transfers has grown into a trusted service for tourists, business travelers, and local families across greater Stockholm.",
    aboutStoryP2:
      "We're a driver-led company — the people behind the wheel are the same people who answer your call or WhatsApp message. That means fewer misunderstandings, faster confirmations, and a genuine interest in getting your journey right the first time.",
    aboutValuesHeading: "What We Stand For",
    aboutValue1Title: "Punctuality",
    aboutValue1Desc:
      "Flight tracked pickups and buffer time built in, so you're never left waiting at Arlanda.",
    aboutValue2Title: "Transparent Pricing",
    aboutValue2Desc:
      "Fixed fares for Arlanda ↔ Stockholm routes — the price you're quoted is the price you pay.",
    aboutValue3Title: "Multilingual Service",
    aboutValue3Desc:
      "Our team communicates in English, Swedish, Spanish, French, German, Dutch, and Italian.",
    aboutValue4Title: "Comfort & Space",
    aboutValue4Desc:
      "From a standard sedan to a 7-seater van, with room for luggage, child seats, and extra bags.",
    aboutFleetHeading: "Our Fleet at a Glance",
    aboutSeeServicesBtn: "See All Services",
    aboutCTAHeading: "Ready to Ride With Us?",

    // Services page
    servicesHeroTitle: "Our Services",
    servicesHeroSubtitle:
      "More than an airport run — comfortable transport for every occasion in Stockholm and beyond.",
    svcAirportTitle: "Airport Transfers",
    svcAirportDesc:
      "Fixed-price pickups and drop-offs at Arlanda, with flight tracking so we're there even if your flight is delayed. Bromma, Skavsta, and Västerås airports available on request.",
    svcCorpTitle: "Business & Corporate Travel",
    svcCorpDesc:
      "Punctual, professional pickups for meetings, conferences, and roadshows. Invoicing available for regular corporate accounts — ask us for details.",
    svcCruiseTitle: "Cruise Terminal Transfers",
    svcCruiseDesc:
      "Transfers to and from Stockholm's cruise terminals (Frihamnen & Värtahamnen), timed around your ship's arrival or departure.",
    svcHourlyTitle: "Hourly / As-Directed Hire",
    svcHourlyDesc:
      "Book a car and driver by the hour for multi-stop days, sightseeing, or when your schedule needs flexibility rather than a fixed route.",
    svcEventsTitle: "Events & Special Occasions",
    svcEventsDesc:
      "Weddings, celebrations, and group nights out — our premium sedan and 7-seater van keep your group together and comfortable.",
    svcFamilyTitle: "Family-Friendly Extras",
    svcFamilyDesc:
      "Child seats for every age group (0-8 months, 9-36 months, 3+ years), porter help with luggage, and combi vehicles for oversized bags.",
    svcPricingHeading: "See Our Fixed Arlanda Prices",
    svcPricingBody: "Check exact fares for Arlanda ↔ Stockholm City, or reserve directly.",
    svcViewPricingBtn: "View Pricing",

    // Booking page
    bookingHeroTitle: "Book Your Ride Direct",
    bookingHeroSubtitle:
      "No commission-hungry apps — book straight with us and pay securely once your trip is confirmed.",
    step1Title: "Fill in your trip",
    step1Desc: "Tell us your route, date/time, passengers, and preferred vehicle below.",
    step2Title: "We confirm it",
    step2Desc:
      "We reply by phone, WhatsApp, or email with your exact price and confirmed pickup time.",
    step3Title: "Pay securely",
    step3Desc:
      "Pay the driver directly, or use the secure SumUp payment link we send you — card, Apple Pay, or Google Pay.",
    bookingTripDetailsHeading: "Trip Details",
    quickFillIntro: "Quick fill for our fixed Arlanda routes:",
    vehicleTypeLabel: "Preferred Vehicle:",
    vehOptStandard: "Standard Sedan (up to 4)",
    vehOptPremium: "Premium Sedan (up to 4, luxury)",
    vehOptVan: "Premium Van / Minibus (up to 7)",
    lblPromoCode: "Promo Code (optional):",
    phPromoCode: "Have a code? Enter it here",
    requestBookingBtn: "Request Booking",
    paymentNoteHeading: "💳 Paying for an existing booking?",
    paymentNoteBody:
      "Once we confirm your trip, we'll send you a secure SumUp payment link by WhatsApp or email — accepting card, Apple Pay, and Google Pay. If you already have that link, use the button below.",
    sumupPayBtn: "Pay with SumUp",
    bookingPreferPhoneHeading: "Prefer to Book by Phone or WhatsApp?",

    // FAQ page
    faqHeroTitle: "Frequently Asked Questions",
    faqHeroSubtitle: "Everything you need to know before you book.",
    faqQ1: "What payment methods do you accept?",
    faqA1:
      "We accept cash and card directly with the driver. For direct online bookings, we also accept secure card, Apple Pay, and Google Pay payments through a SumUp payment link that we send once your booking is confirmed.",
    faqQ2: "How do the fixed Arlanda prices work?",
    faqA2:
      "Our Arlanda Airport ↔ Stockholm City fares are fixed by vehicle type — Standard Sedan, Premium Sedan, or Minibus — so the price you're quoted is the price you pay, regardless of traffic.",
    faqQ3: "What happens if my flight is delayed?",
    faqA3:
      "Add your flight number when booking and we track it, adjusting your pickup time automatically at no extra charge for reasonable delays. Please still message us on WhatsApp if the delay is significant.",
    faqQ4: "Do you provide child seats?",
    faqA4:
      "Yes — we offer child seats for 0-8 months, 9-36 months, and 3+ years. Just select the ones you need as add-ons when booking or enquiring.",
    faqQ5: "How far in advance should I book?",
    faqA5:
      "We recommend booking at least a few hours ahead where possible, and 24 hours ahead for early morning pickups or peak travel dates, to guarantee vehicle availability.",
    faqQ6: "What is your cancellation policy?",
    faqA6:
      "Please see our full Cancellation Policy for details. In short: the earlier you let us know, the more flexible we can be.",
    faqQ7: "Do you serve airports other than Arlanda?",
    faqA7:
      "Yes. Alongside Arlanda, we cover Bromma, Skavsta, and Västerås airports, as well as Stockholm's cruise terminals, on request.",
    faqQ8: "Do your drivers speak English?",
    faqA8: "Yes. Our team communicates in English, Swedish, Spanish, French, German, Dutch, and Italian.",
    faqQ9: "Is luggage space guaranteed?",
    faqA9:
      "Let us know your bag count when booking. If you have oversized or extra luggage, choose the \"Combi (Large Luggages)\" add-on or our Premium Van so we bring the right vehicle.",
    faqStillHeading: "Still have a question?",
    faqStillBody: "Reach us directly and we'll get back to you fast.",
    faqCallUsBtn: "Call Us",
    faqWhatsappUsBtn: "WhatsApp Us",

    // Terms & Privacy page
    termsHeroTitle: "Terms & Privacy",
    termsHeroSubtitle: "Our booking terms, cancellation policy, and how we handle your personal data.",
    termsDisclaimer:
      "Note: This page is a general starting template covering standard taxi-service terms and a GDPR-style privacy notice. Please review and adjust it — including the specific waiting-time and cancellation windows — to match your actual policies, and have it checked against Swedish/EU law before relying on it as your final legal terms.",
    termsTocTerms: "Booking Terms",
    termsTocCancellation: "Cancellation Policy",
    termsTocPrivacy: "Privacy Policy",
    terms1Heading: "1. Booking Terms & Conditions",
    terms1Intro:
      "These terms apply to all bookings and enquiries made with Aathish Åkeri AB (\"we\", \"us\", \"our\") by phone, WhatsApp, email, or through this website.",
    terms11Heading: "1.1 Fixed-Price Routes",
    terms11Body:
      "Fares shown for Arlanda Airport ↔ Stockholm City are fixed by vehicle type and are valid for direct transfers between those two points. Additional stops, detours, or routes outside these fixed lanes are quoted individually and confirmed before travel.",
    terms12Heading: "1.2 Booking Confirmation",
    terms12Body:
      "A booking is confirmed once we reply to your enquiry (by phone, WhatsApp, or email) confirming vehicle, price, and pickup time. Submitting the online form or booking page is a request, not an automatic confirmation.",
    terms13Heading: "1.3 Waiting Time",
    terms13Body:
      "For airport pickups, we monitor your flight and include reasonable free waiting time after landing. For city pickups, a shorter free waiting window applies. Waiting time beyond this may incur an additional charge, communicated to you at the time.",
    terms14Heading: "1.4 Passengers & Luggage",
    terms14Body:
      "Please provide an accurate passenger and luggage count when booking so we can assign the right vehicle. We reserve the right to request an upgraded vehicle (at the correct price) if the actual group or luggage exceeds what was declared.",
    terms15Heading: "1.5 Payment",
    terms15Body:
      "Payment can be made in cash or by card directly with the driver, or online via a secure SumUp payment link sent after booking confirmation. Online payment links are generated per booking and are not a stored recurring charge.",
    terms2Heading: "2. Cancellation Policy",
    terms2Intro: "We understand travel plans change. As a general guide:",
    terms2Item1: "Cancellations made well in advance of pickup can be rescheduled or cancelled free of charge.",
    terms2Item2:
      "Late cancellations, close to the scheduled pickup time, or a \"no-show\" at the agreed location may be subject to a cancellation fee, especially where a driver has already been dispatched.",
    terms2Item3:
      "If you paid in advance via a SumUp payment link and are entitled to a refund under this policy, contact us at info@aathishakeri.se and we will process it back to your original payment method.",
    terms2ClosingHtml:
      "To cancel or change a booking, contact us as soon as possible by phone or <a href=\"https://wa.me/46737351993\" target=\"_blank\" rel=\"noopener noreferrer\">WhatsApp</a> — the earlier we know, the more flexible we can be.",
    terms3Heading: "3. Privacy Policy",
    terms3Intro:
      "This section explains what personal data we collect through this website and how it is used, in line with the EU General Data Protection Regulation (GDPR).",
    terms31Heading: "3.1 What We Collect",
    terms31Body:
      "When you submit an enquiry or booking, we collect the details you provide: name, email address, phone number, pickup/drop-off locations, flight or vessel number, travel date and time, passenger and luggage counts, and any notes or add-on requests.",
    terms32Heading: "3.2 How We Use It",
    terms32Body:
      "This information is used solely to plan, confirm, and deliver your transfer — including contacting you by phone, email, or WhatsApp about your booking. We do not sell or rent your personal data to third parties.",
    terms33Heading: "3.3 Where It's Stored",
    terms33Body:
      "Enquiry and booking form submissions are stored in a Google Forms/Sheets response sheet accessible only to Aathish Åkeri AB. Online payments are processed by SumUp under their own privacy policy and payment terms — we do not store your card details.",
    terms34Heading: "3.4 Cookies & Tracking",
    terms34Body:
      "This website does not use analytics or advertising cookies. It loads country flag icons for the language switcher from a third-party CDN (flagcdn.com), which may log standard web requests as any image host does.",
    terms35Heading: "3.5 Your Rights",
    terms35Body:
      "You may ask us at any time to access, correct, or delete the personal data we hold about you by emailing info@aathishakeri.se. We retain booking records only as long as reasonably needed for service and accounting purposes.",
  },
  sv: {
    subTitle: "Din premiumresa börjar här – Komfort i varje mil.",
    callBtn: "Ring oss nu",
    fleetTitle: "Vår vagnpark",
    car1Title: "Standard Sedan",
    car1Desc: "Bekväm för upp till 4 passagerare.",
    carPremiumTitle: "Premium Sedan",
    carPremiumDesc: "Lyxig upplevelse för affärsresor.",
    car2Title: "Premium Van",
    car2Desc: "Upp till 7 passagerare med stor bagagekapacitet.",
    enqTitle: "Begär prisförslag",
    lblPickup: "Hämtning (Flygplats/Stad):",
    lblDrop: "Lämningsplats:",
    lblFlight: "Flyg- / Fartygsnummer (Valfritt):",
    lblDate: "Datum:",
    lblTime: "Tid:",
    lblAdults: "Vuxna:",
    lblKids: "Barn:",
    lblBags: "Bagage:",
    lblNotes: "Ytterligare anteckningar:",
    lblAddons: "Extra tjänster:",
    optChild1: "Bilbarnstol 0-8 månader",
    optChild2: "Bilbarnstol 9-36 månader",
    optChild3: "Bältesstol 3+ år",
    optCombi: "Combi (Stort bagage)",
    optPorter: "Bärhjälp",
    submitBtn: "Skicka förfrågan",
    contactTitle: "Kontaktinfo",
    lblWhatsapp: "Chatta på WhatsApp",
    waNoteText: "Tryck för att chatta direkt",
    priceTitle: "Fasta priser: Arlanda & Stockholm City",
    directionAtoC: "Arlanda flygplats → Stockholm City",
    directionCtoA: "Stockholm City → Arlanda flygplats",
    vehMinibus: "Minibuss (7 platser)",
    descUpTo4: "Upp till 4 passagerare",
    descPremiumShort: "Lyx & komfort",
    descUpTo7: "Upp till 7 passagerare",
    badgeRecommended: "Rekommenderas",
    bookNowBtn: "Boka nu",
    enqSkipHtml:
      'Vet du redan vad du behöver? Gå direkt till vår <a href="booking.html"><strong>bokningssida</strong></a> för att reservera din resa.',
    lblName: "Fullständigt namn:",
    lblEmail: "E-postadress:",
    lblPhone: "Mobilnummer:",
    trustLabel1: "Verksamma i Stockholm sedan",
    trustLabel2: "Talade språk",
    trustLabel3: "Flygplatsservice",
    trustLabel4: "Fasta Arlanda-priser, inga överraskningar",
    contactEmailLabel: "E-post:",
    contactPhoneLabel: "Telefon:",
    contactWhatsappLabel: "WhatsApp:",

    navHome: "Hem",
    navAbout: "Om oss",
    navServices: "Tjänster",
    navPricing: "Priser",
    navFAQ: "FAQ",
    navBookNow: "Boka nu",
    footerAboutUs: "Om oss",
    footerTermsPrivacy: "Villkor & Integritet",
    footerRights: "Alla rättigheter förbehållna.",
    successTitle: "✔ Tack!",
    successBody: "Din förfrågan har skickats. Vi kontaktar dig inom kort.",
    bookingSuccessTitle: "✔ Bokningsförfrågan skickad!",
    bookingSuccessBody:
      "Tack — vi har mottagit din bokningsförfrågan och bekräftar pris och hämtningstid inom kort via telefon, e-post eller WhatsApp.",
    closeBtn: "Stäng",
    warningScamMsg:
      "Din förfrågan innehåller misstänkta betalnings- eller bedrägeriord. Ta bort dessa termer innan du skickar.",

    aboutHeroTitle: "Om Aathish Åkeri AB",
    aboutHeroSubtitle:
      "Stockholms pålitliga, flerspråkiga taxipartner för flygplatstransfer, affärsresor och allt däremellan.",
    aboutTrust1: "Grundat",
    aboutTrust3: "Fordonsklasser",
    aboutTrust4: "Flygplatspriser",
    aboutStoryHeading: "Vår historia",
    aboutStoryP1:
      "Aathish Åkeri AB grundades 2017 och har sedan 2020 fokuserat på premium taxi- och flygplatstransfer i Stockholm, byggt kring en enkel idé: flygplats- och stadstransfer ska vara pålitligt, bekvämt och ärligt prissatt. Det som därefter började som en liten verksamhet fokuserad på Arlanda-transfer har växt till en betrodd tjänst för turister, affärsresenärer och lokala familjer i hela Storstockholm.",
    aboutStoryP2:
      "Vi är ett förarlett företag — personerna bakom ratten är samma personer som svarar på ditt samtal eller WhatsApp-meddelande. Det betyder färre missförstånd, snabbare bekräftelser och ett genuint intresse av att få din resa rätt från början.",
    aboutValuesHeading: "Det här står vi för",
    aboutValue1Title: "Punktlighet",
    aboutValue1Desc:
      "Flygövervakade hämtningar med inbyggd marginal, så du aldrig behöver vänta på Arlanda.",
    aboutValue2Title: "Transparent prissättning",
    aboutValue2Desc: "Fasta priser för Arlanda ↔ Stockholm — priset du får är priset du betalar.",
    aboutValue3Title: "Flerspråkig service",
    aboutValue3Desc: "Vårt team kommunicerar på engelska, svenska, spanska, franska, tyska, nederländska och italienska.",
    aboutValue4Title: "Komfort & utrymme",
    aboutValue4Desc:
      "Från en standardsedan till en 7-sitsig van, med plats för bagage, bilbarnstolar och extra väskor.",
    aboutFleetHeading: "Vår vagnpark i korthet",
    aboutSeeServicesBtn: "Se alla tjänster",
    aboutCTAHeading: "Redo att åka med oss?",

    servicesHeroTitle: "Våra tjänster",
    servicesHeroSubtitle:
      "Mer än en flygplatstransfer — bekväma resor för alla tillfällen i Stockholm och bortom.",
    svcAirportTitle: "Flygplatstransfer",
    svcAirportDesc:
      "Fastprishämtningar och avlämningar på Arlanda, med flygövervakning så vi är där även om ditt flyg är försenat. Bromma, Skavsta och Västerås flygplatser på begäran.",
    svcCorpTitle: "Affärs- och företagsresor",
    svcCorpDesc:
      "Punktliga, professionella hämtningar för möten, konferenser och roadshower. Fakturering tillgänglig för stående företagskonton — fråga oss för mer information.",
    svcCruiseTitle: "Kryssningsterminaltransfer",
    svcCruiseDesc:
      "Transfer till och från Stockholms kryssningsterminaler (Frihamnen & Värtahamnen), tidsatt efter ditt fartygs ankomst eller avgång.",
    svcHourlyTitle: "Timhyra / Till förfogande",
    svcHourlyDesc:
      "Boka bil och förare per timme för dagar med flera stopp, sightseeing, eller när ditt schema behöver flexibilitet snarare än en fast rutt.",
    svcEventsTitle: "Evenemang & särskilda tillfällen",
    svcEventsDesc:
      "Bröllop, firanden och grupputflykter — vår premiumsedan och 7-sitsiga van håller din grupp samlad och bekväm.",
    svcFamilyTitle: "Familjevänliga tillägg",
    svcFamilyDesc:
      "Bilbarnstolar för alla åldrar (0-8 månader, 9-36 månader, 3+ år), bärhjälp med bagage och kombibilar för extra stort bagage.",
    svcPricingHeading: "Se våra fasta Arlanda-priser",
    svcPricingBody: "Kontrollera exakta priser för Arlanda ↔ Stockholm City, eller boka direkt.",
    svcViewPricingBtn: "Visa priser",

    bookingHeroTitle: "Boka din resa direkt",
    bookingHeroSubtitle:
      "Inga provisionshungriga appar — boka direkt med oss och betala säkert när din resa är bekräftad.",
    step1Title: "Fyll i din resa",
    step1Desc: "Berätta din rutt, datum/tid, antal passagerare och önskat fordon nedan.",
    step2Title: "Vi bekräftar den",
    step2Desc: "Vi svarar via telefon, WhatsApp eller e-post med exakt pris och bekräftad hämtningstid.",
    step3Title: "Betala säkert",
    step3Desc:
      "Betala föraren direkt, eller använd den säkra SumUp-betalningslänk vi skickar — kort, Apple Pay eller Google Pay.",
    bookingTripDetailsHeading: "Resedetaljer",
    quickFillIntro: "Snabbval för våra fasta Arlanda-rutter:",
    vehicleTypeLabel: "Önskat fordon:",
    vehOptStandard: "Standardsedan (upp till 4)",
    vehOptPremium: "Premiumsedan (upp till 4, lyx)",
    vehOptVan: "Premium van / minibuss (upp till 7)",
    lblPromoCode: "Rabattkod (valfritt):",
    phPromoCode: "Har du en kod? Ange den här",
    requestBookingBtn: "Skicka bokningsförfrågan",
    paymentNoteHeading: "💳 Betalar du en befintlig bokning?",
    paymentNoteBody:
      "När vi bekräftat din resa skickar vi en säker SumUp-betalningslänk via WhatsApp eller e-post — kort, Apple Pay och Google Pay accepteras. Har du redan länken, använd knappen nedan.",
    sumupPayBtn: "Betala med SumUp",
    bookingPreferPhoneHeading: "Vill du hellre boka via telefon eller WhatsApp?",

    faqHeroTitle: "Vanliga frågor",
    faqHeroSubtitle: "Allt du behöver veta innan du bokar.",
    faqQ1: "Vilka betalningsmetoder accepterar ni?",
    faqA1:
      "Vi tar emot kontanter och kort direkt med föraren. Vid direktbokning online accepterar vi även säkra kort-, Apple Pay- och Google Pay-betalningar via en SumUp-betalningslänk som skickas när bokningen är bekräftad.",
    faqQ2: "Hur fungerar de fasta Arlanda-priserna?",
    faqA2:
      "Våra priser Arlanda ↔ Stockholm City är fasta per fordonstyp — standardsedan, premiumsedan eller minibuss — så priset du får är priset du betalar, oavsett trafik.",
    faqQ3: "Vad händer om mitt flyg är försenat?",
    faqA3:
      "Ange ditt flygnummer vid bokning så bevakar vi det och justerar hämtningstiden automatiskt utan extra kostnad vid rimliga förseningar. Hör gärna av dig på WhatsApp om förseningen är betydande.",
    faqQ4: "Erbjuder ni bilbarnstolar?",
    faqA4:
      "Ja — vi erbjuder bilbarnstolar för 0-8 månader, 9-36 månader och 3+ år. Välj de du behöver som tillägg vid bokning eller förfrågan.",
    faqQ5: "Hur långt i förväg bör jag boka?",
    faqA5:
      "Vi rekommenderar minst några timmar i förväg när det går, och 24 timmar för tidiga morgonhämtningar eller högsäsong, för att garantera tillgänglighet.",
    faqQ6: "Vad gäller vid avbokning?",
    faqA6: "Se vår fullständiga avbokningspolicy för detaljer. Kort sagt: ju tidigare du meddelar oss, desto mer flexibla kan vi vara.",
    faqQ7: "Kör ni till andra flygplatser än Arlanda?",
    faqA7: "Ja. Utöver Arlanda kör vi till Bromma, Skavsta och Västerås flygplatser samt Stockholms kryssningsterminaler på begäran.",
    faqQ8: "Talar era förare engelska?",
    faqA8: "Ja. Vårt team kommunicerar på engelska, svenska, spanska, franska, tyska, nederländska och italienska.",
    faqQ9: "Är bagageutrymme garanterat?",
    faqA9:
      "Meddela antal väskor vid bokning. Har du extra stort eller mycket bagage, välj tillägget \"Combi (Stort bagage)\" eller vår premium van så tar vi med rätt fordon.",
    faqStillHeading: "Har du fortfarande en fråga?",
    faqStillBody: "Kontakta oss direkt så återkommer vi snabbt.",
    faqCallUsBtn: "Ring oss",
    faqWhatsappUsBtn: "WhatsApp oss",

    termsHeroTitle: "Villkor & Integritet",
    termsHeroSubtitle: "Våra bokningsvillkor, avbokningspolicy och hur vi hanterar dina personuppgifter.",
    termsDisclaimer:
      "Obs: Denna sida är en generell startmall som täcker standardvillkor för taxitjänster och ett GDPR-liknande integritetsmeddelande. Granska och anpassa den — inklusive specifika väntetider och avbokningsfönster — efter era faktiska policyer, och låt den kontrolleras mot svensk/EU-lag innan ni förlitar er på den som slutgiltiga juridiska villkor.",
    termsTocTerms: "Bokningsvillkor",
    termsTocCancellation: "Avbokningspolicy",
    termsTocPrivacy: "Integritetspolicy",
    terms1Heading: "1. Bokningsvillkor",
    terms1Intro:
      "Dessa villkor gäller alla bokningar och förfrågningar hos Aathish Åkeri AB (\"vi\", \"oss\", \"vår\") via telefon, WhatsApp, e-post eller denna webbplats.",
    terms11Heading: "1.1 Fastprisrutter",
    terms11Body:
      "Priser för Arlanda ↔ Stockholm City är fasta per fordonstyp och gäller för direkta transfers mellan dessa två punkter. Extra stopp, omvägar eller rutter utanför dessa fasta linjer offereras individuellt och bekräftas före resan.",
    terms12Heading: "1.2 Bokningsbekräftelse",
    terms12Body:
      "En bokning är bekräftad när vi svarar på din förfrågan (via telefon, WhatsApp eller e-post) och bekräftar fordon, pris och hämtningstid. Att skicka in webbformuläret eller bokningssidan är en förfrågan, inte en automatisk bekräftelse.",
    terms13Heading: "1.3 Väntetid",
    terms13Body:
      "Vid flygplatshämtningar övervakar vi ditt flyg och inkluderar rimlig fri väntetid efter landning. Vid stadshämtningar gäller ett kortare fritt väntefönster. Väntetid utöver detta kan medföra en extra avgift, som meddelas dig vid tillfället.",
    terms14Heading: "1.4 Passagerare & bagage",
    terms14Body:
      "Ange korrekt antal passagerare och bagage vid bokning så vi kan tilldela rätt fordon. Vi förbehåller oss rätten att begära ett uppgraderat fordon (till korrekt pris) om den faktiska gruppen eller bagaget överstiger det som angivits.",
    terms15Heading: "1.5 Betalning",
    terms15Body:
      "Betalning kan ske kontant eller med kort direkt till föraren, eller online via en säker SumUp-betalningslänk som skickas efter bokningsbekräftelse. Onlinebetalningslänkar genereras per bokning och är ingen sparad återkommande debitering.",
    terms2Heading: "2. Avbokningspolicy",
    terms2Intro: "Vi förstår att resplaner ändras. Som generell riktlinje:",
    terms2Item1: "Avbokningar i god tid före hämtning kan ombokas eller avbokas kostnadsfritt.",
    terms2Item2:
      "Sena avbokningar, nära den planerade hämtningstiden, eller uteblivet besök på överenskommen plats kan medföra en avbokningsavgift, särskilt om en förare redan har skickats ut.",
    terms2Item3:
      "Om du betalat i förväg via en SumUp-betalningslänk och har rätt till återbetalning enligt denna policy, kontakta oss på info@aathishakeri.se så behandlar vi den till ditt ursprungliga betalningssätt.",
    terms2ClosingHtml:
      "För att avboka eller ändra en bokning, kontakta oss så snart som möjligt via telefon eller <a href=\"https://wa.me/46737351993\" target=\"_blank\" rel=\"noopener noreferrer\">WhatsApp</a> — ju tidigare vi vet, desto mer flexibla kan vi vara.",
    terms3Heading: "3. Integritetspolicy",
    terms3Intro:
      "Detta avsnitt förklarar vilka personuppgifter vi samlar in via denna webbplats och hur de används, i linje med EU:s dataskyddsförordning (GDPR).",
    terms31Heading: "3.1 Vad vi samlar in",
    terms31Body:
      "När du skickar en förfrågan eller bokning samlar vi in de uppgifter du anger: namn, e-postadress, telefonnummer, hämtnings-/avlämningsplatser, flyg- eller fartygsnummer, resdatum och tid, antal passagerare och bagage samt eventuella anteckningar eller tilläggsönskemål.",
    terms32Heading: "3.2 Hur vi använder det",
    terms32Body:
      "Denna information används enbart för att planera, bekräfta och genomföra din transfer — inklusive att kontakta dig via telefon, e-post eller WhatsApp om din bokning. Vi säljer eller hyr inte ut dina personuppgifter till tredje part.",
    terms33Heading: "3.3 Var det lagras",
    terms33Body:
      "Förfrågnings- och bokningsformulär lagras i ett Google Forms/Sheets-svarsark som endast är tillgängligt för Aathish Åkeri AB. Onlinebetalningar hanteras av SumUp enligt deras egen integritets- och betalningspolicy — vi lagrar inte dina kortuppgifter.",
    terms34Heading: "3.4 Cookies & spårning",
    terms34Body:
      "Denna webbplats använder inte analys- eller reklamcookies. Den laddar landsflaggikoner för språkväljaren från en tredjeparts-CDN (flagcdn.com), som kan logga standardwebbförfrågningar precis som alla bildvärdar gör.",
    terms35Heading: "3.5 Dina rättigheter",
    terms35Body:
      "Du kan när som helst be oss att komma åt, rätta eller radera de personuppgifter vi har om dig genom att mejla info@aathishakeri.se. Vi sparar bokningsuppgifter endast så länge det rimligen behövs för service- och bokföringsändamål.",
  },
  es: {
    subTitle: "Su viaje premium comienza aquí: comodidad en cada milla.",
    callBtn: "Llámanos ahora",
    fleetTitle: "Nuestra flota",
    car1Title: "Sedán Estándar",
    car1Desc: "Confiable para hasta 4 pasajeros.",
    carPremiumTitle: "Sedán Premium",
    carPremiumDesc: "Experiencia de lujo para negocios.",
    car2Title: "Van Premium",
    car2Desc: "Hasta 7 pasajeros con gran equipaje.",
    enqTitle: "Consultar precio del viaje",
    lblPickup: "Recogida:",
    lblDrop: "Entrega:",
    lblFlight: "Vuelo (Opcional):",
    lblDate: "Fecha:",
    lblTime: "Hora:",
    lblAdults: "Adultos:",
    lblKids: "Niños:",
    lblBags: "Maletas:",
    lblNotes: "Notas adicionales:",
    lblAddons: "Servicios extras:",
    optChild1: "Asiento bebé 0-8 meses",
    optChild2: "Asiento bebé 9-36 meses",
    optChild3: "Asiento niño 3+ años",
    optCombi: "Combi (Equipaje grande)",
    optPorter: "Ayuda con maletas",
    submitBtn: "Enviar solicitud",
    contactTitle: "Contacto",
    lblWhatsapp: "Chat por WhatsApp",
    waNoteText: "Toca para chatear al instante",
    priceTitle: "Precios fijos: Arlanda y Estocolmo",
    directionAtoC: "Aeropuerto de Arlanda → Estocolmo Ciudad",
    directionCtoA: "Estocolmo Ciudad → Aeropuerto de Arlanda",
    vehMinibus: "Minibús (7 plazas)",
    descUpTo4: "Hasta 4 pasajeros",
    descPremiumShort: "Lujo y confort",
    descUpTo7: "Hasta 7 pasajeros",
    badgeRecommended: "Recomendado",
    bookNowBtn: "Reservar ahora",
    enqSkipHtml:
      '¿Ya sabes lo que necesitas? Ve directamente a nuestra <a href="booking.html"><strong>página de reservas</strong></a> para reservar tu viaje.',
    lblName: "Nombre completo:",
    lblEmail: "Correo electrónico:",
    lblPhone: "Número de móvil:",
    trustLabel1: "En Estocolmo desde",
    trustLabel2: "Idiomas hablados",
    trustLabel3: "Disponibilidad en el aeropuerto",
    trustLabel4: "Precios fijos a Arlanda, sin sorpresas",
    contactEmailLabel: "Correo:",
    contactPhoneLabel: "Teléfono:",
    contactWhatsappLabel: "WhatsApp:",

    navHome: "Inicio",
    navAbout: "Nosotros",
    navServices: "Servicios",
    navPricing: "Precios",
    navFAQ: "FAQ",
    navBookNow: "Reservar",
    footerAboutUs: "Sobre Nosotros",
    footerTermsPrivacy: "Términos y Privacidad",
    footerRights: "Todos los derechos reservados.",
    successTitle: "✔ ¡Gracias!",
    successBody: "Tu consulta se ha enviado correctamente. Te contactaremos en breve.",
    bookingSuccessTitle: "✔ ¡Solicitud de reserva enviada!",
    bookingSuccessBody:
      "Gracias — hemos recibido tu solicitud de reserva y confirmaremos el precio y la hora de recogida en breve por teléfono, correo electrónico o WhatsApp.",
    closeBtn: "Cerrar",
    warningScamMsg:
      "Tu consulta contiene palabras sospechosas relacionadas con pagos o fraude. Elimínalas antes de enviar.",

    aboutHeroTitle: "Sobre Aathish Åkeri AB",
    aboutHeroSubtitle:
      "El socio de taxi confiable y multilingüe de Estocolmo para traslados al aeropuerto, viajes de negocios y mucho más.",
    aboutTrust1: "Fundada en",
    aboutTrust3: "Clases de vehículos",
    aboutTrust4: "Precios de aeropuerto",
    aboutStoryHeading: "Nuestra historia",
    aboutStoryP1:
      "Aathish Åkeri AB se fundó en 2017 y desde 2020 se dedica al servicio de taxi premium y traslados al aeropuerto en Estocolmo, construida sobre una idea simple: los traslados aeroportuarios y urbanos deben ser fiables, cómodos y con un precio honesto. Desde entonces, lo que empezó como una pequeña operación centrada en traslados al aeropuerto de Arlanda ha crecido hasta convertirse en un servicio de confianza para turistas, viajeros de negocios y familias locales en todo el Gran Estocolmo.",
    aboutStoryP2:
      "Somos una empresa liderada por conductores — las personas al volante son las mismas que responden a tu llamada o mensaje de WhatsApp. Eso significa menos malentendidos, confirmaciones más rápidas y un interés genuino en que tu viaje salga bien a la primera.",
    aboutValuesHeading: "Lo que defendemos",
    aboutValue1Title: "Puntualidad",
    aboutValue1Desc: "Recogidas con seguimiento de vuelo y margen incorporado, para que nunca esperes en Arlanda.",
    aboutValue2Title: "Precios transparentes",
    aboutValue2Desc: "Tarifas fijas para las rutas Arlanda ↔ Estocolmo — el precio que se te indica es el que pagas.",
    aboutValue3Title: "Servicio multilingüe",
    aboutValue3Desc: "Nuestro equipo se comunica en inglés, sueco, español, francés, alemán, neerlandés e italiano.",
    aboutValue4Title: "Confort y espacio",
    aboutValue4Desc: "Desde un sedán estándar hasta una furgoneta de 7 plazas, con espacio para equipaje, sillas infantiles y bolsas extra.",
    aboutFleetHeading: "Nuestra flota de un vistazo",
    aboutSeeServicesBtn: "Ver todos los servicios",
    aboutCTAHeading: "¿Listo para viajar con nosotros?",

    servicesHeroTitle: "Nuestros servicios",
    servicesHeroSubtitle: "Más que un traslado al aeropuerto — transporte cómodo para cada ocasión en Estocolmo y más allá.",
    svcAirportTitle: "Traslados al aeropuerto",
    svcAirportDesc:
      "Recogidas y entregas a precio fijo en Arlanda, con seguimiento de vuelo para estar ahí incluso si tu vuelo se retrasa. Aeropuertos de Bromma, Skavsta y Västerås disponibles bajo petición.",
    svcCorpTitle: "Viajes de negocios y corporativos",
    svcCorpDesc:
      "Recogidas puntuales y profesionales para reuniones, conferencias y giras de negocios. Facturación disponible para cuentas corporativas habituales — pregúntanos por más detalles.",
    svcCruiseTitle: "Traslados a terminales de cruceros",
    svcCruiseDesc:
      "Traslados hacia y desde las terminales de cruceros de Estocolmo (Frihamnen y Värtahamnen), coordinados con la llegada o salida de tu barco.",
    svcHourlyTitle: "Alquiler por horas / a disposición",
    svcHourlyDesc:
      "Reserva un coche con conductor por horas para días con varias paradas, turismo, o cuando tu agenda necesite flexibilidad en lugar de una ruta fija.",
    svcEventsTitle: "Eventos y ocasiones especiales",
    svcEventsDesc:
      "Bodas, celebraciones y salidas en grupo — nuestro sedán premium y la furgoneta de 7 plazas mantienen a tu grupo junto y cómodo.",
    svcFamilyTitle: "Extras para familias",
    svcFamilyDesc:
      "Sillas infantiles para cada edad (0-8 meses, 9-36 meses, 3+ años), ayuda con el equipaje y vehículos combi para maletas de gran tamaño.",
    svcPricingHeading: "Consulta nuestros precios fijos a Arlanda",
    svcPricingBody: "Comprueba las tarifas exactas para Arlanda ↔ Estocolmo Ciudad, o reserva directamente.",
    svcViewPricingBtn: "Ver precios",

    bookingHeroTitle: "Reserva tu viaje directamente",
    bookingHeroSubtitle: "Sin aplicaciones que se llevan comisión — reserva directamente con nosotros y paga de forma segura una vez confirmado tu viaje.",
    step1Title: "Completa tu viaje",
    step1Desc: "Indícanos tu ruta, fecha/hora, pasajeros y vehículo preferido a continuación.",
    step2Title: "Lo confirmamos",
    step2Desc: "Te respondemos por teléfono, WhatsApp o correo electrónico con el precio exacto y la hora de recogida confirmada.",
    step3Title: "Paga de forma segura",
    step3Desc: "Paga directamente al conductor, o usa el enlace de pago seguro de SumUp que te enviamos — tarjeta, Apple Pay o Google Pay.",
    bookingTripDetailsHeading: "Detalles del viaje",
    quickFillIntro: "Selección rápida para nuestras rutas fijas de Arlanda:",
    vehicleTypeLabel: "Vehículo preferido:",
    vehOptStandard: "Sedán estándar (hasta 4)",
    vehOptPremium: "Sedán premium (hasta 4, lujo)",
    vehOptVan: "Furgoneta premium / minibús (hasta 7)",
    lblPromoCode: "Código promocional (opcional):",
    phPromoCode: "¿Tienes un código? Escríbelo aquí",
    requestBookingBtn: "Solicitar reserva",
    paymentNoteHeading: "💳 ¿Vas a pagar una reserva existente?",
    paymentNoteBody:
      "Una vez confirmemos tu viaje, te enviaremos un enlace de pago seguro de SumUp por WhatsApp o correo electrónico — aceptamos tarjeta, Apple Pay y Google Pay. Si ya tienes ese enlace, usa el botón de abajo.",
    sumupPayBtn: "Pagar con SumUp",
    bookingPreferPhoneHeading: "¿Prefieres reservar por teléfono o WhatsApp?",

    faqHeroTitle: "Preguntas frecuentes",
    faqHeroSubtitle: "Todo lo que necesitas saber antes de reservar.",
    faqQ1: "¿Qué métodos de pago aceptáis?",
    faqA1:
      "Aceptamos efectivo y tarjeta directamente con el conductor. Para reservas directas en línea, también aceptamos pagos seguros con tarjeta, Apple Pay y Google Pay a través de un enlace de pago de SumUp que enviamos una vez confirmada tu reserva.",
    faqQ2: "¿Cómo funcionan los precios fijos a Arlanda?",
    faqA2:
      "Nuestras tarifas Arlanda ↔ Estocolmo Ciudad son fijas según el tipo de vehículo — sedán estándar, sedán premium o minibús — así que el precio indicado es el que pagas, sin importar el tráfico.",
    faqQ3: "¿Qué pasa si mi vuelo se retrasa?",
    faqA3:
      "Añade tu número de vuelo al reservar y lo monitorizamos, ajustando tu hora de recogida automáticamente sin coste adicional por retrasos razonables. Escríbenos por WhatsApp si el retraso es considerable.",
    faqQ4: "¿Ofrecéis sillas infantiles?",
    faqA4: "Sí — ofrecemos sillas infantiles para 0-8 meses, 9-36 meses y 3+ años. Selecciona las que necesites como extra al reservar o consultar.",
    faqQ5: "¿Con cuánta antelación debo reservar?",
    faqA5: "Recomendamos reservar con al menos unas horas de antelación cuando sea posible, y 24 horas para recogidas de madrugada o fechas de alta demanda, para garantizar la disponibilidad del vehículo.",
    faqQ6: "¿Cuál es vuestra política de cancelación?",
    faqA6: "Consulta nuestra política de cancelación completa para más detalles. En resumen: cuanto antes nos avises, más flexibles podemos ser.",
    faqQ7: "¿Dais servicio a otros aeropuertos además de Arlanda?",
    faqA7: "Sí. Además de Arlanda, cubrimos los aeropuertos de Bromma, Skavsta y Västerås, así como las terminales de cruceros de Estocolmo, bajo petición.",
    faqQ8: "¿Vuestros conductores hablan inglés?",
    faqA8: "Sí. Nuestro equipo se comunica en inglés, sueco, español, francés, alemán, neerlandés e italiano.",
    faqQ9: "¿Está garantizado el espacio para el equipaje?",
    faqA9:
      "Indícanos el número de maletas al reservar. Si tienes equipaje extra o de gran tamaño, elige el extra \"Combi (Equipaje grande)\" o nuestra furgoneta premium para llevar el vehículo adecuado.",
    faqStillHeading: "¿Aún tienes alguna pregunta?",
    faqStillBody: "Contáctanos directamente y te responderemos rápido.",
    faqCallUsBtn: "Llámanos",
    faqWhatsappUsBtn: "Escríbenos por WhatsApp",

    termsHeroTitle: "Términos y Privacidad",
    termsHeroSubtitle: "Nuestros términos de reserva, política de cancelación y cómo tratamos tus datos personales.",
    termsDisclaimer:
      "Nota: Esta página es una plantilla general que cubre términos estándar de servicios de taxi y un aviso de privacidad estilo RGPD. Revísala y adáptala — incluyendo los plazos concretos de espera y cancelación — a tus políticas reales, y hazla revisar conforme a la ley sueca/de la UE antes de considerarla tus términos legales definitivos.",
    termsTocTerms: "Términos de reserva",
    termsTocCancellation: "Política de cancelación",
    termsTocPrivacy: "Política de privacidad",
    terms1Heading: "1. Términos y condiciones de reserva",
    terms1Intro:
      "Estos términos se aplican a todas las reservas y consultas realizadas con Aathish Åkeri AB (\"nosotros\", \"nuestro\") por teléfono, WhatsApp, correo electrónico o a través de este sitio web.",
    terms11Heading: "1.1 Rutas de precio fijo",
    terms11Body:
      "Las tarifas mostradas para Arlanda ↔ Estocolmo Ciudad son fijas según el tipo de vehículo y son válidas para traslados directos entre esos dos puntos. Paradas adicionales, desvíos o rutas fuera de estos trayectos fijos se cotizan individualmente y se confirman antes del viaje.",
    terms12Heading: "1.2 Confirmación de reserva",
    terms12Body:
      "Una reserva se confirma cuando respondemos a tu consulta (por teléfono, WhatsApp o correo electrónico) confirmando vehículo, precio y hora de recogida. Enviar el formulario en línea o la página de reservas es una solicitud, no una confirmación automática.",
    terms13Heading: "1.3 Tiempo de espera",
    terms13Body:
      "Para recogidas en el aeropuerto, monitorizamos tu vuelo e incluimos un tiempo de espera gratuito razonable tras el aterrizaje. Para recogidas en la ciudad, se aplica una ventana de espera gratuita más corta. El tiempo de espera adicional puede conllevar un cargo extra, que se te comunicará en su momento.",
    terms14Heading: "1.4 Pasajeros y equipaje",
    terms14Body:
      "Indica un número exacto de pasajeros y equipaje al reservar para que podamos asignar el vehículo adecuado. Nos reservamos el derecho de solicitar un vehículo superior (al precio correcto) si el grupo o el equipaje real supera lo declarado.",
    terms15Heading: "1.5 Pago",
    terms15Body:
      "El pago puede realizarse en efectivo o con tarjeta directamente al conductor, o en línea mediante un enlace de pago seguro de SumUp enviado tras la confirmación de la reserva. Los enlaces de pago en línea se generan por reserva y no suponen un cargo recurrente guardado.",
    terms2Heading: "2. Política de cancelación",
    terms2Intro: "Entendemos que los planes de viaje cambian. Como guía general:",
    terms2Item1: "Las cancelaciones realizadas con suficiente antelación pueden reprogramarse o cancelarse sin coste.",
    terms2Item2:
      "Las cancelaciones tardías, cercanas a la hora de recogida prevista, o la ausencia en el lugar acordado pueden estar sujetas a un cargo por cancelación, especialmente si ya se ha enviado un conductor.",
    terms2Item3:
      "Si pagaste por adelantado mediante un enlace de pago de SumUp y tienes derecho a reembolso según esta política, contáctanos en info@aathishakeri.se y lo procesaremos de vuelta a tu método de pago original.",
    terms2ClosingHtml:
      "Para cancelar o cambiar una reserva, contáctanos lo antes posible por teléfono o <a href=\"https://wa.me/46737351993\" target=\"_blank\" rel=\"noopener noreferrer\">WhatsApp</a> — cuanto antes lo sepamos, más flexibles podremos ser.",
    terms3Heading: "3. Política de privacidad",
    terms3Intro:
      "Esta sección explica qué datos personales recopilamos a través de este sitio web y cómo se utilizan, conforme al Reglamento General de Protección de Datos de la UE (RGPD).",
    terms31Heading: "3.1 Qué recopilamos",
    terms31Body:
      "Cuando envías una consulta o reserva, recopilamos los datos que proporcionas: nombre, correo electrónico, número de teléfono, lugares de recogida/entrega, número de vuelo o buque, fecha y hora del viaje, número de pasajeros y equipaje, y cualquier nota o solicitud de extras.",
    terms32Heading: "3.2 Cómo lo usamos",
    terms32Body:
      "Esta información se utiliza únicamente para planificar, confirmar y realizar tu traslado — incluyendo contactarte por teléfono, correo electrónico o WhatsApp sobre tu reserva. No vendemos ni alquilamos tus datos personales a terceros.",
    terms33Heading: "3.3 Dónde se almacena",
    terms33Body:
      "Las consultas y reservas se almacenan en una hoja de respuestas de Google Forms/Sheets accesible solo para Aathish Åkeri AB. Los pagos en línea son procesados por SumUp según su propia política de privacidad y pago — no almacenamos los datos de tu tarjeta.",
    terms34Heading: "3.4 Cookies y seguimiento",
    terms34Body:
      "Este sitio web no utiliza cookies de análisis ni publicitarias. Carga iconos de banderas de países para el selector de idioma desde una CDN de terceros (flagcdn.com), que puede registrar solicitudes web estándar como cualquier alojamiento de imágenes.",
    terms35Heading: "3.5 Tus derechos",
    terms35Body:
      "Puedes solicitarnos en cualquier momento acceder, corregir o eliminar los datos personales que tenemos sobre ti escribiendo a info@aathishakeri.se. Conservamos los registros de reservas solo el tiempo razonablemente necesario para fines de servicio y contabilidad.",
  },
  fr: {
    subTitle:
      "Votre voyage premium commence ici – Le confort à chaque kilomètre.",
    callBtn: "Appelez-nous",
    fleetTitle: "Notre flotte",
    car1Title: "Berline Standard",
    car1Desc: "Fiable jusqu'à 4 passagers.",
    carPremiumTitle: "Berline Premium",
    carPremiumDesc: "Luxe pour voyages d'affaires.",
    car2Title: "Van Premium",
    car2Desc: "Jusqu'à 7 passager avec bagages.",
    enqTitle: "Demander un tarif",
    lblPickup: "Départ:",
    lblDrop: "Arrivée:",
    lblFlight: "N° Vol (Optionnel):",
    lblDate: "Date:",
    lblTime: "Heure:",
    lblAdults: "Adultes:",
    lblKids: "Enfants:",
    lblBags: "Bagages:",
    lblNotes: "Notes:",
    lblAddons: "Services Plus:",
    optChild1: "Siège bébé 0-8 mois",
    optChild2: "Siège bébé 9-36 mois",
    optChild3: "Siège 3+ ans",
    optCombi: "Combi (Gros bagages)",
    optPorter: "Aide bagages",
    submitBtn: "Envoyer",
    contactTitle: "Contact",
    lblWhatsapp: "WhatsApp",
    waNoteText: "Touchez pour discuter instantanément",
    priceTitle: "Tarifs fixes : Arlanda et Stockholm",
    directionAtoC: "Aéroport d'Arlanda → Stockholm centre",
    directionCtoA: "Stockholm centre → Aéroport d'Arlanda",
    vehMinibus: "Minibus (7 places)",
    descUpTo4: "Jusqu'à 4 passagers",
    descPremiumShort: "Luxe et confort",
    descUpTo7: "Jusqu'à 7 passagers",
    badgeRecommended: "Recommandé",
    bookNowBtn: "Réserver",
    enqSkipHtml:
      "Vous savez déjà ce qu'il vous faut ? Rendez-vous directement sur notre <a href=\"booking.html\"><strong>page de réservation</strong></a> pour réserver votre trajet.",
    lblName: "Nom complet :",
    lblEmail: "Adresse e-mail :",
    lblPhone: "Numéro de mobile :",
    trustLabel1: "À Stockholm depuis",
    trustLabel2: "Langues parlées",
    trustLabel3: "Disponibilité aéroport",
    trustLabel4: "Tarifs Arlanda fixes, sans surprise",
    contactEmailLabel: "E-mail :",
    contactPhoneLabel: "Téléphone :",
    contactWhatsappLabel: "WhatsApp :",

    navHome: "Accueil",
    navAbout: "À propos",
    navServices: "Services",
    navPricing: "Tarifs",
    navFAQ: "FAQ",
    navBookNow: "Réserver",
    footerAboutUs: "À propos de nous",
    footerTermsPrivacy: "Conditions & Confidentialité",
    footerRights: "Tous droits réservés.",
    successTitle: "✔ Merci !",
    successBody: "Votre demande a bien été envoyée. Nous vous contacterons sous peu.",
    bookingSuccessTitle: "✔ Demande de réservation envoyée !",
    bookingSuccessBody:
      "Merci — nous avons bien reçu votre demande de réservation et confirmerons le prix et l'heure de prise en charge sous peu par téléphone, e-mail ou WhatsApp.",
    closeBtn: "Fermer",
    warningScamMsg:
      "Votre demande contient des termes suspects liés au paiement ou à la fraude. Merci de les retirer avant d'envoyer.",

    aboutHeroTitle: "À propos d'Aathish Åkeri AB",
    aboutHeroSubtitle:
      "Le partenaire de taxi fiable et multilingue de Stockholm pour les transferts aéroport, les voyages d'affaires et bien plus.",
    aboutTrust1: "Fondée en",
    aboutTrust3: "Classes de véhicules",
    aboutTrust4: "Tarifs aéroport",
    aboutStoryHeading: "Notre histoire",
    aboutStoryP1:
      "Aathish Åkeri AB a été fondée en 2017 et se consacre depuis 2020 au taxi premium et aux transferts aéroportuaires à Stockholm, autour d'une idée simple : les transferts aéroport et en ville doivent être fiables, confortables et honnêtement tarifés. Depuis, ce qui a commencé comme une petite activité centrée sur les transferts vers l'aéroport d'Arlanda est devenu un service de confiance pour les touristes, les voyageurs d'affaires et les familles locales dans tout le Grand Stockholm.",
    aboutStoryP2:
      "Nous sommes une entreprise dirigée par ses chauffeurs — les personnes au volant sont les mêmes qui répondent à votre appel ou message WhatsApp. Cela signifie moins de malentendus, des confirmations plus rapides et un intérêt sincère à bien réussir votre trajet dès la première fois.",
    aboutValuesHeading: "Nos valeurs",
    aboutValue1Title: "Ponctualité",
    aboutValue1Desc: "Prises en charge avec suivi de vol et marge intégrée, pour ne jamais attendre à Arlanda.",
    aboutValue2Title: "Tarification transparente",
    aboutValue2Desc: "Tarifs fixes pour les trajets Arlanda ↔ Stockholm — le prix annoncé est le prix payé.",
    aboutValue3Title: "Service multilingue",
    aboutValue3Desc: "Notre équipe communique en anglais, suédois, espagnol, français, allemand, néerlandais et italien.",
    aboutValue4Title: "Confort & espace",
    aboutValue4Desc: "D'une berline standard à un van 7 places, avec de la place pour les bagages, sièges enfants et sacs supplémentaires.",
    aboutFleetHeading: "Notre flotte en un coup d'œil",
    aboutSeeServicesBtn: "Voir tous les services",
    aboutCTAHeading: "Prêt à voyager avec nous ?",

    servicesHeroTitle: "Nos services",
    servicesHeroSubtitle: "Bien plus qu'un simple transfert aéroport — un transport confortable pour chaque occasion à Stockholm et au-delà.",
    svcAirportTitle: "Transferts aéroport",
    svcAirportDesc:
      "Prises en charge et déposes à prix fixe à Arlanda, avec suivi de vol pour être présents même en cas de retard. Aéroports de Bromma, Skavsta et Västerås disponibles sur demande.",
    svcCorpTitle: "Voyages d'affaires et corporate",
    svcCorpDesc:
      "Prises en charge ponctuelles et professionnelles pour réunions, conférences et roadshows. Facturation disponible pour les comptes entreprise réguliers — contactez-nous pour plus de détails.",
    svcCruiseTitle: "Transferts terminaux de croisière",
    svcCruiseDesc:
      "Transferts vers et depuis les terminaux de croisière de Stockholm (Frihamnen et Värtahamnen), programmés selon l'arrivée ou le départ de votre navire.",
    svcHourlyTitle: "Location à l'heure / à disposition",
    svcHourlyDesc:
      "Réservez une voiture avec chauffeur à l'heure pour des journées à étapes multiples, du tourisme, ou lorsque votre emploi du temps demande de la flexibilité plutôt qu'un trajet fixe.",
    svcEventsTitle: "Événements & occasions spéciales",
    svcEventsDesc:
      "Mariages, célébrations et sorties de groupe — notre berline premium et notre van 7 places gardent votre groupe uni et confortable.",
    svcFamilyTitle: "Options familiales",
    svcFamilyDesc:
      "Sièges enfants pour chaque âge (0-8 mois, 9-36 mois, 3 ans et plus), aide au portage des bagages et véhicules combi pour les bagages volumineux.",
    svcPricingHeading: "Consultez nos tarifs fixes vers Arlanda",
    svcPricingBody: "Vérifiez les tarifs exacts pour Arlanda ↔ Stockholm centre, ou réservez directement.",
    svcViewPricingBtn: "Voir les tarifs",

    bookingHeroTitle: "Réservez votre trajet en direct",
    bookingHeroSubtitle: "Sans applications gourmandes en commission — réservez directement avec nous et payez en toute sécurité une fois votre trajet confirmé.",
    step1Title: "Renseignez votre trajet",
    step1Desc: "Indiquez-nous votre itinéraire, date/heure, nombre de passagers et véhicule préféré ci-dessous.",
    step2Title: "Nous le confirmons",
    step2Desc: "Nous répondons par téléphone, WhatsApp ou e-mail avec le prix exact et l'heure de prise en charge confirmée.",
    step3Title: "Payez en toute sécurité",
    step3Desc: "Payez directement le chauffeur, ou utilisez le lien de paiement sécurisé SumUp que nous vous envoyons — carte, Apple Pay ou Google Pay.",
    bookingTripDetailsHeading: "Détails du trajet",
    quickFillIntro: "Sélection rapide pour nos itinéraires fixes Arlanda :",
    vehicleTypeLabel: "Véhicule préféré :",
    vehOptStandard: "Berline standard (jusqu'à 4)",
    vehOptPremium: "Berline premium (jusqu'à 4, luxe)",
    vehOptVan: "Van premium / minibus (jusqu'à 7)",
    lblPromoCode: "Code promo (facultatif) :",
    phPromoCode: "Un code ? Saisissez-le ici",
    requestBookingBtn: "Demander une réservation",
    paymentNoteHeading: "💳 Vous réglez une réservation existante ?",
    paymentNoteBody:
      "Une fois votre trajet confirmé, nous vous enverrons un lien de paiement sécurisé SumUp par WhatsApp ou e-mail — carte, Apple Pay et Google Pay acceptés. Si vous avez déjà ce lien, utilisez le bouton ci-dessous.",
    sumupPayBtn: "Payer avec SumUp",
    bookingPreferPhoneHeading: "Vous préférez réserver par téléphone ou WhatsApp ?",

    faqHeroTitle: "Foire aux questions",
    faqHeroSubtitle: "Tout ce qu'il faut savoir avant de réserver.",
    faqQ1: "Quels moyens de paiement acceptez-vous ?",
    faqA1:
      "Nous acceptons les espèces et la carte directement auprès du chauffeur. Pour les réservations en ligne directes, nous acceptons aussi les paiements sécurisés par carte, Apple Pay et Google Pay via un lien de paiement SumUp envoyé une fois votre réservation confirmée.",
    faqQ2: "Comment fonctionnent les tarifs fixes vers Arlanda ?",
    faqA2:
      "Nos tarifs Arlanda ↔ Stockholm centre sont fixes selon le type de véhicule — berline standard, berline premium ou minibus — donc le prix annoncé est celui que vous payez, quel que soit le trafic.",
    faqQ3: "Que se passe-t-il si mon vol est retardé ?",
    faqA3:
      "Ajoutez votre numéro de vol lors de la réservation, nous le suivons et ajustons automatiquement l'heure de prise en charge sans frais supplémentaires pour les retards raisonnables. Contactez-nous tout de même sur WhatsApp en cas de retard important.",
    faqQ4: "Proposez-vous des sièges enfants ?",
    faqA4: "Oui — nous proposons des sièges enfants pour 0-8 mois, 9-36 mois et 3 ans et plus. Sélectionnez ceux dont vous avez besoin en option lors de la réservation ou de la demande.",
    faqQ5: "Combien de temps à l'avance dois-je réserver ?",
    faqA5: "Nous recommandons de réserver au moins quelques heures à l'avance si possible, et 24 heures pour les prises en charge tôt le matin ou en haute saison, afin de garantir la disponibilité du véhicule.",
    faqQ6: "Quelle est votre politique d'annulation ?",
    faqA6: "Consultez notre politique d'annulation complète pour plus de détails. En résumé : plus vous nous prévenez tôt, plus nous pouvons être flexibles.",
    faqQ7: "Desservez-vous d'autres aéroports qu'Arlanda ?",
    faqA7: "Oui. En plus d'Arlanda, nous couvrons les aéroports de Bromma, Skavsta et Västerås, ainsi que les terminaux de croisière de Stockholm, sur demande.",
    faqQ8: "Vos chauffeurs parlent-ils anglais ?",
    faqA8: "Oui. Notre équipe communique en anglais, suédois, espagnol, français, allemand, néerlandais et italien.",
    faqQ9: "L'espace bagages est-il garanti ?",
    faqA9:
      "Indiquez-nous le nombre de bagages lors de la réservation. En cas de bagages volumineux ou supplémentaires, choisissez l'option \"Combi (Gros bagages)\" ou notre van premium afin que nous amenions le bon véhicule.",
    faqStillHeading: "Une question persiste ?",
    faqStillBody: "Contactez-nous directement, nous vous répondrons rapidement.",
    faqCallUsBtn: "Appelez-nous",
    faqWhatsappUsBtn: "Écrivez-nous sur WhatsApp",

    termsHeroTitle: "Conditions & Confidentialité",
    termsHeroSubtitle: "Nos conditions de réservation, notre politique d'annulation et la gestion de vos données personnelles.",
    termsDisclaimer:
      "Remarque : cette page est un modèle général couvrant les conditions standards d'un service de taxi et un avis de confidentialité de type RGPD. Merci de la revoir et de l'adapter — y compris les délais précis d'attente et d'annulation — à vos politiques réelles, et de la faire vérifier au regard du droit suédois/européen avant de vous y fier comme conditions légales définitives.",
    termsTocTerms: "Conditions de réservation",
    termsTocCancellation: "Politique d'annulation",
    termsTocPrivacy: "Politique de confidentialité",
    terms1Heading: "1. Conditions de réservation",
    terms1Intro:
      "Ces conditions s'appliquent à toutes les réservations et demandes effectuées auprès d'Aathish Åkeri AB (« nous », « notre ») par téléphone, WhatsApp, e-mail ou via ce site.",
    terms11Heading: "1.1 Itinéraires à prix fixe",
    terms11Body:
      "Les tarifs affichés pour Arlanda ↔ Stockholm centre sont fixes selon le type de véhicule et valables pour des transferts directs entre ces deux points. Les arrêts supplémentaires, détours ou trajets hors de ces itinéraires fixes sont chiffrés individuellement et confirmés avant le voyage.",
    terms12Heading: "1.2 Confirmation de réservation",
    terms12Body:
      "Une réservation est confirmée lorsque nous répondons à votre demande (par téléphone, WhatsApp ou e-mail) en confirmant le véhicule, le prix et l'heure de prise en charge. Soumettre le formulaire en ligne ou la page de réservation constitue une demande, pas une confirmation automatique.",
    terms13Heading: "1.3 Temps d'attente",
    terms13Body:
      "Pour les prises en charge à l'aéroport, nous suivons votre vol et incluons un temps d'attente gratuit raisonnable après l'atterrissage. Pour les prises en charge en ville, une fenêtre d'attente gratuite plus courte s'applique. Au-delà, des frais supplémentaires peuvent s'appliquer, communiqués le moment venu.",
    terms14Heading: "1.4 Passagers & bagages",
    terms14Body:
      "Merci d'indiquer un nombre exact de passagers et de bagages lors de la réservation afin que nous puissions attribuer le bon véhicule. Nous nous réservons le droit de demander un véhicule supérieur (au tarif correspondant) si le groupe ou les bagages réels dépassent ce qui a été déclaré.",
    terms15Heading: "1.5 Paiement",
    terms15Body:
      "Le paiement peut se faire en espèces ou par carte directement auprès du chauffeur, ou en ligne via un lien de paiement sécurisé SumUp envoyé après confirmation de la réservation. Les liens de paiement en ligne sont générés par réservation et ne constituent pas un prélèvement récurrent enregistré.",
    terms2Heading: "2. Politique d'annulation",
    terms2Intro: "Nous comprenons que les plans de voyage changent. En règle générale :",
    terms2Item1: "Les annulations effectuées bien avant la prise en charge peuvent être reprogrammées ou annulées gratuitement.",
    terms2Item2:
      "Les annulations tardives, proches de l'heure de prise en charge prévue, ou une absence au point de rendez-vous convenu peuvent entraîner des frais d'annulation, surtout si un chauffeur a déjà été envoyé.",
    terms2Item3:
      "Si vous avez payé à l'avance via un lien de paiement SumUp et avez droit à un remboursement selon cette politique, contactez-nous à info@aathishakeri.se et nous le traiterons vers votre moyen de paiement d'origine.",
    terms2ClosingHtml:
      "Pour annuler ou modifier une réservation, contactez-nous dès que possible par téléphone ou <a href=\"https://wa.me/46737351993\" target=\"_blank\" rel=\"noopener noreferrer\">WhatsApp</a> — plus vite nous sommes informés, plus nous pouvons être flexibles.",
    terms3Heading: "3. Politique de confidentialité",
    terms3Intro:
      "Cette section explique quelles données personnelles nous collectons via ce site et comment elles sont utilisées, conformément au Règlement général sur la protection des données de l'UE (RGPD).",
    terms31Heading: "3.1 Ce que nous collectons",
    terms31Body:
      "Lorsque vous soumettez une demande ou une réservation, nous collectons les informations que vous fournissez : nom, adresse e-mail, numéro de téléphone, lieux de prise en charge/dépose, numéro de vol ou de navire, date et heure du voyage, nombre de passagers et de bagages, ainsi que toute note ou demande d'option.",
    terms32Heading: "3.2 Comment nous les utilisons",
    terms32Body:
      "Ces informations sont utilisées uniquement pour planifier, confirmer et assurer votre transfert — y compris pour vous contacter par téléphone, e-mail ou WhatsApp au sujet de votre réservation. Nous ne vendons ni ne louons vos données personnelles à des tiers.",
    terms33Heading: "3.3 Où elles sont stockées",
    terms33Body:
      "Les soumissions de demandes et réservations sont stockées dans une feuille de réponses Google Forms/Sheets accessible uniquement à Aathish Åkeri AB. Les paiements en ligne sont traités par SumUp selon sa propre politique de confidentialité et de paiement — nous ne stockons pas les données de votre carte.",
    terms34Heading: "3.4 Cookies & suivi",
    terms34Body:
      "Ce site n'utilise pas de cookies d'analyse ou publicitaires. Il charge les icônes de drapeaux du sélecteur de langue depuis un CDN tiers (flagcdn.com), qui peut enregistrer des requêtes web standards comme tout hébergeur d'images.",
    terms35Heading: "3.5 Vos droits",
    terms35Body:
      "Vous pouvez à tout moment nous demander d'accéder, de corriger ou de supprimer les données personnelles que nous détenons à votre sujet en écrivant à info@aathishakeri.se. Nous ne conservons les données de réservation que le temps raisonnablement nécessaire à des fins de service et de comptabilité.",
  },
  de: {
    subTitle: "Ihre Premium-Reise beginnt hier – Komfort auf jeder Meile.",
    callBtn: "Rufen Sie uns an",
    fleetTitle: "Fuhrpark",
    car1Title: "Standard Limousine",
    car1Desc: "Bis zu 4 Personen.",
    carPremiumTitle: "Premium Limousine",
    carPremiumDesc: "Luxus für Business.",
    car2Title: "Premium Van",
    car2Desc: "Bis 7 Personen, viel Platz.",
    enqTitle: "Preis anfragen",
    lblPickup: "Abholung:",
    lblDrop: "Zielort:",
    lblFlight: "Flugnr. (Optional):",
    lblDate: "Datum:",
    lblTime: "Zeit:",
    lblAdults: "Erwachsene:",
    lblKids: "Kinder:",
    lblBags: "Gepäck:",
    lblNotes: "Notizen:",
    lblAddons: "Extras:",
    optChild1: "Kindersitz 0-8 Mo.",
    optChild2: "Kindersitz 9-36 Mo.",
    optChild3: "Sitz 3+ Jahre",
    optCombi: "Kombi (Viel Gepäck)",
    optPorter: "Gepäckservice",
    submitBtn: "Anfrage senden",
    contactTitle: "Kontakt",
    lblWhatsapp: "WhatsApp Chat",
    waNoteText: "Tippen zum sofortigen Chatten",
    priceTitle: "Festpreise: Arlanda & Stockholm City",
    directionAtoC: "Flughafen Arlanda → Stockholm City",
    directionCtoA: "Stockholm City → Flughafen Arlanda",
    vehMinibus: "Kleinbus (7 Sitze)",
    descUpTo4: "Bis zu 4 Passagiere",
    descPremiumShort: "Luxus & Komfort",
    descUpTo7: "Bis zu 7 Passagiere",
    badgeRecommended: "Empfohlen",
    bookNowBtn: "Jetzt buchen",
    enqSkipHtml:
      'Sie wissen schon, was Sie brauchen? Gehen Sie direkt zu unserer <a href="booking.html"><strong>Buchungsseite</strong></a>, um Ihre Fahrt zu reservieren.',
    lblName: "Vollständiger Name:",
    lblEmail: "E-Mail-Adresse:",
    lblPhone: "Mobilnummer:",
    trustLabel1: "In Stockholm tätig seit",
    trustLabel2: "Gesprochene Sprachen",
    trustLabel3: "Flughafenverfügbarkeit",
    trustLabel4: "Feste Arlanda-Preise, keine Überraschungen",
    contactEmailLabel: "E-Mail:",
    contactPhoneLabel: "Telefon:",
    contactWhatsappLabel: "WhatsApp:",

    navHome: "Start",
    navAbout: "Über uns",
    navServices: "Leistungen",
    navPricing: "Preise",
    navFAQ: "FAQ",
    navBookNow: "Jetzt buchen",
    footerAboutUs: "Über uns",
    footerTermsPrivacy: "AGB & Datenschutz",
    footerRights: "Alle Rechte vorbehalten.",
    successTitle: "✔ Vielen Dank!",
    successBody: "Ihre Anfrage wurde erfolgreich gesendet. Wir melden uns in Kürze bei Ihnen.",
    bookingSuccessTitle: "✔ Buchungsanfrage gesendet!",
    bookingSuccessBody:
      "Danke — wir haben Ihre Buchungsanfrage erhalten und bestätigen Preis und Abholzeit in Kürze per Telefon, E-Mail oder WhatsApp.",
    closeBtn: "Schließen",
    warningScamMsg:
      "Ihre Anfrage enthält verdächtige Begriffe im Zusammenhang mit Zahlungen oder Betrug. Bitte entfernen Sie diese vor dem Absenden.",

    aboutHeroTitle: "Über Aathish Åkeri AB",
    aboutHeroSubtitle:
      "Stockholms zuverlässiger, mehrsprachiger Taxipartner für Flughafentransfers, Geschäftsreisen und alles dazwischen.",
    aboutTrust1: "Gegründet",
    aboutTrust3: "Fahrzeugklassen",
    aboutTrust4: "Flughafenpreise",
    aboutStoryHeading: "Unsere Geschichte",
    aboutStoryP1:
      "Aathish Åkeri AB wurde 2017 gegründet und widmet sich seit 2020 dem Premium-Taxi- und Flughafentransferservice in Stockholm, aufgebaut auf einer einfachen Idee: Flughafen- und Stadttransfers sollen zuverlässig, komfortabel und ehrlich bepreist sein. Was seitdem als kleiner Betrieb mit Fokus auf Transfers zum Flughafen Arlanda begann, ist zu einem vertrauenswürdigen Service für Touristen, Geschäftsreisende und Familien in ganz Stockholm geworden.",
    aboutStoryP2:
      "Wir sind ein von Fahrern geführtes Unternehmen — die Personen am Steuer sind dieselben, die Ihren Anruf oder Ihre WhatsApp-Nachricht beantworten. Das bedeutet weniger Missverständnisse, schnellere Bestätigungen und echtes Interesse daran, Ihre Fahrt gleich beim ersten Mal richtig zu machen.",
    aboutValuesHeading: "Wofür wir stehen",
    aboutValue1Title: "Pünktlichkeit",
    aboutValue1Desc: "Flugüberwachte Abholungen mit eingebautem Puffer, damit Sie in Arlanda nie warten müssen.",
    aboutValue2Title: "Transparente Preise",
    aboutValue2Desc: "Festpreise für Strecken Arlanda ↔ Stockholm — der genannte Preis ist der zu zahlende Preis.",
    aboutValue3Title: "Mehrsprachiger Service",
    aboutValue3Desc: "Unser Team kommuniziert auf Englisch, Schwedisch, Spanisch, Französisch, Deutsch, Niederländisch und Italienisch.",
    aboutValue4Title: "Komfort & Platz",
    aboutValue4Desc: "Von einer Standard-Limousine bis zu einem 7-Sitzer-Van, mit Platz für Gepäck, Kindersitze und zusätzliche Taschen.",
    aboutFleetHeading: "Unser Fuhrpark im Überblick",
    aboutSeeServicesBtn: "Alle Leistungen ansehen",
    aboutCTAHeading: "Bereit, mit uns zu fahren?",

    servicesHeroTitle: "Unsere Leistungen",
    servicesHeroSubtitle: "Mehr als nur eine Flughafenfahrt — komfortabler Transport für jeden Anlass in Stockholm und darüber hinaus.",
    svcAirportTitle: "Flughafentransfers",
    svcAirportDesc:
      "Abholungen und Ablieferungen zum Festpreis in Arlanda, mit Flugüberwachung, damit wir auch bei Verspätung da sind. Flughäfen Bromma, Skavsta und Västerås auf Anfrage.",
    svcCorpTitle: "Geschäfts- und Firmenreisen",
    svcCorpDesc:
      "Pünktliche, professionelle Abholungen für Meetings, Konferenzen und Roadshows. Rechnungsstellung für regelmäßige Firmenkonten möglich — fragen Sie uns nach Details.",
    svcCruiseTitle: "Transfers zum Kreuzfahrtterminal",
    svcCruiseDesc:
      "Transfers zu und von Stockholms Kreuzfahrtterminals (Frihamnen & Värtahamnen), abgestimmt auf Ankunft oder Abfahrt Ihres Schiffs.",
    svcHourlyTitle: "Stundenweise Miete / Fahrer nach Bedarf",
    svcHourlyDesc:
      "Buchen Sie Auto und Fahrer stundenweise für Tage mit mehreren Stopps, Sightseeing, oder wenn Ihr Zeitplan Flexibilität statt einer festen Route erfordert.",
    svcEventsTitle: "Veranstaltungen & besondere Anlässe",
    svcEventsDesc:
      "Hochzeiten, Feiern und Gruppenausflüge — unsere Premium-Limousine und der 7-Sitzer-Van halten Ihre Gruppe zusammen und komfortabel.",
    svcFamilyTitle: "Familienfreundliche Extras",
    svcFamilyDesc:
      "Kindersitze für jede Altersgruppe (0-8 Monate, 9-36 Monate, 3+ Jahre), Gepäckhilfe und Kombifahrzeuge für übergroßes Gepäck.",
    svcPricingHeading: "Unsere Festpreise nach Arlanda ansehen",
    svcPricingBody: "Prüfen Sie die genauen Preise für Arlanda ↔ Stockholm City oder buchen Sie direkt.",
    svcViewPricingBtn: "Preise ansehen",

    bookingHeroTitle: "Buchen Sie Ihre Fahrt direkt",
    bookingHeroSubtitle: "Keine provisionshungrigen Apps — buchen Sie direkt bei uns und zahlen Sie sicher, sobald Ihre Fahrt bestätigt ist.",
    step1Title: "Fahrt eintragen",
    step1Desc: "Teilen Sie uns Ihre Route, Datum/Uhrzeit, Passagiere und gewünschtes Fahrzeug unten mit.",
    step2Title: "Wir bestätigen sie",
    step2Desc: "Wir antworten per Telefon, WhatsApp oder E-Mail mit dem genauen Preis und der bestätigten Abholzeit.",
    step3Title: "Sicher bezahlen",
    step3Desc: "Zahlen Sie direkt beim Fahrer, oder nutzen Sie den sicheren SumUp-Zahlungslink, den wir Ihnen senden — Karte, Apple Pay oder Google Pay.",
    bookingTripDetailsHeading: "Fahrtdetails",
    quickFillIntro: "Schnellauswahl für unsere festen Arlanda-Routen:",
    vehicleTypeLabel: "Bevorzugtes Fahrzeug:",
    vehOptStandard: "Standard-Limousine (bis 4)",
    vehOptPremium: "Premium-Limousine (bis 4, Luxus)",
    vehOptVan: "Premium-Van / Kleinbus (bis 7)",
    lblPromoCode: "Rabattcode (optional):",
    phPromoCode: "Haben Sie einen Code? Hier eingeben",
    requestBookingBtn: "Buchung anfragen",
    paymentNoteHeading: "💳 Zahlen Sie eine bestehende Buchung?",
    paymentNoteBody:
      "Sobald wir Ihre Fahrt bestätigt haben, senden wir Ihnen per WhatsApp oder E-Mail einen sicheren SumUp-Zahlungslink — Karte, Apple Pay und Google Pay werden akzeptiert. Falls Sie diesen Link bereits haben, nutzen Sie die Schaltfläche unten.",
    sumupPayBtn: "Mit SumUp bezahlen",
    bookingPreferPhoneHeading: "Lieber per Telefon oder WhatsApp buchen?",

    faqHeroTitle: "Häufig gestellte Fragen",
    faqHeroSubtitle: "Alles, was Sie vor der Buchung wissen müssen.",
    faqQ1: "Welche Zahlungsmethoden akzeptieren Sie?",
    faqA1:
      "Wir akzeptieren Bargeld und Karte direkt beim Fahrer. Bei Direktbuchungen online akzeptieren wir außerdem sichere Karten-, Apple Pay- und Google Pay-Zahlungen über einen SumUp-Zahlungslink, den wir nach Bestätigung Ihrer Buchung senden.",
    faqQ2: "Wie funktionieren die Festpreise nach Arlanda?",
    faqA2:
      "Unsere Preise Arlanda ↔ Stockholm City sind je nach Fahrzeugtyp fest — Standard-Limousine, Premium-Limousine oder Kleinbus — sodass der genannte Preis unabhängig vom Verkehr gilt.",
    faqQ3: "Was passiert, wenn sich mein Flug verspätet?",
    faqA3:
      "Geben Sie bei der Buchung Ihre Flugnummer an, wir verfolgen den Flug und passen die Abholzeit bei angemessenen Verspätungen automatisch und kostenlos an. Bitte schreiben Sie uns dennoch bei erheblicher Verspätung über WhatsApp.",
    faqQ4: "Bieten Sie Kindersitze an?",
    faqA4: "Ja — wir bieten Kindersitze für 0-8 Monate, 9-36 Monate und 3+ Jahre an. Wählen Sie die benötigten einfach als Zusatzleistung bei Buchung oder Anfrage.",
    faqQ5: "Wie weit im Voraus sollte ich buchen?",
    faqA5: "Wir empfehlen, wenn möglich mindestens ein paar Stunden im Voraus zu buchen, und 24 Stunden im Voraus bei früher Abholung am Morgen oder zu Stoßzeiten, um die Fahrzeugverfügbarkeit zu garantieren.",
    faqQ6: "Wie lautet Ihre Stornierungsrichtlinie?",
    faqA6: "Details finden Sie in unserer vollständigen Stornierungsrichtlinie. Kurz gesagt: Je früher Sie uns Bescheid geben, desto flexibler können wir sein.",
    faqQ7: "Bedienen Sie auch andere Flughäfen als Arlanda?",
    faqA7: "Ja. Neben Arlanda bedienen wir auf Anfrage die Flughäfen Bromma, Skavsta und Västerås sowie Stockholms Kreuzfahrtterminals.",
    faqQ8: "Sprechen Ihre Fahrer Englisch?",
    faqA8: "Ja. Unser Team kommuniziert auf Englisch, Schwedisch, Spanisch, Französisch, Deutsch, Niederländisch und Italienisch.",
    faqQ9: "Ist der Gepäckraum garantiert?",
    faqA9:
      "Teilen Sie uns bei der Buchung die Anzahl Ihrer Gepäckstücke mit. Bei übergroßem oder zusätzlichem Gepäck wählen Sie die Zusatzleistung \"Kombi (Viel Gepäck)\" oder unseren Premium-Van, damit wir das passende Fahrzeug mitbringen.",
    faqStillHeading: "Noch eine Frage?",
    faqStillBody: "Kontaktieren Sie uns direkt, wir melden uns schnell zurück.",
    faqCallUsBtn: "Rufen Sie uns an",
    faqWhatsappUsBtn: "Per WhatsApp schreiben",

    termsHeroTitle: "AGB & Datenschutz",
    termsHeroSubtitle: "Unsere Buchungsbedingungen, Stornierungsrichtlinie und der Umgang mit Ihren personenbezogenen Daten.",
    termsDisclaimer:
      "Hinweis: Diese Seite ist eine allgemeine Vorlage mit üblichen Bedingungen für Taxidienste und einem DSGVO-artigen Datenschutzhinweis. Bitte prüfen und passen Sie sie an — einschließlich der konkreten Warte- und Stornofristen —, um Ihren tatsächlichen Richtlinien zu entsprechen, und lassen Sie sie nach schwedischem/EU-Recht prüfen, bevor Sie sich darauf als endgültige rechtliche Bedingungen verlassen.",
    termsTocTerms: "Buchungsbedingungen",
    termsTocCancellation: "Stornierungsrichtlinie",
    termsTocPrivacy: "Datenschutzrichtlinie",
    terms1Heading: "1. Buchungsbedingungen",
    terms1Intro:
      "Diese Bedingungen gelten für alle Buchungen und Anfragen bei Aathish Åkeri AB („wir“, „uns“, „unser“) per Telefon, WhatsApp, E-Mail oder über diese Website.",
    terms11Heading: "1.1 Festpreisstrecken",
    terms11Body:
      "Die angezeigten Preise für Arlanda ↔ Stockholm City sind je nach Fahrzeugtyp festgelegt und gelten für direkte Transfers zwischen diesen beiden Punkten. Zusätzliche Stopps, Umwege oder Strecken außerhalb dieser Festpreisrouten werden individuell angeboten und vor der Fahrt bestätigt.",
    terms12Heading: "1.2 Buchungsbestätigung",
    terms12Body:
      "Eine Buchung ist bestätigt, sobald wir auf Ihre Anfrage (per Telefon, WhatsApp oder E-Mail) antworten und Fahrzeug, Preis und Abholzeit bestätigen. Das Absenden des Online-Formulars oder der Buchungsseite ist eine Anfrage, keine automatische Bestätigung.",
    terms13Heading: "1.3 Wartezeit",
    terms13Body:
      "Bei Flughafenabholungen überwachen wir Ihren Flug und gewähren eine angemessene kostenlose Wartezeit nach der Landung. Bei Stadtabholungen gilt ein kürzeres kostenloses Wartefenster. Darüber hinausgehende Wartezeit kann eine zusätzliche Gebühr auslösen, die Ihnen dann mitgeteilt wird.",
    terms14Heading: "1.4 Passagiere & Gepäck",
    terms14Body:
      "Bitte geben Sie bei der Buchung eine korrekte Anzahl an Passagieren und Gepäck an, damit wir das richtige Fahrzeug zuweisen können. Wir behalten uns vor, ein größeres Fahrzeug (zum entsprechenden Preis) anzufordern, falls die tatsächliche Gruppe oder das Gepäck die Angaben übersteigt.",
    terms15Heading: "1.5 Zahlung",
    terms15Body:
      "Die Zahlung kann bar oder per Karte direkt beim Fahrer erfolgen, oder online über einen sicheren SumUp-Zahlungslink, der nach der Buchungsbestätigung gesendet wird. Online-Zahlungslinks werden je Buchung erstellt und stellen keine gespeicherte wiederkehrende Belastung dar.",
    terms2Heading: "2. Stornierungsrichtlinie",
    terms2Intro: "Wir verstehen, dass sich Reisepläne ändern. Als allgemeine Richtlinie gilt:",
    terms2Item1: "Stornierungen weit vor der Abholung können kostenlos umgebucht oder storniert werden.",
    terms2Item2:
      "Späte Stornierungen kurz vor der geplanten Abholzeit oder ein Nichterscheinen am vereinbarten Ort können eine Stornierungsgebühr nach sich ziehen, insbesondere wenn bereits ein Fahrer losgeschickt wurde.",
    terms2Item3:
      "Falls Sie im Voraus über einen SumUp-Zahlungslink bezahlt haben und gemäß dieser Richtlinie Anspruch auf Rückerstattung haben, kontaktieren Sie uns unter info@aathishakeri.se, und wir erstatten den Betrag auf Ihre ursprüngliche Zahlungsmethode zurück.",
    terms2ClosingHtml:
      "Um eine Buchung zu stornieren oder zu ändern, kontaktieren Sie uns so schnell wie möglich per Telefon oder <a href=\"https://wa.me/46737351993\" target=\"_blank\" rel=\"noopener noreferrer\">WhatsApp</a> — je früher wir Bescheid wissen, desto flexibler können wir sein.",
    terms3Heading: "3. Datenschutzrichtlinie",
    terms3Intro:
      "Dieser Abschnitt erklärt, welche personenbezogenen Daten wir über diese Website erheben und wie sie verwendet werden, im Einklang mit der EU-Datenschutz-Grundverordnung (DSGVO).",
    terms31Heading: "3.1 Was wir erheben",
    terms31Body:
      "Wenn Sie eine Anfrage oder Buchung absenden, erheben wir die von Ihnen angegebenen Daten: Name, E-Mail-Adresse, Telefonnummer, Abhol-/Zielorte, Flug- oder Schiffsnummer, Reisedatum und -zeit, Anzahl der Passagiere und des Gepäcks sowie etwaige Notizen oder Zusatzwünsche.",
    terms32Heading: "3.2 Wie wir sie verwenden",
    terms32Body:
      "Diese Informationen werden ausschließlich zur Planung, Bestätigung und Durchführung Ihres Transfers verwendet — einschließlich der Kontaktaufnahme per Telefon, E-Mail oder WhatsApp bezüglich Ihrer Buchung. Wir verkaufen oder vermieten Ihre personenbezogenen Daten nicht an Dritte.",
    terms33Heading: "3.3 Wo sie gespeichert werden",
    terms33Body:
      "Anfrage- und Buchungsformulare werden in einem Google Forms/Sheets-Antwortblatt gespeichert, auf das nur Aathish Åkeri AB Zugriff hat. Online-Zahlungen werden von SumUp gemäß dessen eigener Datenschutz- und Zahlungsbedingungen verarbeitet — wir speichern Ihre Kartendaten nicht.",
    terms34Heading: "3.4 Cookies & Tracking",
    terms34Body:
      "Diese Website verwendet keine Analyse- oder Werbe-Cookies. Sie lädt Länderflaggen-Icons für den Sprachwähler von einem Drittanbieter-CDN (flagcdn.com), das wie jeder Bild-Host standardmäßige Webanfragen protokollieren kann.",
    terms35Heading: "3.5 Ihre Rechte",
    terms35Body:
      "Sie können uns jederzeit per E-Mail an info@aathishakeri.se bitten, die über Sie gespeicherten personenbezogenen Daten einzusehen, zu berichtigen oder zu löschen. Wir bewahren Buchungsdaten nur so lange auf, wie es für Service- und Buchhaltungszwecke angemessen erforderlich ist.",
  },
  nl: {
    subTitle: "Uw premium reis begint hier – Comfort in elke mijl.",
    callBtn: "Bel ons nu",
    fleetTitle: "Wagenpark",
    car1Title: "Standaard Sedan",
    car1Desc: "Voor 4 personen.",
    carPremiumTitle: "Premium Sedan",
    carPremiumDesc: "Luxe zakenreizen.",
    car2Title: "Premium Van",
    car2Desc: "Max 7 personen, ruim.",
    enqTitle: "Prijs aanvragen",
    lblPickup: "Ophalen:",
    lblDrop: "Bestemming:",
    lblFlight: "Vluchtnr. (Optie):",
    lblDate: "Datum:",
    lblTime: "Tijd:",
    lblAdults: "Volwassenen:",
    lblKids: "Kinderen:",
    lblBags: "Koffers:",
    lblNotes: "Vragen:",
    lblAddons: "Extra opties:",
    optChild1: "Zitje 0-8 mnd",
    optChild2: "Zitje 9-36 mnd",
    optChild3: "Zitje 3+ jaar",
    optCombi: "Combi (Veel bagage)",
    optPorter: "Hulp bagage",
    submitBtn: "Verstuur",
    contactTitle: "Contact",
    lblWhatsapp: "WhatsApp",
    waNoteText: "Tik om direct te chatten",
    priceTitle: "Vaste prijzen: Arlanda & Stockholm City",
    directionAtoC: "Luchthaven Arlanda → Stockholm City",
    directionCtoA: "Stockholm City → Luchthaven Arlanda",
    vehMinibus: "Minibus (7 zitplaatsen)",
    descUpTo4: "Tot 4 passagiers",
    descPremiumShort: "Luxe & comfort",
    descUpTo7: "Tot 7 passagiers",
    badgeRecommended: "Aanbevolen",
    bookNowBtn: "Nu boeken",
    enqSkipHtml:
      'Weet u al wat u nodig heeft? Ga direct naar onze <a href="booking.html"><strong>boekingspagina</strong></a> om uw rit te reserveren.',
    lblName: "Volledige naam:",
    lblEmail: "E-mailadres:",
    lblPhone: "Mobiel nummer:",
    trustLabel1: "Actief in Stockholm sinds",
    trustLabel2: "Gesproken talen",
    trustLabel3: "Beschikbaarheid luchthaven",
    trustLabel4: "Vaste Arlanda-prijzen, geen verrassingen",
    contactEmailLabel: "E-mail:",
    contactPhoneLabel: "Telefoon:",
    contactWhatsappLabel: "WhatsApp:",

    navHome: "Home",
    navAbout: "Over ons",
    navServices: "Diensten",
    navPricing: "Prijzen",
    navFAQ: "FAQ",
    navBookNow: "Nu boeken",
    footerAboutUs: "Over ons",
    footerTermsPrivacy: "Voorwaarden & Privacy",
    footerRights: "Alle rechten voorbehouden.",
    successTitle: "✔ Bedankt!",
    successBody: "Uw aanvraag is succesvol verzonden. We nemen spoedig contact met u op.",
    bookingSuccessTitle: "✔ Boekingsaanvraag verzonden!",
    bookingSuccessBody:
      "Bedankt — we hebben uw boekingsaanvraag ontvangen en bevestigen de prijs en ophaaltijd binnenkort telefonisch, per e-mail of WhatsApp.",
    closeBtn: "Sluiten",
    warningScamMsg:
      "Uw aanvraag bevat verdachte woorden gerelateerd aan betalingen of fraude. Verwijder deze voor u verzendt.",

    aboutHeroTitle: "Over Aathish Åkeri AB",
    aboutHeroSubtitle:
      "Stockholms betrouwbare, meertalige taxipartner voor luchthaventransfers, zakenreizen en alles daartussenin.",
    aboutTrust1: "Opgericht",
    aboutTrust3: "Voertuigklassen",
    aboutTrust4: "Luchthavenprijzen",
    aboutStoryHeading: "Ons verhaal",
    aboutStoryP1:
      "Aathish Åkeri AB werd opgericht in 2017 en richt zich sinds 2020 op premium taxi- en luchthaventransfers in Stockholm, gebouwd rond een simpel idee: luchthaven- en stadstransfers moeten betrouwbaar, comfortabel en eerlijk geprijsd zijn. Wat sindsdien begon als een kleine onderneming gericht op transfers naar luchthaven Arlanda, is uitgegroeid tot een vertrouwde dienst voor toeristen, zakenreizigers en lokale gezinnen in heel Groot-Stockholm.",
    aboutStoryP2:
      "Wij zijn een door chauffeurs geleid bedrijf — de mensen achter het stuur zijn dezelfde mensen die uw telefoontje of WhatsApp-bericht beantwoorden. Dat betekent minder misverstanden, snellere bevestigingen en oprechte interesse om uw reis meteen goed te laten verlopen.",
    aboutValuesHeading: "Waar wij voor staan",
    aboutValue1Title: "Punctualiteit",
    aboutValue1Desc: "Ophalingen met vluchtvolging en ingebouwde marge, zodat u nooit hoeft te wachten op Arlanda.",
    aboutValue2Title: "Transparante prijzen",
    aboutValue2Desc: "Vaste tarieven voor routes Arlanda ↔ Stockholm — de geoffreerde prijs is de prijs die u betaalt.",
    aboutValue3Title: "Meertalige service",
    aboutValue3Desc: "Ons team communiceert in het Engels, Zweeds, Spaans, Frans, Duits, Nederlands en Italiaans.",
    aboutValue4Title: "Comfort & ruimte",
    aboutValue4Desc: "Van een standaard sedan tot een 7-persoons van, met ruimte voor bagage, kinderzitjes en extra tassen.",
    aboutFleetHeading: "Ons wagenpark in het kort",
    aboutSeeServicesBtn: "Bekijk alle diensten",
    aboutCTAHeading: "Klaar om met ons te rijden?",

    servicesHeroTitle: "Onze diensten",
    servicesHeroSubtitle: "Meer dan alleen een luchthavenrit — comfortabel vervoer voor elke gelegenheid in Stockholm en daarbuiten.",
    svcAirportTitle: "Luchthaventransfers",
    svcAirportDesc:
      "Ophalingen en afzettingen tegen vaste prijs op Arlanda, met vluchtvolging zodat we er ook bij vertraging zijn. Luchthavens Bromma, Skavsta en Västerås op aanvraag beschikbaar.",
    svcCorpTitle: "Zakelijke reizen",
    svcCorpDesc:
      "Punctuele, professionele ophalingen voor vergaderingen, conferenties en roadshows. Facturering mogelijk voor vaste zakelijke accounts — vraag ons naar de details.",
    svcCruiseTitle: "Transfers naar cruiseterminals",
    svcCruiseDesc:
      "Transfers van en naar de cruiseterminals van Stockholm (Frihamnen & Värtahamnen), afgestemd op de aankomst of vertrek van uw schip.",
    svcHourlyTitle: "Uurverhuur / ter beschikking",
    svcHourlyDesc:
      "Boek een auto met chauffeur per uur voor dagen met meerdere stops, sightseeing, of wanneer uw planning flexibiliteit vraagt in plaats van een vaste route.",
    svcEventsTitle: "Evenementen & speciale gelegenheden",
    svcEventsDesc:
      "Bruiloften, feesten en groepsuitjes — onze premium sedan en 7-persoons van houden uw groep samen en comfortabel.",
    svcFamilyTitle: "Gezinsvriendelijke extra's",
    svcFamilyDesc:
      "Kinderzitjes voor elke leeftijd (0-8 maanden, 9-36 maanden, 3+ jaar), hulp bij bagage en combi-voertuigen voor extra grote bagage.",
    svcPricingHeading: "Bekijk onze vaste Arlanda-prijzen",
    svcPricingBody: "Controleer de exacte tarieven voor Arlanda ↔ Stockholm City, of boek direct.",
    svcViewPricingBtn: "Bekijk prijzen",

    bookingHeroTitle: "Boek uw rit direct",
    bookingHeroSubtitle: "Geen commissiehongerige apps — boek rechtstreeks bij ons en betaal veilig zodra uw rit is bevestigd.",
    step1Title: "Vul uw rit in",
    step1Desc: "Vertel ons uw route, datum/tijd, aantal passagiers en gewenst voertuig hieronder.",
    step2Title: "Wij bevestigen het",
    step2Desc: "We reageren telefonisch, via WhatsApp of e-mail met de exacte prijs en bevestigde ophaaltijd.",
    step3Title: "Betaal veilig",
    step3Desc: "Betaal de chauffeur rechtstreeks, of gebruik de veilige SumUp-betaallink die we u sturen — kaart, Apple Pay of Google Pay.",
    bookingTripDetailsHeading: "Ritgegevens",
    quickFillIntro: "Snelkeuze voor onze vaste Arlanda-routes:",
    vehicleTypeLabel: "Gewenst voertuig:",
    vehOptStandard: "Standaard sedan (tot 4)",
    vehOptPremium: "Premium sedan (tot 4, luxe)",
    vehOptVan: "Premium van / minibus (tot 7)",
    lblPromoCode: "Kortingscode (optioneel):",
    phPromoCode: "Heeft u een code? Vul die hier in",
    requestBookingBtn: "Boeking aanvragen",
    paymentNoteHeading: "💳 Betaalt u een bestaande boeking?",
    paymentNoteBody:
      "Zodra we uw rit bevestigen, sturen we u een veilige SumUp-betaallink via WhatsApp of e-mail — kaart, Apple Pay en Google Pay worden geaccepteerd. Heeft u die link al, gebruik dan de knop hieronder.",
    sumupPayBtn: "Betalen met SumUp",
    bookingPreferPhoneHeading: "Liever telefonisch of via WhatsApp boeken?",

    faqHeroTitle: "Veelgestelde vragen",
    faqHeroSubtitle: "Alles wat u moet weten voordat u boekt.",
    faqQ1: "Welke betaalmethoden accepteert u?",
    faqA1:
      "We accepteren contant geld en kaart rechtstreeks bij de chauffeur. Bij directe online boekingen accepteren we ook veilige betalingen met kaart, Apple Pay en Google Pay via een SumUp-betaallink die we sturen zodra uw boeking is bevestigd.",
    faqQ2: "Hoe werken de vaste Arlanda-prijzen?",
    faqA2:
      "Onze tarieven Arlanda ↔ Stockholm City liggen vast per voertuigtype — standaard sedan, premium sedan of minibus — dus de geoffreerde prijs is de prijs die u betaalt, ongeacht het verkeer.",
    faqQ3: "Wat gebeurt er als mijn vlucht vertraagd is?",
    faqA3:
      "Voeg uw vluchtnummer toe bij het boeken, dan volgen wij deze en passen we uw ophaaltijd automatisch en kosteloos aan bij redelijke vertragingen. Stuur ons bij aanzienlijke vertraging toch een bericht via WhatsApp.",
    faqQ4: "Biedt u kinderzitjes aan?",
    faqA4: "Ja — we bieden kinderzitjes voor 0-8 maanden, 9-36 maanden en 3+ jaar. Selecteer de gewenste als extra optie bij het boeken of aanvragen.",
    faqQ5: "Hoe ver van tevoren moet ik boeken?",
    faqA5: "We raden aan waar mogelijk minstens een paar uur van tevoren te boeken, en 24 uur voor vroege ochtendritten of drukke reisdata, om de beschikbaarheid van het voertuig te garanderen.",
    faqQ6: "Wat is uw annuleringsbeleid?",
    faqA6: "Zie ons volledige annuleringsbeleid voor details. Kort gezegd: hoe eerder u het ons laat weten, hoe flexibeler we kunnen zijn.",
    faqQ7: "Rijdt u ook naar andere luchthavens dan Arlanda?",
    faqA7: "Ja. Naast Arlanda bedienen we op aanvraag ook Bromma, Skavsta en Västerås, evenals de cruiseterminals van Stockholm.",
    faqQ8: "Spreken uw chauffeurs Engels?",
    faqA8: "Ja. Ons team communiceert in het Engels, Zweeds, Spaans, Frans, Duits, Nederlands en Italiaans.",
    faqQ9: "Is bagageruimte gegarandeerd?",
    faqA9:
      "Laat ons bij het boeken weten hoeveel tassen u heeft. Bij extra grote of extra bagage kiest u de optie \"Combi (Veel bagage)\" of onze premium van, zodat we het juiste voertuig meenemen.",
    faqStillHeading: "Nog een vraag?",
    faqStillBody: "Neem rechtstreeks contact met ons op, we reageren snel.",
    faqCallUsBtn: "Bel ons",
    faqWhatsappUsBtn: "WhatsApp ons",

    termsHeroTitle: "Voorwaarden & Privacy",
    termsHeroSubtitle: "Onze boekingsvoorwaarden, annuleringsbeleid en hoe wij omgaan met uw persoonsgegevens.",
    termsDisclaimer:
      "Let op: deze pagina is een algemene startsjabloon met standaard taxivoorwaarden en een AVG-achtige privacyverklaring. Bekijk en pas deze aan — inclusief de specifieke wacht- en annuleringstermijnen — aan uw daadwerkelijke beleid, en laat deze toetsen aan Zweeds/EU-recht voordat u er als definitieve juridische voorwaarden op vertrouwt.",
    termsTocTerms: "Boekingsvoorwaarden",
    termsTocCancellation: "Annuleringsbeleid",
    termsTocPrivacy: "Privacybeleid",
    terms1Heading: "1. Boekingsvoorwaarden",
    terms1Intro:
      "Deze voorwaarden gelden voor alle boekingen en aanvragen bij Aathish Åkeri AB (\"wij\", \"ons\", \"onze\") per telefoon, WhatsApp, e-mail of via deze website.",
    terms11Heading: "1.1 Vasteprijsroutes",
    terms11Body:
      "De getoonde tarieven voor Arlanda ↔ Stockholm City liggen vast per voertuigtype en gelden voor directe transfers tussen deze twee punten. Extra stops, omwegen of routes buiten deze vaste trajecten worden individueel geoffreerd en vóór de reis bevestigd.",
    terms12Heading: "1.2 Boekingsbevestiging",
    terms12Body:
      "Een boeking is bevestigd zodra wij op uw aanvraag reageren (telefonisch, via WhatsApp of e-mail) met bevestiging van voertuig, prijs en ophaaltijd. Het versturen van het online formulier of de boekingspagina is een aanvraag, geen automatische bevestiging.",
    terms13Heading: "1.3 Wachttijd",
    terms13Body:
      "Bij luchthavenophalingen volgen we uw vlucht en hanteren we een redelijke gratis wachttijd na landing. Bij stadsophalingen geldt een korter gratis wachtvenster. Wachttijd daarboven kan extra kosten met zich meebrengen, die op dat moment worden meegedeeld.",
    terms14Heading: "1.4 Passagiers & bagage",
    terms14Body:
      "Geef bij het boeken een nauwkeurig aantal passagiers en bagage op, zodat we het juiste voertuig kunnen toewijzen. Wij behouden ons het recht voor een groter voertuig te vragen (tegen de juiste prijs) als de werkelijke groep of bagage groter is dan opgegeven.",
    terms15Heading: "1.5 Betaling",
    terms15Body:
      "Betaling kan contant of met kaart rechtstreeks bij de chauffeur, of online via een veilige SumUp-betaallink die na bevestiging van de boeking wordt verzonden. Online betaallinks worden per boeking gegenereerd en zijn geen opgeslagen terugkerende afschrijving.",
    terms2Heading: "2. Annuleringsbeleid",
    terms2Intro: "Wij begrijpen dat reisplannen veranderen. Als algemene richtlijn:",
    terms2Item1: "Annuleringen ruim voor de ophaaltijd kunnen kosteloos worden verzet of geannuleerd.",
    terms2Item2:
      "Late annuleringen, kort voor de geplande ophaaltijd, of het niet verschijnen op de afgesproken plaats kunnen leiden tot annuleringskosten, vooral als er al een chauffeur is uitgestuurd.",
    terms2Item3:
      "Als u vooraf heeft betaald via een SumUp-betaallink en volgens dit beleid recht heeft op terugbetaling, neem dan contact met ons op via info@aathishakeri.se en verwerken wij dit terug naar uw oorspronkelijke betaalmethode.",
    terms2ClosingHtml:
      "Neem om een boeking te annuleren of te wijzigen zo snel mogelijk contact met ons op via telefoon of <a href=\"https://wa.me/46737351993\" target=\"_blank\" rel=\"noopener noreferrer\">WhatsApp</a> — hoe eerder wij het weten, hoe flexibeler wij kunnen zijn.",
    terms3Heading: "3. Privacybeleid",
    terms3Intro:
      "Dit onderdeel legt uit welke persoonsgegevens wij via deze website verzamelen en hoe deze worden gebruikt, in lijn met de Algemene Verordening Gegevensbescherming (AVG/GDPR) van de EU.",
    terms31Heading: "3.1 Wat wij verzamelen",
    terms31Body:
      "Bij het indienen van een aanvraag of boeking verzamelen wij de gegevens die u opgeeft: naam, e-mailadres, telefoonnummer, ophaal-/afzetlocaties, vlucht- of scheepsnummer, reisdatum en -tijd, aantal passagiers en bagage, en eventuele notities of extra verzoeken.",
    terms32Heading: "3.2 Hoe wij het gebruiken",
    terms32Body:
      "Deze informatie wordt uitsluitend gebruikt om uw transfer te plannen, bevestigen en uit te voeren — inclusief contact opnemen via telefoon, e-mail of WhatsApp over uw boeking. Wij verkopen of verhuren uw persoonsgegevens niet aan derden.",
    terms33Heading: "3.3 Waar het wordt opgeslagen",
    terms33Body:
      "Aanvraag- en boekingsformulieren worden opgeslagen in een Google Forms/Sheets-antwoordblad dat alleen toegankelijk is voor Aathish Åkeri AB. Online betalingen worden verwerkt door SumUp volgens hun eigen privacy- en betalingsvoorwaarden — wij slaan uw kaartgegevens niet op.",
    terms34Heading: "3.4 Cookies & tracking",
    terms34Body:
      "Deze website gebruikt geen analytische of advertentiecookies. De vlagpictogrammen voor de taalkiezer worden geladen vanaf een CDN van derden (flagcdn.com), die net als elke andere afbeeldingshost standaard webverzoeken kan loggen.",
    terms35Heading: "3.5 Uw rechten",
    terms35Body:
      "U kunt ons op elk moment vragen om de persoonsgegevens die wij over u hebben in te zien, te corrigeren of te verwijderen door te mailen naar info@aathishakeri.se. Wij bewaren boekingsgegevens alleen zolang redelijkerwijs nodig is voor service- en administratieve doeleinden.",
  },
  it: {
    subTitle: "Il tuo viaggio premium inizia qui – Comfort in ogni chilometro.",
    callBtn: "Chiamaci ora",
    fleetTitle: "Flotta",
    car1Title: "Berlina Standard",
    car1Desc: "Fino a 4 passeggeri.",
    carPremiumTitle: "Berlina Premium",
    carPremiumDesc: "Lusso per affari.",
    car2Title: "Van Premium",
    car2Desc: "Fino a 7 persone, ampio spazio.",
    enqTitle: "Richiedi preventivo",
    lblPickup: "Ritiro:",
    lblDrop: "Destinazione:",
    lblFlight: "Volo (Opzionale):",
    lblDate: "Data:",
    lblTime: "Ora:",
    lblAdults: "Adulti:",
    lblKids: "Bambini:",
    lblBags: "Bagagli:",
    lblNotes: "Note:",
    lblAddons: "Servizi extra:",
    optChild1: "Seggiolino 0-8 mesi",
    optChild2: "Seggiolino 9-36 mesi",
    optChild3: "Seggiolino 3+ anni",
    optCombi: "Combi (Bagaglio grande)",
    optPorter: "Facchinaggio",
    submitBtn: "Invia",
    contactTitle: "Contatti",
    lblWhatsapp: "WhatsApp",
    waNoteText: "Tocca per chattare subito",
    priceTitle: "Prezzi fissi: Arlanda e Stoccolma",
    directionAtoC: "Aeroporto di Arlanda → Stoccolma città",
    directionCtoA: "Stoccolma città → Aeroporto di Arlanda",
    vehMinibus: "Minibus (7 posti)",
    descUpTo4: "Fino a 4 passeggeri",
    descPremiumShort: "Lusso e comfort",
    descUpTo7: "Fino a 7 passeggeri",
    badgeRecommended: "Consigliato",
    bookNowBtn: "Prenota ora",
    enqSkipHtml:
      'Sai già cosa ti serve? Vai direttamente alla nostra <a href="booking.html"><strong>pagina di prenotazione</strong></a> per prenotare il tuo viaggio.',
    lblName: "Nome completo:",
    lblEmail: "Indirizzo email:",
    lblPhone: "Numero di cellulare:",
    trustLabel1: "A Stoccolma dal",
    trustLabel2: "Lingue parlate",
    trustLabel3: "Disponibilità aeroportuale",
    trustLabel4: "Prezzi fissi per Arlanda, senza sorprese",
    contactEmailLabel: "Email:",
    contactPhoneLabel: "Telefono:",
    contactWhatsappLabel: "WhatsApp:",

    navHome: "Home",
    navAbout: "Chi siamo",
    navServices: "Servizi",
    navPricing: "Prezzi",
    navFAQ: "FAQ",
    navBookNow: "Prenota ora",
    footerAboutUs: "Chi siamo",
    footerTermsPrivacy: "Termini & Privacy",
    footerRights: "Tutti i diritti riservati.",
    successTitle: "✔ Grazie!",
    successBody: "La tua richiesta è stata inviata con successo. Ti contatteremo a breve.",
    bookingSuccessTitle: "✔ Richiesta di prenotazione inviata!",
    bookingSuccessBody:
      "Grazie — abbiamo ricevuto la tua richiesta di prenotazione e confermeremo prezzo e orario di ritiro a breve per telefono, email o WhatsApp.",
    closeBtn: "Chiudi",
    warningScamMsg:
      "La tua richiesta contiene termini sospetti legati a pagamenti o truffe. Rimuovili prima di inviare.",

    aboutHeroTitle: "Chi è Aathish Åkeri AB",
    aboutHeroSubtitle:
      "Il partner taxi affidabile e multilingue di Stoccolma per transfer aeroportuali, viaggi di lavoro e molto altro.",
    aboutTrust1: "Fondata nel",
    aboutTrust3: "Classi di veicoli",
    aboutTrust4: "Prezzi aeroportuali",
    aboutStoryHeading: "La nostra storia",
    aboutStoryP1:
      "Aathish Åkeri AB è stata fondata nel 2017 e dal 2020 si dedica al servizio di taxi premium e transfer aeroportuali a Stoccolma, costruita su un'idea semplice: i transfer aeroportuali e urbani devono essere affidabili, confortevoli e con un prezzo onesto. Da allora, ciò che è iniziato come una piccola attività concentrata sui transfer per l'aeroporto di Arlanda è cresciuto fino a diventare un servizio di fiducia per turisti, viaggiatori d'affari e famiglie locali in tutta l'area di Stoccolma.",
    aboutStoryP2:
      "Siamo un'azienda guidata dagli autisti — le persone al volante sono le stesse che rispondono alla tua chiamata o al tuo messaggio WhatsApp. Questo significa meno malintesi, conferme più rapide e un interesse genuino a far andare bene il tuo viaggio fin dalla prima volta.",
    aboutValuesHeading: "I nostri valori",
    aboutValue1Title: "Puntualità",
    aboutValue1Desc: "Ritiri con monitoraggio del volo e margine incluso, così non aspetterai mai ad Arlanda.",
    aboutValue2Title: "Prezzi trasparenti",
    aboutValue2Desc: "Tariffe fisse per le tratte Arlanda ↔ Stoccolma — il prezzo indicato è il prezzo che paghi.",
    aboutValue3Title: "Servizio multilingue",
    aboutValue3Desc: "Il nostro team comunica in inglese, svedese, spagnolo, francese, tedesco, olandese e italiano.",
    aboutValue4Title: "Comfort e spazio",
    aboutValue4Desc: "Da una berlina standard a un van da 7 posti, con spazio per bagagli, seggiolini e borse extra.",
    aboutFleetHeading: "La nostra flotta in breve",
    aboutSeeServicesBtn: "Vedi tutti i servizi",
    aboutCTAHeading: "Pronto a viaggiare con noi?",

    servicesHeroTitle: "I nostri servizi",
    servicesHeroSubtitle: "Molto più di un transfer aeroportuale — trasporto confortevole per ogni occasione a Stoccolma e oltre.",
    svcAirportTitle: "Transfer aeroportuali",
    svcAirportDesc:
      "Ritiri e consegne a prezzo fisso ad Arlanda, con monitoraggio del volo per esserci anche in caso di ritardo. Aeroporti di Bromma, Skavsta e Västerås disponibili su richiesta.",
    svcCorpTitle: "Viaggi di lavoro e aziendali",
    svcCorpDesc:
      "Ritiri puntuali e professionali per riunioni, conferenze e roadshow. Fatturazione disponibile per conti aziendali abituali — chiedici maggiori dettagli.",
    svcCruiseTitle: "Transfer ai terminal crociere",
    svcCruiseDesc:
      "Transfer da e per i terminal crociere di Stoccolma (Frihamnen e Värtahamnen), sincronizzati con l'arrivo o la partenza della tua nave.",
    svcHourlyTitle: "Noleggio a ore / con autista a disposizione",
    svcHourlyDesc:
      "Prenota auto e autista a ore per giornate con più tappe, visite turistiche, o quando il tuo programma richiede flessibilità anziché un percorso fisso.",
    svcEventsTitle: "Eventi e occasioni speciali",
    svcEventsDesc:
      "Matrimoni, celebrazioni e serate di gruppo — la nostra berlina premium e il van da 7 posti mantengono il tuo gruppo unito e comodo.",
    svcFamilyTitle: "Extra per famiglie",
    svcFamilyDesc:
      "Seggiolini per ogni età (0-8 mesi, 9-36 mesi, 3+ anni), aiuto con i bagagli e veicoli combi per bagagli fuori misura.",
    svcPricingHeading: "Scopri i nostri prezzi fissi per Arlanda",
    svcPricingBody: "Controlla le tariffe esatte per Arlanda ↔ Stoccolma città, oppure prenota direttamente.",
    svcViewPricingBtn: "Vedi i prezzi",

    bookingHeroTitle: "Prenota il tuo viaggio direttamente",
    bookingHeroSubtitle: "Niente app che si prendono commissioni — prenota direttamente con noi e paga in sicurezza una volta confermato il viaggio.",
    step1Title: "Compila il tuo viaggio",
    step1Desc: "Indicaci percorso, data/ora, passeggeri e veicolo preferito qui sotto.",
    step2Title: "Lo confermiamo",
    step2Desc: "Ti rispondiamo per telefono, WhatsApp o email con il prezzo esatto e l'orario di ritiro confermato.",
    step3Title: "Paga in sicurezza",
    step3Desc: "Paga direttamente l'autista, oppure usa il link di pagamento sicuro SumUp che ti inviamo — carta, Apple Pay o Google Pay.",
    bookingTripDetailsHeading: "Dettagli del viaggio",
    quickFillIntro: "Selezione rapida per le nostre tratte fisse per Arlanda:",
    vehicleTypeLabel: "Veicolo preferito:",
    vehOptStandard: "Berlina standard (fino a 4)",
    vehOptPremium: "Berlina premium (fino a 4, lusso)",
    vehOptVan: "Van premium / minibus (fino a 7)",
    lblPromoCode: "Codice promozionale (opzionale):",
    phPromoCode: "Hai un codice? Inseriscilo qui",
    requestBookingBtn: "Richiedi prenotazione",
    paymentNoteHeading: "💳 Stai pagando una prenotazione esistente?",
    paymentNoteBody:
      "Una volta confermato il tuo viaggio, ti invieremo un link di pagamento sicuro SumUp via WhatsApp o email — accettiamo carta, Apple Pay e Google Pay. Se hai già quel link, usa il pulsante qui sotto.",
    sumupPayBtn: "Paga con SumUp",
    bookingPreferPhoneHeading: "Preferisci prenotare per telefono o WhatsApp?",

    faqHeroTitle: "Domande frequenti",
    faqHeroSubtitle: "Tutto ciò che devi sapere prima di prenotare.",
    faqQ1: "Quali metodi di pagamento accettate?",
    faqA1:
      "Accettiamo contanti e carta direttamente con l'autista. Per le prenotazioni dirette online, accettiamo anche pagamenti sicuri con carta, Apple Pay e Google Pay tramite un link di pagamento SumUp inviato una volta confermata la prenotazione.",
    faqQ2: "Come funzionano i prezzi fissi per Arlanda?",
    faqA2:
      "Le nostre tariffe Arlanda ↔ Stoccolma città sono fisse in base al tipo di veicolo — berlina standard, berlina premium o minibus — quindi il prezzo indicato è quello che paghi, indipendentemente dal traffico.",
    faqQ3: "Cosa succede se il mio volo è in ritardo?",
    faqA3:
      "Aggiungi il numero di volo al momento della prenotazione, lo monitoriamo e regoliamo automaticamente l'orario di ritiro senza costi aggiuntivi per ritardi ragionevoli. Scrivici comunque su WhatsApp in caso di ritardo significativo.",
    faqQ4: "Offrite seggiolini per bambini?",
    faqA4: "Sì — offriamo seggiolini per 0-8 mesi, 9-36 mesi e 3+ anni. Seleziona quelli di cui hai bisogno come extra al momento della prenotazione o della richiesta.",
    faqQ5: "Con quanto anticipo devo prenotare?",
    faqA5: "Consigliamo di prenotare con almeno qualche ora di anticipo quando possibile, e 24 ore per ritiri mattutini o date di alta stagione, per garantire la disponibilità del veicolo.",
    faqQ6: "Qual è la vostra politica di cancellazione?",
    faqA6: "Consulta la nostra politica di cancellazione completa per i dettagli. In breve: prima ci avvisi, più flessibili possiamo essere.",
    faqQ7: "Servite aeroporti diversi da Arlanda?",
    faqA7: "Sì. Oltre ad Arlanda, copriamo su richiesta gli aeroporti di Bromma, Skavsta e Västerås, così come i terminal crociere di Stoccolma.",
    faqQ8: "I vostri autisti parlano inglese?",
    faqA8: "Sì. Il nostro team comunica in inglese, svedese, spagnolo, francese, tedesco, olandese e italiano.",
    faqQ9: "Lo spazio bagagli è garantito?",
    faqA9:
      "Comunicaci il numero di valigie al momento della prenotazione. In caso di bagagli fuori misura o extra, scegli l'opzione \"Combi (Bagaglio grande)\" o il nostro van premium in modo da portare il veicolo giusto.",
    faqStillHeading: "Hai ancora una domanda?",
    faqStillBody: "Contattaci direttamente e ti risponderemo velocemente.",
    faqCallUsBtn: "Chiamaci",
    faqWhatsappUsBtn: "Scrivici su WhatsApp",

    termsHeroTitle: "Termini & Privacy",
    termsHeroSubtitle: "I nostri termini di prenotazione, la politica di cancellazione e come trattiamo i tuoi dati personali.",
    termsDisclaimer:
      "Nota: questa pagina è un modello generale di partenza che copre i termini standard per i servizi taxi e un'informativa sulla privacy in stile GDPR. Rivedila e adattala — inclusi i tempi specifici di attesa e cancellazione — alle tue policy effettive, e falla verificare in base alla legge svedese/UE prima di considerarla come termini legali definitivi.",
    termsTocTerms: "Termini di prenotazione",
    termsTocCancellation: "Politica di cancellazione",
    termsTocPrivacy: "Informativa sulla privacy",
    terms1Heading: "1. Termini e condizioni di prenotazione",
    terms1Intro:
      "Questi termini si applicano a tutte le prenotazioni e richieste effettuate con Aathish Åkeri AB (\"noi\", \"nostro\") per telefono, WhatsApp, email o tramite questo sito web.",
    terms11Heading: "1.1 Tratte a prezzo fisso",
    terms11Body:
      "Le tariffe mostrate per Arlanda ↔ Stoccolma città sono fisse in base al tipo di veicolo e valide per transfer diretti tra questi due punti. Fermate aggiuntive, deviazioni o percorsi al di fuori di queste tratte fisse vengono quotati singolarmente e confermati prima del viaggio.",
    terms12Heading: "1.2 Conferma della prenotazione",
    terms12Body:
      "Una prenotazione è confermata quando rispondiamo alla tua richiesta (per telefono, WhatsApp o email) confermando veicolo, prezzo e orario di ritiro. L'invio del modulo online o della pagina di prenotazione è una richiesta, non una conferma automatica.",
    terms13Heading: "1.3 Tempo di attesa",
    terms13Body:
      "Per i ritiri in aeroporto, monitoriamo il tuo volo e includiamo un ragionevole tempo di attesa gratuito dopo l'atterraggio. Per i ritiri in città si applica una finestra di attesa gratuita più breve. Il tempo di attesa oltre questo limite può comportare un costo aggiuntivo, comunicato al momento.",
    terms14Heading: "1.4 Passeggeri e bagagli",
    terms14Body:
      "Fornisci un numero accurato di passeggeri e bagagli al momento della prenotazione, così possiamo assegnare il veicolo giusto. Ci riserviamo il diritto di richiedere un veicolo superiore (al prezzo corretto) se il gruppo o i bagagli effettivi superano quanto dichiarato.",
    terms15Heading: "1.5 Pagamento",
    terms15Body:
      "Il pagamento può essere effettuato in contanti o con carta direttamente all'autista, oppure online tramite un link di pagamento sicuro SumUp inviato dopo la conferma della prenotazione. I link di pagamento online sono generati per singola prenotazione e non costituiscono un addebito ricorrente memorizzato.",
    terms2Heading: "2. Politica di cancellazione",
    terms2Intro: "Comprendiamo che i piani di viaggio cambiano. Come linea guida generale:",
    terms2Item1: "Le cancellazioni effettuate con largo anticipo rispetto al ritiro possono essere riprogrammate o cancellate gratuitamente.",
    terms2Item2:
      "Le cancellazioni tardive, vicine all'orario di ritiro previsto, o la mancata presentazione nel luogo concordato possono comportare una penale di cancellazione, specialmente se un autista è già stato inviato.",
    terms2Item3:
      "Se hai pagato in anticipo tramite un link di pagamento SumUp e hai diritto a un rimborso secondo questa politica, contattaci a info@aathishakeri.se e lo elaboreremo sul tuo metodo di pagamento originale.",
    terms2ClosingHtml:
      "Per cancellare o modificare una prenotazione, contattaci il prima possibile per telefono o <a href=\"https://wa.me/46737351993\" target=\"_blank\" rel=\"noopener noreferrer\">WhatsApp</a> — prima lo sappiamo, più flessibili possiamo essere.",
    terms3Heading: "3. Informativa sulla privacy",
    terms3Intro:
      "Questa sezione spiega quali dati personali raccogliamo tramite questo sito web e come vengono utilizzati, in linea con il Regolamento generale sulla protezione dei dati dell'UE (GDPR).",
    terms31Heading: "3.1 Cosa raccogliamo",
    terms31Body:
      "Quando invii una richiesta o una prenotazione, raccogliamo i dati che fornisci: nome, indirizzo email, numero di telefono, luoghi di ritiro/destinazione, numero di volo o nave, data e ora del viaggio, numero di passeggeri e bagagli, ed eventuali note o richieste di extra.",
    terms32Heading: "3.2 Come li utilizziamo",
    terms32Body:
      "Queste informazioni sono utilizzate esclusivamente per pianificare, confermare ed effettuare il tuo transfer — incluso contattarti per telefono, email o WhatsApp riguardo alla tua prenotazione. Non vendiamo né affittiamo i tuoi dati personali a terzi.",
    terms33Heading: "3.3 Dove vengono conservati",
    terms33Body:
      "Le richieste e prenotazioni inviate vengono archiviate in un foglio di risposte Google Forms/Sheets accessibile solo ad Aathish Åkeri AB. I pagamenti online sono elaborati da SumUp secondo la propria informativa sulla privacy e condizioni di pagamento — non conserviamo i dati della tua carta.",
    terms34Heading: "3.4 Cookie e tracciamento",
    terms34Body:
      "Questo sito web non utilizza cookie di analisi o pubblicitari. Carica le icone delle bandiere per il selettore di lingua da una CDN di terze parti (flagcdn.com), che può registrare richieste web standard come qualsiasi host di immagini.",
    terms35Heading: "3.5 I tuoi diritti",
    terms35Body:
      "Puoi chiederci in qualsiasi momento di accedere, correggere o eliminare i dati personali che deteniamo su di te scrivendo a info@aathishakeri.se. Conserviamo i dati di prenotazione solo per il tempo ragionevolmente necessario a fini di servizio e contabilità.",
  },
};

const scamTerms = [
  "western union",
  "moneygram",
  "bitcoin",
  "btc",
  "cashapp",
  "zelle",
  "gift card",
  "voucher",
  "crypto",
  "paypal",
  "loan",
  "refund",
  "skrill",
  "qr code",
  "scam",
  "fraud",
  "deposit",
  "bank transfer",
  "gift",
  "westernunion",
  "money gram"
];

function isScamText(text) {
  if (!text) return false;
  const lower = text.toLowerCase();
  return scamTerms.some((term) => lower.includes(term));
}

function showFormWarning(message) {
  const warning = document.getElementById("formWarning");
  if (warning) {
    warning.textContent = message;
    warning.style.display = "block";
  }
}

function hideFormWarning() {
  const warning = document.getElementById("formWarning");
  if (warning) {
    warning.style.display = "none";
    warning.textContent = "";
  }
}

function handleFormSubmit() {
  hideFormWarning();

  const notes = document.getElementById("notesField").value || "";
  const pickup = document.querySelector('input[name="entry.1606357890"]').value || "";
  const drop = document.querySelector('input[name="entry.1227612234"]').value || "";
  const email = document.querySelector('input[name="entry.360215860"]').value || "";
  const phone = document.querySelector('input[name="entry.1852072444"]').value || "";

  const combined = `${notes} ${pickup} ${drop} ${email} ${phone}`;
  if (isScamText(combined)) {
    const data = content[currentLang] || content.en;
    showFormWarning(data.warningScamMsg);
    return false;
  }

  submitted = true;
  return true;
}

/* =====================================================
   Generic i18n engine — used on every page. Elements declare
   which content[lang] key they show via data-i18n attributes:
     data-i18n="key"             -> element.textContent
     data-i18n-html="key"        -> element.innerHTML (for text with a link inside)
     data-i18n-placeholder="key" -> element's placeholder attribute
   ===================================================== */

const LANG_STORAGE_KEY = "ak_lang";
let currentLang = "en";

function applyTranslations(lang) {
  const data = content[lang];
  if (!data) return;
  currentLang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (data[key] !== undefined) el.textContent = data[key];
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (data[key] !== undefined) el.innerHTML = data[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (data[key] !== undefined) el.setAttribute("placeholder", data[key]);
  });

  if (document.documentElement) document.documentElement.setAttribute("lang", lang);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch (e) {
    /* localStorage unavailable (private browsing etc.) — language just won't persist */
  }
}

// Public API — flag buttons call setLanguage('sv') etc.
function setLanguage(lang) {
  applyTranslations(lang);
}

// Restores the visitor's last-chosen language (or English) on every page load,
// so the choice made on one page carries over when they navigate the site.
function initLanguage() {
  let lang = "en";
  try {
    lang = localStorage.getItem(LANG_STORAGE_KEY) || "en";
  } catch (e) {
    /* ignore */
  }
  if (!content[lang]) lang = "en";
  applyTranslations(lang);
}

window.onload = () => {
  initLanguage();
};
var submitted = false;

/* =====================================================
   Shared site chrome: mobile nav toggle + SumUp link
   ===================================================== */

// Open-amount SumUp payment link — the customer enters the confirmed fare
// themselves at checkout. Every "Pay Now" button on the site (class
// "sumup-pay-btn") uses this same constant.
const SUMUP_PAYMENT_LINK = "https://pay.sumup.com/b2c/Q1W5AEKH";

function toggleNav() {
  const links = document.getElementById("topnavLinks");
  const btn = document.getElementById("navToggle");
  if (!links || !btn) return;
  const isOpen = links.classList.toggle("open");
  btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
}

// Pre-fill the pickup/drop-off fields on the booking/enquiry form for a common route.
function fillRoute(pickup, drop) {
  const pickupInput = document.querySelector('input[name="entry.1606357890"]');
  const dropInput = document.querySelector('input[name="entry.1227612234"]');
  if (pickupInput) pickupInput.value = pickup;
  if (dropInput) dropInput.value = drop;
  if (dropInput) dropInput.focus();
}

// Folds the "Preferred Vehicle" choice and any promo code into the Notes
// field so both reach the same Google Form endpoint without needing new
// form fields/entry IDs.
function prepareBookingSubmit() {
  const vehicleSel = document.getElementById("vehicleType");
  const promoInput = document.getElementById("promoCodeField");
  const notes = document.getElementById("notesField");
  if (!notes) return true;

  // Strip any prefix inserted by a previous (invalid) submit attempt first,
  // so retries don't stack duplicate "Preferred Vehicle: ..." / "Promo Code: ..." lines.
  if (notes.dataset.vehiclePrefix) {
    notes.value = notes.value.replace(notes.dataset.vehiclePrefix, "");
  }
  if (notes.dataset.promoPrefix) {
    notes.value = notes.value.replace(notes.dataset.promoPrefix, "");
  }

  const vehiclePrefix = vehicleSel
    ? `Preferred Vehicle: ${vehicleSel.options[vehicleSel.selectedIndex].text}. `
    : "";
  const promoPrefix =
    PROMO.active && promoInput && promoInput.value.trim()
      ? `Promo Code: ${promoInput.value.trim().toUpperCase()}. `
      : "";

  notes.value = vehiclePrefix + promoPrefix + notes.value;
  notes.dataset.vehiclePrefix = vehiclePrefix;
  notes.dataset.promoPrefix = promoPrefix;
  return true;
}

// Pre-fills the booking form from a link's ?pickup=&drop=&car= query params
// (used by the pricing cards on the homepage linking into booking.html).
function applyBookingQueryParams() {
  const params = new URLSearchParams(window.location.search);
  const pickup = params.get("pickup");
  const drop = params.get("drop");
  const car = params.get("car");

  const pickupInput = document.querySelector('input[name="entry.1606357890"]');
  const dropInput = document.querySelector('input[name="entry.1227612234"]');
  const vehicleSel = document.getElementById("vehicleType");

  if (pickup && pickupInput) pickupInput.value = pickup;
  if (drop && dropInput) dropInput.value = drop;
  if (car && vehicleSel) vehicleSel.value = car;
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".sumup-pay-btn").forEach((btn) => {
    btn.href = SUMUP_PAYMENT_LINK;
  });
  const navToggle = document.getElementById("navToggle");
  if (navToggle) navToggle.addEventListener("click", toggleNav);
  applyBookingQueryParams();

  // Hide the Promo Code field entirely when PROMO.active is false (see the
  // PROMO block at the top of this file) — e.g. once an offer has ended.
  const promoGroup = document.getElementById("promoCodeGroup");
  if (promoGroup) promoGroup.style.display = PROMO.active ? "" : "none";
});

// 1. தேதி மற்றும் நேரத்தை அமைக்கும் செயல்பாடு
function syncDateTime() {
    const dateVal = document.getElementById('visibleDate').value;
    if (dateVal) {
        const parts = dateVal.split('-');
        document.getElementById('date_year').value = parts[0];
        document.getElementById('date_month').value = parts[1];
        document.getElementById('date_day').value = parts[2];
    }
    const timeVal = document.getElementById('visibleTime').value;
    if (timeVal) {
        const parts = timeVal.split(':');
        document.getElementById('time_hour').value = parts[0];
        document.getElementById('time_minute').value = parts[1];
    }
}

// 2. படிவம் சமர்ப்பிக்கப்பட்ட பிறகு Pop-up மற்றும் WhatsApp காட்டுதல்
function showSuccessMessage() {
    if (submitted) {
        // Pop-up-ஐக் காட்டுதல்
        document.getElementById('successModal').style.display = 'block';
        
        // வாடிக்கையாளர் விபரங்களை எடுத்தல்
        const name = document.querySelector('input[name="entry.1153646139"]').value;
        const phone = document.querySelector('input[name="entry.1852072444"]').value;
        const pickup = document.querySelector('input[name="entry.1606357890"]').value;
        const drop = document.querySelector('input[name="entry.1227612234"]').value;
        
        // வாட்ஸ்அப் மெசேஜ் தயார் செய்தல்
        const whatsappNumber = "46737351993"; // Business WhatsApp number
        const message = `*New Taxi Enquiry*%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Pickup:* ${pickup}%0A*Drop:* ${drop}`;
        
        // 2 வினாடிகளுக்குப் பிறகு வாட்ஸ்அப் திறக்கும்
        setTimeout(() => {
            window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
        }, 2000);

        // படிவத்தை ரீசெட் செய்தல்
        document.getElementById('googleForm').reset();
        submitted = false;
    }
}

// 3. Pop-up-ஐ மூடுதல்
function closeModal() {
    document.getElementById('successModal').style.display = 'none';
}

// 4. ஆரம்ப நிலை (இன்றைய தேதி/நேரம்)
window.addEventListener('load', () => {
    const dateEl = document.getElementById('visibleDate');
    const timeEl = document.getElementById('visibleTime');
    if (!dateEl || !timeEl) return;
    const now = new Date();
    dateEl.value = now.toISOString().split('T')[0];
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    timeEl.value = `${h}:${m}`;
    syncDateTime();
});