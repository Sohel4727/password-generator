import React, { useState, useMemo } from "react";

const PracticeMemo = () => {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(50);

const multiplication = useMemo(()=>{
        console.log("********** run ************");
         return add * 10;
       },[add])


//   function multiply() {
//     console.log("********** run ************");
//     return add * 10;
//   }

  return (
    <div className="h-screen flex justify-center items-center flex-col text-center">
      <h1 className="w-1/4 text-center text-3xl text-blue-400 pb-6">
        Multiply : {multiplication}
      </h1>
      <h1 className="w-1/4 text-center text-red-400 pb-6">
        UseMemo hooks in React
      </h1>
      <h1 className="w-1/4 text-center text-3xl text-blue-400 pb-6">{add}</h1>
      <button
        onClick={() => setAdd(add + 1)}
        className="w-1/4 bg-green-400 rounded py-2"
      >
        Increment
      </button>
      <h1 className="w-1/4 text-center text-3xl text-blue-400 pb-6">{minus}</h1>
      <button
        onClick={() => setMinus(minus - 1)}
        className="w-1/4 bg-red-400 rounded py-2"
      >
        Decreament
      </button>
    </div>
  );
};
export default PracticeMemo;
