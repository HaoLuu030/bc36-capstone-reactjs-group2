import React, { useState } from "react";
import { Button, Form, Input, Select } from "antd";
import { useSelector } from "react-redux";

export default function AdminInfoForm() {
  const userState = useSelector((state) => state.userReducer);
  const [adminInfoState, setAdminInfoState] = useState(userState.userInfo);
  console.log(adminInfoState);
  const { Option } = Select;
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <Form
      className="user-form"
      form={form}
      name="normal-login"
      onFinish={onFinish}
      scrollToFirstError
    >
      <Form.Item
        initialValue={adminInfoState.hoTen}
        name="hoTen"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập họ tên",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        initialValue={adminInfoState.email}
        name="email"
        rules={[
          {
            type: "email",
            message: "Email không đúng định dạng",
          },
          {
            required: true,
            message: "Vui lòng nhập email",
          },
        ]}
      >
        <Input placeholder="Nhập Email" />
      </Form.Item>
      <Form.Item style={{ marginBottom: "0" }}>
        <Form.Item
          initialValue={adminInfoState.taiKhoan}
          name="taiKhoan"
          style={{
            display: "inline-block",
            width: "calc(50% - 8px)",
          }}
          rules={[
            {
              required: true,
              message: "Vui lòng nhập tên tài khoản",
              whitespace: true,
            },
          ]}
        >
          <Input placeholder="Nhập tên tài khoản" />
        </Form.Item>
        <Form.Item
          initialValue={adminInfoState.soDT}
          name="soDt"
          style={{
            display: "inline-block",
            width: "calc(50% - 8px)",
            margin: "0 8px",
          }}
          rules={[
            {
              required: true,
              message: "Vui lòng nhập số điện thoại",
            },
          ]}
        >
          <Input placeholder="Nhập số điện thoại" />
        </Form.Item>
      </Form.Item>

      <Form.Item style={{ marginBottom: "0" }}>
        <Form.Item
          initialValue={adminInfoState.maLoaiNguoiDung}
          name="maLoaiNguoiDung"
          rules={[{ required: true, message: "Vui lòng chọn loại!" }]}
          style={{
            display: "inline-block",
            width: "calc(50% - 8px)",
          }}
        >
          <Select placeholder="Chọn loại">
            <Option value="QuanTri">Quản trị viên</Option>
            <Option value="KhachHang">Khách hàng</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="maNhom"
          style={{
            display: "inline-block",
            width: "calc(50% - 8px)",
            margin: "0 8px",
          }}
        >
          <Input disabled={true} placeholder="GP03" />
        </Form.Item>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Đăng ký
        </Button>
      </Form.Item>
    </Form>
  );
}
