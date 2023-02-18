import "moment/locale/vi";
import moment from "moment";

export const formatTimeDate = (time) => moment(time).locale("vi").format("L");
