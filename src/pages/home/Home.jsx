import React from "react";
import LoginModule from "../../components/loginModule/LoginModule";

import CarouselBottom from "./components/carouselBottom/CarouselBottom";
import CarouselTop from "./components/carouselTop/CarouselTop";

import MovieList from "./components/movieList/MovieList";
import Trailer from "./components/trailer/Trailer";

export default function Home() {
  return (
    <>
      <CarouselTop />
      <MovieList />
      <CarouselBottom />
      <Trailer />
      <LoginModule />
    </>
  );
}
