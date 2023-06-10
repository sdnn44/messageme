import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

// layouts
import DashboardLayout from "../layouts/dashboard";
import { Login } from "../pages/auth/Login/Login";
import { Register } from "../pages/auth/Register/Register";

// config
import { DEFAULT_PATH } from "../config";
import LoadingScreen from "../components/LoadingScreen";
// import MainView from "../pages/dashboard/MainView";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router(){
  return useRoutes([
    {
      path: "/",
      element: <Register />,
      children: [
        { element: <Navigate to={DEFAULT_PATH} replace />, index: true },
        { path: "app", element: <MainView /> },
        
        { path: "404", element: <PageNotFound /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

const MainView = Loadable(
  lazy(() => import("../pages/dashboard/MainView")),
);
const PageNotFound = Loadable(lazy(() => import("../pages/PageNotFound")));