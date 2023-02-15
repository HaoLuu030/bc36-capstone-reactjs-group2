import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, notification } from "antd";
import "./index.scss";
import { loginApi } from "../../services/user";
import { useDispatch } from "react-redux";
import { setUserInfoAction } from "../../store/action/userAction";

const Login = () => {
  const dispatch = useDispatch();
  //after clicking submit/login
  const onFinish = async (values) => {
    try {
      await loginApi(values);
    } catch (error) {
      notification.error({
        message: error.response.data.content,
      });
    }
    const result = await loginApi(values);
    localStorage.setItem("USER_INFO_KEY", JSON.stringify(result.data.content));
    dispatch(setUserInfoAction(result.data.content));
    document
      .querySelector(".background-login-module")
      .classList.remove("active");
    notification.success({
      message: "Đăng nhập thành công!",
    });
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
