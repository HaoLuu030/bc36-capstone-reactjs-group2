import React from "react";

export default function MovieItem(props) {
  return (
    <button
      onClick={() => {
        props.getPlayingDetail(props.movie.maPhim);
      }}
      className="col-12 py-2"
      key={props.movie.maPhim}
    >
      <div className="row">
        <div className="col-4">
          <img
            style={{ width: "100%" }}
            src={props.movie.hinhAnh}
            alt={props.movie.tenPhim}
          />
        </div>
        <div className="col-8">{props.movie.tenPhim}</div>
      </div>
    </button>
  );
}
