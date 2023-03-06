import axios from "axios";
import { BASE_URL, TOKEN_CYBERSOFT } from "../constants";

export const fetchMovieShowtimesApi = (id) => {
    return axios ({
        url: `${BASE_URL}/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`,
        method: "GET",
        headers: {
            TokenCybersoft: TOKEN_CYBERSOFT,
        }
    })
}