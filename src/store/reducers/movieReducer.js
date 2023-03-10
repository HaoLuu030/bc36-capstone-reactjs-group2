import { SET_TRAILER_LINK, SET_SELECTED_MOVIE } from "../types/movieTypes";

const DEFAULT_STATE = {
  trailerLink: "",

  selectedMovie: {},
};

export const movieReducer = (state = DEFAULT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_TRAILER_LINK:
      state.trailerLink = payload;
      break;
    case SET_SELECTED_MOVIE:
      state.selectedMovie = payload;
      break;

    default:
      break;
  }

  return { ...state };
};
