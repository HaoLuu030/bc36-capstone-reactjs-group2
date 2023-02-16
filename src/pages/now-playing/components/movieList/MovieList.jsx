import React from "react";
import Movie from "../../../../components/movie/Movie";
import { useMovieList } from "../../../../hooks/useMovieList";
import "./index.scss";

export default function MovieList() {
  const movieList = useMovieList();
  const renderMovieList = () => {
    return movieList
      ?.filter((element) => (element.dangChieu ? true : false))
      ?.map((element) => {
        return <Movie movie={element} />;
      });
  };
  return (
    <div className="now-playing">
      <h4>Phim đang chiếu</h4>
      <div className="row">{renderMovieList()}</div>
    </div>
  );
}
