import React, { useState } from "react";

const Hoc = (OrignalComponent) => {
  const newComponent = () => {
    const [count, setCount] = useState(0);

    const increament = () => {
      setCount(count + 1);
    };

    return (
      <>
        <OrignalComponent count={count} increament={increament} />
      </>
    );
  };
  return newComponent;
};

export default Hoc;
