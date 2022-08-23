import { NavLink } from "./NavLink";
import { ThemeIcon } from "../theme-icon/ThemeIcon";
import { FaGithub, FaTwitter } from "react-icons/fa";
import "../../index.css";

export const Navbar = () => {
  return (
    <div className="container-lg bg-gray-200 dark:bg-[#141616]">
      <nav className="flex justify-between items-center p-4">
        <h1 className="font-bold text-3xl dark:text-white">LunaQR</h1>
        <ul className="flex text-zinc-500 dark:text-gray-300">
          <li className="ml-4">
            <ThemeIcon />
          </li>
          <NavLink
            link="https://github.com/16Bogdan54"
            icon={<FaGithub size="24" />}
          />
          <NavLink
            link="https://twitter.com/BohdanYunakoff"
            icon={<FaTwitter size="24" />}
          />
        </ul>
      </nav>
    </div>
  );
};
