"use client";
import { useState } from "react";
import { t } from "../../../utils/localization";
import { useLanguage } from "@/context/LanguageContext";
const Footer = () => {
  const [currentLang, setCurrentLang] = useState("en");

  const { language, setLanguage } = useLanguage();
    return (

<footer className="bg-gray-800 text-white py-8">
  <div className="max-w-6xl mx-auto px-4">
    {/* Footer Content */}
    <div className="flex flex-wrap justify-between">
  {/* Footer Logo Section */}
  <div className="w-full sm:w-1/3 mb-8 sm:mb-0">
    <div className="flex items-center">
      <img 
        src="/home/logo.png" 
        alt="HrLite Icon" 
        className="w-20 h-15" 
      />
      <span className="text-blue-500 text-3xl font-bold ml-2">.</span>
    </div>
    <p className="text-sm w-[223px] text-gray-400">
    {t("Build", language as "en" | "ar")}
    </p>

    {/* Social Links Section */}
    <div className="mt-4 flex items-center space-x-4">
      <a href="#">
        <img 
          src="/home/google.png" 
          alt="Google" 
          width={27} 
          height={27} 
          className="hover:opacity-80"
        />
      </a>
      <a href="#">
        <img 
          src="/home/twitter.png" 
          alt="Twitter" 
          width={27} 
          height={27}  
          className="hover:opacity-80"
        />
      </a>
      <a href="#">
        <img 
          src="/home/insta.png" 
          alt="Instagram" 
          width={27} 
          height={27} 
          className="hover:opacity-80"
        />
      </a>
      <a href="#">
        <img 
          src="/home/linkdin.png" 
          alt="LinkedIn" 
          width={27} 
          height={27} 
          className="hover:opacity-80"
        />
      </a>
    </div>
  </div>


      {/* Footer Links Section */}
      <div className="w-full sm:w-2/3 flex flex-wrap justify-between">
        {/* Services */}
        <div className="w-1/2 sm:w-1/3 mb-4 sm:mb-0">
          <h3 className="font-semibold mb-3">{t("Services", language as "en" | "ar")}</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-blue-500">{t("Documentation", language as "en" | "ar")}</a></li>
            <li><a href="#" className="hover:text-blue-500">{t("Design", language as "en" | "ar")}</a></li>
            <li><a href="#" className="hover:text-blue-500">{t("Themes", language as "en" | "ar")}</a></li>
            <li><a href="#" className="hover:text-blue-500">{t("Illustrations", language as "en" | "ar")}</a></li>
            <li><a href="#" className="hover:text-blue-500">{t("UIKit", language as "en" | "ar")}</a></li>
          </ul>
        </div>

        {/* Company */}
        <div className="w-1/2 sm:w-1/3">
          <h3 className="font-semibold mb-3">{t("Company", language as "en" | "ar")}</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-blue-500">{t("About", language as "en" | "ar")}</a></li>
            <li><a href="#" className="hover:text-blue-500">{t("Terms", language as "en" | "ar")}</a></li>
            <li><a href="#" className="hover:text-blue-500">{t("PrivacyPolicy", language as "en" | "ar")}</a></li>
            <li><a href="#" className="hover:text-blue-500">{t("Careers", language as "en" | "ar")}</a></li>
          </ul>
        </div>
      </div>
    </div>
    {/* Footer Copyright Section */}
    <div className="mt-8 flex flex-col sm:flex-column justify-between items-center text-sm text-gray-400">
      <p>{t("C", language as "en" | "ar")}</p>
      <div className="mt-[20px] ">
        <img src="/home/Heart.png" alt="Heart" width={50} height={50} />
      </div>
    </div>
  </div>
</footer>
);
};

export default Footer;
