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
    method: "POST",
    data: information,
  });
};

export const fetchAccountInfoApi = () => {
  return axiosRequest({
    url: "/QuanLyNguoiDung/ThongTinTaiKhoan",
    method: "POST",
  });
};

export const fetchUserInfoApi = (information) => {
  return axiosRequest({
    url: `/QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${information}`,
    method: "POST",
  });
};

export const deleteUserInfoApi = (information) => {
  return axiosRequest({
    url: `/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${information}`,
    method: "DELETE",
  });
};

export const findUserApi = (information) => {
  return axiosRequest({
    url: `https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP03&tuKhoa=${information}`,
    method: "GET",
  });
};
