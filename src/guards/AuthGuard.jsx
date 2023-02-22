import { notification } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

export default function AuthGuard() {
  const userState = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  useEffect(() => {
    if (!userState.userInfo) {
      notification.warning({
        message: "Vui lòng đăng nhập để vào trang",
      });
      navigate("/");
    } else if (userState.userInfo.maLoaiNguoiDung !== "QuanTri") {
      notification.warning({
        message: "Không đủ thẩm quyền truy cập",
      });
      navigate("/");
    }
  }, []);
  return <Outlet />;
}
