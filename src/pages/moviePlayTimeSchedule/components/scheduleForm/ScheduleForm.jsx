import React, { useEffect, useState } from "react";
import {
  Button,
  DatePicker,
  Form,
  InputNumber,
  notification,
  Select,
  TimePicker,
} from "antd";
import {
  fetchTheaterApi,
  fetchTheaterBrandApi,
} from "../../../../services/theater";
import { useNavigate, useParams } from "react-router-dom";
import { createPlayScheduleApi } from "../../../../services/ticket";

export default function ScheduleForm() {
  const navigate = useNavigate();
  const params = useParams();
  const [form] = Form.useForm();
  const [theaterBrandList, setTheaterBrandList] = useState([]);
  const [theaterList, setTheaterList] = useState([]);
  const getTheaterBrand = async () => {
    const result = await fetchTheaterBrandApi();
    setTheaterBrandList(result.data.content);
  };
  const renderTheaterBrand = () => {
    return theaterBrandList.map((elem) => {
      return (
        <Select.Option value={elem.maHeThongRap} key={elem.maHeThongRap}>
          {elem.tenHeThongRap}
        </Select.Option>
      );
    });
  };
  const renderTheaterList = () => {
    return theaterList.map((elem) => {
      return (
        <Select.Option value={elem.maCumRap} key={elem.maCumRap}>
          {elem.tenCumRap}
        </Select.Option>
      );
    });
  };
  const handleTheaterBrandChange = async (id) => {
    form.setFieldValue("maRap", null);
    const result = await fetchTheaterApi(id);
    setTheaterList(result.data.content);
  };

  const onFinish = async (values) => {
    try {
      const ngayChieuGioChieu =
        values.ngayChieu.format("DD/MM/YYYY") +
        " " +
        values.gioChieu.format("hh:mm:ss");
      values.maRap = values.maRap.toString();
      await createPlayScheduleApi({
        ...values,
        maPhim: params.id,
        ngayChieuGioChieu,
      });
      notification.success({
        message: "Tạo lịch chiếu thành công",
      });
      navigate("/admin/movie-management");
    } catch (error) {
      notification.warning({
        message: error?.response?.data.content,
      });
    }
  };
  useEffect(() => {
    getTheaterBrand();
  }, []);

  return (
    <Form
      onFinish={onFinish}
      form={form}
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="vertical"
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item
        label="Hệ thống rạp"
        name="heThongRap"
        rules={[
          {
            required: true,
            message: "Vui lòng chọn hệ thống rạp",
          },
        ]}
      >
        <Select
          placeholder="Chọn hệ thống rạp"
          onChange={handleTheaterBrandChange}
        >
          {renderTheaterBrand()}
        </Select>
      </Form.Item>
      <Form.Item
        label="Cụm rạp"
        name="maRap"
        rules={[
          {
            required: true,
            message: "Vui lòng chọn cụm rạp",
          },
        ]}
      >
        <Select placeholder="Chọn cụm rạp">{renderTheaterList()}</Select>
      </Form.Item>
      <Form.Item
        label="Ngày chiếu"
        name="ngayChieu"
        rules={[
          {
            required: true,
            message: "Vui lòng chọn ngày chiếu",
          },
        ]}
      >
        <DatePicker allowClear={false} />
      </Form.Item>
      <Form.Item
        label="Giờ chiếu"
        name="gioChieu"
        rules={[
          {
            required: true,
            message: "Vui lòng chọn giờ chiếu",
          },
        ]}
      >
        <TimePicker format="hh:mm:ss" allowClear={false} />
      </Form.Item>
      <Form.Item
        label="Giá vé"
        name="giaVe"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập giá vé",
          },
          {
            min: 75000,
            max: 200000,
            type: "number",
            message: `Giá vé chỉ từ 25000 đến 500000`,
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit">Đặt lịch chiếu</Button>
      </Form.Item>
    </Form>
  );
}
