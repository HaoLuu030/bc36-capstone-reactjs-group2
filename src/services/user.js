import { axiosRequest } from "../configs/axios.config";

export const loginApi = (information) => {
  return axiosRequest({
    url: "/QuanLyNguoiDung/DangNhap",
    method: "POST",
    data: information,
  });
};

export const signUpApi = (information) => {
  return axiosRequest({
    url: "/QuanLyNguoiDung/DangKy",
    method: "POST",
    data: information,
  });
};

export const fetchUserListApi = () => {
  return axiosRequest({
    url: "/QuanLyNguoiDung/LayDanhSachNguoiDung",
    method: "GET",
  });
};

export const addUserApi = (information) => {
  return axiosRequest({
    url: "/QuanLyNguoiDung/ThemNguoiDung",
    method: "POST",
    data: information,
  });
};
