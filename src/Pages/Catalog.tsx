import { useState } from "react";
import { products as initialProducts } from "../Products/ProductList";
import { Products } from "../Products/Products";
import { Filter } from "../components/Filter/Filter";

type Order = "default" | "asc-price" | "desc-price" | "best-sellers";

interface FilterPorductsProps {
  category: string;
  sortOrder: Order;
}

export const Catalog = () => {
  const [products] = useState(initialProducts);
  const [filters, setFilters] = useState<FilterPorductsProps>({
    category: "deco-home",
    sortOrder: "default",
  });

  const filterProducts = (products: typeof initialProducts) => {
    let filtered = products.filter(product => {
      return (
        filters.category === "all" || product.category === filters.category
      );
    });

    if (filters.sortOrder === "asc-price") {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (filters.sortOrder === "desc-price") {
      filtered = filtered.sort((a, b) => b.price - a.price);
    } else if (filters.sortOrder === "best-sellers") {
      filtered = filtered.sort((a, b) => b.sells - a.sells);
    }

    return filtered;
  };

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
        <p className="category">DECO PARA TODO TU HOGAR</p>
        <Filter parenthMethod={handleFilter} />
      </div>
      <Products products={filteredProducts} />
    </>
  );
};
