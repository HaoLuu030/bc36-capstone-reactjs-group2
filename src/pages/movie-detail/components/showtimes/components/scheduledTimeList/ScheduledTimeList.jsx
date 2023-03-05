import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import * as _ from "lodash";

export default function ScheduledTimeList() {
  const movieState = useSelector((state) => state.movieReducer);
  const mappedScheduledTimeList = movieState.scheduledTimeList.map((elem) => {
    return {
      ...elem,
      ngayChieu: moment(elem.ngayChieuGioChieu).format("L"),
      gioChieu: moment(elem.ngayChieuGioChieu).format("LT"),
      thuChieu: moment(elem.ngayChieuGioChieu).format("dddd"),
    };
  });
  const scheduledTimeByShowingDate = _.groupBy(
    mappedScheduledTimeList,
    "ngayChieu"
  );
  const dateList = Object.keys(scheduledTimeByShowingDate);
  const renderScheduledTimeList = () => {
    return dateList.map((elem) => {
      return (
        <div className="scheduled-time-item">
          <div className="date">
            <h6>{moment(elem).format("dddd, L")}</h6>
          </div>
          <div className="show-times">
            {scheduledTimeByShowingDate[elem].map((elem) => {
              return <a href="#">{elem.gioChieu}</a>;
            })}
          </div>
        </div>
      );
    });
  };

  return <div className="col-5">{renderScheduledTimeList()}</div>;
}
