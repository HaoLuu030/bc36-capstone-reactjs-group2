import React, { useEffect } from "react";
import {
  Button,
  DatePicker,
  Form,
  Input,
  Radio,
  Switch,
  Image,
  Divider,
  notification,
} from "antd";
import { useState } from "react";
import { Rate } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import {
  addMovieApi,
  editMovieApi,
  fetchMovieDetailApi,
} from "../../services/movie";
import { useForm } from "antd/es/form/Form";
import moment from "moment";
import { useSelector } from "react-redux";

const { TextArea } = Input;
export default function MovieForm() {
  const navigate = useNavigate();
  const params = useParams();
  const [file, setFile] = useState();
  const [imagePreview, setImagePreview] = useState();
  //movie-form --start
  const [form] = useForm();
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const onFinish = async (values) => {
    values.ngayKhoiChieu = values.ngayKhoiChieu.format("DD/MM/YYYY");
    let formData = new FormData();
    formData.append("maNhom", "GP03");
    formData.append("tenPhim", values.tenPhim);
    formData.append("moTa", values.moTa);
    formData.append("trailer", values.trailer);
    formData.append("ngayKhoiChieu", values.ngayKhoiChieu);
    formData.append("sapChieu", values.sapChieu);
    formData.append("dangChieu", values.dangChieu);
    formData.append("hot", values.hot);
    formData.append("danhGia", values.danhGia);
    file && formData.append("File", file, file.name);
    if (params.id) {
      try {
        formData.append("maPhim", params.id);
        await editMovieApi(formData);
        notification.success({
          message: "Cập nhật thành công",
        });
        navigate("/admin/movie-management");
      } catch (error) {
        notification.warning({
          message: error.response.data.content,
        });
      }
    } else {
      try {
        await addMovieApi(formData);
        notification.success({
          message: "Thêm phim thành công",
        });
        navigate("/admin/movie-management");
      } catch (error) {
        notification.warning({
          message: error.response.data.content,
        });
      }
    }
  };
  //movie-form --end
  const getMovieDetail = async () => {
    const result = await fetchMovieDetailApi(params.id);
    const {
      tenPhim,
      trailer,
      moTa,
      ngayKhoiChieu,
      dangChieu,
      sapChieu,
      hot,
      danhGia,
      hinhAnh,
    } = result.data.content;
    form.setFieldsValue({
      tenPhim,
      trailer,
      moTa,
      ngayKhoiChieu: moment(ngayKhoiChieu),
      dangChieu,
      sapChieu,
      hot,
      danhGia,
    });
    setImagePreview(hinhAnh);
  };
  useEffect(() => {
    if (params.id) {
      getMovieDetail();
    } else {
      form.resetFields();
      setFile("");
      setImagePreview("");
    }
  }, [params.id]);
  const handleFile = (event) => {
    setFile(event.target.files[0]);
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event) => {
      setImagePreview(event.target.result);
    };
  };
  return (
    <>
      <h4>{params.id ? "Cập nhật phim" : "Thêm phim"}</h4>
      <Divider />
      <Form
        form={form}
        onFinish={onFinish}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
          tenPhim: "",
          trailer: "",
          moTa: "",
          ngayKhoiChieu: "",
          dangChieu: true,
          sapChieu: true,
          hot: true,
          danhGia: 10,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
        style={{
          maxWidth: 700,
        }}
      >
        <Form.Item label="Cỡ form" name="size">
          <Radio.Group>
            <Radio.Button value="small">Nhỏ</Radio.Button>
            <Radio.Button value="default">Vừa</Radio.Button>
            <Radio.Button value="large">To</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Tên phim" name="tenPhim">
          <Input />
        </Form.Item>
        <Form.Item label="Trailer" name="trailer">
          <Input />
        </Form.Item>
        <Form.Item label="Mô tả" name="moTa">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Ngày khởi chiếu" name="ngayKhoiChieu">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Đang chiếu" valuePropName="checked" name="dangChieu">
          <Switch />
        </Form.Item>
        <Form.Item label="Sắp chiếu" valuePropName="checked" name="sapChieu">
          <Switch />
        </Form.Item>
        <Form.Item label="Hot" valuePropName="checked" name="hot">
          <Switch />
        </Form.Item>
        <Form.Item label="Đánh giá" name="danhGia">
          <Rate allowHalf count={10} />
        </Form.Item>
        <Form.Item label="Tải hình" valuePropName="fileList" name="hinhAnh">
          <Input type="file" onChange={handleFile} />
        </Form.Item>
        <Form.Item>
          <Image src={imagePreview} />
        </Form.Item>
        <Form.Item>
          {params.id ? (
            <Button htmlType="submit">Lưu</Button>
          ) : (
            <Button htmlType="submit">Thêm</Button>
          )}
        </Form.Item>
      </Form>
    </>
  );
}
