import { Navigate, useRoutes } from "react-router-dom";
import HomeLayout from "../layouts/homeLayout/HomeLayout";
import Home from "../pages/home/Home";
import MovieDetail from "../pages/movie-detail/MovieDetail";


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
          element: <MovieDetail/>
        }
      ],
    },
  ]);
  return routing;
}
