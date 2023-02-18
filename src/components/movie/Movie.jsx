import React from "react";
import { useDispatch } from "react-redux";
import { setTrailerLinkAction } from "../../store/action/movieActions";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

export default function Movie(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const openTrailer = (trailer) => {
    document.querySelector(".trailer-background").classList.add("active");
    dispatch(setTrailerLinkAction(trailer));
  };
  // set the trailer link in store so the link will be fired up when the trailer is loaded
  const handleClick = () => {
    dispatch(setTrailerLinkAction(props.movie.trailer));
    navigate(`/movie-detail/${props.movie.maPhim}`);
  };
  return (
    <div
      key={props.movie.maPhim}
      className={`pt-3 px-2 p-lg-2 col-6 col-md-4 col-lg-3 ${
        props.sideBar ? "col-xl-4" : ""
      }
      )}`}
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
            <Button onClick={handleClick} type="primary">
              Chi tiết
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
