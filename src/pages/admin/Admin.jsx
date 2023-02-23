import { Form, Input } from "antd";
import React from "react";
import AdminInfoForm from "./components/adminInfoForm/AdminInfoForm";
import "./index.scss";

export default function Admin() {
  return (
    <div className="container">
      <div className="admin-info-heading">
        <div className="row">
          <div className="col-4">
            <div className="admin-avatar">
              <i className="fa fa-user"></i>
              <span>Quản trị viên</span>
            </div>
          </div>
          <div className="col-4">
            <div className="welcome-text">
              <h4>Xin Chào Bạn Yêu</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="admin-info-title">
        <h4>Thông tin Tài khoản</h4>
      </div>
      <div className="admin-info-form">
        <div className="admin-info-form-wrapper">
          <AdminInfoForm />
        </div>
      </div>
    </div>
  );
}
