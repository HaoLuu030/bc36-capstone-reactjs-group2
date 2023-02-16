import React from "react";
import Sidebar from "./components/sideBar/Sidebar";
import MovieList from "./components/movieList/MovieList";
import LoginModule from "../../components/loginModule/LoginModule";
import Trailer from "../../components/trailer/Trailer";

export default function NowPlaying() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <MovieList />
        </div>
        <div className="col-4">
          <Sidebar />
        </div>
      </div>
      <LoginModule />
      <Trailer />
    </div>
  );
}
