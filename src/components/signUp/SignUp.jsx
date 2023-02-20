import { Button, Checkbox, Form, Input, notification } from "antd";
import { signUpApi } from "../../services/user";
import "./index.scss";
// const formItemLayout = {
//   wrapperCol: {
//     span: 24,
//     offset: 0,
//   },
// };

const SignUp = () => {
  const [form] = Form.useForm();
  //on submit
  const onFinish = async (values) => {
    const { email, hoTen, matKhau, soDt, taiKhoan } = values;
    console.log({ email, hoTen, matKhau, soDt, taiKhoan, maNhom: "GP03" });
    try {
      await signUpApi({
        taiKhoan,
        matKhau,
        email,
        soDt,
        maNhom: "GP03",
        hoTen,
      });
      notification.success({
        message: "Đăng ký thành công!",
      });
    } catch (error) {
      notification.error({
        message: error.response.data.content,
      });
    }
  };
  return (
    <Form
      // {...formItemLayout}
      className="sign-up-form"
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

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(
                    new Error("Vui lòng chọn đồng ý với điều khoản sử dụng")
                  ),
          },
        ]}
        // {...formItemLayout}
      >
        <Checkbox>
          Tôi đồng ý với <a href="">điều khoản sử dụng</a>
        </Checkbox>
      </Form.Item>
      <Form.Item>
        <Button
          className="sign-up-form-button"
          type="primary"
          htmlType="submit"
        >
          Đăng ký
        </Button>
      </Form.Item>
    </Form>
  );
};
export default SignUp;
