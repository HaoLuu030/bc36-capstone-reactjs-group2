import axios from "axios";
import { BASE_URL, TOKEN_CYBERSOFT } from "../constants";

export const loginApi = (information) => {
  return axios({
    url: `${BASE_URL}/QuanLyNguoiDung/DangNhap`,
    method: "POST",
    data: information,
    headers: {
      TokenCybersoft: TOKEN_CYBERSOFT,
    },
  });
};

export const signUpApi = (information) => {
  return axios({
    url: `${BASE_URL}/QuanLyNguoiDung/DangKy`,
    method: "POST",
    data: information,
    headers: {
      TokenCybersoft: TOKEN_CYBERSOFT,
    },
  });
};
