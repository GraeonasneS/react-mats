import categories from "../Categories";

interface Prop {
  onSelectCategory: (category: string) => void;
}

const Filter = ({ onSelectCategory }: Prop) => {
  return (
    <select
      className="form-select"
      name=""
      id="categories"
      onChange={(event) => {
        onSelectCategory(event.target.value);
      }}
    >
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default Filter;
