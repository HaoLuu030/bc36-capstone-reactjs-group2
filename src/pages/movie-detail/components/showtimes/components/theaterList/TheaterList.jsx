import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setScheduledTimeAction } from "../../../../../../store/action/movieActions";
import ScheduledTimeList from "../scheduledTimeList/ScheduledTimeList";
import "./index.scss";

export default function TheaterList() {
  const dispatch = useDispatch();
  const movieState = useSelector((state) => state.movieReducer);
  const renderTheaterList = () => {
    return movieState?.theaterList?.map((elem) => {
      return (
        <button
          onClick={() => {
            handleClick(elem.maCumRap);
          }}
          key={elem.maCumRap}
          className="theater-item p-0"
        >
          <div style={{ width: "100%" }} className="row align-items-center m-0">
            <div className="col-6">
              <img style={{ width: "100%" }} src={elem.hinhAnh} alt="" />
            </div>
            <div className="col-6 p-1">
              <h5>{elem.tenCumRap}</h5>
              <p>{elem.diaChi}</p>
            </div>
          </div>
        </button>
      );
    });
  };
  const handleClick = (id) => {
    dispatch(setScheduledTimeAction(id));
  };
  return (
    <div className="col-5 p-0">
      <div className="theater-list">{renderTheaterList()}</div>
    </div>
  );
}
