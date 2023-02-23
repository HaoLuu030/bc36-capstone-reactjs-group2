import React from "react";
import { Button, Form, Input, Select } from "antd";

export default function AdminInfoForm() {
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
        name="hoTen"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập họ tên",
            whitespace: true,
          },
        ]}
      >
        <Input placeholder="Nhập Họ tên" />
      </Form.Item>
      <Form.Item
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
          name="matKhau"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập mật khẩu",
            },
          ]}
          hasFeedback
          style={{
            display: "inline-block",
            width: "calc(50% - 8px)",
          }}
        >
          <Input.Password placeholder="Nhập Mật khẩu" />
        </Form.Item>

        <Form.Item
          name="xacNhanMatKhau"
          dependencies={["matKhau"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Vui lòng xác nhận mật khẩu",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("matKhau") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Mật khẩu không trùng khớp"));
              },
            }),
          ]}
          style={{
            display: "inline-block",
            width: "calc(50% - 8px)",
            margin: "0 8px",
          }}
        >
          <Input.Password placeholder="Nhập lại mật khẩu" />
        </Form.Item>
      </Form.Item>

      <Form.Item style={{ marginBottom: "0" }}>
        <Form.Item
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
