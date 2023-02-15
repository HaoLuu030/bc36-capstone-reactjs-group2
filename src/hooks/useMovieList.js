import { useEffect, useState } from "react";
import { fetchMovieList } from "../services/movie";

export function useMovieList() {
  const [movieList, setMovieList] = useState([]);
  const getMovieList = async () => {
    const result = await fetchMovieList();
    setMovieList(result.data.content);
  };
  useEffect(() => {
    getMovieList();
  }, []);
  return movieList;
}
