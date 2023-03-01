import { set } from "lodash";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchTicketApi } from "../../services/ticket";
import Seat from "./components/Seat";
import "./index.scss";
import * as _ from 'lodash';

export default function Booking() {
  const [tickDetail, setTicketDetail] = useState({});
  const [selectedSeatList, setSelectedSeatList] = useState([]);

  const params = useParams();

  useEffect(() => {
    getTicketDetail();
  }, []);
  const getTicketDetail = async () => {
    const result = await fetchTicketApi(params.id);

    setTicketDetail(result.data.content);
  };

  const renderSeats = () => {
    return tickDetail?.danhSachGhe?.map((ele, idx) => {
      return (
        <React.Fragment>
          <Seat key={ele.maGhe} ele={ele} handleSelected={handleSelected} />
          {(idx + 1) % 16 === 0 && <br />}
        </React.Fragment>
      );
    });
  };

  const handleSelected = (seat) => {
    const data = [...selectedSeatList];
    const idx = data.findIndex((ele) => ele.maGhe === seat.maGhe);
    
    if (idx !== -1) {
      data.splice(idx, 1);
    } else {
      data.push(seat);
    }
  
    setSelectedSeatList(data);
  }
  useEffect(() => {
    console.log(selectedSeatList);
  }, [selectedSeatList]);
  return (
    <div className="container mx-5">
      <nav class="navbar justify-content-start">
        <Link className="text-dark text-decoration-none" to={`/`}>
          Trang chủ
        </Link>
        <Link
          className="text-dark mx-3 text-decoration-none"
          to={`/movie-detail/`}
        >
          Chi tiết
        </Link>
        <Link className="text-decoration-none">Đặt vé</Link>
      </nav>
      <div className="screen">
        <h2>MÀN HÌNH</h2>
      </div>
      <div className="row">
        <div className="col-8 mb-4">
          <div style={{ width: "95%" }} className="mx-auto">
            <ul className="choose-seat">
              <li className="booked">
                {" "}
                <i class="fa-solid fa-square"></i> Ghế đã chọn
              </li>
              <li className="not-booked">
                {" "}
                <i class="fa-solid fa-square"></i> Ghế trống
              </li>
              <li className="being-booking">
                {" "}
                <i class="fa-solid fa-square"></i> Ghế đang chọn
              </li>
              <li className="vip">
                {" "}
                <i class="fa-solid fa-square"></i> Ghế VIP
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-8">
          <div style={{ width: "95%" }} className="mx-auto">
            {renderSeats()}
          </div>
        </div>
        <div className="detail-booking col-lg-4">
          <img
            style={{ width: 200, height: 300, objectFit: "cover" }}
            src={tickDetail?.thongTinPhim?.hinhAnh}
            alt="#"
          />
          <h4 className="mb-0">
            Tên phim: {tickDetail?.thongTinPhim?.tenPhim}
          </h4>
          <div className="row">
            <div className="col-5">
              Ghế được chọn:
            </div>
            <div className="col-7 px-0">
              {selectedSeatList.map((ele) => {
                return (
                  <p key={ele.maGhe} className="badge badge-danger mr-2 mb-0">{ele.tenGhe}</p>
                )
              })}
              
            </div>
          </div>
          <h5>Tổng tiền: {_.sumBy(selectedSeatList, "giaVe").toLocaleString()} VND</h5>
          <button className="btn btn-success">ĐẶT VÉ</button>
        </div>
      </div>
    </div>
  );
}
