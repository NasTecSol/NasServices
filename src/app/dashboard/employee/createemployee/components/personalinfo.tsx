import React, { useState } from "react";
import { useFormContext } from "../context/formcontext";
import { t } from "../../../../../utils/localization";
import { useLanguage } from "@/context/LanguageContext";

const PersonalInfoComponent = () => {
  const { formData, updateFormData } = useFormContext();
  const [currentLang, setCurrentLang] = useState("en");
  const { language, setLanguage } = useLanguage();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData("userInfo", { [e.target.name]: e.target.value });
  };
  return (
    <div className="flex flex-col ml-[10px]">
      {/* Nationality and Address */}
      <div className="flex flex-row">
        <div className="flex flex-col ml-[-400px]">
          <div className="text-[#444658] size-[16px]"> {t("Nationality",language as "en" |"ar")} </div>
          <div className="flex mt-[14px] ml-[-6px] relative">
            <input
              type="text"
              placeholder="Nationality"
              className="w-[290px] px-4 py-2 border rounded-full text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="nationality"
              value={formData.personalInfo.nationality}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex flex-col ml-[290px]">
          <div className="text-[#444658] size-[16px]">{t("Address",language as "en" |"ar")}</div>
          <div className="flex mt-[14px] relative">
            <input
              type="text"
              placeholder="Enter Address"
              className="w-[290px] px-4 py-2 border rounded-full"
              name="address"
              value={formData.personalInfo.address}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      {/* Religion and Marital Status */}
      <div className="flex flex-row mt-6">
        {/* Religion Field */}
        <div className="flex flex-col ml-[-400px]">
          <div className="text-[#444658] size-[16px]">{t("Religion",language as "en" |"ar")}</div>
          <div className="flex mt-[14px] relative gap-5">
            <input
              type="text"
              placeholder="Religion"
              className="w-[290px] px-4 py-2 border rounded-full "
              name="religion"
              value={formData.personalInfo.religion}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Marital Status Field */}
        <div className="flex flex-col ml-[285px]">
          <div className="text-[#444658] size-[16px] w-[120px]">
          {t("MaritalStatus*",language as "en" |"ar")} 
          </div>
          <div className="flex mt-[14px] relative gap-5">
            <input
              type="text"
              placeholder="Enter Marital Status"
              className="w-[290px] px-4 py-2 border rounded-full"
              name="maritalStatus"
              value={formData.personalInfo.maritalStatus}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      {/* Birth Date, Start of Contract, End of Contract */}
      <div className="flex flex-row mt-6">
        {/* Birth Date Field */}
        <div className="flex flex-col ml-[-400px]">
          <div className="text-[#444658] size-[16px] w-[120px]">
          {t("BirthDate*",language as "en" |"ar")}   
          </div>
          <div className="flex mt-[14px] relative gap-5">
            <input
              type="date"
              className="w-[290px] px-4 py-2 border rounded-full"
              name="birthDate"
              value={formData.personalInfo.birthDate}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Start of Contract Field */}
        <div className="flex flex-col ml-[285px]">
          <div className="text-[#444658] size-[16px] w-[150px]">
          {t("StartOfContract*",language as "en" |"ar")}  
          </div>
          <div className="flex mt-[14px] relative gap-5">
            <input
              type="date"
              className="w-[207px] px-4 py-2 border rounded-full"
              name="startOfContract"
              value={formData.personalInfo.startOfContract}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* End of Contract Field */}
        <div className="flex flex-col ml-3">
          <div className="text-[#444658] size-[16px] w-[150px]">
          {t("EndOfContract*",language as "en" |"ar")} 
          </div>
          <div className="flex mt-[14px] relative gap-5">
            <input
              type="date"
              className="w-[207px] px-4 py-2 border rounded-full"
              name="endOfContract"
              value={formData.personalInfo.endOfContract}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      {/* Gender */}
      <div className="flex flex-row mt-6">
        <div className="flex flex-col ml-[-400px]">
          <label className="text-sm font-semibold text-gray-700">
          {t("Gender",language as "en" |"ar")}  <span className="text-[#444658]">*</span>
          </label>
          <div className="flex items-center space-x-4 mt-2">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="gender"
                value="male"
                className="w-5 h-5 text-blue-500 border-gray-300 focus:ring-blue-500 "
              />
              <span className="text-gray-800">{t("Male",language as "en" |"ar")}</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="gender"
                value="female"
                className="w-5 h-5 text-blue-500 border-gray-300 focus:ring-blue-500"
              />
              <span className="text-gray-800">{t("Female",language as "en" |"ar")}</span>
            </label>
          </div>
        </div>

        {/* Contract Type */}
        <div className="flex flex-col ml-[425px]">
          <label className="text-sm font-semibold text-gray-700">
          {t("ContractType",language as "en" |"ar")}  <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center space-x-4 mt-2">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="contractType"
                value="limited"
                className="w-5 h-5 text-blue-500 border-gray-300 focus:ring-blue-500"
              />
              <span className="text-gray-800">{t("Limited",language as "en" |"ar")}</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="contractType"
                value="unlimited"
                className="w-5 h-5 text-blue-500 border-gray-300 focus:ring-blue-500 "
              />
              <span className="text-gray-800">{t("Unlimited",language as "en" |"ar")}</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoComponent;
