import { useState } from "react";

const ExerciseStateUpdate2 = () => {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const handleClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Pineapple"] });
  };

  return (
    <>
      <div>
        {pizza.toppings.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
      <button onClick={handleClick}>Click here</button>
    </>
  );
};

export default ExerciseStateUpdate2;
