import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import TermOfUse from "./pages/TermOfUse";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import MakeDeposit from "./pages/MakeDeposit";
import Deposits from "./pages/Deposits";
import EarningHistory from "./pages/EarningHistory";
import Withdraw from "./pages/Withdraw";
import Referrals from "./pages/Referrals";
import ReferralLink from "./pages/ReferralLink";
import EditAccount from "./pages/EditAccount";
import Security from "./pages/Security";
import LanguageSwitcher from "./components/LanguageSwitcher";

function App() {
  const pricingPlan = [
    {
      name: "Beginners",
      percentage: 5,
      duration: 20,
      minInvestment: 100,
      maxInvestment: 999,
    },
    {
      name: "Star",
      percentage: 10,
      duration: 24,
      minInvestment: 1000,
      maxInvestment: 4999,
    },
    {
      name: "Advance",
      percentage: 12,
      duration: 24,
      minInvestment: 5000,
      maxInvestment: 9999,
    },
    {
      name: "Business",
      percentage: 9,
      duration: 5,
      minInvestment: 3000,
      maxInvestment: 12000,
    },
    {
      name: "Golden",
      percentage: 10,
      duration: 78,
      minInvestment: 10000,
      maxInvestment: 20000,
    },
    {
      name: "Premium",
      percentage: 20,
      duration: 48,
      minInvestment: 20000,
      maxInvestment: "UNLIMITED",
    },
  ];

  return (
    <>
      {/* <LanguageSwitcher /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage pricingPlan={pricingPlan} />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/term-of-use" element={<TermOfUse />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<Navigate to="account" />} />
            <Route path="account" element={<Account />} />
            <Route
              path="make-deposit"
              element={<MakeDeposit pricingPlan={pricingPlan} />}
            />
            <Route
              path="your-deposits"
              element={<Deposits pricingPlan={pricingPlan} />}
            />
            <Route path="earning-history" element={<EarningHistory />} />
            <Route path="withdraw" element={<Withdraw />} />
            <Route path="referrals" element={<Referrals />} />
            <Route path="referral-link" element={<ReferralLink />} />
            <Route path="edit-account" element={<EditAccount />} />
            <Route path="security" element={<Security />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
