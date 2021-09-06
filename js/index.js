// Add copyright year
document.querySelector('#year').textContent = new Date().getFullYear();


// Toggle dark and light modes
const button = document.querySelector('button');
const body = document.querySelector('body');
const footer = document.querySelector('footer');
const a = document.querySelector('footer a');

// Adds .dark class to elements
const addDarkClass = elements => {
  elements.forEach(element => {
    element.classList.toggle('dark');
  })
}

// Change modes on click
button.addEventListener('click', () => {    
  addDarkClass([body,footer,a,button]);

  // Change text on button
  if(body.classList.contains('dark')){
    button.textContent = 'Light';
  } else {
    button.textContent = 'Dark';
  }
})