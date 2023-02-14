import React from "react";
import "./index.scss";

export default function Header() {
  const handleToggleCollapseIcon = () => {
    document.querySelector(".navbar-toggler").classList.toggle("opening");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-movie px-0 align-items-lg-center">
      <a className="navbar-brand" href="#">
        <img src="/logo_white.png" alt="logo" style={{ width: "250px" }} />
      </a>
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
        className="collapse navbar-collapse justify-content-center mt-3"
        id="collapsibleNavId"
      >
        <ul className="navbar-nav nav-items">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Trang chủ
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Mua vé
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Phim đang chiếu
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Phim sắp chiếu
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Rạp
            </a>
          </li>
        </ul>
      </div>
      <div className="d-flex align-items-center justify-content-md-start sign-in-module">
        <i className="fa fa-user user-icon"></i>
        <button className="sign-in pt-1">Đăng nhập | Đăng ký</button>
      </div>
    </nav>
  );
}
