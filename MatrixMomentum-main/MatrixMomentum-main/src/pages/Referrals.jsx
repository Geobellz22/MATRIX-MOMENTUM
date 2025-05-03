function Referrals() {
  return (
    <div className="grid grid-cols-3 gap-5">
      <div className="bg-[#04CB94] p-5 h-40 flex flex-col gap-5 text-center justify-center">
        <h2 className="font-bold text-lg">Referrals</h2>
        <h1 className="text-xl">1</h1>
      </div>
      <div className="bg-[#04CB94] p-5 h-40 flex flex-col gap-5 text-center justify-center">
        <h2 className="font-bold text-lg">Active Referrals</h2>
        <h1 className="text-xl">1</h1>
      </div>
      <div className="bg-[#04CB94] p-5 h-40 flex flex-col gap-5 text-center justify-center">
        <h2 className="font-bold text-lg">Total Referral Commission</h2>
        <h1 className="text-xl">$0.00</h1>
      </div>
    </div>
  );
}

export default Referrals;
