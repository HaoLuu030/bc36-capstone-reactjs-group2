import {
  SET_PLAY_TIME_QB,
  SET_THEATER_BRAND_LIST_QB,
  SET_THEATER_LIST_QB,
} from "../types/theaterTypesQB";

export const setTheaterBrandActionQB = (payload) => {
  return {
    type: SET_THEATER_BRAND_LIST_QB,
    payload,
  };
};

export const setTheaterListActionQB = (payload) => {
  return {
    type: SET_THEATER_LIST_QB,
    payload,
  };
};

export const setPlayTimeActionQB = (payload) => {
  return {
    type: SET_PLAY_TIME_QB,
    payload,
  };
};
