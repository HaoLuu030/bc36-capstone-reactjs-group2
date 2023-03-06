import {
  SET_MOVIE_SCHEDULING_DETAIL,
  SET_SCHEDULED_TIME,
  SET_SELECTED_DATE,
  SET_THEATER,
  SET_TRAILER_LINK,
  SET_SELECTED_MOVIE,
} from "../types/movieTypes";

export const setTrailerLinkAction = (payload) => {
  return {
    type: SET_TRAILER_LINK,
    payload,
  };
};

export const setMovieSchedulingDetailAction = (payload) => {
  return {
    type: SET_MOVIE_SCHEDULING_DETAIL,
    payload,
  };
};

export const setTheaterAction = (payload) => {
  return {
    type: SET_THEATER,
    payload,
  };
};

export const setScheduledTimeAction = (payload) => {
  return {
    type: SET_SCHEDULED_TIME,
    payload,
  };
};

export const setSelectedDateAction = (payload) => {
  return {
    type: SET_SELECTED_DATE,
  };
};
// save the information of the movie we're working with (i.e. editing, setting schedule)
export const setSelectedMovieAction = (payload) => {
  return {
    type: SET_SELECTED_MOVIE,
    payload,
  };
};
