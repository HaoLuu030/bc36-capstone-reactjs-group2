import { SET_TRAILER_LINK } from "../types/movieTypes";

const DEFAULT_STATE = {
  trailerLink: "",
};

export const movieReducer = (state = DEFAULT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_TRAILER_LINK:
      state.trailerLink = payload;

      break;
    default:
      break;
  }

  return { ...state };
};
