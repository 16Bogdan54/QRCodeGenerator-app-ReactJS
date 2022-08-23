import useDarkMode from "../../hooks/useDarkMode";
import { FaMoon, FaSun } from "react-icons/fa";
import "../../index.css";

export const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <span
      className="cursor-pointer hover:text-yellow-400 ease-in duration-300"
      onClick={handleMode}
    >
      {darkTheme ? (
        <FaSun size="24" className="top-navigation-icon " />
      ) : (
        <FaMoon size="24" className="top-navigation-icon" />
      )}
    </span>
  );
};
