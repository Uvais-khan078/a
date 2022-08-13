import { FC, memo } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NotFoundPage from "./Pages/NotFoundPage";
import ShowDetailPage from "./Pages/ShowDetailPage";
import ShowListPage from "./Pages/ShowListPage";

type AppProps = {};

const App: FC<AppProps> = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Home" />} />

      <Route path="home" element={<ShowListPage />} />
      <Route path="/show/:showId" element={<ShowDetailPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

App.defaultProps = {};

export default memo(App);
