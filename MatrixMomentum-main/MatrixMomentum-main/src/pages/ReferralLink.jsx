function ReferralLink() {
  return (
    <div className="flex justify-center flex-col">
      <h1>
        <textarea
          className="bg-[#1B2D29] text-white focus:outline-none text-xl"
          value="<a href='https://voxledger.com/?ref=Geobellz22'></a>"
          style={{ resize: "none", width: "100%", display: "block" }}
        ></textarea>
      </h1>
    </div>
  );
}

export default ReferralLink;
