import React from "react";
import { NavLink } from "react-router-dom";
import { formatTimeDateTim } from "../../../../utils";
import "./index.scss";

export default function TheaterListItem(props) {
  const renderPlayTime = () => {
    return props.theater.lichChieuPhim.map((elem) => {
      return (
        <NavLink to={`/booking/${elem.maLichChieu}`} className="play-time-item">
          {formatTimeDateTim(elem.ngayChieuGioChieu)}
        </NavLink>
      );
    });
  };
  return (
    <div
      style={{ width: "100%" }}
      className="theater-item py-2"
      key={props.theater.maCumRap}
    >
      <div className="row">
        <div className="col-4">
          <div className="img-container">
            <img src={props.theater.hinhAnh} alt={props.theater.tenCumRap} />
          </div>
        </div>
        <div className="col-8">
          <div className="row align-items-center">
            <div className="col-12">
              <p className="theater-name">{props.theater.tenCumRap}</p>
            </div>
            <div className="col-12 d-flex flex-wrap">{renderPlayTime()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
