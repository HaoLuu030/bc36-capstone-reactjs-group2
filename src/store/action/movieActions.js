import { SET_TRAILER_LINK, SET_SELECTED_MOVIE } from "../types/movieTypes";

export const setTrailerLinkAction = (payload) => {
  return {
    type: SET_TRAILER_LINK,
    payload,
  };
};

// save the information of the movie we're working with (i.e. editing, setting schedule)
export const setSelectedMovieAction = (payload) => {
  return {
    type: SET_SELECTED_MOVIE,
    payload,
  };
};
