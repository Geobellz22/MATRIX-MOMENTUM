import { BrowserRouter, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { BsTelephone } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />
      <section className="h-60 bg-[url('src/assets/images/about-img.png')] bg-right bg-no-repeat flex flex-col justify-center font-bold">
        <div className="md:w-9/12 mx-auto">
          <h1 className="font-main text-6xl text-white">Contact Us</h1>
          <p className="text-white font-sub text-lg">
            <Link to="/">Home</Link> /{" "}
            <span className="text-[#04CB94]">Contact Us</span>
          </p>
        </div>
      </section>

      <main className="w-11/12 md:w-9/12 mx-auto flex flex-wrap mt-20">
        <div className="w-6/6 lg:w-2/6">
          <h1 className="font-main text-3xl text-white font-bold">
            Let&#39;s Get In Touch
          </h1>
          <div className="my-7 flex items-center gap-5 pe-5">
            <div className="w-14 h-14 text-xl rounded-full bg-[#002A1E] text-white flex justify-center items-center">
              <IoLocationOutline />
            </div>
            <div className="text-[#FFFFFF99] font-bold font-sub">
              <p>
                903/50 Clarence St, <br />
                Sydney NSW 2000, Australia
              </p>
            </div>
          </div>
          <div className="my-7 flex items-center gap-5">
            <div className="w-14 h-14 text-xl rounded-full bg-[#002A1E] text-white flex justify-center items-center">
              <BsTelephone />
            </div>
            <div className="text-[#FFFFFF99] font-bold font-sub">
              <p>+234843744594848</p>
              <p>+234843744594848</p>
            </div>
          </div>
          <div className="my-7 flex items-center gap-5">
            <div className="w-14 h-14 text-xl rounded-full bg-[#002A1E] text-white flex justify-center items-center">
              <GoMail />
            </div>
            <div className="text-[#FFFFFF99] font-bold font-sub">
              <p>mail@gmail.com</p>
              <p>mail@yahoo.com</p>
            </div>
          </div>
        </div>
        <form action="" className="w-full lg:w-3/6 mt-10 md:mt-0">
          <div className="mb-3">
            <label
              className="block text-white font-bold font-main text-xl"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="px-5 mt-2 text-white font-sub py-4 w-full rounded-lg bg-[#1B2D29] focus:outline-none border focus:border-[#00D094]"
              type="text"
              id="name"
              placeholder="Full Name"
            />
          </div>
          <div className="my-7">
            <label
              className="block text-white font-bold font-main text-xl"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="block px-5 mt-2 text-white font-sub py-4 w-full rounded-lg bg-[#1B2D29] focus:outline-none border focus:border-[#00D094]"
              type="email"
              id="email"
              placeholder="Email here"
            />
          </div>
          <div className="my-7">
            <label
              className="block text-white font-bold font-main text-xl"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="block px-5 mt-2 text-white font-sub py-4 w-full rounded-lg bg-[#1B2D29] focus:outline-none border focus:border-[#00D094] h-60"
              type="text"
              id="message"
              placeholder="Enter Your Message"
            />
          </div>
        </form>
      </main>

      <div className="h-96 my-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.1367153568353!2d151.20260971112126!3d-33.865945673115995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae40c56fffff%3A0x3b03776fc97846ea!2sOffice%20903%2F50%20Clarence%20St%2C%20Sydney%20NSW%202000%2C%20Australia!5e1!3m2!1sen!2sng!4v1737666245369!5m2!1sen!2sng"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
