import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import MovieDtb from "./components/movie-dtb/MovieDtb";

export default function MovieManagement() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/admin/movie-management" ? (
        <MovieDtb />
      ) : (
        <Outlet />
      )}
    </>
  );
}
