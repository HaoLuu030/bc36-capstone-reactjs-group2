import { DELETE_USER_INFO, SET_USER_INFO } from "../types/userTypes";

export const setUserInfoAction = (payload) => {
  return {
    type: SET_USER_INFO,
    payload,
  };
};

export const deleteUserInfoAction = () => {
  return {
    type: DELETE_USER_INFO,
  };
};
