import React from "react";
import Carousel from "./components/carousel/Carousel";
import CarouselBottom from "./components/carouselBottom/CarouselBottom";

import MovieList from "./components/movieList/MovieList";
import Trailer from "./components/trailer/Trailer";

export default function Home() {
  return (
    <>
      <Carousel />
      <MovieList />
      <CarouselBottom />
      <Trailer />
    </>
  );
}
