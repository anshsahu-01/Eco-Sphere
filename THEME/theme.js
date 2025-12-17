// Apply saved theme as early as possible
(function () {
  const storedTheme = localStorage.getItem("theme") || "light";
  document.body.classList.add(storedTheme);
})();

document.addEventListener("DOMContentLoaded", () => {
  updateThemeIcons();
});

// Toggle Theme Function
function toggleTheme() {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    localStorage.setItem("theme", "light");
  } else {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
  updateThemeIcons();
}

// Update SVG Icons
function updateThemeIcons() {
  const isDark = document.body.classList.contains("dark");
  const sunIcon = document.querySelector(".theme-toggle .sun");
  const moonIcon = document.querySelector(".theme-toggle .moon");

  if (sunIcon && moonIcon) {
    sunIcon.style.display = isDark ? "none" : "block";
    moonIcon.style.display = isDark ? "block" : "none";
  }
}
