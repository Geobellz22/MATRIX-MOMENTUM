import LiveTradingChart from "../components/LiveTradingChart";

function Account() {
  return (
    <>
      <header className="w-full py-7 px-5  bg-[#04CB94]">
        <h1 className="font-main text-4xl">Welcome back %NAME%</h1>
        <p className="font-sub">%PHONE NUMBER% | %EMAIL ADDRESS%</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-7">
        <div className="bg-[#00150f] text-white p-6 rounded-lg shadow-lg">
          <div className="flex justify-between items-center">
            <div className="bg-[#1B2D29] rounded-full w-12 h-12"></div>
            <div className="text-right">
              <h1 className="text-yellow-400 text-4xl font-bold">$ 0.00</h1>
              <p className="uppercase text-sm">Account Balance</p>
            </div>
          </div>
          <div className="mt-6 bg-[#1B2D29] p-4 rounded-lg">
            <div className="flex justify-between">
              <span>Pending Withdrawal:</span>
              <span className="text-yellow-400">$0.00</span>
            </div>
            <div className="flex justify-between mt-2">
              <span>Withdrew Total:</span>
              <span className="text-yellow-400">$0.00</span>
            </div>
            <div className="flex justify-between mt-2">
              <span>Earned Total:</span>
              <span className="text-yellow-400">$0.00</span>
            </div>
          </div>
        </div>

        <div className="bg-[#00150f] text-white p-6 rounded-lg shadow-lg">
          <div className="flex justify-between items-center">
            <div className="bg-[#1B2D29] rounded-full w-12 h-12"></div>
            <div className="text-right">
              <h1 className="text-yellow-400 text-4xl font-bold">$ 0.00</h1>
              <p className="uppercase text-sm">Active Deposit</p>
            </div>
          </div>
          <div className="mt-6 bg-[#1B2D29] p-4 rounded-lg">
            <div className="flex justify-between">
              <span>Last Deposit:</span>
              <span className="text-yellow-400">$</span>
            </div>
            <div className="flex justify-between mt-2">
              <span>Total Deposit:</span>
              <span className="text-yellow-400">$0.00</span>
            </div>
            <div className="flex justify-between mt-2">
              <span>Last Withdrawal:</span>
              <span className="text-yellow-400">$</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#00150f] p-6 rounded-lg shadow-lg text-white text-center">
        <h2 className="text-xl font-bold uppercase">Affiliate Program</h2>
        <div className="bg-[#1B2D29] p-4 mt-4 rounded-lg flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-gray-100 p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-8 w-8 text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c.654 0 1.269.052 1.865.15a2 2 0 001.593-3.038A9 9 0 1015 21m3-9v.01"
                />
              </svg>
            </div>
            <a
              href="https://voxledger.com/?ref=Geobellz22"
              className="text-white ml-4 underline"
            >
              https://voxledger.com/?ref=Geobellz22
            </a>
          </div>
          <div className="flex space-x-4">
            <button className="bg-[#00150f] text-white py-2 px-4 rounded-md font-main">
              Copy
            </button>
          </div>
        </div>
      </div>
      <div className="h-[500px] mt-5">
        <LiveTradingChart />
      </div>
    </>
  );
}

export default Account;
