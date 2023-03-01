import React from "react";
import "./index.scss";

export default function TheaterBrandItem(props) {
  const handleClick = (e) => {
    document.querySelectorAll(".theater-brand-item").forEach((elem) => {
      elem.classList.remove("active");
      e.currentTarget.classList.add("active");
    });
    props.setTheaterList(props.theaterBrand.maHeThongRap);
  };
  return (
    <button
      style={{ width: "100%" }}
      onClick={handleClick}
      key={props.theaterBrand.maHeThongRap}
      className="theater-brand-item py-2"
    >
      <div className="row align-items-center px-2">
        <div className="col-4">
          <div className="img-container">
            <img
              src={props.theaterBrand.logo}
              alt={props.theaterBrand.tenHeThongRap}
            />
          </div>
        </div>
        <div className="col-8">
          <p>{props.theaterBrand.tenHeThongRap}</p>
        </div>
      </div>
    </button>
  );
}
