import React, { useEffect, useRef, useState } from "react";
import { Button, Carousel } from "antd";
import "./index.scss";
import { CarouselImage } from "./styled";

//API
import { fetchMovieBanners } from "../../../../services/banner";

export default function CarouselTop() {
  const carouselRef = useRef();
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  const [movieBanners, setMovieBanners] = useState([]);
  const getMovieBanner = async () => {
    const result = await fetchMovieBanners();
    setMovieBanners(result.data.content);
  };
  useEffect(() => {
    getMovieBanner();
  }, []);

  const renderBanner = () => {
    return movieBanners.map((elem) => {
      return (
        <div key={elem.maBanner} className="carousel-item">
          <CarouselImage backgroundImage={elem.hinhAnh}></CarouselImage>
        </div>
      );
    });
  };

  return (
    <div className="carousel-top">
      <Carousel
        slidesToShow={1}
        dots={false}
        autoplay
        adaptiveHeight
        pauseOnHover={true}
        draggable
        ref={carouselRef}
        className="carousel-items"
      >
        {renderBanner()}
      </Carousel>

      <Button
        className="button-carousel button-left"
        onClick={() => {
          carouselRef.current.prev();
        }}
      >
        <i className="fa fa-angle-left"></i>
      </Button>

      <Button
        className="button-carousel button-right"
        onClick={() => {
          carouselRef.current.next();
        }}
      >
        <i className="fa fa-angle-right"></i>
      </Button>
    </div>
  );
}
