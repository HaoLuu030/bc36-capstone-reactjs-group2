//form
import UserForm from "./components/userForm/UserForm";
//react hooks
import { useEffect, useState } from "react";
//API
import {
  deleteUserInfoApi,
  fetchUserInfoApi,
  fetchUserListApi,
  findUserApi,
} from "../../services/user";
//ant design components
import { message, Popconfirm } from "antd";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, notification, Table, Tag, Input } from "antd";

const UserManagement = () => {
  const currentUser = JSON.parse(localStorage.getItem("USER_INFO_KEY"));
  const [userList, setUserList] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [updatedAccount, setupdatedAccount] = useState({});
  //confirm popUp code: for delete button
  const handleDeleteButon = async (accountName) => {
    try {
      await deleteUserInfoApi(accountName);
      notification.success({
        message: "Xóa thành công!",
      });
      getUserList();
    } catch (error) {
      notification.warning({
        message: error.response.data.content,
      });
    }
  };
  // cancel action
  const cancel = () => {
    message.error("Đã hủy tác vụ");
  };
  //table columns
  const columns = [
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
      key: "taiKhoan",
    },
    {
      title: "Loại",
      filters: [
        { text: "Khách hàng", value: "KhachHang" },
        { text: "Quản trị viên", value: "QuanTri" },
      ],
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
          default:
            break;
        }
        return (
          <Tag color={color} key={tag}>
            {tag.toUpperCase()}
          </Tag>
        );
      },
      onFilter: (value, record) => record.maLoaiNguoiDung.indexOf(value) === 0,
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
      render: (user) => {
        return (
          <>
            <Button
              className="button-update-user-info"
              onClick={() => {
                handleEditButton(user.taiKhoan);
              }}
              type="primary"
              icon={<EditOutlined />}
            ></Button>
            <Popconfirm
              title="Xóa người dùng"
              description="Bạn có muốn xóa người dùng này không?"
              onConfirm={() => {
                handleDeleteButon(user.taiKhoan);
              }}
              onCancel={cancel}
              okText="Có"
              cancelText="Không"
            >
              <Button type="primary" danger icon={<DeleteOutlined />}></Button>
            </Popconfirm>
          </>
        );
      },
    },
  ];
  const getUserList = async () => {
    const result = await fetchUserListApi();
    //filter out current user's name
    const filteredList = result.data.content.filter(
      (elem) => elem.taiKhoan !== currentUser.taiKhoan
    );
    setUserList(filteredList);
  };
  // get userList the first time the page is loaded
  useEffect(() => {
    getUserList();
  }, []);
  const getAccountInfo = async (accountName) => {
    const result = await fetchUserInfoApi(accountName);
    setupdatedAccount(result.data.content);
  };
  const openUserForm = () => {
    document.querySelector(".form-background").classList.add("active");
  };
  const handleAddButton = () => {
    openUserForm();
    setIsUpdating(false);
    setupdatedAccount({});
  };
  const handleEditButton = (accountName) => {
    openUserForm();
    setIsUpdating(true);
    getAccountInfo(accountName);
  };
  //search box --start
  const { Search } = Input;
  const onSearch = async (value) => {
    const result = await findUserApi(value);
    setUserList(result.data.content);
  };
  // search box --end
  return (
    <>
      <div className="d-flex justify-content-end mb-3">
        <Search
          placeholder="Nhập Sđt hoặc tài khoản"
          onSearch={onSearch}
          style={{
            width: 200,
          }}
        />
        <Button
          onClick={getUserList}
          icon={<i className="fa fa-sync"></i>}
          type="primary"
          className="ml-1"
        ></Button>
        <Button
          className="ml-1"
          onClick={handleAddButton}
          type="primary"
          icon={<i className="fa fa-plus"></i>}
        ></Button>
      </div>
      <Table columns={columns} dataSource={userList} />
      <UserForm
        getUserList={getUserList}
        updatedAccount={updatedAccount}
        isUpdating={isUpdating}
      />
    </>
  );
};
export default UserManagement;
