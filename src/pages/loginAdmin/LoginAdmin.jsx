import React from "react";
import { Button, Checkbox, Form, Input, notification } from "antd";
import "./index.scss";
import { loginApi } from "../../services/user";
import { useDispatch } from "react-redux";
import { setUserInfoAction } from "../../store/action/userAction";
import { useNavigate } from "react-router-dom";

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export default function LoginAdmin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      const result = await loginApi(values);
      localStorage.setItem(
        "USER_INFO_KEY",
        JSON.stringify(result.data.content)
      );
      dispatch(setUserInfoAction(result.data.content));
      if (result.data.content.maLoaiNguoiDung !== "QuanTri") {
        navigate("/");
        notification.warning({
          message: "Không đủ thẩm quyền truy cập",
        });
      }
    } catch (error) {
      notification.error({
        message: error.response.data.content,
      });
    }
  };
  return (
    <div className="container" style={{ width: "100vw", height: "100vh" }}>
      <div className="login-admin-form-inner">
        <div className="login-admin-form-wrapper">
          <Form
            className="login-admin-form"
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Tài khoản"
              name="taiKhoan"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tài khoản!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Mật khẩu"
              name="matKhau"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập mật khẩu!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
