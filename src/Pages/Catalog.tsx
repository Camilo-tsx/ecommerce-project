import catalog from "../assets/images/image-catalog-example.jpg";
import "./Catalog.css";

export const Catalog = () => {
  return (
    <>
      <div className="catalog-header">
        <p className="category">DECO PARA TODO TU HOGAR</p>
        <p>Esto es el filtro</p>
      </div>
      <div className="catalog-container">
        <div className="catalog-card">
          <div className="catalog-item">
            <img src={catalog} alt="image-example" />
            <div className="catalog-item-cart">
              <p>Agregar al carrito</p>
            </div>
          </div>
          <div className="catalog-item-description">
            <p className="item-description">MACETA DE SEXO SEXUAL</p>
            <p className="item-price">$13200</p>
          </div>
        </div>

        <div className="catalog-card">
          <div className="catalog-item">
            <img src={catalog} alt="image-example" />
            <div className="catalog-item-cart">
              <p>Agregar al carrito</p>
            </div>
          </div>
          <div className="catalog-item-description">
            <p className="item-description">MACETA DE SEXO SEXUAL</p>
            <p className="item-price">$13200</p>
          </div>
        </div>

        <div className="catalog-card">
          <div className="catalog-item">
            <img src={catalog} alt="image-example" />
            <div className="catalog-item-cart">
              <p>Agregar al carrito</p>
            </div>
          </div>
          <div className="catalog-item-description">
            <p className="item-description">MACETA DE SEXO SEXUAL</p>
            <p className="item-price">$13200</p>
          </div>
        </div>

        <div className="catalog-card">
          <div className="catalog-item">
            <img src={catalog} alt="image-example" />
            <div className="catalog-item-cart">
              <p>Agregar al carrito</p>
            </div>
          </div>
          <div className="catalog-item-description">
            <p className="item-description">MACETA DE SEXO SEXUAL</p>
            <p className="item-price">$13200</p>
          </div>
        </div>
      </div>
    </>
  );
};
