const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// //Light-Dark Toggle
// const themeStylesheet = document.getElementById("themeStylesheet");
// const themeToggle = document.getElementById("themeToggle");
// themeToggle.addEventListener("click", function () {
//   if (themeStylesheet.getAttribute("href") === "style.css") {
//       themeStylesheet.setAttribute("href", "style_dark.css");
//       themeToggle.textContent = "☼ Light mode";
//   } else {
//       themeStylesheet.setAttribute("href", "style.css");
//       themeToggle.textContent = "☽ Dark mode";
//   }
// });

// Light-Dark Toggle
const themeStylesheet = document.getElementById("themeStylesheet");
const themeToggle = document.getElementById("themeToggle");

// Select logo and service icons
const logo = document.querySelector(".logo img");

const serviceIcons = document.querySelectorAll(
  ".iconsContainer .fade-item img"
);

themeToggle.addEventListener("click", function () {

  if (themeStylesheet.getAttribute("href") === "style.css") {

    // Switch to dark theme
    themeStylesheet.setAttribute("href", "style_dark.css");
    themeToggle.textContent = "☼ Light mode";

    // Change logo to white version
    logo.src = "images/ddLogo_White.png";

    // Change service icons to white versions
    serviceIcons[0].src = "images/icons/evac_White.png";
    serviceIcons[1].src = "images/icons/pid_White.png";
    serviceIcons[2].src = "images/icons/trainings_White.png";

  } else {

    // Switch to light theme
    themeStylesheet.setAttribute("href", "style.css");
    themeToggle.textContent = "☽ Dark mode";

    // Restore original logo
    logo.src = "images/ddLogo.png";

    // Restore original service icons
    serviceIcons[0].src = "images/icons/evac.png";
    serviceIcons[1].src = "images/icons/pid.png";
    serviceIcons[2].src = "images/icons/trainings.png";
  }
});
