import axios from "axios";
import { BASE_URL } from "../constants";
import { TOKEN_CYBERSOFT } from "../constants";

export const fetchMovieBanners = () => {
  return axios({
    url: `${BASE_URL}/QuanLyPhim/LayDanhSachBanner`,
    method: "GET",
    headers: {
      TokenCybersoft: `${TOKEN_CYBERSOFT}`,
    },
  });
};
