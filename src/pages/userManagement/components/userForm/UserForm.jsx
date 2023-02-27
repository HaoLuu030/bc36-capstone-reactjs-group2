import React, { useEffect, useState } from "react";
import { Button, Form, Input, notification, Select, Popconfirm } from "antd";
import "./index.scss";
import { addUserApi, updateUserInfoApi } from "../../../../services/user";
export default function UserForm(props) {
  const { Option } = Select;
  const [form] = Form.useForm();
  const [isChangePassword, setIsChangePassword] = useState(false);
  //close the form pop up when clicked outside the form
  document.querySelector(".form-inner")?.addEventListener("click", function () {
    document.querySelector(".form-background").classList.remove("active");
  });
  const onFinish = async (values) => {
    // add user
    if (!props.isUpdating) {
      try {
        values.maNhom = "GP03";
        await addUserApi(values);
        notification.success({
          message: "Thêm thành công",
        });
        document.querySelector(".form-background").classList.remove("active");
        props.getUserList();
      } catch (error) {
        notification.warning({
          message: error.response.data.content,
        });
      }
    }
    // update user
    else {
      try {
        await updateUserInfoApi(values);
        notification.success({
          message: "Cập nhật thông tin thành công!",
        });
        form.resetFields();
        document.querySelector(".form-background").classList.remove("active");
        props.getUserList();
      } catch (error) {
        notification.warning({
          message: error.reponse.data.content,
        });
      }
    }
  };
  const handleReset = () => {
    form.resetFields();
    setIsChangePassword(false);
    document.getElementById("update-info-save").disabled = true;
    notification.success({
      message: "Reset thành công!",
    });
  };
  useEffect(() => {
    form.resetFields();
  }, [props.updatedAccount]);
  const { hoTen, email, matKhau, maLoaiNguoiDung, soDT, taiKhoan } =
    props.updatedAccount || {};
  const handleChange = (e) => {
    if (e.target.id === "button-update-password") {
      setIsChangePassword(true);
    }
    document.getElementById("update-info-save").disabled = false;
  };
  return (
    <div className="form-background">
      <div className="form-inner"></div>
      <div className="form-wrapper">
        <h4> {props.isUpdating ? "Cập nhật thông tin" : "Thêm người dùng"}</h4>
        <Form
          className="user-form"
          form={form}
          name="normal-login"
          onFinish={onFinish}
          scrollToFirstError
        >
          <Form.Item
            initialValue={hoTen}
            name="hoTen"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập họ tên",
                whitespace: true,
              },
            ]}
          >
            <Input onChange={handleChange} placeholder="Nhập Họ tên" />
          </Form.Item>
          <Form.Item
            initialValue={email}
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
          <Form.Item className="my-0">
            <Form.Item
              initialValue={taiKhoan}
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
              <Input
                disabled={props.isUpdating}
                placeholder="Nhập tên tài khoản"
              />
            </Form.Item>
            <Form.Item
              initialValue={soDT}
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

          <Form.Item style={{ marginBottom: "0" }}>
            <Form.Item
              initialValue={matKhau}
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
                id="button-update-password"
                onChange={handleChange}
                placeholder="Nhập Mật khẩu"
              />
            </Form.Item>

            <Form.Item
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
                disabled={!isChangePassword}
                placeholder="Nhập lại mật khẩu"
              />
            </Form.Item>
          </Form.Item>

          <Form.Item className="my-0">
            <Form.Item
              initialValue={maLoaiNguoiDung}
              name="maLoaiNguoiDung"
              rules={[{ required: true, message: "Vui lòng chọn loại!" }]}
              style={{
                display: "inline-block",
                width: "calc(50% - 8px)",
              }}
            >
              <Select onChange={handleChange} placeholder="Chọn loại">
                <Option value="QuanTri">Quản trị viên</Option>
                <Option value="KhachHang">Khách hàng</Option>
              </Select>
            </Form.Item>
            <Form.Item
              initialValue="GP03"
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
            {props.isUpdating ? (
              <Button
                disabled
                id="update-info-save"
                type="primary"
                htmlType="submit"
              >
                Cập nhật
              </Button>
            ) : (
              <Button type="primary" htmlType="submit">
                Thêm
              </Button>
            )}
            <Popconfirm
              title="Reset form"
              description="Bạn có muốn reset form không?"
              onConfirm={handleReset}
              okText="Có"
              cancelText="Không"
            >
              <Button htmlType="button" type="primary" danger className="mr-5">
                Reset
              </Button>
            </Popconfirm>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
