import { Breadcrumb, Layout, Menu, theme } from "antd";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
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
          }}
        />
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
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
};
export default AdminLayout;
