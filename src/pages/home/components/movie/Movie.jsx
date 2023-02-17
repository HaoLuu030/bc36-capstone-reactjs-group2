import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setTrailerLinkAction } from "../../../../store/action/movieActions";
import { NavLink } from "react-router-dom";

export default function Movie(props) {
  const dispatch = useDispatch();
  const openTrailer = (trailer) => {
    document.querySelector(".trailer-background").classList.add("active");
    dispatch(setTrailerLinkAction(trailer));
  };
  return (
    <div
      key={props.movie.maPhim}
      className="pt-3 px-2 p-lg-2 col-6 col-md-4 col-lg-3"
    >
      <div className="card card-movie">
        <img className="card-img-top" src={props.movie.hinhAnh} />
        <div className="overlay d-flex justify-content-center align-items-center">
          <button
            onClick={() => {
              openTrailer(props.movie.trailer);
            }}
            className="button-movie-item mx-1 show-trailer"
          >
            <i className="fa fa-play"></i>
          </button>
          <div className="movie-detail d-flex align-items-center">
            <NavLink to={`/movie-detail/${props.movie.maPhim}`}>
              Chi tiết
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
