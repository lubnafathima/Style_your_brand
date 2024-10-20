const Header = ({ activeTab, setActiveTab, appearance }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <h1
        className={`text-5xl font-black ${
          appearance === "dark" ? "text-white" : "text-black"
        }`}
      >
        Styled for your brand
      </h1>
      <p
        className={`text-base ${
          appearance === "dark" ? "text-slate-400" : "text-gray-500"
        }`}
      >
        Fully customizable embeds fit natively with your site&#39;s design.
      </p>
      <div
        className={`mt-2 ${
          appearance === "dark"
            ? "bg-[#240029] border-[#240029]"
            : "bg-[#2000240d] border-[#2000240d]"
        } p-[.1rem] border  rounded-lg flex gap-1`}
      >
        <button
          onClick={() => setActiveTab("SignUp")}
          className={`px-3 py-1 text-base ${
            appearance === "dark" ? "text-white" : "text-black"
          } ${
            activeTab === "SignUp"
              ? "bg-[#ffffff43] rounded-lg border border-[#ffffff43]"
              : ""
          }`}
        >
          Sign up
        </button>
        <button
          onClick={() => setActiveTab("LogIn")}
          className={`px-3 py-1 text-base ${
            appearance === "dark" ? "text-white" : "text-black"
          } ${
            activeTab === "LogIn"
              ? "bg-[#ffffff43] rounded-lg border border-[#ffffff43]"
              : ""
          }`}
        >
          Log in
        </button>
        <button
          onClick={() => setActiveTab("Profile")}
          className={`px-3 py-1 text-base ${
            appearance === "dark" ? "text-white" : "text-black"
          } ${
            activeTab === "Profile"
              ? "bg-[#ffffff43] rounded-lg border border-[#ffffff43]"
              : ""
          }`}
        >
          Profile
        </button>
        <button
          onClick={() => setActiveTab("EmailList")}
          className={`px-3 py-1 text-base ${
            appearance === "dark" ? "text-white" : "text-black"
          } ${
            activeTab === "EmailList"
              ? "bg-[#ffffff43] rounded-lg border border-[#ffffff43]"
              : ""
          }`}
        >
          Email list subscribe
        </button>
        <button
          onClick={() => setActiveTab("LeadCapture")}
          className={`px-3 py-1 text-base ${
            appearance === "dark" ? "text-white" : "text-black"
          } ${
            activeTab === "LeadCapture"
              ? "bg-[#ffffff43] rounded-lg border border-[#ffffff43]"
              : ""
          }`}
        >
          Lead capture
        </button>
        <button
          onClick={() => setActiveTab("TransactionalEmail")}
          className={`px-3 py-1 text-base ${
            appearance === "dark" ? "text-white" : "text-black"
          } ${
            activeTab === "TransactionalEmail"
              ? "bg-[#ffffff43] rounded-lg border border-[#ffffff43]"
              : ""
          }`}
        >
          Transactional email
        </button>
      </div>
    </div>
  );
};

export default Header;