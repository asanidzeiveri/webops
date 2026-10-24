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