import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheaterListActionQB } from "../../../../store/action/theaterActionQB";
import TheaterBrandItem from "../theaterBrandItem/TheaterBrandItem";
import "./index.scss";

export default function TheaterBrandList() {
  const dispatch = useDispatch();
  const theaterState = useSelector((state) => state.theaterReducerQB);
  const [theaterBrandList, setTheaterBrandList] = useState([]);
  const setTheaterList = (id) => {
    dispatch(setTheaterListActionQB(id));
  };
  useEffect(() => {
    setTheaterBrandList(theaterState.theaterBrandList);
    document.querySelectorAll(".theater-brand-item").forEach((elem) => {
      elem.classList.remove("active");
    });
  }, [theaterState.theaterBrandList]);
  const renderTheaterBrand = () => {
    return theaterBrandList.length === 0 ? (
      <div className="unavailable">
        <p>Chưa có rạp khả dụng</p>
      </div>
    ) : (
      theaterBrandList?.map((elem) => {
        return (
          <TheaterBrandItem
            setTheaterList={setTheaterList}
            theaterBrand={elem}
            key={elem.maHethongRap}
          />
        );
      })
    );
  };
  return (
    <div className="col-12 col-lg-4 mt-5 mt-lg-0">
      <div className="theater-brand-list-column">
        <div className="title-booking">
          <p>Chọn rạp</p>
        </div>
        <div className="theater-brand-list">{renderTheaterBrand()}</div>
      </div>
    </div>
  );
}
