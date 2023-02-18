import React from "react";
import Sidebar from "./components/sideBar/Sidebar";
import MovieList from "./components/movieList/MovieList";
import LoginModule from "../../components/loginModule/LoginModule";
import Trailer from "../../components/trailer/Trailer";

export default function NowPlaying() {
  return (
    <div className="container">
      <div className="row">
        {/* pass sideBar as a prop for conditionl rendering for movie items in other pages */}
        <MovieList sideBar={true} />
        <Sidebar />
      </div>
      <LoginModule />
      <Trailer />
    </div>
  );
}
