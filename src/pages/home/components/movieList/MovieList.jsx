import { useMovieList } from "../../../../hooks/useMovieList";
import Movie from "../movie/Movie";
import "./index.scss";

export default function MovieList() {
  //get the movie list from a custom hook
  const movieList = useMovieList();
  const renderMovieList = (type) => {
    //render movies based on premire status, using slice to limit the amount of movies shown
    return type === "dangChieu"
      ? movieList
          .filter((element) => (element.dangChieu ? true : false))
          .slice(0, 8)
          .map((element) => {
            return <Movie movie={element} />;
          })
      : movieList
          .filter((element) => (element.sapChieu ? true : false))
          .slice(0, 8)
          .map((element) => {
            return <Movie movie={element} />;
          });
  };
  return (
    <div className="container pt-5">
      <div className="title-status pb-3">
        <h4>Phim đang chiếu</h4>
        <a href="#">Xem thêm</a>
      </div>
      <div className="row mt-4">{renderMovieList("dangChieu")}</div>
      <div className="title-status pt-5">
        <h4>Phim sắp chiếu</h4>
        <a href="#">Xem thêm</a>
      </div>
      <div className="row mt-4">{renderMovieList("sapChieu")}</div>
    </div>
  );
}
