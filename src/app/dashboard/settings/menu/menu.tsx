
"use client";
import React, { useState } from "react";
import { t } from "../../../../utils/localization";
import { useLanguage } from "@/context/LanguageContext";

export default function Menu() {

 const [currentLang, setCurrentLang] = useState("en");
 const { language, setLanguage } = useLanguage();
  const [selectedCard, setSelectedCard] = useState("User");

  const renderContent = () => {
    switch (selectedCard) {
      case "User":
        return <div>{t("User",language as "en" |"ar")}  {t("Content",language as "en" |"ar")}</div>;
      case "Notification":
        return <div className="flex flex-row gap-3">Notification:  <div className="container">
        <label className="switch">
          <input className="togglesw" type="checkbox" defaultChecked />
          <div className="indicator left"></div>
          <div className="indicator right"></div>
          <div className="button"></div>
        </label>
      </div></div>;
      case "Language":
        return <div className="flex flex-row gap-6">English
        <div>Arabic</div> 
        </div>;
      case "Subscription":
        return <div>{t("Subscription",language as "en" |"ar")}  {t("Content",language as "en" |"ar")}</div>;
      case "Company":
        return <div>{t("Company",language as "en" |"ar")}{t("Content",language as "en" |"ar")} </div>;
      default:
        return <div>Default Content</div>;
    }
  };

  return (
    <div>
      <div className="mt-10 flex flex-row justify-between items-center">
        <div className="text-[#444658] ml-[30px] font-medium text-lg">
        {t("Settings",language as "en" |"ar")}
        </div>
        <button
          className="rounded-2xl h-[40px] mr-[20px] w-[100px] px-2 text-white"
          style={{
            background: "linear-gradient(90deg, #EE1D52 0%, #980C2F 100%)",
          }}
        >
        {t("Logout",language as "en" |"ar")}  
        </button>
      </div>

      <div className="flex flex-row ">
        
        <button
          onClick={() => setSelectedCard("User")}
          className={`p-4 rounded-2xl shadow-x ${
            selectedCard === "User" ? "bg-[#444658]" : "bg-[#ffffff]"
          } w-[90%] md:w-[140px] h-[100px] ml-[20px] mt-[20px] `}
        >
          <div className="flex flex-col items-center">
            <img src="/settings/user.png" width={40} height={40} className={`${selectedCard === "User" ? "filter-white" : ""}`} />
            <div
              className={`mt-2 ${
                selectedCard === "User" ? "text-[#ffffff]" : "text-[#444658]"
              }`}
            >
              {t("User",language as "en" |"ar")} 
            </div>
          </div>
        </button>

        <button
          onClick={() => setSelectedCard("Notification")}
          className={`p-4 rounded-2xl shadow-x ${
            selectedCard === "Notification" ? "bg-[#444658]" : "bg-[#ffffff]"
          } w-[90%] md:w-[140px] h-[100px] ml-[20px] mt-[20px]`}
        >
          <div className="flex flex-col items-center">
            <img src="/settings/notification.png" width={40} height={40} className={`${
                selectedCard === "Notification" ? "filter-white" : ""
              }`} />
            <div
              className={`mt-2  ${
                selectedCard === "Notification"
                  ? "text-[#ffffff]"
                  : "text-[#444658]"
              }`}
            >
              {t("Notification",language as "en" |"ar")} 
            </div>
          </div>
        </button>

        <button
          onClick={() => setSelectedCard("Language")}
          className={`p-4 rounded-2xl shadow-x ${
            selectedCard === "Language" ? "bg-[#444658]" : "bg-[#ffffff]"
          } w-[90%] md:w-[140px] h-[100px] ml-[20px] mt-[20px]`}
        >
          <div className="flex flex-col items-center">
            <img src="/settings/language.png" width={40} height={40}  className={`${
                selectedCard === "Language" ? "filter-white" : ""
              }`} />
            <div
              className={`mt-2 ${
                selectedCard === "Language" ? "text-[#ffffff]" : "text-[#444658]"
              }`}
            >
             {t("Language",language as "en" |"ar")}  
            </div>
          </div>
        </button>

        <button
          onClick={() => setSelectedCard("Subscription")}
          className={`p-4 rounded-2xl shadow-x ${
            selectedCard === "Subscription" ? "bg-[#444658]" : "bg-[#ffffff]"
          } w-[90%] md:w-[140px] h-[100px] ml-[20px] mt-[20px]`}
        >
          <div className="flex flex-col items-center">
            <img src="/settings/subscription.png" width={40} height={40}  className={`${
                selectedCard === "Subscription" ? "filter-white" : ""
              }`} />
            <div
              className={`mt-2 ${
                selectedCard === "Subscription"
                  ? "text-[#ffffff]"
                  : "text-[#444658]"
              }`}
            >
             {t("Subscription",language as "en" |"ar")} 
            </div>
          </div>
        </button>

        <button
          onClick={() => setSelectedCard("Company")}
          className={`p-4 rounded-2xl shadow-x ${
            selectedCard === "Company" ? "bg-[#444658]" : "bg-[#ffffff]"
          } w-[90%] md:w-[140px] h-[100px] ml-[20px] mt-[20px]`}
        >
          <div className="flex flex-col items-center">
            <img src="/settings/company.png" width={40} height={40}   className={`${
                selectedCard === "Company" ? "filter-white" : ""
              }`} />
            <div
              className={`mt-2 ${
                selectedCard === "Company" ? "text-[#ffffff]" : "text-[#444658]"
              }`}
            >
              {t("Company",language as "en" |"ar")}
            </div>
          </div>
        </button>
      </div>

     
      <div className="text-[#444658] mt-8 mb-2 ml-5">
      {t(selectedCard, language as "en" | "ar")} {t("DETAILS", language as "en" | "ar")}
      </div>
      <div className="border-b-2 w-[99%] ml-3"></div>

      
      <div className="mt-5 ml-5 flex justify-center">{renderContent()}</div>
    </div>
  );
}
