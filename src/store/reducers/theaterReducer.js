import {
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
      console.log(state.theaterList);
      break;
    }
    default:
      break;
  }

  return { ...state };
};
