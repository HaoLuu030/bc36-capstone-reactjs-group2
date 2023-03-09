import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMovieShowtimesApi } from "../../../../../../services/cinema";
import {
  setMovieSchedulingDetailActionST,
  setTheaterBrandActionST,
} from "../../../../../../store/action/theaterActionsST";
import "./index.scss";

export default function TheaterBrandList() {
  const theaterState = useSelector((state) => state.theaterReducerST);

  const dispatch = useDispatch();
  const [theaterBrandList, setTheaterBrandList] = useState([]);
  const params = useParams();
  const getMovieDetail = async () => {
    const result = await fetchMovieShowtimesApi(params.id);
    setTheaterBrandList(result.data.content.heThongRapChieu);
    dispatch(setMovieSchedulingDetailActionST(result.data.content));
  };
  useEffect(() => {
    getMovieDetail();
  }, []);
  useEffect(() => {
    if (theaterBrandList.length > 0) {
      dispatch(setTheaterBrandActionST(theaterBrandList[0].maHeThongRap));
    }
  }, [theaterBrandList]);
  const rendertheaterBrandList = (list) => {
    if (!theaterState.selectedDate) {
      list = theaterBrandList;
    } else {
      list = theaterBrandList
        ?.map((elem) => {
          const theaterList = elem.cumRapChieu;
          return {
            ...elem,
            ngayChieu: theaterList.map((elem) => {
              return elem.lichChieuPhim.map((elem) =>
                moment(elem.ngayChieuGioChieu).format("L")
              );
            }),
          };
        })
        .map((elem) => {
          return {
            ...elem,
            ngayChieu: elem.ngayChieu.reduce((total, elem) => {
              total = total.concat(elem);
              return total;
            }, []),
          };
        })
        .filter((elem) => elem.ngayChieu.includes(theaterState.selectedDate));
    }
    return list?.map((elem, idx) => {
      return (
        <button
          key={elem.maHeThongRaps}
          id={elem.maHeThongRap}
          onClick={(e) => {
            handleClick(e, elem.maHeThongRap);
          }}
          className={`movie-brand-item w-100 py-2 ${idx === 0 ? "active" : ""}`}
        >
          <div className="img-container">
            <img src={elem.logo} alt={elem.tenHeThongRap} />
          </div>
        </button>
      );
    });
  };
  const handleClick = (e, id) => {
    document.querySelectorAll(".movie-brand-item").forEach((elem) => {
      elem.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    dispatch(setTheaterBrandActionST(id));
  };
  return (
    <div className="col-2 p-0">
      <div className="movie-brand-list p-0">{rendertheaterBrandList()}</div>
    </div>
  );
}
