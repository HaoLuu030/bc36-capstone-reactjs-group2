import React from "react";
import { useDispatch } from "react-redux";
import { setTrailerLinkAction } from "../../../../store/action/movieActions";

export default function Movie(props) {
  const dispatch = useDispatch();
  const openTrailer = (trailer) => {

    document.querySelector(".trailer-background").classList.add("active");
    dispatch(setTrailerLinkAction(trailer));
  };
  return (
    <div key={props.movie.maPhim} className="px-2 py-2 col-3">
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
            <a href="#">Chi tiết</a>
          </div>
        </div>
      </div>
    </div>
  );
}
