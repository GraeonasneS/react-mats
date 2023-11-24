import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (children.length <= maxChars) return <p>{children}</p>;

  const text = isExpanded ? children : children.substring(0, maxChars);

  const handleClick = () => setIsExpanded(!isExpanded);
  return (
    <div>
      <p>
        {text}...{" "}
        <button onClick={handleClick}>
          {isExpanded ? "Show Less" : "Show More"}
        </button>
      </p>
    </div>
  );
};

export default ExpandableText;

{
  /* <ExpandableText maxChars={100}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo non
        corporis reiciendis eaque deleniti sed iusto libero voluptatibus laborum
        placeat. Error aut distinctio, animi ex neque qui necessitatibus
        eligendi officia eum nobis impedit molestias vel, voluptates recusandae
        minima quaerat adipisci pariatur blanditiis rerum optio unde numquam
        fugit! Perspiciatis deleniti, esse accusamus vitae libero quia sapiente
        maxime at assumenda culpa, voluptate adipisci reiciendis, quod eaque ex?
        Officiis pariatur alias unde id! Necessitatibus nemo autem mollitia quas
        ipsum, tenetur praesentium et. Perferendis maiores deleniti quam,
        suscipit nostrum facere pariatur accusamus sit aperiam eligendi fugiat
        sint natus quo cumque nemo voluptatibus nesciunt similique!
      </ExpandableText> */
}
