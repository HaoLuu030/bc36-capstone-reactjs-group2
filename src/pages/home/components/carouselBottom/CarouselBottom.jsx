// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay, FreeMode } from "swiper";
import { useMovieList } from "../../../../hooks/useMovieList";
//main CSS
import "./index.scss";

export default function CarouselBottom() {
  const hotMovies = useMovieList()?.filter((elem) =>
    elem.hot && elem.trailer !== "demo" ? true : false
  );

  const renderHotMovies = () => {
    return hotMovies.map((elem) => {
      return (
        <SwiperSlide key={elem.maPhim}>
          <div className="px-2 py-2">
            <div className="card card-movie">
              <img
                style={{ height: "400px", objectFit: "cover" }}
                className="card-img-top"
                src={elem.hinhAnh}
              />
            </div>
          </div>
        </SwiperSlide>
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
        <Swiper
          speed={1200}
          delay={500}
          slidesPerView={4}
          spaceBetween={20}
          modules={[Autoplay, FreeMode]}
          centeredSlides={true}
          freeMode={true}
          autoplay
          loop="true"
          className="mySwiper carousel-bottom pt-2"
        >
          {renderHotMovies()}
        </Swiper>
      </div>
      <div className="seperator-full"></div>
    </div>
  );
}
