const PricingCards = ({ pricingPlan }) => {
  return (
    <div className="grid grid-cols-2 justify-center gap-6 py-8">
      {pricingPlan.map((plan, index) => (
        <div
          key={index}
          className=" p-6 bg-[#04CB94] text-black rounded-xl shadow-lg"
        >
          <div className="flex justify-center items-center mb-4">
            <div className="bg-[#1B2D29] text-white text-sm px-4 py-1 rounded-full uppercase font-semibold">
              Package
            </div>
          </div>
          <h3 className="text-lg font-bold text-center mb-2">
            {plan.name} Plan
          </h3>
          <p className="text-center text-sm mb-2">
            ${plan.minInvestment.toLocaleString()} - $
            {plan.maxInvestment.toLocaleString()}
          </p>
          <p className="text-center text-lg font-bold mb-6">
            {plan.percentage}%
          </p>
          <button className="w-full bg-[#1B2D29] text-white py-2 rounded-lg font-semibold hover:bg-green-950">
            Calculate
          </button>
        </div>
      ))}
    </div>
  );
};

export default PricingCards;
