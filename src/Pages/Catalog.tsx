import { useState } from "react";
import { Products } from "../Products/Products";
import { products as initialProducts } from "../Products/ProductList";
import { useFilters, Order } from "../components/Filter/CustomFilterHook";
import { Filter } from "../components/Filter/Filter";

export const Catalog = () => {
  const [products] = useState(initialProducts);
  const { filterProducts, setFilters, category, getCategoryText } =
    useFilters();

  const handleFilter = (order: Order) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      sortOrder: order,
    }));
  };

  const filteredProducts = filterProducts(products);

  return (
    <>
      <div className="catalog-header">
        <p className="category">{getCategoryText(category)}</p>
        <Filter parenthMethod={handleFilter} />
      </div>
      <Products products={filteredProducts} />
    </>
  );
};
