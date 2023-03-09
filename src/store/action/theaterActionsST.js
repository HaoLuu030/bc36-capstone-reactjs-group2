import {
  SET_MOVIE_SCHEDULING_DETAIL_ST,
  SET_SCHEDULED_TIME_ST,
  SET_SELECTED_DATE_ST,
  SET_THEATER_ST,
  SET_THEATER_BRAND_ST,
} from "../types/theaterTypesST";

export const setMovieSchedulingDetailActionST = (payload) => {
  return {
    type: SET_MOVIE_SCHEDULING_DETAIL_ST,
    payload,
  };
};

export const setTheaterActionST = (payload) => {
  return {
    type: SET_THEATER_ST,
    payload,
  };
};
export const setScheduledTimeAction = (payload) => {
  return {
    type: SET_SCHEDULED_TIME_ST,
    payload,
  };
};

export const setSelectedDateActionST = (payload) => {
  return {
    type: SET_SELECTED_DATE_ST,
    payload,
  };
};

export const setTheaterBrandActionST = (payload) => {
  return {
    type: SET_THEATER_BRAND_ST,
    payload,
  };
};
