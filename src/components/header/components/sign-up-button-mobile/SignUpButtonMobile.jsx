import React from "react";
import "./index.scss";
import { useSelector } from "react-redux";

export default function SignUpButtonMobile() {
  // bring up login module when clicked
  const handleOpenLoginModule = () => {
    document.querySelector(".background-login-module").classList.add("active");
  };
  const userState = useSelector((state) => state.userReducer);
  console.log(userState.userInfo.hoTen);
  if (userState?.userInfo) {
    return <div>Xin chào, {userState.userInfo.hoTen}</div>;
  }
  return <button onClick={handleOpenLoginModule}>Đăng ký | Đăng nhập</button>;
}
