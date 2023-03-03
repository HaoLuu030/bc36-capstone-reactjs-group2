import { axiosRequest } from "../configs/axios.config";

export const fetchTheaterBrandApi = () => {
  return axiosRequest({
    url: "/QuanLyRap/LayThongTinHeThongRap",
    method: "GET",
  });
};

export const fetchTheaterApi = (theaterBrandId) => {
  return axiosRequest({
    url: `/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${theaterBrandId}`,
    method: "GET",
  });
};
