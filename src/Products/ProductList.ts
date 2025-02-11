import catalog from "../assets/images/catalogexample5.jpg";
import catalog2 from "../assets/images/catalogexample4.jpg";
import catalog3 from "../assets/images/catalog-example 3.jpg";

export interface ProductsProps {
  id: number;
  description: string;
  price: number;
  src: string[];
  category: string;
  sells: number;
}

export const products: ProductsProps[] = [
  {
    id: 1,
    description: "El mas vendido",
    price: 5000,
    src: [catalog, catalog2, catalog3],
    category: "DECO HOME",
    sells: 2,
  },
  {
    id: 2,
    description: "Maceta de ejemplo 2",
    price: 10000,
    src: [catalog, catalog2, catalog3],
    category: "DECO HOME",
    sells: 0,
  },
  {
    id: 3,
    description: "Maceta de ejemplo 3",
    price: 300,
    src: [catalog, catalog2, catalog3],
    category: "DECO HOME",
    sells: 0,
  },
  {
    id: 4,
    description: "Maceta de ejemplo 4",
    price: 9000,
    src: [catalog, catalog2, catalog3],
    category: "DECO HOME",
    sells: 0,
  },
  {
    id: 5,
    description: "Maceta de ejemplo 5",
    price: 40000,
    src: [catalog, catalog2, catalog3],
    category: "DECO ARTE",
    sells: 0,
  },
  {
    id: 6,
    description: "Maceta de ejemplo 6",
    price: 3350,
    src: [catalog, catalog2, catalog3],
    category: "DECO ARTE",
    sells: 0,
  },
  {
    id: 7,
    description: "Maceta de ejemplo 7",
    price: 1000,
    src: [catalog, catalog2, catalog3],
    category: "DECO ARTE",
    sells: 0,
  },
  {
    id: 8,
    description: "Maceta de ejemplo 8",
    price: 3230,
    src: [catalog, catalog2, catalog3],
    category: "DECO ARTE",
    sells: 0,
  },
  {
    id: 9,
    description: "Maceta de ejemplo 9",
    price: 1332,
    src: [catalog, catalog2, catalog3],
    category: "DECO ARTE",
    sells: 0,
  },
  {
    id: 10,
    description: "Maceta de ejemplo 10",
    price: 100,
    src: [catalog, catalog2, catalog3],
    category: "COCINA",
    sells: 0,
  },

  {
    id: 11,
    description: "Maceta de ejemplo 11",
    price: 150,
    src: [catalog, catalog2, catalog3],
    category: "ACCESORIOS",
    sells: 0,
  },
  {
    id: 12,
    description: "Maceta ejemplo 12",
    price: 350,
    src: [catalog, catalog2, catalog3],
    category: "ACCESORIOS",
    sells: 0,
  },
];
