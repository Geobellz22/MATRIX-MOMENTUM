import { Link } from "react-router-dom";

function Button({ to, variant, children }) {
  const base = "px-[1.75rem] py-[.8rem] rounded-md inline-block uppercase font-sub capitalize font-semibold";
  const variants = {
    primary: base + " bg-[#00D094] text-[#0C263A]",
    secondary: base + " bg-[#ffffff14] text-white",
    plan: base + " rounded-full bg-green-100",
    pricing:
      "block py-[.8rem] rounded-md text-center mt-7 border border-white font-semibold hover:bg-[#00D094] hover:text-[#0C263A]",
  };

  return (
    <Link to={to} className={variants[variant]}>
      {children}
    </Link>
  );
}

export default Button;
