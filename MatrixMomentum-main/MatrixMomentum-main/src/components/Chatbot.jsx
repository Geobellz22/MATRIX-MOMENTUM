import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { LuMessagesSquare } from "react-icons/lu";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "We’re busy at the moment. Leave us your email, and we will contact you as soon as possible.",
    },
  ]);
  const [input, setInput] = useState("");
  const [showBot, setShowBot] = useState(false);

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: "user", text: input }]);
      setInput("");
    }
  };

  return (
    <>
      <button
        className="p-5 text-3xl bg-[#04CB94] rounded-full fixed bottom-5 right-5"
        onClick={() => setShowBot(true)}
      >
        <LuMessagesSquare />
      </button>
      {showBot && (
        <div className="w-11/12 mx-auto md:w-96 h-[80vh] rounded-lg bg-white fixed bottom-5 right-5">
          <div className="flex justify-between h-[10vh] px-4 bg-[#1B2D29] items-center gap-3">
            <div className="flex  items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-red-100"></div>
              <div className="text-white">
                <h1 className="font-bold text-lg">MatrixMomentum</h1>
                <p className="text-xs">
                  <span>🟢</span> We reply immediately
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="p-1 rounded-full text-xl bg-blue-100">
                <BsThreeDotsVertical />
              </span>
              <span
                className="p-1 rounded-full text-xl bg-blue-50"
                onClick={() => setShowBot(false)}
              >
                <IoMdArrowDropdown />
              </span>
            </div>
          </div>

          <div className="h-[60vh] overflow-y-auto p-3 space-y-2 bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`text-sm p-2 rounded-lg ${
                  msg.sender === "bot"
                    ? "bg-green-900 text-white"
                    : "bg-gray-300 text-black self-end"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="flex items-center p-3 border-t border-[#1B2D29]">
            <input
              type="text"
              placeholder="Type your message here"
              className="flex-1 p-2 text-sm border border-[#1B2D29] rounded-l focus:outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              onClick={sendMessage}
              className="bg-[#1B2D29] text-white px-4 py-2 rounded-r transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
