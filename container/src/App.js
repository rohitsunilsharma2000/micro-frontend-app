import React, { useState, Suspense } from "react";
import VegetableList from "./components/VegetableList";

const Cart = React.lazy(() => import("cart/Cart")); // ✅ Ensure correct import

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  return (
    <div>
      <h1>Container App</h1>
      <VegetableList addToCart={addToCart} />
      <Suspense fallback={<div>Loading Cart...</div>}>
        <Cart cartItems={cartItems} />
      </Suspense>
    </div>
  );
};

export default App;
