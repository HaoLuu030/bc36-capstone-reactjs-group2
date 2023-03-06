import React from "react";
import Movie from "../movie/Movie";
import { useMovieList } from "../../hooks/useMovieList";
import { useLocation } from "react-router-dom";
import "./index.scss";

export default function MovieList(props) {
  //get the path name to render the movies conditionally based on what path we're on
  const pathName = useLocation().pathname;
  const movieList = useMovieList();
  const renderMovieList = () => {
    return movieList
      ?.filter((element) =>
        (pathName === "/now-playing" ? element.dangChieu : element.sapChieu)
          ? true
          : false
      )
      ?.map((element) => {
        return (
          <Movie movie={element} sideBar={props.sideBar} key={element.maPhim} />
        );
      });
  };
  return (
    <div className="col-12 col-xl-8">
      <div className="now-playing">
        <h4>
          {pathName === "/now-playing" ? "Phim đang chiếu" : "Phim sắp chiếu"}
        </h4>
        <div className="row">{renderMovieList()}</div>
      </div>
    </div>
  );
}
