import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedDateAction } from "../../../../../../store/action/movieActions";
import dayjs from "dayjs";
import { DatePicker } from "antd";

export default function DatePickerCustom() {
  const dispatch = useDispatch();
  const movieState = useSelector((state) => state.movieReducer);
  const dateFormat = "DD/MM/YYYY";
  const handleChange = (_, dateString) => {
    console.log(dateString);
    dispatch(setSelectedDateAction(dateString));
  };
  return (
    <DatePicker
      allowClear={true}
      placeholder="Chọn ngày"
      onChange={handleChange}
      format={dateFormat}
    />
  );
}
