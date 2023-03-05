import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMovieShowtimesApi } from "../../../../../../services/cinema";
import {
  setMovieSchedulingDetailAction,
  setTheaterAction,
} from "../../../../../../store/action/movieActions";
import "./index.scss";

export default function TheaterBrandList() {
  const dispatch = useDispatch();
  const [movieBrandList, setMovieBrandList] = useState([]);
  const params = useParams();
  const getMovieDetail = async () => {
    const result = await fetchMovieShowtimesApi(params.id);
    setMovieBrandList(result.data.content.heThongRapChieu);
    dispatch(setMovieSchedulingDetailAction(result.data.content));
  };
  useEffect(() => {
    getMovieDetail();
  }, []);
  const renderMovieBrandList = () => {
    return movieBrandList?.map((elem) => {
      return (
        <button
          id={elem.maHeThongRap}
          onClick={(e) => {
            handleClick(e, elem.maHeThongRap);
          }}
          className="movie-brand-item"
        >
          <img
            style={{ width: "100%" }}
            src={elem.logo}
            alt={elem.tenHeThongRap}
          />
        </button>
      );
    });
  };
  const handleClick = (e, id) => {
    document.querySelectorAll(".movie-brand-item").forEach((elem) => {
      elem.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    dispatch(setTheaterAction(id));
  };
  return (
    <div className="col-2 p-0">
      <div className="movie-brand-list p-0">{renderMovieBrandList()}</div>
    </div>
  );
}
