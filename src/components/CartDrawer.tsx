import { useCartStore } from "../store/useCartStore";

const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    toggleCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  } = useCartStore();
  const totalCartItems = cart.reduce((a, c) => a + c.quantity, 0);
  const totalBill = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  if (!isCartOpen) return null;

  if (cart.length === 0) {
    return <div>Cart is empty</div>;
  }

  return (
    <div>
      <h3>Total: {totalBill}</h3>
      <p>Total Items: {totalCartItems}</p>
      <button onClick={() => clearCart()}>Clear Cart</button>

      {cart.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.price * item.quantity}</p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
              +
            </button>
            <p>{item.quantity}</p>
            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
              -
            </button>
            <button onClick={() => removeFromCart(item.id)}>X</button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CartDrawer;
