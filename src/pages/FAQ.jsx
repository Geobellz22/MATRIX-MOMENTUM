import { useState } from "react";
import Navbar from "../components/Navbar";
import { FaMinus, FaPlus } from "react-icons/fa";
import Footer from "../components/Footer";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(false);

  const faq = [
    {
      id: 1,
      question: "How can I invest with voxledger.com ?",
      answer:
        "To make a investment you must first become a member of voxledger.com . Once you are signed up, you can make your first deposit. All deposits must be made through the Members Area. You can login using the member username and password you receive when signup.",
    },
    {
      id: 2,
      question:
        "I wish to invest with voxledger.com but I don't have an any ecurrency account. What should I do?",
      answer: "You can open a free PM account here: www.bitcoin.com",
    },
    {
      id: 3,
      question: "How do I open my voxledger.com Account?",
      answer:
        "It's quite easy and convenient. Follow this link, fill in the registration form and then press 'Register'.",
    },
    {
      id: 4,
      question: "Which e-currencies do you accept?",
      answer: "We accept e-currencies",
    },
    {
      question: "How can I withdraw funds?",
      answer:
        "Login to your account using your username and password and check the Withdraw section",
    },
    {
      question:
        "How long does it usually take for a withdrawal request to be processed?",
      answer: "Withdrawal requests are instantly",
    },
    {
      question:
        "How long does it take for my deposit to be added to my account?",
      answer: "Your account will be updated as fast, as you deposit",
    },
    {
      question: "How can I change my e-mail address or password?",
      answer:
        'Log into your voxledger.com account and click on the "Account Information". You can change your e-mail address and password there',
    },
    {
      question:
        "What if I can't log into my account because I forgot my password?",
      answer:
        "Click forgot password link, type your username or e-mail and you'll receive your account information",
    },
    {
      question: "Does a daily profit paid directly to my currency account?",
      answer:
        "No, profits are gathered on your voxledger.com account and you can withdraw them anytime",
    },
    {
      question: "How do you calculate the interest on my account?",
      answer:
        "Depending on each plan. Interest on your voxledger.com account is acquired Daily and for 15 days and credited to your available balance at the end of each day",
    },
    {
      question:
        "Can I make an additional deposit to voxledger.com account once it has been opened?",
      answer: "Yes, you can but all transactions are handled separately",
    },
    {
      question: "How can I change my password?",
      answer:
        "You can change your password directly from your members area by editing it in your personal profile.",
    },
    {
      question: "Can I lose money?",
      answer:
        "There is a risk involved with investing in all high yield investment programs. However, there are a few simple ways that can help you to reduce the risk of losing more than you can afford to. First, align your investments with your financial goals, in other words, keep the money you may need for the short-term out of more aggressive investments, reserving those investment funds for the money you intend to raise over the long-term. It's very important for you to know that we are real traders and that we invest members' funds on major investments",
    },
    {
      question: "How can I check my account balances?",
      answer:
        "You can access the account information 24 hours, seven days a week over the Internet",
    },
    {
      question: "May I open several accounts in your program?",
      answer:
        "No. If we find that one member has more than one account, the entire funds will be frozen",
    },
    {
      question: "How can I make a spend?",
      answer:
        "To make a spend you must first become a member of voxledger.com . Once you are signed up, you can make your first spend. All spends must be made through the Member Area. You can login using the member username and password you received when signup",
    },
    {
      question: "Who manages the funds?",
      answer:
        "These funds are managed by a team of voxledger.com investment experts",
    },
    {
      question: "What is the minimum amount I can withdraw?",
      answer:
        "The minimum withdrawal amount for users is $10.00 BTC, LTC $10 ETH $10 and bitcoincash $10 and for perfect money $0.10",
    },
  ];

  function handleClick(index) {
    setActiveIndex(index === activeIndex ? null : index);
  }

  return (
    <>
      <Navbar />
      <section className="mb-32 mt-20">
        <h1 className="text-white text-4xl font-main font-semibold text-center">
          Most Common FAQ
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 w-11/12 md:w-9/12 gap-5 mx-auto auto-rows-auto mt-20">
          {faq.map((question, index) => (
            <div
              className={`p-4 border rounded-lg transition-all duration-1000 text-white font-sub ${
                activeIndex === index ? "h-auto" : "h-[120px] overflow-hidden"
              }`}
              key={question.question}
            >
              <div
                className="flex justify-between items-center gap-3"
                onClick={() => handleClick(index)}
              >
                <p className="font-bold text-lg">{question.question}</p>
                {activeIndex === index ? <FaMinus /> : <FaPlus />}
              </div>
              <div
                className={`transition-all duration-1000 mt-5 ${
                  activeIndex === index ? "block" : "hidden"
                }`}
              >
                {activeIndex === index && <p>{question.answer}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default FAQ;
