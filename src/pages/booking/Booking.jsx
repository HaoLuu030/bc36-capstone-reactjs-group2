import React from "react";
import MovieList from "./components/movieList/MovieList";
import TheaterBrandList from "./components/theaterBrandList/TheaterBrandList";
import TheaterList from "./components/theaterList/TheaterList";
import "./index.scss";

export default function Booking() {
  return (
    <div className="container">
      <div className="row justify-content-around">
        <MovieList />
        <TheaterBrandList />
        <TheaterList />
      </div>
    </div>
  );
}
