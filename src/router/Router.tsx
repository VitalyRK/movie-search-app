import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../modules/layout/Dashboard";
import DetailPage from "../pages/detail-page/DetailPage";
import NotFound from "../pages/not-found/NotFound";
import SearchPage from "../pages/search-page/SearchPage";
import WatchedPage from "../pages/watched-page/WatchedPage";

export const routes = [
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/",
        element: <SearchPage />,
      },
      {
        path: "/detail/:id",
        element: <DetailPage />,
      },
      {
        path: "/watched",
        element: <WatchedPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export const router = createBrowserRouter(routes);
