import React, { useState } from "react";
import Hoc from "./Hoc";
const Counter1 = (props) => {
  return (
    <div className="h-1/2 py-6 w-full flex flex-col justify-center items-center">
      <h1 className="text-5xl text-center py-2">Counter1</h1>
      <button
        onClick={props.increament}
        className="w-1/2 text-3xl bg-green-300 rounded px-2 py-2"
      >
        Increament -- {props.count}
      </button>
    </div>
  );
};

export default Hoc(Counter1);
