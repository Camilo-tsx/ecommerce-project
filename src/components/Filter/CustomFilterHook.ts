import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { products as initialProducts } from "../../Products/ProductList";

export type Order = "default" | "asc-price" | "desc-price" | "best-sellers";

interface FilterPorductsProps {
  category: string;
  sortOrder: Order;
}

export const useFilters = () => {
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

  const getCategoryText = (category: string) => {
    switch (category) {
      case "COCINA":
        return "DECO PARA TU COCINA";
      case "DECO HOME":
        return "DECO PARA TU HOGAR";
      case "DECO ARTE":
        return "El ARTE EN TU HOGAR";
      case "ACCESORIOS":
        return "ACCESORIOS";
      case "all":
      default:
        return "TODO EN DECO";
    }
  };

  return { filterProducts, setFilters, category, getCategoryText };
};
