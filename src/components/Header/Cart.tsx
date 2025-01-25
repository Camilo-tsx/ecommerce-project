import "./Cart.css";
import { ToggleMenu } from "./ToggleMenu";
import { useCartContext } from "../../context/CartContext";

interface CartMenuProps {
  menuIsOpen: boolean;
  toggleMenu: () => void;
}

export const Cart = ({ menuIsOpen, toggleMenu }: CartMenuProps) => {
  const { cart, clearCart, removeItemFromCart } = useCartContext();

  return (
    <ToggleMenu
      position="right"
      menuIsOpen={menuIsOpen}
      toggleMenu={toggleMenu}
    >
      <aside className="cart">
        <div className="cart-title">
          <p>
            <i className="bi bi-bag-heart"></i> MI CARRITO
          </p>
        </div>
        <ul>
          {cart.map(product => (
            <li key={product.id}>
              <img src={product.src} alt="image-catalog" />
              <div className="cart-product-container">
                <div className="cart-product-info">
                  <strong>{product.description}</strong>
                  <button onClick={() => removeItemFromCart(product)}>X</button>
                </div>
                <p className="category">{product.category}</p>

                <footer className="cart-product-price">
                  <strong>{product.price}</strong>
                </footer>
              </div>
            </li>
          ))}
        </ul>
        <button className="clear-cart-button" onClick={clearCart}>
          Vaciar carrito
        </button>
      </aside>
      <div className="final-price-container">
        <strong className="final-price">
          <span>Subtotal:</span> <span>$26000</span>
        </strong>
        <button className="btn-purchase">Finalizar compra</button>
      </div>
    </ToggleMenu>
  );
};
