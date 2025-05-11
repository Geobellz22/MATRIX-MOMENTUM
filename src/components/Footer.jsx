import { BsTelephone } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { TiMail } from "react-icons/ti";
import { Link } from "react-router-dom";

function Footer() {
    return (
      <footer className="bg-[#00150F] py-20">
        <div className="w-11/12 xl:w-9/12 mx-auto gap-5 grid grid-cols-1 md:grid-cols-5">
          <div className="md:col-span-2 text-white">
            <h1 className="font-main text-3xl font-semibold">MatrixMomentum</h1>
            <p className="font-sub my-3 text-sm md:text-lg">
              We are only satisfied when you are satisfied. If there is any
              cause for criticism, please do not hesitate to contact us.
              Regardless of whether you send us an email or a letter, we promise
              you that we will take your concern very seriously and search for a
              satisfactory solution.
            </p>
          </div>
          <div className="text-white md:col-start-4 md:col-span-1">
            <h1 className="font-main text-white text-xl font-semibold">
              Quick Links
            </h1>
            <ul className="font-sub text-sm md:text-lg">
              <li className="my-3 font-sub text-[#ffffff99] font-semibold hover:underline transition-all duration-500">
                <Link to="/">About Us</Link>
              </li>
              <li className="my-3 font-sub text-[#ffffff99] font-semibold hover:underline transition-all duration-500">
                <Link to="/">Rules</Link>
              </li>
              <li className="my-3 font-sub text-[#ffffff99] font-semibold hover:underline transition-all duration-500">
                <Link to="/">FAQ</Link>
              </li>
              <li className="my-3 font-sub text-[#ffffff99] font-semibold hover:underline transition-all duration-500">
                <Link to="/">Term of Use</Link>
              </li>
            </ul>
          </div>
          <div className="text-white col-span-1">
            <h1 className="font-main text-white text-xl font-semibold">
              Contact Us
            </h1>
            <ul className="font-sub text-sm md:text-lg flex flex-col">
              <li className="flex items-center gap-2 my-3 text-[#ffffff99]">
                <p>
                  <GoMail />
                </p>
                <p className="break-words">support@voxledger.com</p>
              </li>
              <li className="flex items-center gap-2 my-3 text-[#ffffff99]">
                <p>
                  <IoLocationOutline />
                </p>
                <p>903/50 Clarence St, Sydney NSW 2000, Australia</p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
}

export default Footer
