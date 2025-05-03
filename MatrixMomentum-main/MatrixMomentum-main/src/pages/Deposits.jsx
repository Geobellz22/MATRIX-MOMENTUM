import Deposit from "../components/Deposit";

function Deposits({ pricingPlan }) {
  return (
    <div className="grid grid-cols-1 gap-5">
      {pricingPlan.map((plan) => (
        <Deposit plan={plan} key={plan.name} />
      ))}
    </div>
  );
}

export default Deposits;
