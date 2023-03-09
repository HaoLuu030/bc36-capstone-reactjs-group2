import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSelectedDateActionST } from "../../../../../../store/action/theaterActionsST";
import { DatePicker } from "antd";

export default function DatePickerCustom() {
  const dispatch = useDispatch();
  const dateFormat = "DD/MM/YYYY";
  const handleChange = (_, dateString) => {
    dispatch(setSelectedDateActionST(dateString));
  };
  useEffect(() => {
    dispatch(setSelectedDateActionST(""));
  }, []);
  return (
    <DatePicker
      allowClear={true}
      placeholder="Tất cả các ngày"
      onChange={handleChange}
      format={dateFormat}
    />
  );
}
