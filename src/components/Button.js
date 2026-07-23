import Image from "next/image";
import iconMoon from "../assets/icon-moon.svg";
import iconSun from "../assets/icon-sun.svg";

export default function Button({ theme, onClick }) {
  return (
    <button
      id="btn-theme"
      aria-label="Change to light or dark mode"
      onClick={onClick}
    >
      <Image
        src={theme === "light" ? iconMoon : iconSun}
        alt=""
        width={12}
        height={12}
      />
      {theme === "light" ? "Dark" : "Light"}
    </button>
  );
}
