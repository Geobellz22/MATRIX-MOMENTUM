import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";

function About() {
  return (
    <div>
      <Navbar />
      <section className="h-60 bg-[url('src/assets/images/about-img.png')] bg-right bg-no-repeat flex flex-col justify-center font-bold">
        <div className="w-9/12 mx-auto">
          <h1 className="font-main text-6xl text-white">About Us</h1>
          <p className="text-white font-sub text-lg">
            <Link to="/">Home</Link> /{" "}
            <span className="text-[#04CB94]">About</span>
          </p>
        </div>
      </section>
      <section className="grid md:grid-cols-2 w-11/12 md:w-9/12 mx-auto text-white font-sub gap-8 text-justify my-20">
        <div className="">
          <h2 className="text-white font-main text-3xl">Welcome to</h2>
          <h1 className="text-white font-main text-4xl font-bold mb-10">
            MatrixMomentum
          </h1>
          <p className="">
            A leading investor and trusted partner for alternative assets. We
            create sustainable value for our clients and society. <br />
            <br /> Voxledger is an award winning forex and stock broker,
            providing automated trading services and facilities to both retail
            and institutional clients. Through its policy of providing the best
            possible automated trading conditions to its clients and allowing
            both full time and part time investors automation for crypto
            trading. Voxledger is the leading crypto trading bot for Binance,
            Coinbase Pro, Bitmex and more. Easy to use, self hosted trading bot
            software. <br />
            <br /> Due to their long investment horizon and attractive
            risk/return profile, our alternative investments are an ideal match
            for the requirements of Voxledger given our long-term liabilities.{" "}
            <br />
            <br /> Investment management is an integral part of the insurance
            business, as the premiums of Voxledger clients are invested to meet
            long-term liabilities. Voxledger worldwide investment activities
            comprise assets of over EUR 750 billion across a range of asset
            classes, sectors and countries. As a result, Voxledger is directly
            and indirectly connected with other businesses, sectors and
            economies, and is therefore an integral part of the global economy.
          </p>
        </div>
        <div>
          <video
            className="w-full h-96"
            controls
            preload="auto"
            loop
            autoPlay={true}
            muted
          >
            <source src="src/assets/videos/service.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="mb-8">
            ACP as Voxledger captive investment manager for alternative assets
            strives to invest sustainably across our three asset classes. In
            order to keep up with our ambition, we incorporate Environmental,
            Social and Governance (ESG) factors into our investment processes,
            for example through our exclusion policy, research, corporate and
            country analysis, monitoring and risk management. We firmly believe
            that considering ESG factors in investment management is not a
            short-term trend, but will change the business. <br />
            <br /> ACP is committed to the United Nations Principles for
            Responsible Investment (UN PRI). Our parent company, Voxledger
            Investors, is a signatory to the UN PRI, and so in addition to
            integrating ESG principles in our investment process, we also
            incorporate these into our ownership policies and practices and aim
            for appropriate disclosure on ESG issues by the entities in which we
            invest. Moreover, we strive to enhance the implementation
            effectiveness of the principles and regularly report on our
            activities and progress of implementation. Our commitment covers all
            assets we invest in.
          </p>
          <div className="flex gap-3 flex-wrap text-center">
            <a
              href="src/assets/docs/MATRIX MOMENTUM-3.pdf"
              download={true}
              className="text-black text-base flex-auto bg-[#04CB94] px-4 py-3 rounded-lg"
            >
              MatrixMomentum Documentation (English)
            </a>
            <a
              href="src/assets/docs/matrixmomentum spanish.pdf"
              download={true}
              className="text-black text-base flex-auto bg-[#04CB94] px-4 py-3 rounded-lg"
            >
              MatrixMomentum Documentation (Spanish)
            </a>
            <a
              href="src/assets/docs/Matrixmomentum persian.pdf"
              download={true}
              className="text-black text-base flex-auto bg-[#04CB94] px-4 py-3 rounded-lg"
            >
              MatrixMomentum Documentation (Persian)
            </a>
          </div>
        </div>
      </section>
      <section className="text-white">
        <h1 className="text-3xl text-center mb-5">OUR TEAMS</h1>
        <div className="grid md:grid-cols-2 lg:w-3/6 mx-auto bg-[#1B2D29] p-2 mt-3">
          <div className="p-5">
            <div className="h-72 bg-blue-100 rounded-xl">
              <img
                src="src/assets/images/team-1.jpg"
                alt=""
                className="w-full h-full object-cover object-top"
              />
            </div>
            <hgroup className="text-center mt-5">
              <h1 className="text-xl font-bold">
                Mrs. Griffin Katherine Flair
              </h1>
              <p>CEO</p>
            </hgroup>
          </div>
          <div className="p-5">
            <div className="h-72 w-full bg-blue-100 rounded-xl">
              <img
                src="src/assets/images/team-2.jpg"
                alt=""
                className="w-full h-full object-cover object-top"
              />
            </div>
            <hgroup className="text-center mt-5">
              <h1 className="text-xl font-bold">Laura Katherine</h1>
              <p>CEO</p>
            </hgroup>
          </div>
        </div>
      </section>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default About;
