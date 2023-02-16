import React from 'react';
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { fetchMovieDetailApi } from '../../../../services/movie';

export default function Detail() {
    const [movieDetail, setMovieDetail] = useState({});
    const params = useParams();

    useEffect(() => {
        getMovieDetail();
    }, []);

    const getMovieDetail = async () => {
        const result = await fetchMovieDetailApi(params.id);

        setMovieDetail(result.data.content);
    };
    return (
        <div className="row">
            <div className="col-6">
                <div className="row">
                    <div className="col-6">
                        <img src={movieDetail.hinhAnh} alt="" />
                    </div>
                    <div className="col-6">
                        <h3>{movieDetail.tenPhim}</h3>
                        <h5>{movieDetail.danhGia}</h5>
                        <h4>Nội dung</h4>
                        <p>{movieDetail.moTa}</p>
                    </div>
                </div>

            </div>
            <div className="col-6">
                <h4 className='mb-3'>Trailer</h4>
                {/* <video width="480" height="320" controls poster='https://movienew.cybersoft.edu.vn/hinhanh/hanh-phuc-mau_gp03.jpeg'>
                    <source src="https://youtu.be/0rEKdTK1igo" type="video/mp4" />
                </video> */}
                <div width="320" height="520">
                    <div className="card card-movie">
                        <img className="card-img-top" src="https://movienew.cybersoft.edu.vn/hinhanh/hanh-phuc-mau_gp03.jpeg" />
                        <div className="overlay d-flex justify-content-center align-items-center">
                            <button
                                className="button-movie-item mx-1 show-trailer"
                            >
                                <i className="fa fa-play"></i>
                            </button>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
