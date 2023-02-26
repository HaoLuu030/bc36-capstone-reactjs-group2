import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, message, notification, Table, Tag } from "antd";
import { useEffect, useState } from "react";
import {
  deleteUserInfo,
  fetchUserInfo,
  fetchUserListApi,
} from "../../services/user";
import UserForm from "./components/userForm/UserForm";

const UserManagement = () => {
  const [userList, setUserList] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [updatedAccount, setupdatedAccount] = useState({});
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
      render: (text) => {
        return (
          <>
            <Button
              className="button-update-user-info"
              onClick={() => {
                handleEditButton(text.taiKhoan);
              }}
              type="primary"
              icon={<EditOutlined />}
            ></Button>
            <Button
              onClick={() => {
                handleDeleteButton(text.taiKhoan);
              }}
              type="primary"
              danger
              icon={<DeleteOutlined />}
            ></Button>
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
  const openUserForm = () => {
    document.querySelector(".form-background").classList.add("active");
  };
  const handleAddButton = () => {
    openUserForm();
    setIsUpdating(false);
    setupdatedAccount({});
  };
  const getAccountInfo = async (accountName) => {
    const result = await fetchUserInfo(accountName);
    setupdatedAccount(result.data.content);
  };
  // it's hard to tell the difference between which button is clicked because of the component of ant design
  const handleEditButton = (accountName) => {
    openUserForm();
    setIsUpdating(true);
    getAccountInfo(accountName);
  };
  const handleDeleteButton = async (accountName) => {
    if (window.confirm("Bạn có muốn xóa người dùng này không?")) {
      try {
        await deleteUserInfo(accountName);
        notification.success({
          message: "Xóa thành công!",
        });
      } catch (error) {
        notification.warning({
          message: error.response.data.content,
        });
      }
    }
  };
  return (
    <>
      <Button onClick={handleAddButton} type="primary">
        Thêm
      </Button>
      <Table columns={columns} dataSource={userList} />
      <UserForm updatedAccount={updatedAccount} isUpdating={isUpdating} />
    </>
  );
};
export default UserManagement;
