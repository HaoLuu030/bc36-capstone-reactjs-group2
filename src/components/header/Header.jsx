import React from "react";
import "./index.scss";
import Logo from "./components/logo/Logo";
import ToggleButton from "./components/toggle-button/ToggleButton";
import Navbar from "./components/navbar/Navbar";
export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-movie px-0 align-items-lg-center">
      <Logo />
      <ToggleButton />
      <Navbar />
    </nav>
  );
}
