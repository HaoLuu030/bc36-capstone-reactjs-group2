import { notification } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserInfoAction } from "../../store/action/userAction";

export default function WelcomeUser() {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.userReducer);
  const handleLogout = () => {
    localStorage.removeItem("USER_INFO_KEY");
    dispatch(deleteUserInfoAction());
    notification.success({
      message: "Đã đăng xuất.",
    });
  };
  return (
    <>
      <span className="d-flex align-items-center welcome-user">
        <i className="fa fa-user user-icon pr-1"></i> Xin chào,{" "}
        {userState.userInfo.hoTen} |
      </span>
      <button onClick={handleLogout} className="sign-out">
        Đăng xuất
      </button>
    </>
  );
}
