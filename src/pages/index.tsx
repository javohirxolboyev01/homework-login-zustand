import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import StatisticsProtectedRoute from "../components/StatisticsProtectedRoute";

const Layout = lazy(() => import("../components/layout/Layout"));
const Home = lazy(() => import("./Home/Home"));
const Statistic = lazy(() => import("./Statistica/Statistic"));
const Login = lazy(() => import("./Login/Login"));

const MainRoute = () => {
  return useRoutes([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "statistica",
          element: (
            <StatisticsProtectedRoute>
              <Statistic />
            </StatisticsProtectedRoute>
          ),
        },
      ],
    },
    {
      path: "login",
      element: (
        <ProtectedRoute requireAuth={false}>
          <Login />
        </ProtectedRoute>
      ),
    },
  ]);
};

export default React.memo(MainRoute);
