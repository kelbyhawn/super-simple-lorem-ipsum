import { useState } from "react";
import Image from "next/image";
import iconMoon from "../assets/icon-moon.svg";
import iconSun from "../assets/icon-sun.svg";

export default function Button() {
  const [isLightTheme, setIsLightTheme] = useState(true);

  const handleClick = () => setIsLightTheme(!isLightTheme);

  return (
    <button
      id="btn-theme"
      aria-label="Change to light or dark theme"
      onClick={handleClick}
    >
      <Image
        src={isLightTheme ? iconMoon : iconSun}
        alt={isLightTheme ? "Moon icon" : "Sun icon"}
        width={12}
        height={12}
      />
      {isLightTheme ? "Dark" : "Light"}
    </button>
  );
}
