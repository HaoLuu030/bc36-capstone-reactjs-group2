import React from "react";
import { NavLink } from "react-router-dom";
import moment from "moment";
import "./index.scss";

export default function ScheduledTime(props) {
  return (
    <NavLink
      to={`/booking/${props.scheduledTime.maLichChieu}`}
      className="show-time-item mx-1 p-0 p-md-1"
    >
      {moment(props.scheduledTime.ngayChieuGioChieu).format("LT")}
      <span className="date">
        {moment(props.scheduledTime.ngayChieuGioChieu).format("L")}
      </span>
    </NavLink>
  );
}
