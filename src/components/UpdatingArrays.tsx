import { useState } from "react";

const UpdatingArrays = () => {
  const [tags, setTags] = useState(["Happy", "Cheerful"]);

  const handleClick = () => {
    //Add
    setTags([...tags, "Exciting"]);

    //Remove
    setTags(tags.filter((tag) => tag !== "happy"));

    //Update
    setTags(tags.map((tag) => (tag === "Happy" ? "Happiness" : tag)));
  };
  return (
    <>
      <div>{tags}</div>
      <button onClick={handleClick}>Click Me</button>
    </>
  );
};

export default UpdatingArrays;
