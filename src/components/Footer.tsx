import CustomForm from "./custom-form/CustomForm";
import logo from "../assets/images/logo.png";
import "./Footer.css";
import "../styles/FooterResponsive.css";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="p-container">
        <p>Quiero recibir descuentos exclusivos</p>
      </div>
      <div className="form-container">
        <CustomForm></CustomForm>
      </div>
      <div className="social-container">
        <div>
          <p>Contáctanos:</p>
          <i className="bi bi-whatsapp"></i>
        </div>
        <div>
          <p>Siguenos en instagram:</p>
          <i className="bi bi-instagram"></i>
        </div>
      </div>
    </div>
  );
};
