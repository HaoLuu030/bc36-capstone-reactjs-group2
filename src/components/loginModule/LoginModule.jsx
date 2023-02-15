import { Tabs } from "antd";
import Login from "../login/Login";
import SignUp from "../signUp/SignUp";
import "./index.scss";
const LoginModule = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const handleCloseLoginModule = () => {
    document
      .querySelector(".background-login-module")
      .classList.remove("active");
  };
  const items = [
    {
      key: "1",
      label: `Đăng nhập`,
      children: <Login />,
    },
    {
      key: "2",
      label: `Đăng Ký`,
      children: <SignUp />,
    },
  ];
  return (
    <div className="background-login-module">
      <div
        onClick={handleCloseLoginModule}
        className="login-module-container"
      ></div>
      <Tabs
        className="login-module"
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
      />
    </div>
  );
};
export default LoginModule;
