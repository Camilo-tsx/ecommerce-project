import catalog from "../assets/images/image-catalog-example.jpg";

interface ProductsProps {
  id: number;
  description: string;
  price: number;
  src: string;
  category: string;
  sells: number;
}

export const products: ProductsProps[] = [
  {
    id: 1,
    description: "El mas vendido",
    price: 5000,
    src: catalog,
    category: "deco-home",
    sells: 2,
  },
  {
    id: 2,
    description: "Maceta de sexo sexual",
    price: 10000,
    src: catalog,
    category: "deco-home",
    sells: 0,
  },
  {
    id: 3,
    description: "Maceta de sexo sexual",
    price: 300,
    src: catalog,
    category: "deco-home",
    sells: 0,
  },
  {
    id: 4,
    description: "Maceta de sexo sexual",
    price: 9000,
    src: catalog,
    category: "deco-home",
    sells: 0,
  },
  {
    id: 5,
    description: "Maceta de sexo sexual",
    price: 40000,
    src: catalog,
    category: "deco-arte",
    sells: 0,
  },
  {
    id: 6,
    description: "Maceta de sexo sexual",
    price: 3350,
    src: catalog,
    category: "deco-arte",
    sells: 0,
  },
  {
    id: 7,
    description: "Maceta de sexo sexual",
    price: 1000,
    src: catalog,
    category: "deco-arte",
    sells: 0,
  },
  {
    id: 8,
    description: "Maceta de sexo sexual",
    price: 3230,
    src: catalog,
    category: "deco-arte",
    sells: 0,
  },
  {
    id: 9,
    description: "Maceta de sexo sexual",
    price: 1332,
    src: catalog,
    category: "deco-arte",
    sells: 0,
  },
  {
    id: 10,
    description: "Maceta de sexo sexual",
    price: 100,
    src: catalog,
    category: "kitchen",
    sells: 0,
  },

  {
    id: 11,
    description: "Maceta de sexo sexual",
    price: 150,
    src: catalog,
    category: "accesories",
    sells: 0,
  },
  {
    id: 12,
    description: "Maceta de sexo sexual",
    price: 350,
    src: catalog,
    category: "accesories",
    sells: 0,
  },
];
