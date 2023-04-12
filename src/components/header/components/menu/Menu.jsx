import React from "react";
import { NavLink } from "react-router-dom";
function Menu() {
  return (
    <div
      className="collapse navbar-collapse justify-content-start mt-3"
      id="collapsibleNavId"
    >
      <ul className="navbar-nav nav-items">
        <li className="nav-item">
          <NavLink className="nav-link" to="/home">
            Trang chủ
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/quick-booking">
            Mua vé nhanh
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/now-playing">
            Phim đang chiếu
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/coming-soon">
            Phim sắp chiếu
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
