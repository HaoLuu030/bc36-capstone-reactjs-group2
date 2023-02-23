import React from "react";
import { Breadcrumb } from "antd";
import { NavLink, useLocation } from "react-router-dom";

export default function BreadCrumbsCustom() {
  const location = useLocation();
  const mapBreadCrumbTitle = (crumb) => {
    switch (crumb) {
      case "admin": {
        return "Admin";
      }
      case "user-management": {
        return "Quản lý người dùng";
      }
    }
  };
  //keep track of each crumb
  let currentLink = "";
  //the filter function is to filter out any empty string in case there's a trailing "/" at the end of the path
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;
      return (
        <Breadcrumb.Item key={crumb}>
          <NavLink to={currentLink}>{mapBreadCrumbTitle(crumb)}</NavLink>
        </Breadcrumb.Item>
      );
    });
  return <Breadcrumb className="breadcrumbs">{crumbs}</Breadcrumb>;
}
