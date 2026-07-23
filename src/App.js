// Dependencies
import { useEffect } from "react";

// Components
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/Button";

function App() {
  useEffect(() => {
    // Toggle dark or light theme
    const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
    const button = document.querySelector("#btn-theme");

    // Change theme on click
    const handleClick = () => {
      if (prefersDarkTheme.matches) {
        document.documentElement.classList.toggle("light");
      } else {
        document.documentElement.classList.toggle("dark");
      }
    };

    button.addEventListener("click", handleClick);

    return () => {
      button.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <Main />
      <Footer />
      <Button />
    </>
  );
}

export default App;
