import React from "react";
import "./index.scss";
import Logo from "./components/logo/Logo";

import Navbar from "./components/navbar/Navbar";
import useViewPort from "../../hooks/useViewPort";
import { MOBILE } from "../../constants";
import { divide } from "lodash";
export default function Header() {
  const viewPort = useViewPort();
  return (
    <React.Fragment>
      {viewPort === MOBILE ? (
        <header className="navbar-movie d-flex justify-content-center">
          <Logo />
        </header>
      ) : (
        <div></div>
      )}
    </React.Fragment>
  );
}
