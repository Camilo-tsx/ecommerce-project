import { products } from "./ProductList";
import "./Products.css";

interface ProductsComponentProps {
  products: typeof products;
}

export const Products = ({ products }: ProductsComponentProps) => {
  return (
    <>
      <div className="catalog-container">
        {products.map(product => (
          <div key={product.id} className="catalog-card">
            <div className="catalog-item">
              <img src={product.src} alt="image-example" />
              <div className="catalog-item-cart">
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
