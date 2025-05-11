import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`${
        isOpen ? "block" : "flex"
      } justify-between items-center bg-[#0E352A] sticky top-0 w-full py-5 px-5 md:px-10 z-50 transition-all ease-linear duration-500`}
    >
      <div className="flex justify-between w-full md:w-fit items-center">
        <h1 className="text-3xl font-main text-white">
          Matrix<span className="">Momentum</span>
        </h1>
        <p
          className="block md:hidden text-white text-3xl"
          onClick={() => setIsOpen((open) => !open)}
        >
          {!isOpen ? <RxHamburgerMenu /> : <IoCloseSharp />}
        </p>
      </div>
      <ul
        className={`${
          isOpen ? "" : "hidden"
        } md:flex justify-between items-center gap-5 capitalize font-sub text-white font-semibold`}
      >
        <li className={`${isOpen ? "my-7 text-center text-xl" : ""}`}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className={`${isOpen ? "my-7 text-center text-xl" : ""}`}>
          <NavLink to="/about">About</NavLink>
        </li>
        <li className={`${isOpen ? "my-7 text-center text-xl" : ""}`}>
          <NavLink to="/faq">FAQ</NavLink>
        </li>
        {/* <li className={`${isOpen ? "my-7 text-center text-xl" : ""}`}>
          <NavLink to="/term-of-use">Term of Use</NavLink>
        </li> */}
        <li className={`${isOpen ? "my-7 text-center text-xl" : ""}`}>
          <NavLink to="/contact-us">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
