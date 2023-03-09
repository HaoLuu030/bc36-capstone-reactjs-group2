import {
  SET_MOVIE_SCHEDULING_DETAIL_ST,
  SET_SCHEDULED_TIME_ST,
  SET_SELECTED_DATE_ST,
  SET_THEATER_BRAND_ST,
  SET_THEATER_ST,
} from "../types/theaterTypesST";

const DEFAULT_STATE = {
  movieSchedulingDetail: {},
  theaterList: [],
  scheduledTimeList: [],
  selectedDate: "",
  theaterBrand: {},
};

export const theaterReducerST = (state = DEFAULT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_MOVIE_SCHEDULING_DETAIL_ST:
      state.theaterList = [];
      state.scheduledTimeList = [];
      state.movieSchedulingDetail = payload;
      break;
    case SET_THEATER_ST: {
      state.scheduledTimeList = [];
      const idx = state.movieSchedulingDetail.heThongRapChieu.findIndex(
        (elem) => elem.maHeThongRap === payload
      );
      state.theaterList =
        state.movieSchedulingDetail.heThongRapChieu[idx].cumRapChieu;
      break;
    }
    case SET_SCHEDULED_TIME_ST: {
      state.scheduledTimeList = [];
      const idx = state.theaterList.findIndex(
        (elem) => elem.maCumRap === payload
      );
      state.scheduledTimeList = state.theaterList[idx].lichChieuPhim;
      break;
    }
    case SET_SELECTED_DATE_ST:
      state.selectedDate = payload;
      break;
    case SET_THEATER_BRAND_ST: {
      const idx = state.movieSchedulingDetail.heThongRapChieu.findIndex(
        (elem) => elem.maHeThongRap === payload
      );
      state.theaterBrand = state.movieSchedulingDetail.heThongRapChieu[idx];

      state.theaterList =
        state.movieSchedulingDetail.heThongRapChieu[idx].cumRapChieu;
      break;
    }

    default:
      break;
  }
  return { ...state };
};
