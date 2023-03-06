import React from "react";
import { NavLink } from "react-router-dom";
import moment from "moment";
import "./index.scss";

export default function ScheduledTime(props) {
  return (
    <NavLink className="show-time-item mx-1 p-1 p-md-2">
      {moment(props.scheduledTime.ngayChieuGioChieu).format("LT")}
    </NavLink>
  );
}
