import Button from "./Button";

function PricingPlan({ plan }) {
  return (
    <article className="w-full md:w-[32%] h-[27rem] md:pb-10 p-6 bg-[#1B2D29] text-white rounded-2xl relative border-2 border-[#1B2D29] transition-all duration-500 hover:border-[#04CB94] hover:scale-[1.01]">
      <h1 className="font-main text-2xl uppercase">{plan.name}</h1>
      <h1 className="text-xl font-sub my-5">
        <span className="text-4xl font-bold font-main text-[#04CB94]">
          {plan.percentage}%
        </span>{" "}
        /{plan.duration} hours
      </h1>
      <hr className="my-6" />
      <div className="flex items-center gap-2 my-3">
        <img src="src/assets/images/mark-box.png" alt="" />
        <p className="font-sub">
          Min-Max Investment: $
          {new Intl.NumberFormat().format(plan.minInvestment)} - $
          {plan.maxInvestment === "Unlimited"
            ? "Unlimited"
            : new Intl.NumberFormat().format(plan.maxInvestment)}
        </p>
      </div>
      <div className="flex items-center gap-2 my-3">
        <img src="src/assets/images/mark-box.png" alt="" />
        <p className="font-sub">Instant Withdrawals</p>
      </div>
      <div className="flex items-center gap-2 my-3">
        <img src="src/assets/images/mark-box.png" alt="" />
        <p className="font-sub">Principal Included</p>
      </div>
      <div className="flex items-center gap-2 my-3">
        <img src="src/assets/images/mark-box.png" alt="" />
        <p className="font-sub">24/7 Dedicated Support</p>
      </div>

      <div className="items-end">

      <Button variant="pricing" to="signup">Invest Now</Button>
      </div>
    </article>
  );
}

export default PricingPlan;
