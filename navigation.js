
// ==========================================
// RESPONSIVE NAVIGATION / HAMBURGER MENU
// ==========================================

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

} else {
    if (!hamburger) {
        console.warn("Hamburger menu element (.hamburger) not found on this page.");
    }

    if (!navLinks) {
        console.warn("Navigation links element (.nav-links) not found on this page.");
    }
}


// ==========================================
// LIGHT-DARK THEME TOGGLE
// ==========================================

const themeStylesheet = document.getElementById("themeStylesheet");
const themeToggle = document.getElementById("themeToggle");

// Select logo and service icons
const logo = document.querySelector(".logo img");

const serviceIcons = document.querySelectorAll(
    ".iconsContainer .fade-item img"
);
//select large logos evac, pid, train
const largelogo = document.querySelector(".largelogospace img");
const largelogo_pid = document.querySelector(".largelogospace_pid img");
const largelogo_train = document.querySelector(".largelogospace_train img");
const servicesCard_evac = document.querySelector(".servicesIcon_evacuation img");
const servicesCard_pid = document.querySelector(".servicesIcon_pid img");
const servicesCard_train = document.querySelector(".servicesIcon_train img");

// Check theme toggle elements
if (themeToggle && themeStylesheet) {

    themeToggle.addEventListener("click", function () {

        if (themeStylesheet.getAttribute("href") === "style.css") {

            // Switch to dark theme
            themeStylesheet.setAttribute("href", "style_dark.css");
            themeToggle.textContent = "☼ Light mode";

            // Change logo to white version
            if (logo) {
                logo.src = "images/ddLogo_White.png";
            }
            // change largelogo _evac to white version
            if (largelogo) {
                largelogo.src = "images/icons/evac_White.png";
            }
            // change largelogo _pid to white version
            if (largelogo_pid) {
                largelogo_pid.src = "images/icons/pid_White.png";
            }
            // change largelogo _trainings to white version
            if (largelogo_train) {
                largelogo_train.src = "images/icons/trainings_White.png";
            }
            //CHANGE SERVICES EVAC ICON
            if (servicesCard_evac){
                servicesCard_evac.src = "images/icons/evac_White.png";
            }
             //CHANGE SERVICES P&ID ICON
             if (servicesCard_pid){
                servicesCard_pid.src = "images/icons/pid_White.png";
            }
            //CHANGE SERVICES TRAININGS ICON
            if(servicesCard_train){
                servicesCard_train.src = "images/icons/trainings_White.png";
            }
            // Change service icons to white versions
            if (serviceIcons.length > 0) {
                if (serviceIcons[0]) {
                    serviceIcons[0].src = "images/icons/evac_White.png";
                }
                if (serviceIcons[1]) {
                    serviceIcons[1].src = "images/icons/pid_White.png";
                }
                if (serviceIcons[2]) {
                    serviceIcons[2].src = "images/icons/trainings_White.png";
                }
            }

        } else {

            // Switch to light theme
            themeStylesheet.setAttribute("href", "style.css");
            themeToggle.textContent = "☽ Dark mode";

            // Restore original logo
            if (logo) {
                logo.src = "images/ddLogo.png";
            }
     // restore to original
     if (largelogo) {
        largelogo.src = "images/icons/evac.png";
    }
       // restore largelogo _pid to white version
       if (largelogo_pid) {
        largelogo_pid.src = "images/icons/pid.png";
    }
      // restore largelogo _trainings to white version
      if (largelogo_train) {
        largelogo_train.src = "images/icons/trainings.png";
    }
      //Restore SERVICES EVAC ICON
      if (servicesCard_evac){
        servicesCard_evac.src = "images/icons/evac.png";
    }
    //Restore Services P&ID ICON
    if (servicesCard_pid){
        servicesCard_pid.src = "images/icons/pid.png";
    }
      //restore SERVICES TRAININGS ICON
      if(servicesCard_train){
        servicesCard_train.src = "images/icons/trainings.png";
    }
            // Restore original service icons
            if (serviceIcons.length > 0) {
                if (serviceIcons[0]) {
                    serviceIcons[0].src = "images/icons/evac.png";
                }
                if (serviceIcons[1]) {
                    serviceIcons[1].src = "images/icons/pid.png";
                }
                if (serviceIcons[2]) {
                    serviceIcons[2].src = "images/icons/trainings.png";
                }
            }
        }
    });

} else {

    if (!themeToggle) {
        console.warn("Theme toggle element (#themeToggle) not found on this page.");
    }

    if (!themeStylesheet) {
        console.warn("Theme stylesheet element (#themeStylesheet) not found on this page.");
    }
}


// ==========================================
// OPTIONAL ELEMENT WARNINGS
// ==========================================

// Logo
if (!logo) {
    console.warn("Logo image (.logo img) not found on this page.");
}
// largelogo
if (!largelogo) {
    console.warn("Large Logo image (.logo img) not found on this page.");
}
if (!largelogo_pid) {
    console.warn("Large Logo P&ID image (.logo img) not found on this page.");
}
if (!largelogo_train) {
    console.warn("Large Logo Trainings image (.logo img) not found on this page.");
}
// General SERVICE PAGE ICONS
if (!servicesCard_evac){
    console.warn("No Service Page Evacuation Icon");
}
if (!servicesCard_pid){
    console.warn("No Service Page P&ID Icon");
}
if (!servicesCard_train){
    console.warn("No Service Page Trainings Icon");
}
// Service icons
if (serviceIcons.length === 0) {
    console.warn("Service icons (.iconsContainer .fade-item img) not found on this page.");
} else if (serviceIcons.length < 3) {
    console.warn("Some service icons are missing. Expected 3, found " + serviceIcons.length + ".");
}
