import { useMovieList } from "../../../../hooks/useMovieList";
import Movie from "../../../../components/movie/Movie";
import "./index.scss";
import { NavLink } from "react-router-dom";

export default function MovieList() {
  //get the movie list from a custom hook
  const movieList = useMovieList();
  const renderMovieList = (type) => {
    //render movies based on premire status, using slice to limit the amount of movies shown
    return movieList.filter((elem) => elem[type]).length === 0 ? (
      <div className="unavailable">
        <p>Thông tin đang được cập nhật</p>
      </div>
    ) : (
      movieList
        .filter((element) => (element[type] ? true : false))
        .slice(0, 4)
        .map((element) => {
          return <Movie key={element.maPhim} movie={element} />;
        })
    );
  };
  return (
    <div className="background-home">
      <div className="container pt-5">
        <div className="title-status">
          <h4>Phim đang chiếu</h4>
          <NavLink to={"/now-playing"}>Xem thêm</NavLink>
        </div>
        <div className="seperator-title"></div>
        <div className="row mt-md-2 mt-lg-4">
          {renderMovieList("dangChieu")}
        </div>
        <div className="title-status pt-md-3 pt-lg-5">
          <h4>Phim sắp chiếu</h4>
          <NavLink to="/coming-soon">Xem thêm</NavLink>
        </div>
        <div className="seperator-title"></div>
        <div className="row mt-md-2 mt-lg-4">{renderMovieList("sapChieu")}</div>
      </div>
    </div>
  );
}
