import { axiosRequest } from "../configs/axios.config";

export const createPlayScheduleApi = (information) => {
  return axiosRequest({
    url: "/QuanLyDatVe/TaoLichChieu",
    method: "POST",
    data: information,
  });
};
