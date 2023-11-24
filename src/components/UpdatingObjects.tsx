import { useState } from "react";

const UpdatingObjects = () => {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const handleClick = () => {
    setDrink({ ...drink, price: 6 });
  };
  return (
    <>
      {drink.price}
      <button onClick={handleClick}>Click Me</button>
    </>
  );
};

export default UpdatingObjects;
