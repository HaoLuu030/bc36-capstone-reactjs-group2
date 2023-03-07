import React from "react";
import "./index.scss";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import WelcomeUser from "../welcomeUser/WelcomeUser";

export default function Header() {
  const userState = useSelector((state) => state.userReducer);
  //switch between collapse icons in smaller screen
  const handleToggleCollapseIcon = () => {
    document.querySelector(".navbar-toggler").classList.toggle("opening");
  };
  // bring up login module when clicked
  const handleOpenLoginModule = () => {
    document.querySelector(".background-login-module").classList.add("active");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-movie px-0 align-items-lg-center">
      <NavLink className="navbar-brand" to={"/home"}>
        <img src="/logo_white.png" alt="logo" style={{ width: "250px" }} />
      </NavLink>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={handleToggleCollapseIcon}
      >
        <i className="fa fa-bars"></i>
        <i className="fa fa-times"></i>
      </button>

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
          <li className="nav-item">
            <a className="nav-link" href="#">
              Rạp
            </a>
          </li>
        </ul>
      </div>
      <div className="d-flex align-items-center justify-content-md-start sign-in-module">
        {" "}
        {userState.userInfo ? (
          <WelcomeUser />
        ) : (
          <>
            {" "}
            <button onClick={handleOpenLoginModule} className="sign-in pt-1">
              <i className="fa fa-user user-icon"></i> Đăng nhập | Đăng ký
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
