import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./index.scss";

export default function Trailer() {
  const [trailerLink, setTrailerLink] = useState();
  const movieState = useSelector((state) => state.movieReducer);
  //convert trailer link so that they include embed/...
  // otherwise iframe won't take external request
  useEffect(() => {
    const linkRegex =
      /https\:\/\/www\.youtube\.com\/watch\?v=|https\:\/\/youtu\.be\//;
    setTrailerLink(
      movieState.trailerLink
        .replace(linkRegex, "https://www.youtube.com/embed/")
        .concat("?autoplay=1&mute=1")
    );
  }, [movieState.trailerLink]);
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
          <iframe
            title="movie-trailer"
            src={trailerLink}
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
