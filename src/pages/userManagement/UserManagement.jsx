import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Table, Tag } from "antd";
import { useEffect, useState } from "react";
import { fetchUserListApi } from "../../services/user";
import UserForm from "./components/userForm/UserForm";

const UserManagement = () => {
  const [userList, setUserList] = useState([]);
  const columns = [
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
      key: "taiKhoan",
    },
    {
      title: "Loại",
      key: "maLoaiNguoiDung",
      dataIndex: "maLoaiNguoiDung",
      render: (tag) => {
        let color = "";
        switch (tag) {
          case "QuanTri":
            color = "blue";
            break;
          case "KhachHang":
            color = "green";
            break;
        }
        return (
          <Tag color={color} key={tag}>
            {tag.toUpperCase()}
          </Tag>
        );
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Số điện thoại",
      dataIndex: "soDT",
      key: "soDT",
    },
    {
      title: "Tác vụ",
      key: "action",
      render: () => {
        return (
          <>
            <Button type="primary">
              <EditOutlined />
            </Button>
            <Button type="primary" danger>
              <DeleteOutlined />
            </Button>
          </>
        );
      },
    },
  ];
  const getUserList = async () => {
    const result = await fetchUserListApi();
    setUserList([...result.data.content]);
  };

  useEffect(() => {
    getUserList();
  }, []);
  //bring up the user form when clicking add or edit
  const handleOpenUserForm = () => {
    document.querySelector(".form-background").classList.add("active");
  };

  return (
    <>
      <Button onClick={handleOpenUserForm} type="primary">
        Thêm
      </Button>
      <Table columns={columns} dataSource={userList} />
      <UserForm />
    </>
  );
};
export default UserManagement;
