import React from "react";
import { useDispatch } from "react-redux";
import { useMovieList } from "../../../../hooks/useMovieList";
import { fetchPlayingDetailApi } from "../../../../services/movie";
import { setTheaterBrandAction } from "../../../../store/action/theaterAction";
import MovieItem from "../movieItem/MovieItem";
import "./index.scss";
export default function MovieList() {
  const dispatch = useDispatch();
  const playingMovieList = useMovieList().filter((elem) => elem.dangChieu);
  const getPlayingDetail = async (id) => {
    const playingDetail = await fetchPlayingDetailApi(id);
    dispatch(setTheaterBrandAction(playingDetail.data.content.heThongRapChieu));
  };
  const renderMovieList = () => {
    return playingMovieList.map((elem) => {
      return <MovieItem getPlayingDetail={getPlayingDetail} movie={elem} />;
    });
  };
  return (
    <div className="col-3 movie-list-booking px-2">
      MovieList
      <div className="row">{renderMovieList()}</div>
    </div>
  );
}
