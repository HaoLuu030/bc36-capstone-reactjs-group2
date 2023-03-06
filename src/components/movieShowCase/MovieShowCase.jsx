import React from "react";
import MovieList from "../movieList/MovieList";
import Sidebar from "../sideBar/Sidebar";
import TrailerPopUp from "../trailerPopup/TrailerPopUp";
import LoginModule from "../loginModule/LoginModule";

export default function MovieShowCase() {
  return (
    <div className="container">
      <div className="row">
        {/* pass sideBar as a prop for conditionl rendering for movie items in other pages */}
        <MovieList sideBar={true} />
        <Sidebar />
      </div>
      <LoginModule />
      <TrailerPopUp />
    </div>
  );
}
