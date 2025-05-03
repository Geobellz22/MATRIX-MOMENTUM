import { BiSolidEdit } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoWallet } from "react-icons/io5";
import { RiKeyFill } from "react-icons/ri";

function EditAccount() {
  return (
    <>
      <div className="grid grid-cols-2 gap-6">
        <div className="flex items-center bg-[#04CB94] text-black rounded-md p-3">
          <span className="material-icons text-[#002A1E] mr-3">
            <BiSolidEdit />
          </span>
          <input
            type="text"
            value="Geobellz22"
            className="bg-transparent outline-none w-full text-sm"
          />
        </div>
        <div className="flex items-center bg-[#04CB94] text-black rounded-md p-3">
          <span className="material-icons text-[#002A1E] mr-3">
            <BiSolidEdit />
          </span>
          <input
            type="text"
            value="Sep-13-2024 08:49:19 AM"
            className="bg-transparent outline-none w-full text-sm"
          />
        </div>

        <div className="flex items-center bg-[#04CB94] text-black rounded-md p-3">
          <span className="material-icons text-[#002A1E] mr-3">
            <FaUser />
          </span>
          <input
            type="text"
            value="bello saheed"
            className="bg-transparent outline-none w-full text-sm"
          />
        </div>
        <div className="flex items-center bg-[#04CB94] text-black rounded-md p-3">
          <span className="material-icons text-[#002A1E] mr-3">
            <RiKeyFill />
          </span>
          <input
            type="password"
            placeholder="New Password"
            className="bg-transparent outline-none w-full text-sm"
          />
        </div>

        <div className="flex items-center bg-[#04CB94] text-black rounded-md p-3">
          <span className="material-icons text-[#002A1E] mr-3">
            <RiKeyFill />
          </span>
          <input
            type="password"
            placeholder="Retype Password"
            className="bg-transparent outline-none w-full text-sm"
          />
        </div>
        <div className="flex items-center bg-[#04CB94] text-black rounded-md p-3">
          <span className="material-icons text-[#002A1E] mr-3">
            <IoWallet />
          </span>
          <input
            type="text"
            value="bc1q372ruvgmqa0uwumdzqsgvc6z"
            className="bg-transparent outline-none w-full text-sm"
          />
        </div>

        <div className="flex items-center bg-[#04CB94] text-black rounded-md p-3">
          <span className="material-icons text-[#002A1E] mr-3">
            <IoWallet />
          </span>
          <input
            type="text"
            value="0x1a158E08B0bd1ac5D991e85e3A9"
            className="bg-transparent outline-none w-full text-sm"
          />
        </div>
        <div className="flex items-center bg-[#04CB94] text-black rounded-md p-3">
          <span className="material-icons text-[#002A1E] mr-3">
            <IoWallet />
          </span>
          <input
            type="text"
            value="TB9JQFM5Jndp6hqvxvQvKa5Rrbrp"
            className="bg-transparent outline-none w-full text-sm"
          />
        </div>

        <div className="flex items-center bg-[#04CB94] text-black rounded-md p-3">
          <span className="material-icons text-[#002A1E] mr-3">
            <IoWallet />
          </span>
          <input
            type="text"
            value="0x1234567890ABCDEF1234567890"
            className="bg-transparent outline-none w-full text-sm"
          />
        </div>
        <div className="flex items-center bg-[#04CB94] text-black rounded-md p-3">
          <span className="material-icons text-[#002A1E] mr-3">
            <IoIosMail />
          </span>
          <input
            type="email"
            value="st377126@gmail.com"
            className="bg-transparent outline-none w-full text-sm"
          />
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <button className="bg-[#0E352A] text-white px-6 py-2 rounded-lg font-semibold">
          Change Data
        </button>
      </div>
    </>
  );
}

export default EditAccount;
