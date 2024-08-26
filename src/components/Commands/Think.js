import React, { useState } from "react";
const Think = (value) => {
  const [steps, setSteps] = useState("");

  const handleInputChange = (e) => {
    setSteps(e.target.value);
  };

  return (
    <div
      style={{
        maxWidth: "200px",
      }}
    >
      <div className="relative">
        <div className="bg-purple-700 rounded-md p-1 flex items-center">
          <p className="text-white text-xs mr-5">Think </p>
          <div className="flex-1">
            <input
              id="think"
              type="text"
              placeholder="Enter Message"
              className={`p-1 rounded-md w-full text-xs border-none ${value.value}`}
              value={steps}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="absolute bottom-5 left-0 h-5 w-10 bg-purple-700 transform rounded-all rounded-lg"></div>
      </div>
    </div>
  );
};

export default Think;
