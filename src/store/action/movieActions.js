import { SET_TRAILER_LINK } from "../types/movieTypes";

export const setTrailerLinkAction = (payload) => {
  return {
    type: SET_TRAILER_LINK,
    payload,
  };
};
