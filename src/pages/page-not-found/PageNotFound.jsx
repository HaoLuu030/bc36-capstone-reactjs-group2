import React from "react";
import "./index.scss";

export default function PageNotFound() {
  return (
    <div className="not-found">
      <div className="container">
        <div className="content">
          <h1>
            <i className="fa fa-sad-tear"></i>
          </h1>
          <h2>404</h2>
          <p>Trang bạn đang tìm kiếm không tồn tại</p>
        </div>
      </div>
    </div>
  );
}
