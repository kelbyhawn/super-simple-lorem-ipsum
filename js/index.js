// Add copyright year ----------------
document.querySelector('#year').textContent = new Date().getFullYear();


// Toggle dark or light theme ----------------
const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
const button = document.querySelector("#btn-theme");

// Change theme on click
button.addEventListener("click", () => { 
  if (prefersDarkTheme.matches) {
    document.documentElement.classList.toggle("light");
  } else {
    document.documentElement.classList.toggle("dark");
  }
})