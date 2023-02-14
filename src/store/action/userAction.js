import { SET_USER_IFO } from "../types/userTypes";

export const setUserInfoAction = (payload) => {
  return {
    type: SET_USER_IFO,
    payload,
  };
};
