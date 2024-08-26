import React, { useState } from "react";

const SayForSeconds = (value) => {
  const [message, setMessage] = useState("");
  const [duration, setDuration] = useState("");

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };

  return (
    <div
      style={{
        maxWidth: "250px",
      }}
    >
      <div className="relative">
        <div className="bg-purple-700 rounded-md p-1 flex items-center">
          <p className="text-white text-xs mr-2">Think</p>
          <div className="flex-1 mr-2">
            <input
              id="message"
              type="text"
              placeholder="Enter Message"
              className={`p-1 rounded-md w-full text-xs border-none ${value.value}`}
              value={message}
              onChange={handleMessageChange}
            />
          </div>
          <p className="text-white text-xs mr-2">for</p>
          <div className="w-16">
            <input
              id="duration"
              type="number"
              placeholder="Seconds"
              className={`p-1 rounded-md w-full text-xs border-none ${value.value}`}
              value={duration}
              onChange={handleDurationChange}
            />
          </div>
          <p className="text-white text-xs ml-1">secs</p>
        </div>
        <div className="absolute bottom-5 left-0 h-5 w-10 bg-purple-700 transform rounded-all rounded-lg"></div>
      </div>
    </div>
  );
};

export default SayForSeconds;
