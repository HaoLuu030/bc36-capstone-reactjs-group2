import React, { useEffect, useState } from "react";
import { Button, notification, Space, Table } from "antd";
import { deleteMovieApi, fetchMovieList } from "../../../../services/movie";
import { useNavigate } from "react-router-dom";

export default function MovieDtb() {
  const navigate = useNavigate();
  const [movieList, setMovieList] = useState([]);
  const getMovieList = async () => {
    const result = await fetchMovieList();
    setMovieList(result.data.content);
  };
  const handleEditButton = (id) => {
    navigate(`/admin/movie-management/edit-movie/${id}`);
  };
  const handleDeleteButton = async (id) => {
    if (window.confirm("Bạn có muốn xóa phim này không?")) {
      try {
        await deleteMovieApi(id);
        notification.success({
          message: "Xóa phim thành công!",
        });
        getMovieList();
      } catch (error) {
        notification.warning({
          message: error.response.data.content,
        });
      }
    }
  };
  const handleScheduleButton = (id) => {
    navigate(`/admin/movie-management/movie-playtime-schedule/${id}`);
  };
  useEffect(() => {
    getMovieList();
  }, []);
  //table code --start
  const columns = [
    {
      title: "Mã phim",
      dataIndex: "maPhim",
      key: "maPhim",
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      key: "hinhAnh",
      render: (text) => {
        return (
          <img style={{ width: "150px", height: "200px" }} src={text} alt="" />
        );
      },
    },
    {
      title: "Tên phim",
      dataIndex: "tenPhim",
      key: "tenPhim",
    },
    {
      title: "Mô tả",
      dataIndex: "moTa",
      key: "moTa",
      width: "500px",
    },
    {
      title: "Tác vụ",
      key: "tacVu",
      render: (_, record) => (
        <Space size="small">
          <Button
            onClick={() => {
              handleEditButton(record.maPhim);
            }}
            type="default"
            icon={<i className="fa fa-edit"></i>}
          ></Button>
          <Button
            onClick={() => {
              handleDeleteButton(record.maPhim);
            }}
            type="default"
            danger
            icon={<i className="fa fa-trash"></i>}
          ></Button>
          <Button
            onClick={() => {
              handleScheduleButton(record.maPhim);
            }}
            type="default"
            style={{ color: "green" }}
            icon={<i className="fa fa-calendar-alt"></i>}
          ></Button>
        </Space>
      ),
    },
  ];
  //table code --end
  return <Table bordered columns={columns} dataSource={movieList} />;
}
