import React from "react";
import DatePickerCustom from "./components/datePickerCusTom/DatePickerCustom";
import TheaterBrandList from "./components/theaterBrandList/TheaterBrandList";
import TheaterList from "./components/theaterList/TheaterList";
import "./index.scss";

export default function Showtimes() {
  return (
    <div className="col-12 col-lg-10">
      <div className="show-time">
        <div className="container">
          <div className="show-time-heading d-flex justify-content-between">
            <div className="schedule-title">
              <p className="m-0">Đặt vé: </p>
            </div>
            <DatePickerCustom />
          </div>
          <div className="show-time-body w-100 mt-2 py-2">
            <div className="row w-100 m-0">
              <TheaterBrandList />
              <TheaterList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
