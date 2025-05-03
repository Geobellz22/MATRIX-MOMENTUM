import { Link } from "react-router-dom";

function Login() {
  return (
    <section className="bg-[#081C17] pb-20">
      <section className="h-72 bg-[url('src/assets/images/about-img.png')] bg-right bg-cover bg-no-repeat flex flex-col justify-center font-bold">
        <div className="w-9/12 mx-auto">
          <h1 className="font-main text-6xl text-white">Login In</h1>
        </div>
      </section>

      <section className="w-7/12 bg-[#00150F] mx-auto mt-20 p-20">
        <hgroup>
          <h1 className="font-main font-bold text-5xl text-white">Welcome back!</h1>
          <p className="font-sub mt-3 text-white">
            Hey there! Ready to log in? Just enter your username and password
            below and you&apos;ll be back in action in no time. Let&apos;s go!
          </p>
        </hgroup>

        <form action="" className="my-10">
          <div className="my-8">
            <label
              htmlFor="email"
              className="block font-main font-semibold text-xl text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="name"
              className="block font-sub px-5 py-4 bg-[#1B2D29] w-full border border-[#1B2D29] text-white rounded-md focus:border-[#00D094] focus:outline-none"
              placeholder="Enter your email"
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
