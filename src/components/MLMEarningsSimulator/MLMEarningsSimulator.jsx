import React, { useState } from "react";

const earningsData = {
  2: 4.95,
  5: 9.95,
  10: 19.95,
  20: 39.95,
};

const validRecruits = [2, 5, 10, 20];

const MLMEarningsSimulator = () => {
  const [recruits, setRecruits] = useState(2);

  const handleNextValue = (value) => {
    const closest = validRecruits.reduce((prev, curr) =>
      Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev
    );
    setRecruits(closest);
  };

  return (
    <div className="bg-white shadow-lg p-6 rounded-lg text-center max-w-md mx-auto">
      <h2 className="font-montserrat text-2xl font-bold mb-4">
        Your MLM Earnings Simulator
      </h2>
      <p className="font-open-sans text-lg text-gray-700 mb-4">
        Adjust the slider to estimate your potential earnings.
      </p>
      <input
        type="range"
        min="2"
        max="20"
        step="1"
        value={recruits}
        onChange={(e) => handleNextValue(Number(e.target.value))}
        className="w-full cursor-pointer"
      />
      <p className="font-montserrat text-xl font-bold text-green-600 mt-2">
        Recruits: {recruits}
      </p>
      <p className="font-montserrat text-3xl font-bold text-orange-500 mt-4">
        ${earningsData[recruits] || "-"}
      </p>
      <p className="italic text-gray-400 mt-3 text-xs">
        Your income is not guaranteed, these figures are estimates.
      </p>
    </div>
  );
};

export default MLMEarningsSimulator;
