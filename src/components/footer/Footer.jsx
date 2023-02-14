import React from "react";
import "./index.scss";

export default function Footer() {
  return (
    <footer className="pt-3">
      <div className="container">
        <div className="row">
          <div className="footer-item col-4 col-md-3">
            <h4>Giới thiệu</h4>
            <ul>
              <li>
                <a href="#">Về chúng tôi</a>
              </li>
              <li>
                <a href="#">Chính sách bảo mật</a>
              </li>
              <li>
                <a href="#">Điều khoản sử dụng</a>
              </li>
            </ul>
          </div>
          <div className="footer-item col-4 col-md-3">
            {" "}
            <h4>Góc điện ảnh</h4>
            <ul>
              <li>
                <a href="#">Thể loại phim</a>
              </li>
              <li>
                <a href="#">Diễn viên</a>
              </li>
              <li>
                <a href="#">Bình luận phim</a>
              </li>
            </ul>
          </div>
          <div className="footer-item col-4 col-md-3">
            {" "}
            <h4>Hỗ trợ</h4>
            <ul>
              <li>
                <a href="#">Góp ý</a>
              </li>
              <li>
                <a href="#">Rạp/giá vé</a>
              </li>
              <li>
                <a href="#">Tuyển dụng</a>
              </li>
            </ul>
          </div>
          <div className="footer-item col-12 col-md-3 text-center text-md-left">
            <h4>Kết nối với chúng tôi</h4>
            <ul className="row justify-content-center justify-content-md-between p-0 my-2">
              <li className="col-2">
                <a href="#">
                  <i className="fab fa-facebook-square"></i>
                </a>
              </li>
              <li className="col-2">
                <a href="#">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
              <li className="col-2">
                <a href="#">
                  {" "}
                  <i className="fa-brands fa-tiktok"></i>
                </a>
              </li>
              <li className="col-2">
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
            <address>
              459 Đ. Sư Vạn Hạnh, Phường 12, Quận 10, Thành phố Hồ Chí Minh
            </address>
          </div>
        </div>
        <div className="copy-right text-center mt-4">
          <p>
            <i className="fa-regular fa-copyright"></i> 2022-2023 | Ticket Play
            all rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
