//React hook
import React, { useState } from "react";
//Ant design
import { UserOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, theme, notification } from "antd";
//React router
import { Outlet, NavLink, useLocation } from "react-router-dom";
//reducer
import { useSelector } from "react-redux";

import BreadCrumbsCustom from "../../components/breadCrumbs/BreadCrumbs";
import Admin from "../../pages/admin/Admin";

export default function AuthGuard() {
  const location = useLocation();
  //layout code --start
  const { Header, Content, Footer, Sider } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  //layout code --end
  const userState = useSelector((state) => state.userReducer);

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
            {location.pathname === "/admin" ? <Admin /> : <Outlet />}
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
