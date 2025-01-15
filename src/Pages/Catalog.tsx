import { useState } from "react";
import { products as initialProducts } from "../Products/ProductList";
import { Products } from "../Products/Products";
import { Filter } from "../components/Filter/Filter";
import { useSearchParams } from "react-router-dom";

type Order = "default" | "asc-price" | "desc-price" | "best-sellers";

interface FilterPorductsProps {
  category: string;
  sortOrder: Order;
}

export const Catalog = () => {
  const [products] = useState(initialProducts);
  const [filters, setFilters] = useState<FilterPorductsProps>({
    category: "all",
    sortOrder: "default",
  });
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category") || "all";

  const filterProducts = (products: typeof initialProducts) => {
    let filtered = products.filter(product => {
      return category === "all" || product.category === category;
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

  const getCategoryText = (category: string) => {
    switch (category) {
      case "kitchen":
        return "DECO PARA TU COCINA";
      case "deco-home":
        return "DECO PARA TU HOGAR";
      case "deco-arte":
        return "El ARTE EN TU HOGAR";
      case "accesories":
        return "ACCESORIOS";
      case "all":
      default:
        return "TODO EN DECO";
    }
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
