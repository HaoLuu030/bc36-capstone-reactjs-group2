import axios from "axios";
import { BASE_URL, TOKEN_CYBERSOFT } from "../constants";

export const fetchMovieList = () => {
  return axios({
    url: `${BASE_URL}/QuanLyPhim/LayDanhSachPhim?maNhom=GP03`,
    method: "GET",
    headers: {
      TokenCybersoft: TOKEN_CYBERSOFT,
    },
  });
};
