import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import withViewPort from "../../HOCs/withViewPort";
import { MOBILE } from "../../constants";
import MobileNavbar from "../../components/mobile-navbar/MobileNavbar";

function HomeLayOut({ viewPort }) {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
      {viewPort === MOBILE ? <MobileNavbar /> : null}
    </React.Fragment>
  );
}

export default withViewPort(HomeLayOut);
