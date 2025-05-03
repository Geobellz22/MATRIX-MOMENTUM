function Deposit({ plan }) {
  return (
    <div className="bg-[#00150F] p-4 rounded-lg shadow-lg">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-[#04CB94] text-black text-left font-main">
            <th className="p-4 font-semibold">Plan</th>
            <th className="p-4 font-semibold">Amount Spent ($)</th>
            <th className="p-4 font-semibold">Profit (%)</th>
          </tr>
        </thead>
        <tbody className="text-white font-sub">
          <tr className="bg-[#1B2D29]">
            <td className="p-4 font-bold uppercase">{plan.name} Plan</td>
            <td className="p-4"></td>
            <td className="p-4"></td>
          </tr>
          <tr className="bg-[#1B2D29]">
            <td className="p-4">Plan 1</td>
            <td className="p-4">
              ${plan.minInvestment}.00 -{" "}
              {plan.maxInvestment === "UNLIMITED"
                ? "UNLIMITED"
                : `${plan.maxInvestment}.00`}
            </td>
            <td className="p-4">{plan.percentage}.00</td>
          </tr>
          <tr className="bg-[#1B2D29]">
            <td className="p-4 text-center" colSpan="3">
              No deposits for this plan
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Deposit;
