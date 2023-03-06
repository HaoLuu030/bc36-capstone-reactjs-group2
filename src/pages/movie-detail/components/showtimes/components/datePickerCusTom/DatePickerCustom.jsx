import React from "react";
import { useDispatch} from "react-redux";
import { setSelectedDateAction } from "../../../../../../store/action/movieActions";
import { DatePicker } from "antd";

export default function DatePickerCustom() {
  const dispatch = useDispatch();
  const dateFormat = "DD/MM/YYYY";
  const handleChange = (_, dateString) => {
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
