import React from "react";
import "../../index.css";

export const NavLink = ({ link, icon }) => {
  return (
    <li className="ml-4 hover:text-black hover:dark:text-white">
      <a href={link} target="_blank">
        {icon}
      </a>
    </li>
  );
};
