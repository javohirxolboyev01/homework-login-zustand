import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";
const Auth = lazy(() => import("./Auth/Auth"));
const Layout = lazy(() => import("../components/layout/Layout"));
const Home = lazy(() => import("./Home/Home"));
const Statistic = lazy(() => import("./Statistica/Statistic"));
const Login = lazy(() => import("./Login/Login"));

const MainRoute = () => {
  return useRoutes([
    {
      path: "/",
      element: <Auth />,
      children: [
        {
          path: "",
          element: <Layout />,
          children: [
            { path: "", element: <Home /> },
            { path: "statistica", element: <Statistic /> },
          ],
        },
      ],
    },
    { path: "/login", element: <Login /> },
  ]);
};

export default React.memo(MainRoute);
