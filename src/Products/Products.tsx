import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { products } from "./ProductList";
import "./Products.css";
import "./ProductsResponsive.css";

interface ProductsComponentProps {
  products: typeof products;
}

export const Products = ({ products }: ProductsComponentProps) => {
  const { addToCart } = useCartContext();
  return (
    <>
      <div className="catalog-container">
        {products.map(product => (
          <div key={product.id} className="catalog-card">
            <div className="catalog-item">
              <Link to={"/product-details?id=" + product.id}>
                <img src={product.src[0]} alt="image-example" />
              </Link>
              <div
                className="catalog-item-cart"
                onClick={() => addToCart(product)}
              >
                <p>AGREGAR AL CARRITO</p>
              </div>
            </div>
            <div className="catalog-item-description">
              <p className="item-description">{product.description}</p>
              <p className="item-price">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
