import {
  DELETE_USER_INFO,
  SET_USER_INFO,
  UPDATE_USER_INFO,
} from "../types/userTypes";

const DEFAULT_STATE = {
  userInfo: null,
};

if (localStorage.getItem("USER_INFO_KEY")) {
  DEFAULT_STATE.userInfo = JSON.parse(localStorage.getItem("USER_INFO_KEY"));
}

export const userReducer = (state = DEFAULT_STATE, action) => {
  const { payload, type } = action;
  switch (type) {
    case SET_USER_INFO:
      state.userInfo = payload;
      break;
    case DELETE_USER_INFO:
      state.userInfo = null;
      break;
    case UPDATE_USER_INFO: {
      const { email, hoTen, maLoaiNguoiDung, maNhom, soDT, taiKhoan } = payload;
      const data = {
        ...state.userInfo,
        email,
        hoTen,
        maLoaiNguoiDung,
        maNhom,
        soDT,
        taiKhoan,
      };
      state.userInfo = data;
      localStorage.setItem("USER_INFO_KEY", JSON.stringify(data));
      break;
    }
    default:
      break;
  }

  return { ...state };
};
