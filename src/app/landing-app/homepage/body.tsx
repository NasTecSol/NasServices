"use client";
import { useState } from "react";
import { t } from "../../../utils/localization";
import { useLanguage } from "@/context/LanguageContext";

const Body = () => {
  const [currentLang, setCurrentLang] = useState("");
  const { language, setLanguage } = useLanguage();
 

  return (
    <div className="bg-white px-4 sm:px-6 lg:px-12 py-12">
      {/* Partners Section */}
      <div className="flex justify-center mb-6">
        <img
          src={currentLang === "ar" ? "/home/arabic_partners.png" : "/home/Partners.png"}
          alt={currentLang === "ar" ? "شركاء" : "Partners"}
          className="w-full max-w-[980px] h-auto"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-wrap items-center justify-center lg:justify-between mt-6">
        {/* Left Side */}
        <div className="max-w-lg space-y-4 mb-8 lg:mb-0 text-center lg:text-left">
          <p className="text-2xl sm:text-3xl font-semibold">
             {t("HandleYourEmployeesRequestsInASimplerWay",language as "en" |"ar")} 
          </p>
          <p className="text-base sm:text-lg text-[#90A3B4]">
          {t("Youcanaccept,rejecttherequestsfromyouremployeesincludingvariousrequesttypes!",language as "en" |"ar")} 
             
          </p>
        <div className="space-y-2 text-[#90A3B4]">
         {[
           "EmployeeRequest&Approvals",
           "EmployeesGeolocation",
           "EmployeesAttendance",
           "PayrollManagement",
          ].map((key, index) => (
        <div key={index} className="flex items-center justify-center lg:justify-start space-x-2">
            <img
            src="/home/feather_check-circle.png"
             alt="Check Circle"
             className="w-5 h-5"
             />
             <p>{t(key, language as "en" | "ar")}</p>
             </div>
             ))}
        </div>

          <div className="mt-4 text-[#2D9596] font-semibold">
          {t("LearnaboutRequestManagement", language as "en" | "ar")}
              
              
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center lg:ml-10">
          <img
            src="/home/pcc.svg"
            alt="PC"
            className="w-full max-w-[600px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Body;
