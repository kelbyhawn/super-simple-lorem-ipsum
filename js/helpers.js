// Toggle dark mode
export const toggleDarkMode = () => {

  // DOM elements
  const button = document.querySelector('button');
  const body = document.querySelector('body');
  const footer = document.querySelector('footer');
  const a = document.querySelector('footer a');

  // Adds .dark to elements
  const addDarkClass = element => {
    element.classList.toggle('dark');
  }

  // Change modes on click
  button.addEventListener('click', () => {    
    addDarkClass(body);
    addDarkClass(footer);
    addDarkClass(a);
    addDarkClass(button);

    // Change text on button
    if(body.classList.contains('dark')){
      button.textContent = 'Light';
    } else {
      button.textContent = 'Dark';
    }
  })
}