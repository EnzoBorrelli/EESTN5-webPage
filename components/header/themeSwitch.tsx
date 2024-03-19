'use client'
import { useTheme } from "next-themes";
import { FaSun,FaMoon } from "react-icons/fa6";

export default function ThemeBtn() {
  const { theme, setTheme } = useTheme();

  return (
    <button className='transition-none text-tone-300 hover:text-accent-2' onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? <FaSun size={24}/> : <FaMoon size={24}/>}
    </button>
  );
}