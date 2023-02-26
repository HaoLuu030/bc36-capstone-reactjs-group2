import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheaterAction } from "../../../../store/action/theaterAction";
import TheaterBrandItem from "../theaterBrandItem/TheaterBrandItem";

export default function TheaterBrandList() {
  const dispatch = useDispatch();
  const theaterState = useSelector((state) => state.theaterReducer);
  const [theaterBrandList, setTheaterBrandList] = useState([]);
  const setTheaterList = (id) => {
    dispatch(setTheaterAction(id));
  };
  useEffect(() => {
    setTheaterBrandList(theaterState.theaterBrandList);
  }, [theaterState.theaterBrandList]);
  const renderTheaterBrand = () => {
    return theaterBrandList?.map((elem) => {
      return (
        <TheaterBrandItem
          setTheaterList={setTheaterList}
          theaterBrand={elem}
          key={elem.maHethongRap}
        />
      );
    });
  };
  return (
    <div className="col-3">
      Theater Brand List
      <div className="row">{renderTheaterBrand()}</div>
    </div>
  );
}
