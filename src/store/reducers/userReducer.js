import { SET_USER_IFO } from "../types/userTypes";

const DEFAULT_STATE = {
  userInfo: null,
};

if (localStorage.getItem("USER_INFO_KEY")) {
  DEFAULT_STATE.userInfo = JSON.parse(localStorage.getItem("USER_INFO_KEY"));
}

export const userReducer = (state = DEFAULT_STATE, action) => {
  const { payload, type } = action;
  switch (type) {
    case SET_USER_IFO:
      state.DEFAULT_STATE = payload;
      break;

    default:
      break;
  }

  return { ...state };
};
