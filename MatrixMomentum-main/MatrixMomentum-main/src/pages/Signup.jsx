import { useState } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";

function Signup() {
  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
    bitcoin: "",
    ethereum: "",
    tron: "",
    usdtTrc20: "",
    usdtErc20: "",
    bnb: "",
    dogecoin: "",
    shibaInu: "",
    litecoin: "",
  });

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.email !== formData.confirmEmail) {
      alert("Emails do not match!");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  }
  //   try {
  //     const response = await axios.post("http://127.0.0.1:8000/api/signup/", {
  //       full_name: formData.fullName,
  //       username: formData.username,
  //       email: formData.email,
  //       password: formData.password,
  //       bitcoin: formData.bitcoin,
  //       ethereum: formData.ethereum,
  //       tron: formData.tron,
  //       usdt_trc20: formData.usdtTrc20,
  //       usdt_erc20: formData.usdtErc20,
  //       bnb: formData.bnb,
  //       dogecoin: formData.dogecoin,
  //       shiba_inu: formData.shibaInu,
  //       litecoin: formData.litecoin,
  //     });

  //     if (response.status === 201) {
  //       alert("Signup successful! Please check your email for verification.");
  //     }
  //   } catch (error) {
  //     console.error("Signup Error:", error.response?.data || error.message);
  //     alert("Error during signup. Please try again.");
  //   }
  // };

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
            Create Your Account!
          </h1>
          <p className="font-sub mt-3 text-white">
            Hey there! Ready to join the party? We just need a few details from
            you to get started. Let&apos;s do this!
          </p>
        </hgroup>

        <form onSubmit={handleSubmit} className="my-10">
          {/* User Info */}
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="fullName" className="block font-main font-semibold text-xl text-white">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="block font-sub px-5 py-4 bg-[#1B2D29] w-full text-white rounded-md focus:border-[#00D094]"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label htmlFor="username" className="block font-main font-semibold text-xl text-white">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="block font-sub px-5 py-4 bg-[#1B2D29] w-full text-white rounded-md focus:border-[#00D094]"
                placeholder="Enter your username"
              />
            </div>
          </div>

          {/* Emails */}
          <div className="grid md:grid-cols-2 gap-5 my-8">
            <div>
              <label htmlFor="email" className="block font-main font-semibold text-xl text-white">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="block font-sub px-5 py-4 bg-[#1B2D29] w-full text-white rounded-md focus:border-[#00D094]"
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <label htmlFor="confirmEmail" className="block font-main font-semibold text-xl text-white">
                Retype Email Address
              </label>
              <input
                type="email"
                id="confirmEmail"
                name="confirmEmail"
                value={formData.confirmEmail}
                onChange={handleChange}
                className="block font-sub px-5 py-4 bg-[#1B2D29] w-full text-white rounded-md focus:border-[#00D094]"
                placeholder="Retype your email address"
              />
            </div>
          </div>

          {/* Passwords */}
          <div className="grid md:grid-cols-2 gap-5 my-8">
            <div>
              <label htmlFor="password" className="block font-main font-semibold text-xl text-white">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="block font-sub px-5 py-4 bg-[#1B2D29] w-full text-white rounded-md focus:border-[#00D094]"
                placeholder="Enter your password"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block font-main font-semibold text-xl text-white">
                Retype Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="block font-sub px-5 py-4 bg-[#1B2D29] w-full text-white rounded-md focus:border-[#00D094]"
                placeholder="Retype your password"
              />
            </div>
          </div>

          {/* Wallet Addresses */}
          {[
            { name: "bitcoin", label: "Bitcoin Address" },
            { name: "ethereum", label: "Ethereum Address" },
            { name: "tron", label: "Tron Address" },
            { name: "usdtTrc20", label: "Tether USDT (TRC20)" },
            { name: "usdtErc20", label: "Tether USDT (ERC20)" },
            { name: "bnb", label: "BNB Address" },
            { name: "dogecoin", label: "Dogecoin Address" },
            { name: "shibaInu", label: "Shiba Inu Address" },
            { name: "litecoin", label: "Litecoin Address" },
          ].map((field) => (
            <div key={field.name} className="my-4">
              <label htmlFor={field.name} className="block font-main font-semibold text-xl text-white">
                {field.label}
              </label>
              <input
                type="text"
                id={field.name}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="block font-sub px-5 py-4 bg-[#1B2D29] w-full text-white rounded-md focus:border-[#00D094]"
                placeholder={`Enter your ${field.label.toLowerCase()}`}
              />
            </div>
          ))}

          {/* Submit Button */}
          <input
            type="submit"
            value="Sign Up"
            className="block w-full bg-[#00D094] py-3 font-main rounded-md text-lg my-7"
          />

          <p className="font-sub text-center text-white">
            Already have an account?{" "}
            <span className="underline text-[#00D094]">
              <Link to="/login">Login</Link>
            </span>
          </p>
        </form>
      </section>
    </section>
  );
}

export default Signup;
