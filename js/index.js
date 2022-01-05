// Add copyright year ----------------
document.querySelector('#year').textContent = new Date().getFullYear();


// Toggle dark and light modes ----------------
const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
const button = document.querySelector("button");

// Change mode on click
button.addEventListener("click", () => { 
  if (prefersDarkTheme.matches) {
    document.documentElement.classList.toggle("light");
  } else {
    document.documentElement.classList.toggle("dark");
  }
})