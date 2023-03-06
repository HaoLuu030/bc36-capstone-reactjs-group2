import React from "react";
import BreadCrumbsCustom from "../../components/breadCrumbs/BreadCrumbs";
import Detail from "./components/detail/Detail";
import PlayingFilm from "./components/playingFilm/PlayingFilm";

export default function MovieDetail() {
  return (
    <div className="detail">
      <div className="container">
        <BreadCrumbsCustom />
        <Detail />
      </div>{" "}
      <PlayingFilm />
    </div>
  );
}
