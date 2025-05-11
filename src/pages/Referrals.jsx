import { useEffect, useState } from "react";
import client from "../api/client";

function Referrals() {
  const [referral, setReferral] = useState({});

  useEffect(() => {
    const fetchReferrals = async () => {
      const referrals = await client.run(
        "get",
        "/api/referral/summary/",
        {},
        true,
        false,
        false
      );
      setReferral(referrals);
    };
    fetchReferrals();
  }, []);
  return (
    <div className="grid grid-cols-3 gap-5">
      <div className="bg-[#04CB94] p-5 h-40 flex flex-col gap-5 text-center justify-center">
        <h2 className="font-bold text-lg">Referrals</h2>
        <h1 className="text-xl">{referral.total_referrals}</h1>
      </div>
      <div className="bg-[#04CB94] p-5 h-40 flex flex-col gap-5 text-center justify-center">
        <h2 className="font-bold text-lg">Active Referrals</h2>
        <h1 className="text-xl">{referral.active_referrals}</h1>
      </div>
      <div className="bg-[#04CB94] p-5 h-40 flex flex-col gap-5 text-center justify-center">
        <h2 className="font-bold text-lg">Total Referral Commission</h2>
        <h1 className="text-xl">{referral.total_commission}</h1>
      </div>
    </div>
  );
}

export default Referrals;
