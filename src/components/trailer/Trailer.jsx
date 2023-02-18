import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Trailer(props) {
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
        .concat(`${props.autoplay ? "?autoplay=1&mute=1" : ""}`)
    );
  }, [movieState.trailerLink]);
  return (
    <iframe title="movie-trailer" src={trailerLink} frameBorder="0"></iframe>
  );
}
