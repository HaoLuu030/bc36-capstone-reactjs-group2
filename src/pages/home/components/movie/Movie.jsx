import React from "react";

export default function Movie(props) {
  return (
    <div key={props.movie.maPhim} className="px-2 py-2 col-3">
      <div className="card card-movie">
        <img className="card-img-top" src={props.movie.hinhAnh} />
        <div className="overlay d-flex justify-content-center align-items-center">
          <div className="d-flex justify-content-center">
            <button className="button-movie-item mx-1">Trailer</button> <br />
            <button className="button-movie-item mx-1">Chi Tiết</button>
          </div>
        </div>
      </div>
    </div>
  );
}
