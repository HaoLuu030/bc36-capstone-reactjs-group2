import {
  SET_MOVIE_SCHEDULING_DETAIL,
  SET_SCHEDULED_TIME,
  SET_THEATER,
  SET_TRAILER_LINK,
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
