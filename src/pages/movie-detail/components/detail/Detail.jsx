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

  // const handleBooking = () => {
  //   navigate(`/booking/${props.maPhim}`)
  // }
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

          <div className="pt-3 pt-lg-0 pl-lg-3 col-md-12 col-lg-8">
            <div className="trailer">
              <h4 className="mb-3">Trailer:</h4>
              <div className="trailer1 trailer-inner">
                <div className="trailer-wrapper">
                  <Trailer className="" />
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
