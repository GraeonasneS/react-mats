import { useState } from "react";

const ExerciseStateUpdate1 = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "Bob" } });
  };

  return (
    <>
      <div>{game.player.name}</div>
      <button onClick={handleClick}>Click here</button>
    </>
  );
};

export default ExerciseStateUpdate1;
