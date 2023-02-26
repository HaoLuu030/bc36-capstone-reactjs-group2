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
    url: "/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP03",
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

export const updateUserInfoApi = (information) => {
  return axiosRequest({
    url: "/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
    method: "PUT",
    data: information,
  });
};

export const fetchAccountInfoApi = () => {
  return axiosRequest({
    url: "/QuanLyNguoiDung/ThongTinTaiKhoan",
    method: "POST",
  });
};
