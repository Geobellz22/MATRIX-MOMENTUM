import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside>
      <ul className="text-white font-main">
        <Link to="/dashboard">
          <li className="py-3 px-5 border-b border-b-[#1B2D29] hover:bg-[#1B2D29] transition-all duration-500">
            Account
          </li>
        </Link>
        <Link to="/dashboard/make-deposit" className="">
          <li className="py-3 px-5 border-b border-b-[#1B2D29] hover:bg-[#1B2D29] transition-all duration-500">
            Make Deposit
          </li>
        </Link>
        <Link to="/dashboard/your-deposits" className="">
          <li className="py-3 px-5 border-b border-b-[#1B2D29] hover:bg-[#1B2D29] transition-all duration-500">
            Your Deposit
          </li>
        </Link>
        <Link to="/dashboard/earning-history" className="">
          <li className="py-3 px-5 border-b border-b-[#1B2D29] hover:bg-[#1B2D29] transition-all duration-500">
            Earning History
          </li>
        </Link>
        <Link to="/dashboard/withdraw" className="">
          <li className="py-3 px-5 border-b border-b-[#1B2D29] hover:bg-[#1B2D29] transition-all duration-500">
            Withdraws
          </li>
        </Link>
        <Link to="/dashboard/referrals" className="">
          <li className="py-3 px-5 border-b border-b-[#1B2D29] hover:bg-[#1B2D29] transition-all duration-500">
            Your Referrals
          </li>
        </Link>
        <Link to="/dashboard/referral-link" className="">
          <li className="py-3 px-5 border-b border-b-[#1B2D29] hover:bg-[#1B2D29] transition-all duration-500">
            Referral Links
          </li>
        </Link>
        <Link to="/dashboard/edit-account" className="">
          <li className="py-3 px-5 border-b border-b-[#1B2D29] hover:bg-[#1B2D29] transition-all duration-500">
            Edit Account
          </li>
        </Link>
        <Link to="/dashboard/security" className="">
          <li className="py-3 px-5 border-b border-b-[#1B2D29] hover:bg-[#1B2D29] transition-all duration-500">
            Security
          </li>
        </Link>
        <Link to="/" className="">
          <li className="py-3 px-5 border-b border-b-[#1B2D29] hover:bg-[#1B2D29] transition-all duration-500">
            Logout
          </li>
        </Link>
      </ul>
    </aside>
  );
}

export default Sidebar;
