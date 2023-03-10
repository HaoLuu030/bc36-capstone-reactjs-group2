import { useContext, useEffect, useState } from "react";
import { LoadingContext } from "../contexts/loading/LoadingContext";
import { fetchMovieList } from "../services/movie";

export function useMovieList() {
  const [movieList, setMovieList] = useState([]);

  const [loadingState, setLoadingState] = useContext(LoadingContext);

  const getMovieList = async () => {
    setLoadingState({ isLoading: true });
    const result = await fetchMovieList();
    setMovieList(result.data.content);
    setLoadingState ({ isLoading: false});
  };
  useEffect(() => {
    getMovieList();
  }, []);
  return movieList;
}
