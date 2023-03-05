import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { fetchMovieDetailApi } from "../../../../services/movie";
import Trailer from "../../../../components/trailer/Trailer";
import "./index.scss";
import Showtimes from "../showtimes/Showtimes";

export default function Detail(props) {
  const [movieDetail, setMovieDetail] = useState({});
  const params = useParams();
  useEffect(() => {
    getMovieDetail();
  }, []);

  const getMovieDetail = async () => {
    const result = await fetchMovieDetailApi(params.id);
    setMovieDetail(result.data.content);
  };

  // const handleBooking = () => {
  //   navigate(`/booking/${props.maPhim}`)
  // }
  return (
    <div className="movie-detail">
      <div className="container">
        {" "}
        <div key={props.maPhim} className="row">
          <div className="img-container col-12 col-lg-4 d-flex justify-content-center">
            <img width={320} height={480} src={movieDetail.hinhAnh} alt="" />
          </div>
          <div className="movie-detail-body">
            <div className="pt-3 col-md-12 col-lg-8">
              <div className="title">
                <h1>{movieDetail.tenPhim}</h1>
              </div>
              <div className="rating">
                <h5>
                  Đánh giá: <b>{movieDetail.danhGia}</b>/10
                  <i class="fa-solid fa-star"></i>
                </h5>
              </div>
              <div className="content">
                <h3>Nội dung:</h3>
                <p>{movieDetail.moTa}</p>
              </div>
              <div className="trailer">
                <h4 className="mb-3">Trailer:</h4>
                <div className="trailer1 trailer-inner">
                  <div className="trailer-wrapper">
                    <Trailer className="" />
                  </div>
                </div>
              </div>
            </div>

            {/* <button onClick={handleBooking} className="btn btn-success">ĐẶT VÉ</button> */}
          </div>

          <Showtimes />
        </div>
      </div>
    </div>
  );
}
