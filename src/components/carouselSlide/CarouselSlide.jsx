import { useMovieList } from "../../hooks/useMovieList";
//main CSS
import "./index.scss";
import { Carousel } from "antd";

export default function CarouselSlide(props) {
  //get and filter hot movies by types
  const movieList = useMovieList()?.filter((elem) =>
    elem[props.type] && elem.trailer !== "demo" ? true : false
  );
  //render movies
  const renderHotMovies = () => {
    return movieList.map((elem) => {
      return (
        <div className="px-2 py-2" key={elem.maPhim}>
          <div className="card card-movie">
            <img className="card-img-top" src={elem.hinhAnh} />
            <a className="get-ticket-carousel-bottom" type="primary">
              Đặt vé ngay
            </a>
          </div>
        </div>
      );
    });
  };
  //map title by type
  const handleMapTitle = () => {
    switch (props.type) {
      case "hot": {
        return (
          <>
            <h4>
              <i name="fa fa-fire"></i> Phim Hot <i className="fa fa-fire"></i>
            </h4>
            a<div clssName="seperator-title"></div>
          </>
        );
      }
      case "dangChieu": {
        return (
          <>
            <h4>
              <i name="fa fa-fire"></i> Dang chieu{" "}
              <i className="fa fa-fire"></i>
            </h4>
            a<div clssName="seperator-title"></div>
          </>
        );
      }
    }
  };
  // responsive breakpoint for carousel
  const carouselResponsive = [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
      },
    },
  ];

  return (
    <div className="background-carousel-bottom">
      <div className="container-carousel-bottom py-1 container-fluid">
        {handleMapTitle()}
        <Carousel
          lazyLoad="ondemand"
          autoplaySpeed={2000}
          slidesToScroll={1}
          slidesToShow={4}
          // autoplay
          dots={false}
          draggable={true}
          responsive={carouselResponsive}
          className="pt-3 pb-5"
        >
          {renderHotMovies()}
        </Carousel>
      </div>
      <div className="seperator-full"></div>
    </div>
  );
}
