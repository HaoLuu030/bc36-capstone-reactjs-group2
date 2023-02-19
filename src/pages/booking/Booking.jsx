import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchTicketApi } from "../../services/ticket";
import Seat from "./components/Seat";
import "./index.scss";

export default function Booking() {
    const [tickDetail, setTicketDetail] = useState({});
    const params = useParams();
    useEffect(() => {
        getTicketDetail();
    }, []);
    const getTicketDetail = async () => {
        const result = await fetchTicketApi(params.id);
        setTicketDetail(result.data.content);
    }

    const renderSeats = () => {
        return tickDetail?.danhSachGhe?.map((ele) => {
          return (
            <Seat key={ele.maGhe} ele={ele} />
          );
        });
      };


  return (
    <div className="py-5">
        <div className="screen">
            <h2>MÀN HÌNH</h2>
        </div>
      <div className="row">
        <div className="col-8 mb-4">
          <div style={{ width: "95%" }} className="mx-auto">
            <ul className="choose-seat">
                <li className="booked"> <i class="fa-solid fa-square"></i> Ghế đã chọn</li>
                <li className="not-booked"> <i class="fa-solid fa-square"></i> Ghế trống</li>
                <li className="being-booking"> <i class="fa-solid fa-square"></i> Ghế đang chọn</li>
                <li className="vip"> <i class="fa-solid fa-square"></i> Ghế VIP</li>
            </ul>
          </div>
        </div>
        <div className="col-8">
          <div style={{ width: "95%" }} className="mx-auto">
            {renderSeats()}
            
          </div>
        </div>
        <div className="detail-booking col-4">
          <img
            style={{ width: 300, height: 400, objectFit: "cover" }}
            src="https://movienew.cybersoft.edu.vn/hinhanh/xa-ngoai-kia-noi-loai-tom-hat_gp03.jpg"
            alt="#"
          />
          <h4 className="mb-0">Tên phim: Xa ngoài kia nơi loài tôm hát</h4>
          <h5 className="mb-0">
            Ghế được chọn:
            <div className="d-flex">
              <p className="badge badge-danger mr-2 mb-0">13</p>
              <p className="badge badge-danger mr-2 mb-0">14</p>
            </div>
          </h5>
          <h5>Tổng tiền: 40000</h5>
          <button className="btn btn-success">ĐẶT VÉ</button>
        </div>
      </div>
    </div>
  );
}
