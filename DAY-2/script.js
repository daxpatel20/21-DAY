
var btn = document.getElementById("themeBtn");
var background = document.body;

function enableDarkMode() {
  background.classList.add("dark");
  btn.textContent = " Light Mode";
  localStorage.setItem("theme", "dark");
}


function enableLightMode() {
  background.classList.remove("dark");
  btn.textContent = " Dark Mode";
  localStorage.setItem("theme", "light");
}


function loadTheme() {
  var savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    enableDarkMode();
  } else {
    enableLightMode();
  }
}

function toggleTheme() {
  if (background.classList.contains("dark")) {
    enableLightMode();
  } else {
    enableDarkMode();
  }
}
loadTheme();

btn.addEventListener("click", toggleTheme);