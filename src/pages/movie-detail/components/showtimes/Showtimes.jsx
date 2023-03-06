import React from "react";
import DatePickerCustom from "./components/datePickerCusTom/DatePickerCustom";
import TheaterBrandList from "./components/theaterBrandList/TheaterBrandList";
import TheaterList from "./components/theaterList/TheaterList";
import "./index.scss";

export default function Showtimes() {
  return (
    <div className="show-time">
      <div className="container">
        <div className="show-time-heading d-flex justify-content-between">
          <div className="schedule-title">
            <h3>Lịch Chiếu: </h3>
          </div>
          <DatePickerCustom />
        </div>
        <div className="show-time-body w-100 mt-2">
          <div className="row w-100 m-0">
            <TheaterBrandList />
            <TheaterList />
          </div>
        </div>
      </div>
    </div>
  );
}
