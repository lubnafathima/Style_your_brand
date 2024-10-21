import { AiFillThunderbolt } from "react-icons/ai";
import { PiCubeFill } from "react-icons/pi";
import { PiPlanetFill } from "react-icons/pi";
import { PiHeartFill } from "react-icons/pi";

const RightContent = ({
  appearance,
  logo,
  brandColor,
  cornerRadius,
  setLogo,
  setBrandColor,
  setCornerRadius,
}) => {
  return (
    <div className="w-[20%] hidden md:block">
      <div className="">
        <p
          className={`text-base font-medium ${
            appearance === "dark" ? "text-white" : "text-gray-600"
          }`}
        >
          Logo
        </p>
        <div className="mt-2 grid grid-cols-2 gap-2">
          <button
            onClick={() => setLogo("logo1")}
            className={`w-full h-[4.5rem] flex justify-center items-center px-3 py-1 rounded-lg border border-gray-300 text-4xl
              ${appearance === "dark" ? "text-white" : ""} ${
              logo === "logo1"
                ? "bg-[#ffffff82] font-black shadow-sm"
                : "bg-[#2000240d] font-bold"
            }`}
          >
            <AiFillThunderbolt className="text-[2rem]" />
          </button>
          <button
            onClick={() => setLogo("logo2")}
            className={`w-full h-[4.5rem] flex justify-center items-center px-3 py-1 rounded-lg border border-gray-300 text-4xl
              ${appearance === "dark" ? "text-white" : ""} ${
              logo === "logo2"
                ? "bg-[#ffffff82] font-black shadow-sm"
                : "bg-[#2000240d] font-bold"
            }`}
          >
            <PiCubeFill className="text-[2rem]" />
          </button>
          <button
            onClick={() => setLogo("logo3")}
            className={`w-full h-[4.5rem] flex justify-center items-center px-3 py-1 rounded-lg border border-gray-300 text-4xl
              ${appearance === "dark" ? "text-white" : ""} ${
              logo === "logo3"
                ? "bg-[#ffffff82] font-black shadow-sm"
                : "bg-[#2000240d] font-bold"
            }`}
          >
            <PiPlanetFill className="text-[2rem]" />
          </button>
          <button
            onClick={() => setLogo("logo4")}
            className={`w-full h-[4.5rem] flex justify-center items-center px-3 py-1 rounded-lg border border-gray-300 text-4xl
              ${appearance === "dark" ? "text-white" : ""} ${
              logo === "logo4"
                ? "bg-[#ffffff82] font-black shadow-sm"
                : "bg-[#2000240d] font-bold"
            }`}
          >
            <PiHeartFill className="text-[2rem]" />
          </button>
        </div>
      </div>
      <div className="mt-8 w-full">
        <p
          className={`text-base font-medium ${
            appearance === "dark" ? "text-white" : "text-gray-600"
          }`}
        >
          Brand color
        </p>
        <div
          className={`w-1/2 p-[.15rem] border border-[#2000240d] rounded-md flex gap-1 mt-2 
            ${
              appearance === "dark"
                ? "bg-[#ffffff82] border-[#240029]"
                : "bg-[#2000240d] border-[#2000240d]"
            }`}
        >
          <button
            onClick={() => setBrandColor("db2777")}
            className={`w-full h-8 rounded-md bg-[#db2777] border-4 ${
              brandColor === "db2777"
                ? "border-white outline outline-1 outline-gray-300"
                : "border-transparent"
            }`}
          ></button>
          <button
            onClick={() => setBrandColor("9333ea")}
            className={`w-full h-8 rounded-md bg-[#9333ea] border-4 ${
              brandColor === "9333ea"
                ? "border-white outline outline-1 outline-gray-300"
                : "border-transparent"
            }`}
          ></button>
          <button
            onClick={() => setBrandColor("2563eb")}
            className={`w-full h-8 rounded-md bg-[#2563eb] border-4 ${
              brandColor === "2563eb"
                ? "border-white outline outline-1 outline-gray-300"
                : "border-transparent"
            }`}
          ></button>
          <button
            onClick={() => setBrandColor("16a34a")}
            className={`w-full h-8 rounded-md bg-[#16a34a] border-4 ${
              brandColor === "16a34a"
                ? "border-white outline outline-1 outline-gray-300"
                : "border-transparent"
            }`}
          ></button>
        </div>
      </div>
      <div className="mt-8">
        <p
          className={`text-base font-medium ${
            appearance === "dark" ? "text-white" : "text-gray-600"
          }`}
        >
          Corner radius
        </p>
        <div
          className={`w-2/3 p-[.75rem] border rounded-md grid grid-cols-2 gap-1 mt-2 ${
            appearance === "dark"
              ? "bg-[#ffffff82] border-[#240029]"
              : "bg-[#2000240d] border-[#2000240d]"
          }`}
        >
          <button
            onClick={() => setCornerRadius("rounded-none")}
            className={`w-full rounded-md p-1 ${
              cornerRadius === "rounded-none"
                ? "bg-white outline outline-1 outline-gray-300"
                : ""
            }`}
          >
            <p
              className={`rounded-none ${
                cornerRadius === "rounded-none"
                  ? "bg-[#240029]"
                  : "bg-[#2000242c]"
              } w-full h-4`}
            ></p>
          </button>
          <button
            onClick={() => setCornerRadius("rounded-md")}
            className={`w-full rounded-md p-1 ${
              cornerRadius === "rounded-md"
                ? "bg-white outline outline-1 outline-gray-300"
                : ""
            }`}
          >
            <p
              className={`rounded-md ${
                cornerRadius === "rounded-md"
                  ? "bg-[#240029]"
                  : "bg-[#2000242c]"
              } w-full h-4`}
            ></p>
          </button>
          <button
            onClick={() => setCornerRadius("rounded-lg")}
            className={`w-full rounded-md p-1 ${
              cornerRadius === "rounded-lg"
                ? "bg-white outline outline-1 outline-gray-300"
                : ""
            }`}
          >
            <p
              className={`rounded-lg ${
                cornerRadius === "rounded-lg"
                  ? "bg-[#240029]"
                  : "bg-[#2000242c]"
              } w-full h-4`}
            ></p>
          </button>
          <button
            onClick={() => setCornerRadius("rounded-full")}
            className={`w-full rounded-md p-1 ${
              cornerRadius === "rounded-full"
                ? "bg-white outline outline-1 outline-gray-300"
                : ""
            }`}
          >
            <p
              className={`rounded-full ${
                cornerRadius === "rounded-full"
                  ? "bg-[#240029]"
                  : "bg-[#2000242c]"
              } w-full h-4`}
            ></p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightContent;
