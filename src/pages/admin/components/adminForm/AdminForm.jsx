import React, { useState, useContext } from "react";
import { Button, Form, Input, notification, Select, Popconfirm } from "antd";
import { useEffect } from "react";
import {
  fetchAccountInfoApi,
  updateUserInfoApi,
} from "../../../../services/user";
import "./index.scss";
import { useDispatch } from "react-redux";
import { updateUserInfoAction } from "../../../../store/action/userAction";
import { LoadingContext } from "../../../../contexts/loading/LoadingContext";

export default function AdminForm() {
  const dispatch = useDispatch();
  const [adminInfoState, setAdminInfoState] = useState({});
  const [_, setLoadingState] = useContext(LoadingContext);
  //confirm password value
  const [isChangePassword, setIsChangePassword] = useState(false);
  const { Option } = Select;
  const [form] = Form.useForm();
  //update info upon finishing the form
  const onFinish = async (values) => {
    try {
      await updateUserInfoApi(values);
      notification.success({
        message: "Cập nhật thông tin thành công!",
      });
      setAdminInfoState({ ...values, soDT: values.soDt });
      dispatch(updateUserInfoAction(values));
      form.resetFields();
      document.getElementById("admin-info-save").disabled = true;
    } catch (error) {
      notification.warning({
        message: error?.reponse?.data?.content,
      });
    }
  };
  //do this instead of taking info from local storage is because the object in local storage doesnt have password
  const getAccountInfo = async () => {
    setLoadingState({ isLoading: true });
    const result = await fetchAccountInfoApi();
    setAdminInfoState({ ...result.data.content });
    setLoadingState({ isLoading: false });
  };

  useEffect(() => {
    //get account information
    getAccountInfo();
  }, []);
  // initialValue prop only takes values when the form is initialized or reset =>  reset the form when api has updated the adminInfoState to fire the initial value
  useEffect(() => {
    //reset form when admin info is updated
    document.querySelector(".user-form").reset();
  }, [adminInfoState]);
  //handle input change
  const handleChange = (e) => {
    //enable confirm password input if user is changing the password
    if (e.target.id === "password-update") {
      setIsChangePassword(true);
    }
    //enable save button on input change
    document.getElementById("admin-info-save").disabled = false;
  };
  const handleReset = () => {
    form.resetFields();
    //disable confirm password field
    setIsChangePassword(false);
    document.getElementById("admin-info-save").disabled = true;
  };
  return (
    <div className="admin-info-form" style={{ width: "50%" }}>
      <div className="admin-info-form-wrapper">
        <Form
          //make the label stay on top of input field
          layout="vertical"
          className="user-form"
          form={form}
          name="normal-login"
          onFinish={onFinish}
          scrollToFirstError
          //hide the asterisk
          requiredMark={false}
        >
          <Form.Item className="mb-0">
            <Form.Item
              label="Chức vụ"
              initialValue={adminInfoState?.maLoaiNguoiDung}
              name="maLoaiNguoiDung"
              style={{
                display: "inline-block",
                width: "calc(50% - 8px)",
              }}
            >
              <Select placeholder="Chọn loại" disabled>
                <Option value="QuanTri">Quản trị viên</Option>
                <Option value="KhachHang">Khách hàng</Option>
              </Select>
            </Form.Item>
            <Form.Item
              initialValue={adminInfoState.maNhom}
              label="Nhóm"
              name="maNhom"
              style={{
                display: "inline-block",
                width: "calc(50% - 8px)",
                margin: "0 8px",
              }}
            >
              <Input disabled placeholder="GP03" />
            </Form.Item>
          </Form.Item>
          <Form.Item className="mb-0">
            <Form.Item
              style={{
                display: "inline-block",
                width: "calc(50% - 8px)",
              }}
              label="Họ tên"
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
              <Input placeholder="Nhập họ tên" onChange={handleChange} />
            </Form.Item>
            <Form.Item
              label="Tên tài khoản"
              initialValue={adminInfoState.taiKhoan}
              name="taiKhoan"
              style={{
                display: "inline-block",
                width: "calc(50% - 8px)",
                margin: "0 8px",
              }}
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tên tài khoản",
                  whitespace: true,
                },
              ]}
            >
              <Input
                disabled
                placeholder="Nhập tên tài khoản"
                onChange={handleChange}
              />
            </Form.Item>
            <Form.Item className="my-0">
              <Form.Item
                initialValue={adminInfoState.matKhau}
                label="Mật khẩu"
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
                <Input.Password
                  id="password-update"
                  placeholder="Nhập mật khẩu"
                  onChange={handleChange}
                />
              </Form.Item>

              <Form.Item
                label="Xác nhận mật khẩu"
                name="xacNhanMatKhau"
                dependencies={["matKhau"]}
                hasFeedback
                rules={[
                  {
                    required: isChangePassword,
                    message: "Vui lòng xác nhận mật khẩu",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("matKhau") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error("Mật khẩu không trùng khớp")
                      );
                    },
                  }),
                ]}
                style={{
                  display: "inline-block",
                  width: "calc(50% - 8px)",
                  margin: "0 8px",
                }}
              >
                <Input.Password
                  // disable when not changing password
                  disabled={!isChangePassword}
                  id="password-update-confirm"
                  placeholder="Nhập lại mật khẩu"
                />
              </Form.Item>
            </Form.Item>
          </Form.Item>
          <Form.Item className="my-0">
            <Form.Item
              style={{
                display: "inline-block",
                width: "calc(50% - 8px)",
              }}
              label="Email"
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
              <Input onChange={handleChange} placeholder="Nhập Email" />
            </Form.Item>
            <Form.Item
              label="Số điện thoại"
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
              <Input onChange={handleChange} placeholder="Nhập số điện thoại" />
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <Button
              className="mr-2"
              disabled={true}
              id="admin-info-save"
              type="primary"
              htmlType="submit"
            >
              Lưu
            </Button>
            <Popconfirm
              title="Reset Form"
              description="Bạn có muốn reset không?"
              onConfirm={handleReset}
              okText="Có"
              cancelText="Không"
            >
              <Button htmlType="button">Reset</Button>
            </Popconfirm>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
