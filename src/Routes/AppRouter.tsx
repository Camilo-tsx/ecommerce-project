import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { RoutesWithNotFound } from "../components/RoutesWithNotFound/RoutesWithNotFound";
import { Catalog } from "../Pages/Catalog";
import { ProductDetails } from "../Pages/ProductDetails";
import { HomeAnimation } from "../components/HomeAnimation/HomeAnimation";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <RoutesWithNotFound>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/HomeAnimation" element={<HomeAnimation />} />
      </RoutesWithNotFound>
    </BrowserRouter>
  );
};
