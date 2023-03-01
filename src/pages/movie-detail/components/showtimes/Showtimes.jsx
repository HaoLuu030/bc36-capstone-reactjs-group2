import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchMovieShowtimesApi } from '../../../../services/cinema';
import moment from 'moment';
import "./index.scss";


export default function Showtimes() {
    const [movieShowtimes, setMovieShowtimes] = useState({});
    const params = useParams();
    useEffect(() => {
        getMoiveShowtimes();
    }, [])
    const getMoiveShowtimes = async () => {
        const result = await fetchMovieShowtimesApi(params.id)
        setMovieShowtimes(result.data.content);
    };
    const renderTabs = () => {
        return movieShowtimes?.heThongRapChieu?.map((ele, idx) => {
            return (
                <a
                    key={ele.maHeThongRap}
                    className={`nav-link text-capitalize ${idx === 0 && "active"}`}
                    data-toggle="pill"
                    href={`#${ele.maHeThongRap}`}
                    role="tab"
                    aria-selected="true">
                    {ele.tenHeThongRap}</a>

            );
        });
    };
    const renderTabcontents = () => {
        return movieShowtimes?.heThongRapChieu?.map((ele, idx) => {
            return (
                <div className={`tab-pane fade show ${idx === 0 && "active"}`}
                    key={ele.maHeThongRap}
                    id={ele.maHeThongRap}
                    role="tabpanel">
                    {ele?.cumRapChieu?.map(ele => {
                        return (
                            <div key={ele.maCumRap} className="row mb-5">
                                <div className="col-2">
                                    <img className="img-fluid rounded" src={ele.hinhAnh} />
                                </div>
                                <div className="col-10 pl-0 info">
                                    <h5>{ele.tenCumRap}</h5>
                                    <span className="text-muted">{ele.diaChi}</span>
                                    <div className="row">
                                        {
                                            ele?.lichChieuPhim?.map((ele) => {
                                                return (
                                                    <div key={ele.maLichChieu} className="col-3 mt-2">
                                                        <Link to={`/booking/${ele.maLichChieu}`}>{moment(ele.ngayChieuGioChieu).format("llll")}</Link>
                                                    </div>
                                                );
                                            })
                                        }
                                    </div>
                                </div>                              
                            </div>
                        )
                    })}
                </div>
            );
        });
    };
    return (
        <div className="col-12 mt-5">
            <div className="row">
                <div className="col-12">
                    <div className="nav mb-5 nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        {renderTabs()}
                    </div>
                </div>
                <div className="col-12">
                    <div className="tab-content" id="v-pills-tabContent">
                        {renderTabcontents()}

                    </div>
                </div>
            </div>
        </div>

    );
};
