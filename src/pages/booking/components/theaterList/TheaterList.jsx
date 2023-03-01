import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPlayTimeAction } from "../../../../store/action/theaterAction";
import TheaterListItem from "../theaterListItem/TheaterListItem";
import "./index.scss";

export default function TheaterList() {
  const dispatch = useDispatch();
  const theaterState = useSelector((state) => state.theaterReducer);
  //the list that's gonna be rendered
  const [theaterList, setTheaterList] = useState([]);
  //change state when the list in store is changed
  useEffect(() => {
    setTheaterList(theaterState.theaterList);
  }, [theaterState.theaterList]);
  //when user choose a different theater brand, reset theater list
  useEffect(() => {
    setTheaterList([]);
  }, [theaterState.theaterBrandList]);
  const renderTheaterList = () => {
    return theaterList.length === 0 ? (
      <div className="unavailable">
        <p>Chưa có lịch chiếu khả dụng</p>
      </div>
    ) : (
      theaterList?.map((elem) => {
        return (
          <TheaterListItem
            key={elem.maCumRap}
            setPlayTime={setPlayTime}
            theater={elem}
          />
        );
      })
    );
  };
  const setPlayTime = (theaterId) => {
    dispatch(setPlayTimeAction(theaterId));
  };
  return (
    <div className="col-12 col-md-5 col-lg-4 mt-5 mt-lg-0">
      <div className="theater-list-column">
        <div className="title-booking">
          <p>Chọn suất chiếu</p>
        </div>
        <div className="theater-list">{renderTheaterList()}</div>
      </div>
    </div>
  );
}
