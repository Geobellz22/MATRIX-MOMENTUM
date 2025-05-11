import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import axios from "axios";
import Cookies from "js-cookie";

const BACKEND = import.meta.env.VITE_BACKEND;

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

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

    try {
      const response = await axios.post(`${BACKEND}/account/login/`, {
        username: formData.username,
        password: formData.password,
      });

      if (response.status === 200) {
        Cookies.set("accessToken", response.data.access);
        Cookies.set("refreshToken", response.data.refresh);

        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Login Error:", error.response?.data || error.message);
      alert("Account with such details doesn't exist");
    }
  };

  return (
    <section className="bg-[#081C17] pb-20">
      <section className="h-72 bg-[url('src/assets/images/about-img.png')] bg-right bg-cover bg-no-repeat flex flex-col justify-center font-bold">
        <div className="w-9/12 mx-auto">
          <h1 className="font-main text-6xl text-white">Login In</h1>
        </div>
      </section>

      <section className="w-7/12 bg-[#00150F] mx-auto mt-20 p-20">
        <hgroup>
          <h1 className="font-main font-bold text-5xl text-white">
            Welcome back!
          </h1>
          <p className="font-sub mt-3 text-white">
            Hey there! Ready to log in? Just enter your username and password
            below and you&apos;ll be back in action in no time. Let&apos;s go!
          </p>
        </hgroup>

        <form onSubmit={handleSubmit} className="my-10">
          <div className="my-8">
            <label
              htmlFor="username"
              className="block font-main font-semibold text-xl text-white"
            >
              Username
            </label>
            <input
              type="username"
              name="username"
              onChange={handleChange}
              value={formData.username}
              className="block font-sub px-5 py-4 bg-[#1B2D29] w-full border border-[#1B2D29] text-white rounded-md focus:border-[#00D094] focus:outline-none"
              placeholder="Enter your username"
            />
          </div>
          <div className="mt-8 mb-3">
            <label
              htmlFor="password"
              className="block font-main font-semibold text-xl text-white"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              id="password"
              className="block font-sub px-5 py-4 bg-[#1B2D29] w-full border border-[#1B2D29] text-white rounded-md focus:border-[#00D094] focus:outline-none"
              placeholder="Password"
            />
          </div>
          <Link
            to="/"
            className="block underline font-bold text-[#00D094] text-right"
          >
            Forgot Password?
          </Link>

          <input
            type="submit"
            value="Sign In"
            className="block w-full bg-[#00D094] py-3 font-main rounded-md text-lg my-7"
          />
          <p className="font-sub text-center text-white">
            Don&apos;t have an account{" "}
            <span className="underline text-[#00D094] ">
              <Link to="/signup">Sign Up</Link>
            </span>
          </p>
        </form>
      </section>

      <hgroup></hgroup>
    </section>
  );
}

export default Login;
