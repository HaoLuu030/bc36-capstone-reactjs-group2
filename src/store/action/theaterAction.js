import {
  SET_PLAY_TIME,
  SET_THEATER_BRAND_LIST,
  SET_THEATER_LIST,
} from "../types/theaterTypes";

export const setTheaterBrandAction = (payload) => {
  return {
    type: SET_THEATER_BRAND_LIST,
    payload,
  };
};

export const setTheaterAction = (payload) => {
  return {
    type: SET_THEATER_LIST,
    payload,
  };
};

export const setPlayTimeAction = (payload) => {
  return {
    type: SET_PLAY_TIME,
    payload,
  };
};
