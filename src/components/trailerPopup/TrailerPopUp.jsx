import React from "react";
import Trailer from "../trailer/Trailer";
import "./index.scss";

export default function TrailerPopUp() {
  const closeTrailer = () => {
    document.querySelector(".trailer-background")?.classList.remove("active");
    document.querySelector("iframe").src = "";
  };
  return (
    <div onClick={closeTrailer} className="trailer-background">
      <div className="trailer-inner">
        <div className="trailer-wrapper">
          <button className="button-close-trailer">
            <i className="fa fa-times"></i>
          </button>
          <Trailer autoplay={true} />
        </div>
      </div>
    </div>
  );
}
