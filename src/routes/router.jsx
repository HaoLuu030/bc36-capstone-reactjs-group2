import { Navigate, useRoutes } from "react-router-dom";
import HomeLayout from "../layouts/homeLayout/HomeLayout";
import QuickBooking from "../pages/quickBooking/QuickBooking";
import AuthGuard from "../guards/AuthGuard";
import AdminLayout from "../layouts/admin/AdminLayout";
import ComingSoon from "../pages/coming-soon/ComingSoon";
import Home from "../pages/home/Home";
import MovieDetail from "../pages/movie-detail/MovieDetail";
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
          path: "/quick-booking",
          element: <QuickBooking />,
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
          ],
        },
      ],
    },
  ]);
  return routing;
}
