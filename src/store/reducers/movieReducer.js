import { SET_SELECTED_MOVIE, SET_TRAILER_LINK } from "../types/movieTypes";

const DEFAULT_STATE = {
  trailerLink: "",
  selectedMovie: {},
};

export const movieReducer = (state = DEFAULT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_TRAILER_LINK:
      state.trailerLink = payload;
    case SET_SELECTED_MOVIE:
      state.selectedMovie = payload;
      break;
    default:
      break;
  }

  return { ...state };
};
