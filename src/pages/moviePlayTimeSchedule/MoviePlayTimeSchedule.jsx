import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetailApi } from "../../services/movie";
import ScheduleForm from "./components/scheduleForm/ScheduleForm";

export default function MoviePlayTimeSchedule() {
  const [movie, setMovie] = useState();
  const params = useParams();
  const getMovieDetail = async () => {
    const result = await fetchMovieDetailApi(params.id);
    setMovie(result.data.content);
  };
  useEffect(() => {
    getMovieDetail();
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="img-container">
            <img
              style={{ maxWidth: "300px", margin: "auto" }}
              src={movie?.hinhAnh}
              alt=""
            />
          </div>
        </div>
        <div className="col-6">
          <ScheduleForm />
        </div>
      </div>
    </div>
  );
}
