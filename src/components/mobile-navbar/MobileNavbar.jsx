import React, { useEffect, useState } from "react";
import "./index.scss";
import MobileNavbarItem from "./components/mobile-navbar-item/MobileNavbarItem";

function MobileNavbar() {
  const [hide, setHide] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setHide(false);
      } else {
        setHide(true);
      }
      setLastScrollY(window.scrollY);
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);
  return (
    <nav
      className={`mobile-navbar d-flex justify-content-center align-items-center ${
        hide ? "hide" : "show"
      }`}
    >
      <MobileNavbarItem iconName="home" to="/home" text="Trang chủ" />
      <MobileNavbarItem iconName="user" to="" />
      <MobileNavbarItem iconName="ticket-alt" to="quick-booking" />
      <MobileNavbarItem iconName="newspaper" to="" />
    </nav>
  );
}

export default MobileNavbar;
