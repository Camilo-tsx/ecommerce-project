import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { RoutesWithNotFound } from "../components/RoutesWithNotFound/RoutesWithNotFound";
import { Catalog } from "../Pages/Catalog";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <RoutesWithNotFound>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
      </RoutesWithNotFound>
    </BrowserRouter>
  );
};
