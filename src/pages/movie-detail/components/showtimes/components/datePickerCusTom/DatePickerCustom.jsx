//custem moment because ant design datePicker only works with day js
import momentGenerateConfig from "rc-picker/lib/generate/moment";
import generatePicker from "antd/es/date-picker/generatePicker";
//custom moment --end
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { setSelectedDateAction } from "../../../../../../store/action/movieActions";

export default function DatePickerCustom() {
  const dispatch = useDispatch();
  //custom moment
  const DatePicker = generatePicker(momentGenerateConfig);
  const movieState = useSelector((state) => state.movieReducer);
  const dateFormat = "DD/MM/YYYY";
  const handleChange = (_, dateString) => {
    dispatch(setSelectedDateAction(dateString));
  };
  return (
    <DatePicker
      allowClear={false}
      defaultValue={moment(movieState.selectedDate, dateFormat)}
      placeholder="Chọn ngày"
      onChange={handleChange}
      format={dateFormat}
    />
  );
}
