import { Navigate, useRoutes } from "react-router-dom";
import MovieForm from "../components/movieForm/MovieForm";
import HomeLayout from "../layouts/home/HomeLayout";
import Booking from "../pages/booking/Booking";
import AuthGuard from "../guards/AuthGuard";
import AdminLayout from "../layouts/admin/AdminLayout";
import ComingSoon from "../pages/coming-soon/ComingSoon";
import Home from "../pages/home/Home";
import MovieDetail from "../pages/movie-detail/MovieDetail";
import MovieManagement from "../pages/movie-management/MovieManagement";
import MoviePlayTimeSchedule from "../pages/moviePlayTimeSchedule/MoviePlayTimeSchedule";
import NowPlaying from "../pages/now-playing/NowPlaying";
import UserManagement from "../pages/user-management/UserManagement";

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
          path: "/coming-soon",
          element: <ComingSoon />,
        },
        {
          path: "/booking",
          element: <Booking />,
        },
      ],
    },
    {
      path: "/admin",
      element: <AuthGuard />,
      children: [
        {
          path: "/admin",
          element: <AdminLayout />,
          children: [
            {
              path: "/admin/user-management",
              element: <UserManagement />,
            },
            {
              path: "/admin/movie-management",
              element: <MovieManagement />,
              children: [
                {
                  path: "/admin/movie-management/add-movie",
                  element: <MovieForm />,
                },
                {
                  path: "/admin/movie-management/edit-movie",

                  element: <Navigate to="/admin/movie-management" />,
                },
                {
                  path: "/admin/movie-management/edit-movie/:id",
                  element: <MovieForm />,
                },
                {
                  path: "/admin/movie-management/movie-playtime-schedule/:id",
                  element: <MoviePlayTimeSchedule />,
                },
              ],
            },
          ],
        },
      ],
    },
  ]);
  return routing;
}
