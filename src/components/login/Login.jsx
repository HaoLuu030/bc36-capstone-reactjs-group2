import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, notification } from "antd";
import "./index.scss";
import { loginApi } from "../../services/user";
import { useDispatch } from "react-redux";
import { setUserInfoAction } from "../../store/action/userAction";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //after clicking submit/login
  const onFinish = async (values) => {
    try {
      const result = await loginApi(values);
      localStorage.setItem(
        "USER_INFO_KEY",
        JSON.stringify(result.data.content)
      );
      dispatch(setUserInfoAction(result.data.content));
      //turn off login module if the one logged in is the user
      if (result.data.content.maLoaiNguoiDung === "KhachHang") {
        document
          .querySelector(".background-login-module")
          .classList.remove("active");
      }
      // navigate to admin if the one logged in is admin
      else {
        navigate("/admin/user-managment");
      }
      notification.success({
        message: "Đăng nhập thành công!",
      });
    } catch (error) {
      notification.error({
        message: error.response.data.content,
      });
    }
  };
  return (
    <Form
      name="normal_login"
      className="login-form login-form-movie"
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
            message: "Vui lòng nhập tài khoản",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Tài khoản"
        />
      </Form.Item>
      <Form.Item
        name="matKhau"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập mật khẩu",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Mật khẩu"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Đăng nhập
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Login;
