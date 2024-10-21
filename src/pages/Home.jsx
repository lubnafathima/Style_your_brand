import { useState } from "react";
import Header from "../components/Header";
import LeftContent from "../components/LeftContent";
import RightContent from "../components/RightContent";
// MAIN COMPONENTS
import SignUp from "../components/Main/SignUp";
import LogIn from "../components/Main/LogIn";
import Profile from "../components/Main/Profile";
import EmailList from "../components/Main/EmailList";
import LeadCapture from "../components/Main/LeadCapture";
import TransactionalEmail from "../components/Main/TransactionalEmail";
//
import { AiFillThunderbolt } from "react-icons/ai";
import { PiCubeFill } from "react-icons/pi";
import { PiPlanetFill } from "react-icons/pi";
import { PiHeartFill } from "react-icons/pi";

const Home = () => {
  const [activeTab, setActiveTab] = useState("SignUp");
  const [fonts, setFonts] = useState("font-sans");
  const [logo, setLogo] = useState("logo1");
  const [brandColor, setBrandColor] = useState("db2777");
  const [appearance, setAppearance] = useState("light");
  const [cornerRadius, setCornerRadius] = useState("rounded-none");
  const textColor = "#"+brandColor;

  const renderComponent = () => {
    switch (activeTab) {
      case "SignUp":
        return (
          <SignUp
            fonts={fonts}
            renderLogo={renderLogo}
            cornerRadius={cornerRadius}
            brandColor={brandColor}
          />
        );
      case "LogIn":
        return (
          <LogIn
            fonts={fonts}
            renderLogo={renderLogo}
            cornerRadius={cornerRadius}
            brandColor={brandColor}
          />
        );
      case "Profile":
        return (
          <Profile
            fonts={fonts}
            cornerRadius={cornerRadius}
            brandColor={brandColor}
          />
        );
      case "EmailList":
        return (
          <EmailList
            fonts={fonts}
            renderLogo={renderLogo}
            cornerRadius={cornerRadius}
            brandColor={brandColor}
          />
        );
      case "LeadCapture":
        return (
          <LeadCapture
            fonts={fonts}
            renderLogo={renderLogo}
            cornerRadius={cornerRadius}
            brandColor={brandColor}
          />
        );
      case "TransactionalEmail":
        return (
          <TransactionalEmail
            fonts={fonts}
            renderLogo={renderLogo}
            cornerRadius={cornerRadius}
            brandColor={brandColor}
          />
        );
    }
  };

  const renderLogo = () => {
    switch (logo) {
      case "logo1":
        return <AiFillThunderbolt className="text-3xl" style={{
          color: textColor
        }} />;
      case "logo2":
        return <PiCubeFill className="text-3xl" style={{
          color: textColor
        }} />;
      case "logo3":
        return <PiPlanetFill className="text-3xl" style={{
          color: textColor
        }} />;
      case "logo4":
        return <PiHeartFill className="text-3xl" style={{
          color: textColor
        }} />;
      default:
        return <AiFillThunderbolt className={`text-3xl`} />;
    }
  };

  const lightGradients = {
    db2777:
      "radial-gradient(50% 50% at 50% 100%, #E1B5C9FF 0%, #073AFF00 100%),radial-gradient(113% 91% at 17% -2%, #2000240d 1%, #FF000000 99%),radial-gradient(142% 91% at 83% 7%, #2000240d 1%, #FF000000 99%),radial-gradient(142% 91% at -6% 74%, #2000240d 1%, #FF000000 99%),radial-gradient(142% 91% at 111% 84%, #2000240d 0%, #FFFFFFFF 100%)",
    d1bee1:
      "radial-gradient(50% 50% at 50% 100%, #D1BEE1FF 0%, #073AFF00 100%),radial-gradient(113% 91% at 17% -2%, #2000240d 1%, #FF000000 99%),radial-gradient(142% 91% at 83% 7%, #2000240d 1%, #FF000000 99%),radial-gradient(142% 91% at -6% 74%, #2000240d 1%, #FF000000 99%),radial-gradient(142% 91% at 111% 84%, #2000240d 0%, #FFFFFFFF 100%)",
    b9c5e0:
      "radial-gradient(50% 50% at 50% 100%, #B9C5E0FF 0%, #073AFF00 100%),radial-gradient(113% 91% at 17% -2%, #2000240d 1%, #FF000000 99%),radial-gradient(142% 91% at 83% 7%, #2000240d 1%, #FF000000 99%),radial-gradient(142% 91% at -6% 74%, #2000240d 1%, #FF000000 99%),radial-gradient(142% 91% at 111% 84%, #2000240d 0%, #FFFFFFFF 100%)",
    bde0ca:
      "radial-gradient(50% 50% at 50% 100%, #BDE0CAFF 0%, #073AFF00 100%),radial-gradient(113% 91% at 17% -2%, #2000240d 1%, #FF000000 99%),radial-gradient(142% 91% at 83% 7%, #2000240d 1%, #FF000000 99%),radial-gradient(142% 91% at -6% 74%, #2000240d 1%, #FF000000 99%),radial-gradient(142% 91% at 111% 84%, #2000240d 0%, #FFFFFFFF 100%)",
  };

  const darkGradients = {
    db2777:
      "radial-gradient(20% 20% at 50% 100%, #2B2629FF 0%, #073AFF00 100%),radial-gradient(113% 91% at 17% -2%, #240029 1%, #FF000000 99%),radial-gradient(142% 91% at 83% 7%, #240029 1%, #FF000000 99%),radial-gradient(142% 91% at -6% 74%, #240029 1%, #FF000000 99%),radial-gradient(142% 91% at 111% 84%, #240029 0%, #FF0000FF 100%)",
    d1bee1:
      "radial-gradient(20% 20% at 50% 100%, #39244DFF 0%, #073AFF00 100%),radial-gradient(113% 91% at 17% -2%, #240029 1%, #FF000000 99%),radial-gradient(142% 91% at 83% 7%, #240029 1%, #FF000000 99%),radial-gradient(142% 91% at -6% 74%, #240029 1%, #FF000000 99%),radial-gradient(142% 91% at 111% 84%, #240029 0%, #9333ea 99%)",
    b9c5e0:
      "radial-gradient(20% 20% at 50% 100%, #142242FF 0%, #073AFF00 100%),radial-gradient(113% 91% at 17% -2%, #240029 1%, #FF000000 99%),radial-gradient(142% 91% at 83% 7%, #240029 1%, #FF000000 99%),radial-gradient(142% 91% at -6% 74%, #240029 1%, #FF000000 99%),radial-gradient(142% 91% at 111% 84%, #240029 0%, #2563eb 99%)",
    bde0ca:
      "radial-gradient(20% 20% at 50% 100%, #093419FF 0%, #073AFF00 100%),radial-gradient(113% 91% at 17% -2%, #021208FF 1%, #FF000000 99%),radial-gradient(142% 91% at 83% 7%, #02150AFF 1%, #FF000000 99%),radial-gradient(142% 91% at -6% 74%, #021F12FF 1%, #FF000000 99%),radial-gradient(142% 91% at 111% 84%, #240029 0%, #16a34a 99%)",
  };

  const currentGradients =
    appearance === "light" ? lightGradients : darkGradients;

  return (
    <div
      className="w-full min-h-screen text-black flex flex-col justify-center items-center py-20 px-4 md:px-0"
      style={{
        background: currentGradients[brandColor],
      }}
    >
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        appearance={appearance}
      />
      <div className="w-full flex justify-center items-start gap-8 mt-12">
        <LeftContent
          appearance={appearance}
          fonts={fonts}
          setAppearance={setAppearance}
          setFonts={setFonts}
        />
        {renderComponent()}
        <RightContent
          logo={logo}
          brandColor={brandColor}
          cornerRadius={cornerRadius}
          setLogo={setLogo}
          setBrandColor={setBrandColor}
          setCornerRadius={setCornerRadius}
          appearance={appearance}
        />
      </div>
    </div>
  );
};

export default Home;
