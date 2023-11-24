import { useEffect, useState } from "react";

const UseEffect = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("Fetching Products", category);
    setProducts(["Clothing", "Household"]);
  }, [category]);

  {
    /* <select
        name=""
        id=""
        className="form-select"
        onChange={(event) => setCategory(event?.target.value)}
      >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
      <UseEffect category={category} /> */
  }

  return <div>UseEffect</div>;
};

export default UseEffect;
