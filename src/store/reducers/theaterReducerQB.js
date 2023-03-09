import {
  SET_PLAY_TIME_QB,
  SET_THEATER_BRAND_LIST_QB,
  SET_THEATER_LIST_QB,
} from "../types/theaterTypesQB";

const DEFAULT_STATE = {
  theaterBrandList: [],
  theaterList: [],
  playTime: [],
};

export const theaterReducerQB = (state = DEFAULT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_THEATER_BRAND_LIST_QB:
      console.log("set theater brand");
      state.theaterBrandList = payload;

      break;
    case SET_THEATER_LIST_QB: {
      const idx = state.theaterBrandList.findIndex(
        (elem) => elem.maHeThongRap === payload
      );

      //get the theaterList based on the button clicked (refer to the api for more info)
      state.theaterList = state.theaterBrandList[idx].cumRapChieu;
      break;
    }
    case SET_PLAY_TIME_QB: {
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
