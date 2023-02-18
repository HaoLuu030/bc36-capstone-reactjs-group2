import { Navigate, useRoutes } from "react-router-dom";
import HomeLayout from "../layouts/homeLayout/HomeLayout";
import Booking from "../pages/booking/Booking";
import Home from "../pages/home/Home";
import MovieDetail from "../pages/movie-detail/MovieDetail";
import NowPlaying from "../pages/now-playing/NowPlaying";

export default function Router() {
  const routing = useRoutes([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "/",
          element: <Navigate to={"/home"} />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/movie-detail/:id",
          element: <MovieDetail />,
        },
        {
          path: "/now-playing",
          element: <NowPlaying />,
        },
        {
          path: "/booking/:id",
          element: <Booking />
        }
      ],
    },
  ]);
  return routing;
}
