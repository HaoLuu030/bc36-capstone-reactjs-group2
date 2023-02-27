import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPlayTimeAction } from "../../../../store/action/theaterAction";
import TheaterListItem from "../theaterListItem/TheaterListItem";

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
    return theaterList?.map((elem) => {
      return (
        <TheaterListItem
          key={elem.maCumRap}
          setPlayTime={setPlayTime}
          theater={elem}
        />
      );
    });
  };
  const setPlayTime = (theaterId) => {
    dispatch(setPlayTimeAction(theaterId));
  };
  return (
    <div className="col-3">
      TheaterList
      <div className="row">{renderTheaterList()}</div>
    </div>
  );
}
