import { Navigate, useRoutes } from "react-router-dom";
import AdminLayout from "../layouts/admin/AdminLayout";
import HomeLayout from "../layouts/home/HomeLayout";
import ComingSoon from "../pages/coming-soon/ComingSoon";
import Home from "../pages/home/Home";
import MovieDetail from "../pages/movie-detail/MovieDetail";
import NowPlaying from "../pages/now-playing/NowPlaying";
import UserManagement from "../pages/userManagement/UserManagement";

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
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "/admin/user-management",
          element: <UserManagement />,
        },
      ],
    },
  ]);
  return routing;
}
