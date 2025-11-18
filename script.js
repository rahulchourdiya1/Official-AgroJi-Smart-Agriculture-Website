function setLanguage(lang) {
    const en = {
        heading: "AgroFly - Smart Drone Spraying",
        about: "AgroFly is a modern agricultural startup...",
        services: "Our Drone Spraying Services",
        benefits: "Why Choose AgroFly?",
        contact: "Contact Us"
    };

    const hi = {
        heading: "एग्रोफ्लाय - स्मार्ट ड्रोन छिड़काव",
        about: "एग्रोफ्लाय एक आधुनिक कृषि स्टार्टअप है...",
        services: "हमारी ड्रोन छिड़काव सेवाएं",
        benefits: "एग्रोफ्लाय क्यों चुनें?",
        contact: "संपर्क करें"
    };

    const data = lang === 'hi' ? hi : en;

    document.querySelector("h1").innerText = data.heading;
    document.querySelector("#about h2").innerText = data.about;
    document.querySelector("#services h2").innerText = data.services;
    document.querySelector("#benefits h2").innerText = data.benefits;
    document.querySelector("#contact h2").innerText = data.contact;
}

function toggleLang() {
    const lang = document.documentElement.lang;
    document.documentElement.lang = (lang === "en") ? "hi" : "en";
    alert("Language toggled!");
}
