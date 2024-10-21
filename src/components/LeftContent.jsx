import { CiLight } from "react-icons/ci";
import { PiMoonLight } from "react-icons/pi";

const LeftContent = ({ appearance, fonts, setAppearance, setFonts }) => {
  return (
    <div className="w-[20%] hidden md:block">
      <p
        className={`text-base font-medium ${
          appearance === "dark" ? "text-white" : "text-gray-600"
        }`}
      >
        Appearance
      </p>
      <div
        className={`w-full p-[.1rem] border rounded-lg flex gap-1 mt-2 ${
          appearance === "dark"
            ? "bg-[#240029] border-[#240029]"
            : "bg-[#2000240d] border-[#2000240d]"
        }`}
      >
        <button
          onClick={() => setAppearance("light")}
          className={`w-full px-3 py-1 text-base flex gap-2 justify-center items-center ${
            appearance === "light"
              ? "bg-[#ffffff82] rounded-lg border border-[#ffffff43] text-dark"
              : "text-white"
          }`}
        >
          <CiLight />
          Light
        </button>
        <button
          onClick={() => setAppearance("dark")}
          className={`w-full px-3 py-1 text-base flex gap-2 justify-center items-center  ${
            appearance === "dark"
              ? "bg-[#ffffff82] rounded-lg border border-[#ffffff43] text-white"
              : "text-black"
          }`}
        >
          <PiMoonLight />
          Dark
        </button>
      </div>
      <p
        className={`text-gray-600 text-base font-medium mt-8 ${
          appearance === "dark" ? "text-white" : "text-gray-600"
        }`}
      >
        Fonts
      </p>
      <div className="mt-2 grid grid-cols-2 gap-2">
        <button
          onClick={() => setFonts("font-sans")}
          className={`w-full h-[4.5rem] px-3 py-1 rounded-lg border border-gray-300 text-4xl font-sans
            ${appearance === "dark" ? "text-white" : ""} ${
            fonts === "font-sans"
              ? "bg-[#ffffff82] font-black shadow-sm"
              : "bg-[#2000240d] font-bold"
          }`}
        >
          Aa
        </button>
        <button
          onClick={() => setFonts("font-serif")}
          className={`w-full h-[4.5rem] px-3 py-1 rounded-lg border border-gray-300 text-4xl font-serif
            ${appearance === "dark" ? "text-white" : ""} ${
            fonts === "font-serif"
              ? "bg-[#ffffff82] font-black shadow-sm"
              : "bg-[#2000240d] font-bold"
          }`}
        >
          Aa
        </button>
        <button
          onClick={() => setFonts("font-mono")}
          className={`w-full h-[4.5rem] px-3 py-1 rounded-lg border border-gray-300 text-4xl font-mono
            ${appearance === "dark" ? "text-white" : ""} ${
            fonts === "font-mono"
              ? "bg-[#ffffff82] font-black shadow-sm"
              : "bg-[#2000240d] font-bold"
          }`}
        >
          Aa
        </button>
      </div>
    </div>
  );
};

export default LeftContent;
