import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { notification } from "antd";

export default function Guard() {
  const userState = useSelector((state) => state.userReducer);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userState.userInfo) {
      notification.error({
        message: "Vui lòng đăng nhập để đặt vé",
      });
      navigate("/");
      return;
    }
  }, []);

  return <Outlet />;
}
