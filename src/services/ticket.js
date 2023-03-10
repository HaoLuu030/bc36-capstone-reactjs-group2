import { axiosRequest } from "../configs/axios.config";

export const createPlayScheduleApi = (information) => {
  return axiosRequest({
    url: "/QuanLyDatVe/TaoLichChieu",
    method: "POST",
    data: information,
  });
};
export const fetchTicketApi = (id) => {
  return axiosRequest({
    url: `/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`,
    method: "GET",
  });
};

export const bookTicketApi = (data) => {
  return axiosRequest({
    url: "/QuanLyDatVe/DatVe",
    method: "POST",
    data: data,
  });
};
