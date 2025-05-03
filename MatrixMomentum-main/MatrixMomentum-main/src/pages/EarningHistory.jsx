const EarningHistory = () => {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mb-6">
          <select
            className="p-2 border rounded-lg bg-[#04CB94] text-black font-semibold focus:outline-none"
            defaultValue="All transactions"
          >
            <option>All transactions</option>
            <option>Deposit</option>
            <option>Withdrawal</option>
          </select>
          <select
            className="p-2 border rounded-lg bg-[#04CB94] text-black font-semibold focus:outline-none"
            defaultValue="Sep"
          >
            <option>Jan</option>
            <option>Feb</option>
            <option>Mar</option>
            <option>Apr</option>
            <option>May</option>
            <option>Jun</option>
            <option>Jul</option>
            <option>Aug</option>
            <option>Sep</option>
            <option>Oct</option>
            <option>Nov</option>
            <option>Dec</option>
          </select>
          <select
            className="p-2 border rounded-lg bg-[#04CB94] text-black font-semibold focus:outline-none"
            defaultValue="13"
          >
            {[...Array(31)].map((_, index) => (
              <option key={index}>{index + 1}</option>
            ))}
          </select>
          <select
            className="p-2 border rounded-lg bg-[#04CB94] text-black font-semibold focus:outline-none"
            defaultValue="2024"
          >
            <option>2023</option>
            <option>2024</option>
            <option>2025</option>
          </select>
          <select
            className="p-2 border rounded-lg bg-[#04CB94] text-black font-semibold focus:outline-none"
            defaultValue="All eCurrencies"
          >
            <option>All eCurrencies</option>
            <option>Bitcoin</option>
            <option>Ethereum</option>
            <option>USDT</option>
          </select>
          <select
            className="p-2 border rounded-lg bg-[#04CB94] text-black font-semibold focus:outline-none"
            defaultValue="Dec"
          >
            <option>Jan</option>
            <option>Feb</option>
            <option>Mar</option>
            <option>Apr</option>
            <option>May</option>
            <option>Jun</option>
            <option>Jul</option>
            <option>Aug</option>
            <option>Sep</option>
            <option>Oct</option>
            <option>Nov</option>
            <option>Dec</option>
          </select>
          <select
            className="p-2 border rounded-lg bg-[#04CB94] text-black font-semibold focus:outline-none"
            defaultValue="2"
          >
            {[...Array(31)].map((_, index) => (
              <option key={index}>{index + 1}</option>
            ))}
          </select>
          <select
            className="p-2 border rounded-lg bg-[#04CB94] text-black font-semibold focus:outline-none"
            defaultValue="2024"
          >
            <option>2023</option>
            <option>2024</option>
            <option>2025</option>
          </select>
        </div>
        <div className="flex justify-center">
          <button className="bg-[#04CB94] text-black-900 px-6 py-2 rounded-lg font-bold hover:bg-teal-500">
            Submit
          </button>
        </div>
      </div>

      <div className="mt-10 w-full max-w-4xl">
        <table className="w-full bg-white rounded-lg shadow-lg">
          <thead className="bg-[#04CB94] text-black text-left">
            <tr>
              <th className="p-3">Type</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Date</th>
              <th className="p-3">Comments</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 text-center" colSpan="4">
                No transactions found
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td className="p-3 font-bold" colSpan="3">
                Total:
              </td>
              <td className="p-3 text-right font-bold">$ 0.00</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default EarningHistory;
