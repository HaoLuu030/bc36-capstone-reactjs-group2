import React from "react";
import "./index.scss";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import WelcomeUser from "../welcomeUser/WelcomeUser";
import Logo from "./components/logo/Logo";
import ToggleButton from "./components/toggle-button/ToggleButton";
import Navbar from "./components/navbar/Navbar";

export default function Header() {
  const userState = useSelector((state) => state.userReducer);

  // bring up login module when clicked
  const handleOpenLoginModule = () => {
    document.querySelector(".background-login-module").classList.add("active");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-movie px-0 align-items-lg-center">
      <Logo />
      <ToggleButton />
      <Navbar />

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
