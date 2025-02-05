import { useSearchParams } from "react-router-dom";
import { products } from "../Products/ProductList";
import "./ProductDetails.css";
import { useCartContext } from "../context/CartContext";

export const ProductDetailsInfoContent = () => {
  const { addToCart } = useCartContext();

  const [searchParams] = useSearchParams();

  const id = Number(searchParams.get("id"));

  const product = products.find(p => p.id === id);

  if (!product) {
    return <p>No hay informacion de este producto</p>;
  }

  return (
    <>
      <div className="product-details-title">
        <strong>{product.description}</strong>
      </div>
      <div className="product-details-category">
        <small>{product.category}</small>
      </div>
      <div className="product-details-price">
        <strong>${product.price}</strong>
      </div>
      <div className="product-details-description-title">
        <strong>Descripcion:</strong>
      </div>
      <div className="product-details-description">
        Maceta sexual ideal para tener sexo toda la noche anashe con tu mujer la
        gorda bien trola y puta la gordinflona
        <br />
        <br />
        Medidas: 20x20x20
      </div>
      <div className="product-details-button">
        <button onClick={() => addToCart(product)}>Agregar al carrito</button>
      </div>
    </>
  );
};
