import { useState } from "react";

const UpdatingNestedObjects = () => {
  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: "San Francisco",
      zipCode: 94111,
    },
  });
  const handleClick = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 94112 },
    });
  };
  return (
    <>
      <div>{customer.address.zipCode}</div>
      <button onClick={handleClick}>Click Here</button>
    </>
  );
};

export default UpdatingNestedObjects;
