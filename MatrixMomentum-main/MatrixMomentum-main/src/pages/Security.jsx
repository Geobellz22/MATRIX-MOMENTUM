import { useState } from "react";

function Security() {
  const [ipSensitivity, setIpSensitivity] = useState("Medium");
  const [browserChange, setBrowserChange] = useState("Disabled");

  return (
    <>
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-4">
          Detect IP Address Change Sensitivity
        </h2>
        {["Disabled", "Medium", "High", "Paranoic"].map((option) => (
          <div key={option} className="flex items-center mb-2">
            <input
              type="radio"
              id={option}
              name="ipSensitivity"
              value={option}
              checked={ipSensitivity === option}
              onChange={(e) => setIpSensitivity(e.target.value)}
              className="mr-2"
            />
            <label htmlFor={option} className="text-white">
              {option}
            </label>
          </div>
        ))}
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-4">
          Detect Browser Change
        </h2>
        {["Disabled", "Enabled"].map((option) => (
          <div key={option} className="flex items-center mb-2">
            <input
              type="radio"
              id={option}
              name="browserChange"
              value={option}
              checked={browserChange === option}
              onChange={(e) => setBrowserChange(e.target.value)}
              className="mr-2"
            />
            <label htmlFor={option} className="text-white">
              {option}
            </label>
          </div>
        ))}
      </div>

      <button className="w-full bg-[#04CB94] text-white py-2 rounded-lg hover:bg-[#04cb93b7]">
        SET
      </button>
    </>
  );
}

export default Security;
