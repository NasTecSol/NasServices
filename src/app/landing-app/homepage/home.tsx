"use client";
import Footer from "../footer/footer";
import React, { useState } from "react";
import Header from "../header/header";
import Body from "./body";
import { t } from "../../../utils/localization";
import { useLanguage } from "@/context/LanguageContext";

const homePage = () => {
  const [currentLang, setCurrentLang] = useState("en");

  const { language, setLanguage } = useLanguage();

  return (
    <div>
      <Header />
      <div>
        {/* Content Section */}
        <div className="flex flex-wrap items-center justify-center px-6 sm:px-12 py-12 bg-customGray h-auto lg:h-[637px]">
  {/* Left Side */}
  <div className="space-y-6 max-w-full lg:max-w-xl text-center lg:text-left mt-6 sm:mt-0 px-4">
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
      <span>{t("Wehelpyou", language as "en" | "ar")} </span>
      <br />
      <span>
      {t("growyourbusiness", language as "en" | "ar")}
      </span>
      <br />
      <span>{t("faster", language as "en" | "ar")}</span>
    </h1>
    <img
      src="/home/faster.png"
      alt="Vector"
      className="mx-auto lg:mx-0 w-24 sm:w-32 lg:w-48"
    />
    <p className="text-sm sm:text-base lg:text-lg text-white leading-relaxed">
       {t("HR", language as "en" | "ar")}  
    </p>
    <div className="flex justify-center lg:justify-start gap-4">
      <button className="px-6 py-3 bg-white text-customGrayText text-sm sm:text-base lg:text-lg font-medium rounded-md">
        {t("Seehowitworks", language as "en" | "ar")}
      </button>
      <button className="px-6 py-3 border border-white text-white text-sm sm:text-base lg:text-lg font-medium rounded-md">
        { t("RequestACall" , language as "en" | "ar") }
      </button>
    </div>
  </div>

  {/* Right Side */}
  <div className="mt-8 sm:mt-0">
    <img
      src="/home/main-pc.svg"
      alt="Dashboard"
      className="w-full max-w-[280px] sm:max-w-[400px] lg:max-w-[747px] h-auto"
    />
  </div>
</div>


        {/* White Section */}
        <div>
          <Body />
        </div>

        {/* Features Section */}
        <div className="bg-[rgba(45,149,150,0.12)] text-customGrayText px-6 py-12">
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-semibold">
            { t("Features", language as "en" | "ar") } 
            </h2>
            <p className="text-sm sm:text-base leading-6 text-[#2D9596] max-w-xl mx-auto">
            { t("Ditch", language as "en" | "ar") } 
              
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
             {
              icon: "/home/features-attend.png",
              title: t("Attendance", language as "en" | "ar"),
              text: t("card1", language as "en" | "ar"),
            },
            
            {
              icon: "/home/features-req.png",
              title: t("RequestsApprovals", language as "en" | "ar"),
              text: t("card2", language as "en" | "ar"),
            },
            {
              icon: "/home/features-pay.png",
              title: t("Payroll", language as "en" | "ar"),
              text: t("card3", language as "en" | "ar"),
            },
            {
              icon: "/home/features-asset.png",
              title: t("AssetsManagement", language as "en" | "ar"),
              text: t("card4", language as "en" | "ar"),
            },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-md p-6 text-center space-y-4 hover:shadow-lg transition-transform duration-300 ease-in-out hover:translate-y-[-10px]"
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="mx-auto w-12 h-12"
                />
                <h3 className="text-lg font-semibold">
                  
                </h3>
                <p className="text-sm sm:text-base">
                  {currentLang === "en" ? feature.text : "card description"}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Products Section */}
        <div className="bg-white py-12">
          <div className="text-center text-2xl sm:text-3xl font-bold mb-8">
            {t("OurProducts", language as "en" | "ar")}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                img: "/home/nashr-logo.png",
                name: "Nas-HR",
                desc: t("HRM", language as "en"|"ar")
              },
              {
                img: "/home/maker4U.png",
                name: "Maker 4 U",
                desc: t("All", language as "en"|"ar"),
              },
              {
                img: "/home/n-c0llect.png",
                name: "N-Collect",
                desc: t("Cash", language as "en"|"ar"),
              },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-md p-6 text-center space-y-4 hover:shadow-lg transition-transform duration-300 ease-in-out hover:translate-y-[-10px]"
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="mx-auto w-32 h-32 object-contain"
                />
                <p className="text-lg font-semibold">{product.name}</p>
                <p className="text-sm sm:text-base text-[#2D9596]">
                  {product.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default homePage;
