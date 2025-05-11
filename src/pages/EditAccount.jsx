import { BiSolidEdit } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoWallet } from "react-icons/io5";
import { RiKeyFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import client from "../api/client";

function EditAccount() {
  const [userDetails, setUserDetails] = useState({});
  const [originalDetails, setOriginalDetails] = useState({});
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");

  
  useEffect(() => {
    const toastMsg = {
      info: "Fetching user details",
      error: "Error fetching details",
    };
  
    const fetchDetails = async () => {
      const details = await client.run(
        "get",
        "/api/edit-account/user-registered-details",
        {},
        true,
        toastMsg,
        false
      );
      setUserDetails(details);
      setOriginalDetails(details);
    };
    fetchDetails();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const hasChanges = () => {
    const keysToCompare = Object.keys(originalDetails);
    return keysToCompare.some((key) => userDetails[key] !== originalDetails[key]) || password;
  };

  const editDetails = async () => {
    if (!hasChanges()) return alert("No changes made.");

    if (password && password !== retypePassword) {
      return alert("Passwords do not match.");
    }

    const updatedData = { ...userDetails };
    if (password) {
      updatedData.password = password;
    }

    try {
      await client.run(
        "patch",
        "/api/edit-account/edit-account",
        updatedData,
        true,
        {
          info: "Updating account details...",
          error: "Update failed",
        },
        false
      );
      setOriginalDetails(userDetails); // Reset original after update
      alert("Account details updated successfully.");
    } catch (err) {
      console.error("Update error:", err);
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-6">
        <InputField icon={<BiSolidEdit />} name="username" value={userDetails.username} onChange={handleChange} />
        <InputField icon={<IoIosMail />} name="email" value={userDetails.email_address} onChange={handleChange} />
        <InputField icon={<FaUser />} name="name" value={userDetails.name} onChange={handleChange} />
        <PasswordField icon={<RiKeyFill />} placeholder="New Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <PasswordField icon={<RiKeyFill />} placeholder="Retype Password" value={retypePassword} onChange={(e) => setRetypePassword(e.target.value)} />
        <InputField icon={<IoWallet />} name="bitcoin_wallet" value={userDetails.bitcoin_wallet} onChange={handleChange} />
        <InputField icon={<IoWallet />} name="tether_usdt_trc20_wallet" value={userDetails.tether_usdt_trc20_wallet} onChange={handleChange} />
        <InputField icon={<IoWallet />} name="tron_wallet" value={userDetails.tron_wallet} onChange={handleChange} />
        <InputField icon={<IoWallet />} name="ethereum_wallet" value={userDetails.ethereum_wallet} onChange={handleChange} />
        <InputField icon={<IoWallet />} name="bnb_wallet" value={userDetails.bnb_wallet} onChange={handleChange} />
      </div>

      <div className="mt-6 flex justify-center">
        <button
          className="bg-[#0E352A] text-white px-6 py-2 rounded-lg font-semibold"
          onClick={editDetails}
        >
          Change Data
        </button>
      </div>
    </>
  );
}

function InputField({ icon, name, value, onChange }) {
  return (
    <div className="flex items-center bg-[#04CB94] text-black rounded-md p-3">
      <span className="material-icons text-[#002A1E] mr-3">{icon}</span>
      <input
        type="text"
        name={name}
        value={value || ""}
        onChange={onChange}
        className="bg-transparent outline-none w-full text-sm"
      />
    </div>
  );
}

function PasswordField({ icon, placeholder, value, onChange }) {
  return (
    <div className="flex items-center bg-[#04CB94] text-black rounded-md p-3">
      <span className="material-icons text-[#002A1E] mr-3">{icon}</span>
      <input
        type="password"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="bg-transparent outline-none w-full text-sm"
      />
    </div>
  );
}

export default EditAccount;
