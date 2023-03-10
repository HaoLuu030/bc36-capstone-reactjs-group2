import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetailApi } from "../../../../services/movie";
import Trailer from "../../../../components/trailer/Trailer";
import "./index.scss";
import Showtimes from "../showtimes/Showtimes";
import { setTrailerLinkAction } from "../../../../store/action/movieActions";
import { useDispatch } from "react-redux";
import { Tabs } from "antd";
import moment from "moment";

export default function Detail(props) {
  const dispatch = useDispatch();
  const [movieDetail, setMovieDetail] = useState({});
  const params = useParams();
  useEffect(() => {
    getMovieDetail();
  }, []);

  const getMovieDetail = async () => {
    const result = await fetchMovieDetailApi(params.id);
    setMovieDetail(result.data.content);
    dispatch(setTrailerLinkAction(result.data.content.trailer));
  };
  const items = [
    {
      key: "overview",
      label: `Thông tin chung`,
      children: (
        <div className="movie-detail-body">
          <div className="title">
            <h1>{movieDetail.tenPhim}</h1>
          </div>
          <div className="rating">
            <p className="m-0">
              <b>Đánh giá:</b>{" "}
              <span className="score">{movieDetail.danhGia}</span>/10
              <i class="fa-solid fa-star"></i>
            </p>
          </div>
          <div className="playing-date">
            <p className="m-0">
              <b>Khởi chiếu:</b> {moment(movieDetail.ngayKhoiChieu).format("L")}
            </p>
          </div>
          <div className="content">
            <p>
              <b>Nội dung:</b>
            </p>
            <p>{movieDetail.moTa}</p>
          </div>
        </div>
      ),
    },
    {
      key: "trailer",
      label: `Trailer`,
      children: (
        <div className="trailer">
          <div className="trailer1 trailer-inner">
            <div className="trailer-wrapper">
              <Trailer className="" />
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="movie-detail">
      <div className="container">
        {" "}
        <div key={props.maPhim} className="row">
          <div className="col-12 col-lg-4 d-flex justify-content-center">
            <div className="img-container">
              {" "}
              <img src={movieDetail.hinhAnh} alt="" />
            </div>
          </div>

          <div className="pt-3 pt-lg-0 pl-lg-5 col-md-12 col-lg-8">
            <Tabs
              className="detail-tabs"
              defaultActiveKey="overview"
              items={items}
            />
          </div>

          <Showtimes />
        </div>
      </div>
    </div>
  );
}
