import axios from "axios";
import { BASE_URL, TOKEN_CYBERSOFT } from "../constants";

export const loginApi = (information) => {
  return axios({
    url: `${BASE_URL}/QuanLyNguoiDung/DangNhap`,
    method: "POST",
    data: information,
    headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
    }
  });
};
