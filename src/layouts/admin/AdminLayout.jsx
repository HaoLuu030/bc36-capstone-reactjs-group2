//React hook
import React, { useEffect, useState } from "react";
//Ant design
import { UserOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, theme, notification } from "antd";
//React router
import { Outlet, useNavigate, NavLink } from "react-router-dom";
//reducer
import { useSelector } from "react-redux";

import BreadCrumbsCustom from "../../components/breadCrumbs/BreadCrumbs";

export default function AuthGuard() {
  //layout code --start
  const { Header, Content, Footer, Sider } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  //layout code --end
  const userState = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  //authentication --start
  useEffect(() => {
    if (!userState.userInfo) {
      notification.warning({
        message: "Vui lòng đăng nhập để vào trang",
      });
      navigate("/");
    } else if (userState.userInfo.maLoaiNguoiDung !== "QuanTri") {
      notification.warning({
        message: "Không đủ thẩm quyền truy cập",
      });
      navigate("/");
    }
  }, []);
  //authentication --end
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          className="logo"
          style={{
            height: 32,
            margin: 16,
            marginBottom: "50px",
          }}
        >
          <img
            src="/logo_white.png"
            alt="logo"
            style={{
              width: "100%",
            }}
          />
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["user-management"]}
          mode="inline"
          forceSubMenuRender={true}
        >
          <Menu.SubMenu key="user" title="Người dùng">
            <Menu.Item key="user-management">
              <NavLink to="/admin/user-management">Quản lý người dùng</NavLink>
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            justifyContent: "end",
          }}
        >
          {" "}
          <div className="user-module d-flex text-dark align-items-center">
            <UserOutlined />
            {/* the question mark is to avoid error the first time the page is loaded */}

            <p style={{ lineHeight: "100%" }}>
              Xin chào, {userState?.userInfo?.hoTen}
            </p>
            <Button type="primary" danger>
              Đăng xuất
            </Button>
          </div>
        </Header>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <BreadCrumbsCustom />
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}
