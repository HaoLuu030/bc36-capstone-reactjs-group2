import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import LoginAdmin from "../pages/login-admin/LoginAdmin";
import { userType } from "../enums";

/protect admin routes from unauthenticated people/;
export default function AuthGuard() {
  const userState = useSelector((state) => state.userReducer);
  if (
    userState.userInfo &&
    userState.userInfo.maLoaiNguoiDung === userType.QuanTri
  ) {
    return <Outlet />;
  }
  return <LoginAdmin />;
}
