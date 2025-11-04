"use client";

import SunIcon from "@/components/icons/SunIcon";
import MoonIcon from "@/components/icons/MoonIcon";
import { useState, useEffect } from "react";

const initialThemeState = (): "light" | "dark" => {
  if (typeof window !== "undefined") {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") return "dark";
    if (storedTheme === "light") return "light";
  }
  return "light"; // valor por defecto si no hay acceso a window
};


export default function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark">(initialThemeState);

  // Sincroniza el estado con la clase en <html>
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

const toggleTheme = () => {
  const newTheme = theme === "light" ? "dark" : "light";
  setTheme(newTheme);
  localStorage.setItem("theme", newTheme);
};

  return (
    <header className="flex items-center gap-2 mb-10">
      <h1 className="text-4xl font-bold dark:text-white text-blue-950 grow">
        devfinder
      </h1>
      <span className="uppercase dark:text-white text-blue-950">
        {theme}
      </span>
      <button onClick={toggleTheme}>
        {theme === "light" ? (
          <MoonIcon className="fill-blue-950 dark:fill-white" width={25} />
        ) : (
          <SunIcon className="fill-blue-950 dark:fill-white" width={25} />
        )}
      </button>
    </header>
  );
}




// import SunIcon from "@/components/icons/SunIcon";
// import MoonIcon from "@/components/icons/MoonIcon";
// import { useState } from "react";

// export default function Navbar() {
//   const [theme, setTheme] = useState<"light" | "dark">("light");

//   const handleTheme = () => {
//     console.log('he presionado el botón')
//     if (theme === "light") {
//       setTheme("dark");
//       document.documentElement.classList.add("dark");
//     } else {
//       setTheme("light");
//       document.documentElement.classList.remove("dark");
//     }
//   };

//   return (
//     <header className="flex items-center gap-2 mb-10">
//       <h1 className="text-4xl  font-bold dark:text-white text-blue-950 grow">
//         devfinder
//       </h1>
//       <span className="uppercase dark:text-white text-blue-950 ">{theme}</span>
//       <button onClick={handleTheme}>
//         <SunIcon
//           className="dark:fill-white fill-blue-950"
//           width={25}
//         />
//       </button>
//     </header>
//   );
// }
