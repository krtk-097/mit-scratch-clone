import React from "react";

const StartFlag = () => {
  return (
    <div className="max-w-200" id="flag">
      <div className="relative">
        <div className="bg-green-500 rounded-md p-1 mr-2 flex items-center">
          <p className="text-white text-xs mr-2">Flag</p>
          <span className="text-md">🚩</span>
        </div>
        <div className="absolute bottom-5 left-0 h-5 w-10 bg-green-500 transform  rounded-lg"></div>
      </div>
    </div>
  );
};

export default StartFlag;
