import React from "react";
import { NavLink } from "react-router-dom";
import { cocktailCodes } from "shared/config/cocktailCodes";
import "./MenuList.scss";

export const MenuList = () => (
  <ul className="menu-list">
    {cocktailCodes.map((code) => (
      <li key={code}>
        <NavLink
          to={`/${code}`}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {code.charAt(0).toUpperCase() + code.slice(1)}
        </NavLink>
      </li>
    ))}
  </ul>
);
