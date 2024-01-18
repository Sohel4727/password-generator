import React, { useEffect, useState } from "react";

const LogicQuestions = () => {
  // interview practice questions here
  const [value, setValue] = useState(0);

  const multipliedValue = value * 5;
  const handleMultiply = () => {
    setValue(value + 1);
  };

  // testing animation numbers

  const [number, setNumber] = useState(0);

  useEffect(() => {
    const numberCount = setInterval(() => {
      setNumber((prev) => {
        const updatedNumber = prev + 100; // Increment the number by 50

        // Check if updated number reaches 500
        if (updatedNumber >= 5000) {
          clearInterval(numberCount); // Stop the interval when number reaches 500
          return 5000; // Ensure the final number is set to 500
        }

        return updatedNumber;
      });
    }, 30);

    return () => {
      clearInterval(numberCount); // Clean up the interval on component unmount
    };
  }, []);
  return (
    <>
      <div>
        <h1>main Value : {value}</h1>
        <button
          onClick={handleMultiply}
          className="bg-red-500 rounded py-2 px-2 "
        >
          click multiply by 5{" "}
        </button>
        <h2>multiplied Value : {multipliedValue} </h2>
      </div>{" "}
      <br /> <br />
      <div>
        <h1 className="text-5xl"> Number : {number}</h1>
      </div>
    </>
  );
};

export default LogicQuestions;
