import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import "./index.scss";
import { loginApi } from "../../services/user";
import { useDispatch } from "react-redux";
import { setUserInfoAction } from "../../store/action/userAction";

const Login = () => {
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    try {
      await loginApi(values);
    } catch {
      alert("Sai TK hoặc mật khẩu");
    }
    const result = await loginApi(values);
    localStorage.setItem("USER_INFO_KEY", JSON.stringify(result.data.content));
    dispatch(setUserInfoAction(result.data.content));
    document
      .querySelector(".background-login-module")
      .classList.remove("active");
  };
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="taiKhoan"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="matKhau"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Login;
