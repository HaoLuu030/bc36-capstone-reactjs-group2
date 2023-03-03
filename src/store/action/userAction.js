import {
  DELETE_USER_INFO,
  SET_USER_INFO,
  UPDATE_USER_INFO,
} from "../types/userTypes";

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

export const updateUserInfoAction = (payload) => {
  return {
    type: UPDATE_USER_INFO,
    payload,
  };
};
