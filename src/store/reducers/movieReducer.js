import {
  SET_MOVIE_SCHEDULING_DETAIL,
  SET_SCHEDULED_TIME,
  SET_SELECTED_DATE,
  SET_THEATER,
  SET_TRAILER_LINK,
} from "../types/movieTypes";

const DEFAULT_STATE = {
  trailerLink: "",
  movieSchedulingDetail: {},
  theaterList: [],
  scheduledTimeList: [],
  selectedDate: "01/03/2023",
};

export const movieReducer = (state = DEFAULT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_TRAILER_LINK:
      state.trailerLink = payload;

      break;
    case SET_MOVIE_SCHEDULING_DETAIL:
      state.theaterList = [];
      state.scheduledTimeList = [];
      state.movieSchedulingDetail = payload;
    case SET_THEATER: {
      state.scheduledTimeList = [];
      const idx = state.movieSchedulingDetail.heThongRapChieu.findIndex(
        (elem) => elem.maHeThongRap === payload
      );
      state.theaterList =
        state.movieSchedulingDetail.heThongRapChieu[idx].cumRapChieu;
      break;
    }
    case SET_SCHEDULED_TIME: {
      state.scheduledTimeList = [];
      const idx = state.theaterList.findIndex(
        (elem) => elem.maCumRap === payload
      );
      state.scheduledTimeList = state.theaterList[idx].lichChieuPhim;
      break;
    }
    case SET_SELECTED_DATE:
      state.selectedDate = payload;
      break;

    default:
      break;
  }

  return { ...state };
};
