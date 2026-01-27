import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./public.route";
import AppLayout from "@/components/Layout.tsx/AppLayout";
import ScrollToTop from "@/lib/scrollToTop";

const AppRoutes = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<AppLayout />}>
          {publicRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={Component ? <Component /> : null} />
          ))}
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
