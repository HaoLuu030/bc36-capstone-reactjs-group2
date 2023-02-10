import React from "react";
import "./index.scss";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="footer-item col-3">
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
          <div className="footer-item col-3">
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
          <div className="footer-item col-3">
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
          <div className="footer-item col-3">
            <h4>Kết nối với chúng tôi</h4>
            <ul className="row p-0">
              <li className="col-2">
                <a href="#">
                  <i class="fab fa-facebook-square"></i>
                </a>
              </li>
              <li className="col-2">
                <a href="#">
                  <i class="fab fa-youtube"></i>
                </a>
              </li>
              <li className="col-2">
                <a href="#">
                  {" "}
                  <i class="fa-brands fa-tiktok"></i>
                </a>
              </li>
              <li className="col-2">
                <a href="#">
                  <i class="fab fa-instagram"></i>
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
            <i class="fa-regular fa-copyright"></i> 2022-2023 | Ticket Play all
            rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
