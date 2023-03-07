import React, { useEffect, useState } from "react";
import { Breadcrumb } from "antd";
import { NavLink, useLocation, useParams } from "react-router-dom";
import "./index.scss";
import { fetchMovieDetailApi } from "../../services/movie";

export default function BreadCrumbsCustom() {
  const [movieName, setMovieName] = useState("");
  const location = useLocation();
  console.log(location.pathname.split("/")[1]);
  const mapBreadCrumbTitle = (crumb) => {
    switch (crumb) {
      case "admin": {
        return "Admin";
      }
      case "user-management": {
        return "Quản lý người dùng";
      }
      case "movie-management": {
        return "Quản lý phim";
      }
      case "add-movie": {
        return "Thêm phim";
      }
      case "edit-movie": {
        return "Sửa phim";
      }
      case "movie-playtime-schedule": {
        return "Đặt lịch chiếu";
      }
      case "home": {
        return "Trang chủ";
      }
      case "movie-detail": {
        return "Chi tiết phim";
      }
      default: {
        return movieName;
      }
    }
  };
  //keep track of each crumb
  let currentLink = "";
  //the filter function is to filter out any empty string in case there's a trailing "/" at the end of the path
  const crumbs =
    location.pathname.split("/")[1] === "admin"
      ? location.pathname
          .split("/")
          .filter((crumb) => crumb !== "")
          .map((crumb) => {
            currentLink += `/${crumb}`;
            return (
              <Breadcrumb.Item key={crumb}>
                <NavLink to={currentLink}>{mapBreadCrumbTitle(crumb)}</NavLink>
              </Breadcrumb.Item>
            );
          })
      : ["home"]
          .concat(location.pathname.split("/"))
          .filter((crumb) => crumb !== "")
          .map((crumb) => {
            currentLink += `/${crumb}`;
            return (
              <Breadcrumb.Item key={crumb}>
                <NavLink to={currentLink}>{mapBreadCrumbTitle(crumb)}</NavLink>
              </Breadcrumb.Item>
            );
          });
  const params = useParams();
  const getMovieDetail = async (id) => {
    const result = await fetchMovieDetailApi(id);
    setMovieName(result.data.content.tenPhim);
  };
  useEffect(() => {
    if (params.id) {
      getMovieDetail(params.id);
    }
  }, [[params.id]]);

  return <Breadcrumb className="breadcrumbs">{crumbs}</Breadcrumb>;
}
