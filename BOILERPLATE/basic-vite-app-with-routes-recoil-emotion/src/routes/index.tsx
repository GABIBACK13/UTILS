import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import type { app_paths } from "../types/routes.types";

const Loading = () => <div>Carregando...</div>;

interface AppRoute {
  path: app_paths;
  component: React.LazyExoticComponent<() => JSX.Element>;
}

const Home = lazy(() => import("../pages/Home"));
const Config = lazy(() => import("../pages/Config"));

const routes: AppRoute[] = [
  { path: "/", component: Home },
  { path: "/config", component: Config },
];

export const AppRoutes = (): JSX.Element => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {routes.map((route) => {
          const Component = route.component;
          return <Route key={route.path} path={route.path} element={<Component />} />;
        })}
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </Suspense>
  );
};
