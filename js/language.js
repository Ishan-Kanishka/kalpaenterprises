// Language Switcher for Kalpa Enterprises
const translations = {
    en: {
        // Navigation
        navHome: "Home",
        navProducts: "Products",
        navRentals: "Rentals",
        navAbout: "About",
        navContact: "Contact",
        
        // Home Page
        homeTitle: "Your Trusted Hardware Partner",
        homeDescription: "We supply sand, metal, cement, tools, and rent construction equipment.",
        footerText: "© 2026 Kalpa Enterprises",
        
        // Products Page
        productsTitle: "Our Products",
        productSand: "Sand",
        productMetal: "Metal",
        productCement: "Cement",
        productDrillMachines: "Drill Machines",
        productScrewDrivers: "Screw Drivers",
        productNutsBolts: "Nuts & Bolts",
        
        // Rentals Page
        rentalsTitle: "Equipment Rentals",
        rentalPressureGuns: "Pressure Guns",
        rentalDrills: "Drills",
        rentalGrinders: "Grinders",
        rentalDescription: "We offer high-quality construction equipment rentals for your projects.",
        
        // About Page
        aboutTitle: "About Kalpa Enterprises",
        aboutContent: "Kalpa Enterprises is a trusted supplier of hardware and construction materials in Kolonnawa. We specialize in providing high-quality building materials including sand, metal, and cement, along with a wide range of construction tools. Our rental services include pressure guns, drills, and grinders to help you complete your construction projects efficiently.",
        
        // Contact Page
        contactTitle: "Contact Us",
        contactLocation: "Location",
        contactPhone: "Phone",
        contactAddress: "499/1/F Siriparakum Mawatha, Kolonnawa",
        contactPhoneNumber: "0112 157 603",
        contactMapLink: "View on Google Maps"
    },
    si: {
        // Navigation
        navHome: "මුල් පිටුව",
        navProducts: "නිෂ්පාදන",
        navRentals: "ගණුදෙනු",
        navAbout: "අප ගැන",
        navContact: "සම්බන්ධ වන්න",
        
        // Home Page
        homeTitle: "ඔබගේ විශ්වාසදායක දෘඩාංග හවුල්කරු",
        homeDescription: "අපි වැලි, ලෝහ, සිමෙන්ති, මෙවලම් සපයන්නෙමු සහ ඉදිකිරීම් උපකරණ ගණුදෙනු කරමු.",
        footerText: "© 2026 කල්ප එන්ටර්ප්රයිසස්",
        
        // Products Page
        productsTitle: "අපගේ නිෂ්පාදන",
        productSand: "වැලි",
        productMetal: "ලෝහ",
        productCement: "සිමෙන්ති",
        productDrillMachines: "කුණු යන්ත්‍ර",
        productScrewDrivers: "ප්‍රචක්‍ර රිය",
        productNutsBolts: "කටු සහ බෝල්ට්",
        
        // Rentals Page
        rentalsTitle: "උපකරණ ගණුදෙනු",
        rentalPressureGuns: "පීඩන තුවක්කු",
        rentalDrills: "කුණු යන්ත්‍ර",
        rentalGrinders: "පුවරු කපන",
        rentalDescription: "ඔබගේ ව්‍යාපෘති සඳහා අධි-ගුණාත්මක ඉදිකිරීම් උපකරණ ගණුදෙනු අපි පිරිනමන්නෙමු.",
        
        // About Page
        aboutTitle: "කල්ප එන්ටර්ප්රයිසස් ගැන",
        aboutContent: "කල්ප එන්ටර්ප්රයිසස් යනු කොළොන්නවේ විශ්වාසදායක දෘඩාංග සහ ඉදිකිරීම් ද්‍රව්‍ය සැපයුම්කරුවෙකි. වැලි, ලෝහ සහ සිමෙන්ති ඇතුළු අධි-ගුණාත්මක ඉදිකිරීම් ද්‍රව්‍ය සපයන අතරම ඉදිකිරීම් මෙවලම් පරාසයක් ද සපයනු ලැබේ. අපගේ ගණුදෙනු සේවාවන් අතර පීඩන තුවක්කු, කුණු යන්ත්‍ර සහ පුවරු කපන ඇතුළත් වන අතර ඔබගේ ඉදිකිරීම් ව්‍යාපෘති කාර්යක්ෂමව සම්පූර්ණ කිරීමට උපකාරී වේ.",
        
        // Contact Page
        contactTitle: "අප අමතන්න",
        contactLocation: "ස්ථානය",
        contactPhone: "දුරකථන",
        contactAddress: "499/1/F සිරිපාරකුම් මාවත, කොළොන්නව",
        contactPhoneNumber: "0112 157 603",
        contactMapLink: "ගූගල් සිතියමේ බලන්න"
    }
};

let currentLanguage = localStorage.getItem('language') || 'en';

function switchLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updatePageContent();
    updateLanguageButtons();
}

function updateLanguageButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.dataset.lang === currentLanguage) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function updatePageContent() {
    const t = translations[currentLanguage];
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (t[key] !== undefined) {
            element.textContent = t[key];
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    updateLanguageButtons();
    updatePageContent();
});
