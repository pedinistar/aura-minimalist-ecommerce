import { Link } from "react-router";
import { useCartStore } from "../store/useCartStore";

const Header = () => {
  const { cart, toggleCart } = useCartStore();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          AURA
        </Link>

        <nav className="navbar-links">
          <Link to="/catalog">CATALOG</Link>
        </nav>

        <div className="navbar-actions">
          <button className="cart-trigger-btn" onClick={toggleCart}>
            CART
            {cart.length > 0 ? (
              <span className="cart-badge">[{totalItems}]</span>
            ) : (
              ""
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
