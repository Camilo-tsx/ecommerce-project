import logo from "../../assets/images/logo.png";
import "./HomeAnimation.css";

export const HomeAnimation = () => {
  return (
    <div className="header-transition">
      <div>
        <img className="logo-transition" src={logo} alt="Logo" />
      </div>
    </div>
  );
};
