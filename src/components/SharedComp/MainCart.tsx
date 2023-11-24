import { useState } from "react";
import Cart from "./Cart";
import NavBar from "./NavBar";

const MainCart = () => {
  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  return (
    <>
      <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />

      {/* To remove certain products use the code below after setCartItems */}
      {/* onRemove={(product) => } */}
    </>
  );
};

export default MainCart;
