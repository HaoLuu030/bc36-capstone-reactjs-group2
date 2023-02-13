import { useMovieList } from "../../../../hooks/useMovieList";
//main CSS
import "./index.scss";
import { Carousel } from "antd";
import { useEffect, useState } from "react";

export default function CarouselBottom() {
  const hotMovies = useMovieList()?.filter((elem) =>
    elem.hot && elem.trailer !== "demo" ? true : false
  );
  const renderHotMovies = () => {
    return hotMovies.map((elem) => {
      return (
        <div className="px-2 py-2" key={elem.maPhim}>
          <div className="card card-movie">
            <img className="card-img-top" src={elem.hinhAnh} />
          </div>
        </div>
      );
    });
  };

  return (
    <div className="background-carousel-bottom">
      <div className="container-carousel-bottom py-3">
        <h4>
          <i name="fa fa-fire"></i> Phim Hot <i className="fa fa-fire"></i>
        </h4>
        <div className="seperator-title"></div>
        <Carousel
          autoplaySpeed={3000}
          slidesPerRow={5}
          autoplay
          dots={false}
          loop
        >
          {renderHotMovies()}
        </Carousel>
      </div>
      <div className="seperator-full"></div>
    </div>
  );
}
