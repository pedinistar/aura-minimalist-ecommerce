import { useCartStore } from "../store/useCartStore";
import { useNavigate } from "react-router";

const CartDrawer = () => {
  const { cart, isCartOpen, toggleCart, updateQuantity } = useCartStore();
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  const totalCartItems = cart.reduce((a, c) => a + c.quantity, 0);
  const totalBill = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const handleCheckout = () => {
    toggleCart();
    navigate("/checkout");
  };

  return (
    <div className="cart-backdrop" onClick={toggleCart}>
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="cart-header">
          <h2>Shopping Bag ({totalCartItems})</h2>
          <button className="cart-close-btn" onClick={toggleCart}>
            ✕
          </button>
        </div>

        {/* Item List */}
        <div className="cart-body">
          {cart.length === 0 ? (
            <p className="cart-empty-text">Your shopping bag is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-info">
                  <p className="cart-item-name">{item.name}</p>
                  <p className="cart-item-price">
                    ₹{item.price.toLocaleString()}
                  </p>
                </div>

                <div className="cart-item-controls">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-subtotal">
              <span>Subtotal:</span>
              <span>₹{totalBill.toLocaleString()}</span>
            </div>
            <button className="checkout-btn" onClick={handleCheckout}>
              PROCEED TO CHECKOUT →
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default CartDrawer;
