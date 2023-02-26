import React from "react";

export default function TheaterBrandItem(props) {
  return (
    <button
      onClick={() => {
        props.setTheaterList(props.theaterBrand.maHeThongRap);
      }}
      className="col-12"
      key={props.theaterBrand.maHeThongRap}
    >
      <div className="row">
        <div className="col-4">
          <img
            style={{ width: "100%" }}
            src={props.theaterBrand.logo}
            alt={props.theaterBrand.tenHeThongRap}
          />
        </div>
        <div className="col-8">
          <p>{props.theaterBrand.tenHeThongRap}</p>
        </div>
      </div>
    </button>
  );
}
