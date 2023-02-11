import React from "react";
import "./index.scss";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-sm navbar-movie">
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
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="collapse navbar-collapse justify-content-between mt-3"
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
        </ul>
        <div className="d-flex align-items-center">
          <i className="fa fa-user user-icon"></i>
          <button className="sign-in mr-3">Đăng nhập | Đăng ký</button>
        </div>
      </div>
    </nav>
  );
}
