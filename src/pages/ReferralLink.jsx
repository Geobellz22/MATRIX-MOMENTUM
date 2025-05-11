import { useEffect, useState } from "react";
import client from "../api/client";
import { Link } from "react-router-dom";
function ReferralLink() {
  const [referral, setReferral] = useState({});

  useEffect(() => {
    const fetchReferrals = async () => {
      const referrals = await client.run(
        "get",
        "/api/referral-links/referral-link/",
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
    <div className="flex justify-center flex-col">
      <h1>
        <div
          className="bg-[#1B2D29] text-white focus:outline-none text-xl"
          style={{ resize: "none", width: "100%", display: "block" }}
        >
          <Link>{referral.referral_link}</Link>
        </div>
      </h1>
    </div>
  );
}

export default ReferralLink;
