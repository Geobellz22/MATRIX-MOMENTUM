import { useState } from "react";

function DepositMethod() {
  const [selectedWallet, setSelectedWallet] = useState("");

  const wallets = [
    "Bitcoin Wallet",
    "Ethereum Wallet",
    "USDT TRC 20",
    "Tron Wallet",
    "Doge Coin Wallet",
    "Shiba Inu Wallet",
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full relative">
      <div className="text-left">
        <h2 className="text-lg font-semibold text-blue-600">
          Current Balance:{" "}
          <span className="text-black text-xl font-bold">$100.00</span>
        </h2>
      </div>

      <div className="mt-6">
        {wallets.map((wallet) => (
          <div key={wallet} className="flex items-center mb-4">
            <input
              type="radio"
              name="wallet"
              id={wallet}
              value={wallet}
              checked={selectedWallet === wallet}
              onChange={(e) => setSelectedWallet(e.target.value)}
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <label
              htmlFor={wallet}
              className="ml-2 text-sm text-gray-700 cursor-pointer"
            >
              Spend Funds From {wallet}
            </label>
          </div>
        ))}
      </div>

      {/* Deposit Button */}
      <button
        className="w-full py-3 mt-4 text-white bg-[#1B2D29] rounded-lg text-lg font-medium shadow-md"
        onClick={() => alert("Deposit clicked!")}
      >
        Deposit
      </button>
    </div>
  );
}

export default DepositMethod;
