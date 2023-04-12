import React from "react";
import "./index.scss";
import Logo from "./components/logo/Logo";
import Menu from "./components/menu/Menu";
import useViewPort from "../../hooks/useViewPort";
import { DESKTOP, TABLET } from "../../constants";
import ToggleButton from "./components/toggle-button/ToggleButton";
import withViewPort from "../../HOCs/withViewPort";

function Header({ viewPort }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-movie d-flex justify-content-center">
      <Logo />
      {viewPort === TABLET || viewPort === DESKTOP ? (
        <React.Fragment>
          <ToggleButton />
          <Menu />
        </React.Fragment>
      ) : null}
    </nav>
  );
}

export default withViewPort(Header);
