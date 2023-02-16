import React from "react";
import { useMovieList } from "../../../../hooks/useMovieList";
import { formatTimeDate } from "../../../../utils";
import "./index.scss";

export default function Sidebar() {
  const hotMovies = useMovieList()
    .filter((element) => (element.hot ? true : false))
    .slice(0, 6);
  const renderStar = (score) => {
    let numOfStars = Math.floor(score / 2);
    const starList = [];
    console.log(numOfStars);
    for (let i = 0; i < 5; i++, numOfStars--) {
      if (numOfStars > 0) {
        starList.push(<span class="fa fa-star checked"></span>);
      } else {
        starList.push(<span class="fa fa-star"></span>);
      }
    }
    console.log(starList);
    return starList;
  };
  const renderHotMovies = () => {
    return hotMovies.map((element) => {
      return (
        <div className="col-12 py-2" key={element.maPhim}>
          <div className="hot-movie-item d-flex">
            <div className="img-container">
              <img src={element.hinhAnh} alt={element.tenPhim} />
            </div>
            <div className="hot-movie-item-content">
              <p className="pb-2">{element.tenPhim}</p>
              <div className="star-rating">{renderStar(element.danhGia)}</div>
              <p className="pt-2">Ngày khởi chiếu: {formatTimeDate(element.ngayKhoiChieu)}</p>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <aside className="side-bar">
      <div className="container">
        <h3 className="text-center">
          <i className="fa fa-fire"></i>
          <i className="fa fa-fire"></i>
          <i className="fa fa-fire"></i>
        </h3>
        <div className="row">{renderHotMovies()}</div>
      </div>
    </aside>
  );
}
