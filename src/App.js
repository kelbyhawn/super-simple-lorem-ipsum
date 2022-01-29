// Dependencies
import { useEffect } from "react";

// Components
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/Button";

// Assets
import "./App.sass";

function App() {

  useEffect(() => {
    // Toggle dark or light theme 
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
  })

  return (
    <>
    <Main />        
    <Footer />
    <Button />
    </>
  );
}

export default App;
