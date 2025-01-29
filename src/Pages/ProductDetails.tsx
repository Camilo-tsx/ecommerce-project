import catalog from "../assets/images/image-catalog-example.jpg";
import "./ProductDetails.css";

export const ProductDetails = () => {
  return (
    <div className="product-details-container">
      <div className="product-details-image-container">
        <img src={catalog} alt="imagen-catalogo" />
      </div>
      <div className="product-details-info-container">
        <div className="product-details-title">
          <strong>Maceta de sexo sexual</strong>
        </div>
        <div className="product-details-category">
          <small>DECO HOME</small>
        </div>
        <div className="product-details-price">
          <strong>$14000</strong>
        </div>
        <div className="product-details-description-title">
          <strong>Descripcion:</strong>
        </div>
        <div className="product-details-description">
          Maceta sexual ideal para tener sexo toda la noche anashe con tu mujer
          la gorda bien trola y puta la gordinflona
          <br />
          <br />
          Medidas: 20x20x20
        </div>
        <div className="product-details-button">
          <button>Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
};
