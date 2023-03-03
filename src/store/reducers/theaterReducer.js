import {
  SET_PLAY_TIME,
  SET_THEATER_BRAND_LIST,
  SET_THEATER_LIST,
} from "../types/theaterTypes";

const DEFAULT_STATE = {
  theaterBrandList: [],
  theaterList: [],
  playTime: [],
};

export const theaterReducer = (state = DEFAULT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_THEATER_BRAND_LIST:
      state.theaterBrandList = payload;
      break;
    case SET_THEATER_LIST: {
      const idx = state.theaterBrandList.findIndex(
        (elem) => elem.maHeThongRap === payload
      );
      //get the theaterList based on the button clicked (refer to the api for more info)
      state.theaterList = state.theaterBrandList[idx].cumRapChieu;
      break;
    }
    case SET_PLAY_TIME: {
      const idx = state.theaterList.findIndex(
        (elem) => elem.maCumRap === payload
      );
      state.playTime = state.theaterList[idx].lichChieuPhim;
      break;
    }
    default:
      break;
  }

  return { ...state };
};
