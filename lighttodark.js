const themeStylesheet = document.getElementById("themeStylesheet");
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", function () {
  if (themeStylesheet.getAttribute("href") === "tester.css") {
      themeStylesheet.setAttribute("href", "tester_dark.css");
      themeToggle.textContent = "☼ Light mode";
  } else {
      themeStylesheet.setAttribute("href", "tester.css");
      themeToggle.textContent = "☽ Dark mode";
  }
});





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

// Service icons
if (serviceIcons.length === 0) {
    console.warn("Service icons (.iconsContainer .fade-item img) not found on this page.");
} else if (serviceIcons.length < 3) {
    console.warn("Some service icons are missing. Expected 3, found " + serviceIcons.length + ".");
}
