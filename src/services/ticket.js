import axios from "axios";
import { BASE_URL, TOKEN_CYBERSOFT } from "../constants";
export const fetchTicketApi = (id) => {
  return axios({
    url: `${BASE_URL}/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`,
    method: "GET",
    headers: {
      TokenCybersoft: TOKEN_CYBERSOFT,
    },
  });
};
