import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function TheaterList() {
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
        <button className="col-12" key={elem.maCumRap}>
          <div className="row">
            <div className="col-4">
              <img style={{ width: "100%" }} src={elem.hinhAnh} alt="" />
            </div>
            <div className="col-8">
              <p>{elem.tenCumRap}</p>
            </div>
          </div>
        </button>
      );
    });
  };
  return (
    <div className="col-3">
      TheaterList
      <div className="row">{renderTheaterList()}</div>
    </div>
  );
}
