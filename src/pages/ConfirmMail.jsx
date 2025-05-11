import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import Cookies from "js-cookie";

const BACKEND = import.meta.env.VITE_BACKEND;

function ConfirmMail() {
  // Form State
  const [code, setCode] = useState("");

  const navigate = useNavigate();

  // Handle Input Changes
  const handleChange = (e) => {
    const { _, value } = e.target;
    setCode(value);
  }

  // Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = Cookies.get("userId");
    

    try {
      const response = await axios.post(`${BACKEND}/account/confirm-email/`, {
        "user_id": userId,
       "confirmation_code": code
      });

      if (response.status === 200) {
        alert("Mail confirmed successful! You can now login you account.");
        navigate("/login");
      }
    } catch (error) {
      console.error("Mail confirmation Error:", error.response?.data || error.message);
      alert("Invalid or Expired code. Pls try agaian");
    }
  };

  return (
    <section className="bg-[#081C17] pb-20">
      <section className="h-72 bg-[url('src/assets/images/about-img.png')] bg-right bg-cover bg-no-repeat flex flex-col justify-center font-bold">
        <div className="w-9/12 mx-auto">
          <h1 className="font-main text-6xl text-white">Create Account</h1>
        </div>
      </section>

      <section className="w-7/12 bg-[#00150F] mx-auto mt-20 p-20">
        <hgroup>
          <h1 className="font-main font-bold text-5xl text-white">
            Confirm your email!
          </h1>
          <p className="font-sub mt-3 text-white">
            Check you inbox or spam folder, to get your otp and confirm your account.
          </p>
        </hgroup>

        <form onSubmit={handleSubmit} className="my-10">
          {/* User Info */}
          <div className="grid  gap-5">
            <div>
              <label
                htmlFor="fullName"
                className="block justify-self-center font-main font-semibold text-xl text-start text-white"
              >
               OTP
              </label>
              <input
                type="number"
                id="code"
                name="code"
                value={code}
                onChange={handleChange}
                className="block justify-self-center  font-sub px-5 py-4 bg-[#1B2D29] text-white rounded-md focus:border-[#00D094]"
                placeholder="Enter the OTP in your mail"
              />
            </div>
            </div>
    

          {/* Submit Button */}
          <input
            type="submit"
            value="Submit"
            className="block justify-self-center bg-[#00D094] py-3 px-8 font-main rounded-md text-lg my-7"
          />

          <p className="font-sub text-center text-white">
            Didn&apos;t get the code?{" "}
            <span className="underline text-[#00D094]">
              Resend{""}
            </span>
          </p>
        </form>
      </section>
    </section>
  );
}

export default ConfirmMail;
