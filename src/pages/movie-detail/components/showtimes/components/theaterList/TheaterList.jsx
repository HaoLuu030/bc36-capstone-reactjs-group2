import moment from "moment";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ScheduledTime from "../scheduledTime/ScheduledTime";
import "./index.scss";

export default function TheaterList() {
  //check if a theater has a certain date

  const movieState = useSelector((state) => state.movieReducer);
  const checkValidDate = (theater) => {
    const scheduledTimes = theater.lichChieuPhim.map((elem) => {
      return moment(elem.ngayChieuGioChieu).format("L");
    });
    return scheduledTimes.includes(movieState.selectedDate);
  };
  const renderTheaterList = () => {
    const filteredList = movieState?.theaterList?.filter((elem) =>
      checkValidDate(elem)
    );
    return filteredList.length > 0
      ? filteredList.map((elem, idx) => {
          return (
            <div
              key={elem.maCumRap}
              className="theater-item d-flex align-items-center align-items-md-start mb-3"
            >
              <div className="img-container">
                <img src={elem.hinhAnh} alt={elem.tenCumRap} />
              </div>

              <div className="theater-item-body pl-2">
                <div className="theater-item-title pb-md-1">
                  <h5>{elem.tenCumRap}</h5>
                </div>
                <div className="show-time-items">{renderShowTimes(idx)}</div>
              </div>
            </div>
          );
        })
      : "Chưa có lịch chiếu";
  };
  const renderShowTimes = (idx) => {
    return movieState.theaterList[idx].lichChieuPhim.map((elem) => {
      return <ScheduledTime key={elem.maLichChieu} scheduledTime={elem} />;
    });
  };
  return (
    <div className="col-10 p-2">
      <div className="theater-list">{renderTheaterList()}</div>
    </div>
  );
}
