import React from "react";
import Detail from "./components/detail/Detail";
import PlayingFilm from "./components/playingFilm/PlayingFilm";

export default function MovieDetail() {
  return (
    <div className="detail">
      <div className="container">
        <Detail />
      </div>{" "}
      <PlayingFilm />
    </div>
  );
}
