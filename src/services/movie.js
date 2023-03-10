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

export const addMovieApi = (data) => {
  return axiosRequest({
    url: `/QuanLyPhim/ThemPhimUploadHinh`,
    method: "POST",
    data: data,
  });
};

export const editMovieApi = (data) => {
  return axiosRequest({
    url: `/QuanLyPhim/CapNhatPhimUpload`,
    method: "POST",
    data: data,
  });
};

export const deleteMovieApi = (id) => {
  return axiosRequest({
    url: `/QuanLyPhim/XP?MaPhim=${id}`,
    method: "DELETE",
  });
};
export const fetchPlayingDetailApi = (information) => {
  return axiosRequest({
    url: `/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${information}`,
    method: "GET",
  });
};
