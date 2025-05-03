import DepositMethod from "../components/DepositMethod";
import PricingCards from "../components/PricingCards";

function MakeDeposit({ pricingPlan }) {
  return (
    <div>
      <PricingCards pricingPlan={pricingPlan} />
      <DepositMethod />
    </div>
  );
}

export default MakeDeposit;
