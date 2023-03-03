import { axiosRequest } from "../configs/axios.config";

export const fetchMovieList = () => {
  return axiosRequest({
    url: "/QuanLyPhim/LayDanhSachPhim?maNhom=GP03",
    method: "GET",
  });
};

export const fetchMovieDetailApi = (id) => {
  return axiosRequest({
    url: `/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
    method: "GET",
  });
};

export const fetchPlayingDetailApi = (information) => {
  return axiosRequest({
    url: `/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${information}`,
    method: "GET",
  });
};
