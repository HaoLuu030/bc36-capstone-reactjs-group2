import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetailApi } from "../../../../services/movie";

import "./index.scss";

export default function Detail() {
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
  return (
    <div className="row">
      <div className="col-12">
        <div className="row">
          <div className="image col-md-12 col-lg-4">
            <img width={320} height={480} src={movieDetail.hinhAnh} alt="" />
          </div>
          <div className="title col-md-12 col-lg-6">
            <h1>{movieDetail.tenPhim}</h1>
            <h5>Đánh giá: {movieDetail.danhGia}/10
            <i class="fa-solid fa-star"></i>
            </h5>
            <h3>Nội dung:</h3>
            <p >{movieDetail.moTa}</p>
          </div>
        </div>
      </div>
      <div className="trailer mt-5 col-12">
        <h4 className="mb-3">Trailer:</h4>
        {/* <video width="480" height="320" controls poster='https://movienew.cybersoft.edu.vn/hinhanh/hanh-phuc-mau_gp03.jpeg'>
                    <source src="https://youtu.be/0rEKdTK1igo" type="video/mp4" />
                </video> */}
        {/* <div>
          <div className="card card-movie">
            <img
              className="card-img-top"
              src="https://movienew.cybersoft.edu.vn/hinhanh/hanh-phuc-mau_gp03.jpeg"
            />
            <div className="overlay d-flex justify-content-center align-items-center">
              <button className="button-movie-item mx-1 show-trailer">
                <i className="fa fa-play"></i>
              </button>
            </div>
          </div>
        </div> */}
    
      </div>
    </div>
  );
}
