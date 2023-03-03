import { axiosRequest } from "../configs/axios.config";

export const fetchMovieBanners = () => {
  return axiosRequest({
    url: "/QuanLyPhim/LayDanhSachBanner",
    method: "GET",
  });
};
