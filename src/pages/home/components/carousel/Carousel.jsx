import React, { useEffect, useState } from "react";
// import Swiper core and required modules
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./index.scss";

//API
import { fetchMovieBanners } from "../../../../services/banner";

export default function Carousel() {
  const [movieBanners, setMovieBanners] = useState([]);
  const getMovieBanner = async () => {
    const result = await fetchMovieBanners();
    setMovieBanners(result.data.content);
  };
  useEffect(() => {
    getMovieBanner();
  }, []);
  const renderBanner = () => {
    return movieBanners?.map((element) => {
      return (
        <SwiperSlide key={element.maBanner} className="carousel-top">
          <div className="img-container">
            <img src={element.hinhAnh} alt={element.maBanner} />
          </div>
        </SwiperSlide>
      );
    });
  };
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay
    >
      {renderBanner()}
    </Swiper>
  );
}
