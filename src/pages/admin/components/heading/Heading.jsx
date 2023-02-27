import React from "react";
import { useSelector } from "react-redux";
import "./index.scss";

export default function Heading() {
  const userState = useSelector((state) => state.userReducer);
  const userNameFirstInitals = userState.userInfo.hoTen
    .split(" ")
    .map((element) => {
      return element[0];
    });
  return (
    <div className="admin-info-heading">
      <div className="row">
        <div className="col-4">
          <div className="admin-avatar">
            <p>{userNameFirstInitals[userNameFirstInitals.length - 1]}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
