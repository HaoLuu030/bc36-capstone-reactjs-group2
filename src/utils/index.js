import "moment/locale/vi";
import moment from "moment";

export const formatTimeDate = (time) => moment(time).locale("vi").format("L");

export const formatTimeDateFull = (time)  => moment(time).locale("vi").format("LLLL");

export const formatTimeDateDay = (time)  => moment(time).locale("vi").format("dddd");

export const formatTimeDateTim = (time)  => moment(time).locale("vi").format("LT");