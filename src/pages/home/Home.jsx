import React from "react";
import CarouselSlide from "../../components/carouselSlide/CarouselSlide";

import LoginModule from "../../components/loginModule/LoginModule";
import TrailerPopUp from "../../components/trailerPopup/TrailerPopUp";
import CarouselTop from "./components/carouselTop/CarouselTop";

import MovieList from "./components/movieList/MovieList";
/*Home page*/ 
export default function Home() {
  return (
    <React.Fragment>
      <CarouselTop />
      <MovieList />
      <TrailerPopUp />
      <CarouselSlide type="hot" />
      <LoginModule />
    </React.Fragment>
  );
}
