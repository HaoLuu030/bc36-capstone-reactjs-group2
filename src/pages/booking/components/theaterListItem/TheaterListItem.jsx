import React from "react";

export default function TheaterListItem(props) {
  return (
    <button
      onClick={() => {
        props.setPlayTime(props.theater.maCumRap);
      }}
      className="col-12"
      key={props.theater.maCumRap}
    >
      <div className="row">
        <div className="col-4">
          <img
            style={{ width: "100%" }}
            src={props.theater.hinhAnh}
            alt={props.theater.tenCumRap}
          />
        </div>
        <div className="col-8">
          <p>{props.theater.tenCumRap}</p>
        </div>
      </div>
    </button>
  );
}
