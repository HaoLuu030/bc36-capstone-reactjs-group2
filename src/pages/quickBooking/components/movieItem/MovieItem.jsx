import React from "react";
import "./index.scss";

export default function MovieItem(props) {
  function handleClick(e) {
    document.querySelectorAll(".movie-item-booking").forEach((elem) => {
      elem.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    props.getPlayingDetail(props.movie.maPhim);
  }
  return (
    <button
      onClick={handleClick}
      className="py-2 movie-item-booking"
      key={props.movie.maPhim}
    >
      <div className="container">
        <div className="row align-items-center px-2">
          <div className="col-4">
            <div className="img-container">
              <img src={props.movie.hinhAnh} alt={props.movie.tenPhim} />
            </div>
          </div>
          <div className="col-8">
            <p>{props.movie.tenPhim}</p>
          </div>
        </div>
      </div>
    </button>
  );
}
