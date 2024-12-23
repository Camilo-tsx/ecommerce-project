import artistic from "../../assets/images/artistic-image.jpg";
import kitchen from "../../assets/images/kitchen-home-image.jpeg";
import living from "../../assets/images/livingroom-image.jpg";
import accesories from "../../assets/images/accesories-image.jpg";
import "./FullScreenBackgroundResponsive.css";
import "./FullScreenBackground.css";

export const FullScreenBackGround = () => {
  return (
    <div className="global-background-container">
      <div className="firstbackground-container">
        <div className="artistic-image-container">
          <img className="w-100 h-100" src={artistic} alt="catalog-image" />
          <h2>Deco Arte</h2>
          <h3>Descubrir</h3>
        </div>
        <div className="living-image-container">
          <img className="w-100 h-100" src={living} alt="catalog-image" />
          <h2>Deco Home</h2>
          <h3>Descubrir</h3>
        </div>
      </div>
      <div className="secondbackground-container">
        <div className="kitchen-image-container">
          <img className="w-100 h-100" src={kitchen} alt="catalog-image" />
          <h2>Cocina</h2>
          <h3>Descubrir</h3>
        </div>
        <div className="accesories-image-container">
          <img className="w-100 h-100" src={accesories} alt="catalog-image" />
          <h2>Accesorios</h2>
          <h3>Descubrir</h3>
        </div>
      </div>
    </div>
  );
};
