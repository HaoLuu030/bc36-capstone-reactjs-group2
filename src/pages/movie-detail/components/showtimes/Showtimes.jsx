import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchMovieShowtimesApi } from '../../../../services/cinema'

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
                                <div className="col-1">
                                    <img className="img-fluid rounded" src={ele.hinhAnh} />
                                </div>
                                <div className="col-11 pl-0">
                                    <h5>{ele.tenCumRap}</h5>
                                    <span className="text-muted">{ele.diaChi}</span>
                                </div>
                                <div className="col-12">
                                    <div className="row">
                                        {
                                            ele?.lichChieuPhim?.map((ele) => {
                                                return (
                                                    <div key={ele.maLichChieu} className="col-3">
                                                        <Link to={`/booking/${ele.maLichChieu}`}>{ele.ngayChieuGioChieu}</Link>
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
                <div className="col-3">
                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        {renderTabs()}
                    </div>
                </div>
                <div className="col-9">
                    <div className="tab-content" id="v-pills-tabContent">
                        {renderTabcontents()}

                    </div>
                </div>
            </div>
        </div>

    );
};
