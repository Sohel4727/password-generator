import React, { useState, useEffect } from "react";

const ProgressBar = () => {
  const breakpoints = [0,30, 60, 100]; // Define your breakpoints here
  const [progress, setProgress] = useState(0);

 

  const getPercentage = () => {
    return `${progress}%`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 1;
        }
        return prevProgress;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <div  className="w-full flex justify-between mt-2">
        {breakpoints.map((breakpoint, index) => (
          <React.Fragment key={index}>
            <label
              htmlFor={`radio${index}`}
              className="relative cursor-pointer"
            >{`${breakpoint}%`}</label>
            <div 
              className={`w-4 h-4 rounded-full border-2 border-gray-400 ${
                progress >= breakpoint ? "bg-blue-500 border-blue-500" : ""
              }`}
            ></div>
            
            {index !== breakpoints.length - 1 && (
              <div style={{ width: `${progress}%` }} className={`relative flex-1 h-px bg-gray-300 mt-2`}></div>
            )}
          </React.Fragment>
        ))}
        
      </div>
      <div className="w-full px-4 bg-gray-200">
        <div
          className="bg-blue-500 text-white text-center py-2 relative"
          style={{ width: `${progress}%` }}
        >
          {getPercentage()}
        </div>
      </div>
      
    </div>
  );
};

export default ProgressBar;
