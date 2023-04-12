import React from "react";
import { NavLink } from "react-router-dom";

function MobileNavbarItem(props) {
  return (
    <NavLink className="mobile-nav-item" to={props.to}>
      <i class={`fa fa-${props.iconName}`}></i>
      
    </NavLink>
  );
}

export default MobileNavbarItem;
