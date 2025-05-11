import Button from "../components/Button";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PricingPlans from "../components/PricingPlans";
import Services from "../components/Services";

function Homepage({pricingPlan}) {
  return (
    <div>
      <Navbar />

      <section className="bg-[url('src/assets/images/bg.png')] bg-cover bg-top md:bg-left pt-32 pb-20 px-5 md:p-20 flex flex-col-reverse md:flex-row flex-wrap md:h-[110vh] w-full relative">
        <div className="hidden lg:block absolute w-[21rem] bg-[#204339] h-[120vh] bottom-16 left-[12.5rem] rotate-[25deg] rounded-b-full"></div>
        <div className="hidden lg:block absolute w-[18rem] bg-[#1B483B] h-[120vh] bottom-24 left-[14.8rem] rotate-[25deg] rounded-b-full"></div>
        <div className="md:w-1/2 flex items-center ">
          <img
            src="src/assets/images/1.png"
            className="z-0 lg:w-96 xl:w-auto"
            alt=""
          />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center md:h-[70vh]">
          <div className="md:w-11/12">
            <h1
              data-translate
              className="text-white font-main text-4xl md:text-3xl lg:text-4xl xl:text-6xl xl:leading-[4rem] lg:leading-[3rem] font-bold mb-4"
            >
              Multiply your currency with{" "}
              <span className="text-[#04CB94]">MatrixMomentum</span>
            </h1>
            <p
              data-translate
              className="text-white leading-7 font-sub md:text-sm"
            >
              Are you tired of your currency not going as far as it used to? Try
              MatrixMomentum and multiply your money! With their user friendly
              interface and expert market analysis, you&apos;ll be earning more
              in no time
            </p>
            <div className="flex gap-4 mt-5">
              <Button variant="primary" to="/signup">
                Create Account
              </Button>
              <Button variant="secondary" to="/login">
                Login
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="my-36 w-11/12 md:w-10/12 lg:w-11/12 xl:w-9/12 mx-auto flex flex-wrap items-center">
        <article className="lg:w-1/2">
          <h1 className="text-capitalize text-white xl:text-5xl text-center md:text-left text-3xl lg:text-5xl font-main font-semibold mb-12">
            Experienced Trading Platform to Grow
          </h1>
          <div className="flex flex-col md:flex-row gap-5 my-8 items-center">
            <div className="w-16 h-16 rounded-xl border-2 border-[#273833] me-auto md:me-0"></div>
            <div className="text-white md:w-10/12">
              <h2 className="font-main font-semibold text-2xl md:text-2xl lg:text-2xl">
                Highly Secured
              </h2>
              <p className="font-sub md:w-5/6 lg:w-auto md:text-base">
                MatrixMomentum have SSL connection, cold storages and the
                strongest anti-DDoS. It allows to protect your funds on our
                platform.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5 my-8 items-center">
            <div className="w-16 h-16 rounded-xl border-2 border-[#273833] me-auto md:me-0"></div>
            <div className="text-white md:w-10/12">
              <h2 className="font-main font-semibold text-2xl md:text-2xl lg:text-2xl">
                Fast withdrawals
              </h2>
              <p className="font-sub md:w-5/6 lg:w-auto md:text-base">
                Our team works every day. It guarantees that the withdrawal
                request will be processed Instant.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5 my-8 items-center">
            <div className="w-16 h-16 rounded-xl border-2 border-[#273833] me-auto md:me-0"></div>
            <div className="text-white md:w-10/12">
              <h2 className="font-main font-semibold text-2xl md:text-2xl lg:text-2xl">
                Passive income
              </h2>
              <p className="font-sub md:w-5/6 lg:w-auto md:text-base">
                We provide the best solution to get passive income on investment
                with the minimum amount of $10.
              </p>
            </div>
          </div>
        </article>
        <article className="lg:w-1/2 mt-16 md:mt-0">
          <img
            src="src/assets/images/3-dark.png"
            className="md:w-96 lg:w-auto"
            alt=""
          />
        </article>
      </section>

      <Services />

      <PricingPlans pricingPlan={pricingPlan} />

      <section className="w-9/12 mx-auto my-20">
        <h2 className="text-center text-white text-4xl capitalize font-main font-semibold mb-10">
          Partner Program
        </h2>
        <div className="flex flex-wrap">
          <div className="md:w-1/2 text-white">
            <h1 className="text-2xl font-main">Referral Commission</h1>
            <p className="text-lg my-3">
              MaxtrixMomentum provide 3 Level commission 3% - 5% -10% from
              deposit for our investors who invite their friends & family
              members.
            </p>
            <div className="flex gap-5">
              <div className="text-center my-5">
                <h1 className="text-4xl font-main font-semibold">
                  3<span className="text-xl">%</span>
                </h1>
                <h3>1st level</h3>
              </div>
              <div className="text-center my-5">
                <h1 className="text-4xl font-main font-semibold">
                  5<span className="text-xl">%</span>
                </h1>
                <h3>2nd level</h3>
              </div>
              <div className="text-center my-5">
                <h1 className="text-4xl font-main font-semibold">
                  10<span className="text-xl">%</span>
                </h1>
                <h3>3rd level</h3>
              </div>
            </div>
          </div>
          <div className="md:w-1/2"></div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Homepage;
