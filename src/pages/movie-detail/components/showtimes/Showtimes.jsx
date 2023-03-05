import React from "react";
import ScheduledTimeList from "./components/scheduledTimeList/ScheduledTimeList";
import TheaterBrandList from "./components/theaterBrandList/TheaterBrandList";
import TheaterList from "./components/theaterList/TheaterList";
import "./index.scss";

export default function Showtimes() {
  return (
    <>
      <h3>Lịch Chiếu: </h3>

      <div className="show-time w-100">
        <div className="container">
          <div className="schedule-title"></div>
          <div className="row">
            <TheaterBrandList />
            <TheaterList />
            <ScheduledTimeList />
          </div>
        </div>
      </div>
    </>
  );
}
