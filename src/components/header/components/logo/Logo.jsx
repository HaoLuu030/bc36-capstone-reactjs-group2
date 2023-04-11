import React from "react";
import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <NavLink className="navbar-brand" to={"/home"}>
      <img src="/logo_white.png" alt="logo" style={{ width: "250px" }} />
    </NavLink>
  );
}

export default Logo;
