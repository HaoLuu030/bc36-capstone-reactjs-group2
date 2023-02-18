import React from "react";
import "./index.scss";

export default function Booking() {
  return (
    <div className="py-5">
        <div className="screen">
            <h2>MÀN HÌNH</h2>
        </div>
      <div className="row">
        <div className="col-8 mb-4">
          <div style={{ width: "95%" }} className="mx-auto">
            {/* <div className="mr-1 mb-1 d-inline-block p-2 rounded text-white bg-danger">
              Seats are booked
            </div>
            <div className="mr-1 mb-1 d-inline-block p-2 rounded text-white bg-success">
              Seats not booked
            </div>
            <div className="mr-1 mb-1 d-inline-block p-2 rounded text-white bg-primary">
              Seats are being booked
            </div>
            <div className="mr-1 mb-1 d-inline-block p-2 rounded text-white bg-warning">
              VIP seats
            </div> */}
            <ul className="choose-seat">
                <li>Seats are booked</li>
                <li>Seats not booked</li>
                <li>Seats are being booked</li>
                <li>Seats are being booked</li>
            </ul>
          </div>
        </div>
        <div className="col-8">
          <div style={{ width: "95%" }} className="mx-auto">
            <button style={{ width: 50, height: 50, padding: 0 }} className="mr-1 mb-1 btn btn-primary">02</button>
            
          </div>
        </div>
        <div className="col-4">
          <img
            style={{ width: 300, height: 400, objectFit: "cover" }}
            src="https://movienew.cybersoft.edu.vn/hinhanh/xa-ngoai-kia-noi-loai-tom-hat_gp03.jpg"
            alt="#"
          />
          <h4 className="mb-0">Xa ngoài kia noiw tôm hát</h4>
          <h5 className="mb-0">
            Number of seats:
            <div className="d-flex">
              <p className="badge badge-success mr-2 mb-0">13</p>
              <p className="badge badge-success mr-2 mb-0">14</p>
            </div>
          </h5>
          <h5>Total: 40000</h5>
          <button className="btn btn-warning">BOOK</button>
        </div>
      </div>
    </div>
  );
}
