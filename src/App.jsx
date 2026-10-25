import CartDrawer from "./components/CartDrawer";
import Catalog from "./pages/Catalog";

const App = () => {
  return (
    <div style={{ display: "flex" }}>
      <Catalog />
      <CartDrawer />
    </div>
  );
};
export default App;
