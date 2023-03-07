import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
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
    //if no day is being selected, show all the show times
    if (!movieState.selectedDate) {
      return movieState?.theaterList.map((elem) => {
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
                <h5 className="mb-2 mb-md-0">{elem.tenCumRap}</h5>
                <p className="mb-2 address"> Địa chỉ: {elem.diaChi}</p>
              </div>
              <div className="show-time-items d-flex flex-wrap">
                {renderShowTimes(elem)}
              </div>
            </div>
          </div>
        );
      });
    }

    //get rid of theaters that don't have the date specified
    const filteredTheaterList = movieState?.theaterList?.filter((elem) =>
      checkValidDate(elem)
    );
    if (filteredTheaterList.length === 0) {
      return "Chưa có lịch chiếu khả dụng";
    }
    return filteredTheaterList.map((elem, idx) => {
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
              <h5 className="mb-2 mb-md-0">{elem.tenCumRap}</h5>
              <p className="mb-2 address"> Địa chỉ: {elem.diaChi}</p>
            </div>
            <div className="show-time-items d-flex flex-wrap">
              {renderShowTimes(elem)}
            </div>
          </div>
        </div>
      );
    });
  };
  const renderShowTimes = (theater) => {
    if (!movieState.selectedDate) {
      return theater.lichChieuPhim.map((elem) => {
        return <ScheduledTime key={elem.maLichChieu} scheduledTime={elem} />;
      });
    }
    return theater.lichChieuPhim
      .filter((elem) => {
        return (
          moment(elem.ngayChieuGioChieu).format("L") === movieState.selectedDate
        );
      })
      .map((elem) => {
        return <ScheduledTime key={elem.maLichChieu} scheduledTime={elem} />;
      });
  };
  return (
    <div className="col-10 p-2">
      <div className="theater-list">{renderTheaterList()}</div>
    </div>
  );
}
