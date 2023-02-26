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
    console.log(params);
    console.log(result);
    setMovieDetail(result.data.content);
  };

  // const handleBooking = () => {
  //   navigate(`/booking/${props.maPhim}`)
  // }
  return (
    <div key={props.maPhim} className="row">
      <nav class="navbar">
        <NavLink className="text-dark text-decoration-none" to={`/`}>Trang chủ</NavLink>
        <NavLink className="mx-3 text-decoration-none">Chi tiết</NavLink>
      </nav>
      <div className="col-12">
        <div className="row">
          <div className="image col-md-12 col-lg-4">
            <img width={320} height={480} src={movieDetail.hinhAnh} alt="" />
          </div>
          <div className="title pl-5 pt-0 col-md-12 col-lg-4">
            <h1>{movieDetail.tenPhim}</h1>
            <h5>Đánh giá: {movieDetail.danhGia}/10
              <i class="fa-solid fa-star"></i>
            </h5>
            <h3>Nội dung:</h3>
            <p >{movieDetail.moTa}</p>
            {/* <button onClick={handleBooking} className="btn btn-success">ĐẶT VÉ</button> */}
          </div>
          <div className="trailer col-lg-4">
            <h4 className="mb-3">Trailer:</h4>
            <div className="trailer1 trailer-inner">
              <div className="trailer-wrapper">
                <Trailer />
              </div>
            </div>
          </div>
        </div>

      </div>
      <div>
        <Showtimes />
      </div>

    </div>
  );
}
