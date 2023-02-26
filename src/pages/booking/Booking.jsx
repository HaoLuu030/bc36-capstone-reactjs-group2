import React from "react";
import MovieList from "./components/movieList/MovieList";
import PlayTime from "./components/playTime/PlayTime";
import TheaterBrandList from "./components/theaterBrandList/TheaterBrandList";
import TheaterList from "./components/theaterList/TheaterList";

export default function Booking() {
  return (
    <div className="container">
      <div className="row">
        <MovieList />
        <TheaterBrandList />
        <TheaterList />
        <PlayTime />
      </div>
    </div>
  );
}
