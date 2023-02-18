import React from "react";
import CarouselSlide from "../../components/carouselSlide/CarouselSlide";

import LoginModule from "../../components/loginModule/LoginModule";
import Trailer from "../../components/trailer/Trailer";
import CarouselTop from "./components/carouselTop/CarouselTop";

import MovieList from "./components/movieList/MovieList";

export default function Home() {
  return (
    <>
      <CarouselTop />
      <MovieList />
      <Trailer />
      <CarouselSlide type="hot" />
      <LoginModule />
    </>
  );
}
