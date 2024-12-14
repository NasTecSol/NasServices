"use client";
import { useState } from "react";
import { t } from "../../../../../utils/localization";
import { useLanguage } from "@/context/LanguageContext";
interface Owner {
  companyName?: string;
  userName?: string;
  email?: string;
  address?: string;
  phoneNumber?: string;
 
}
const Owner = () => {
  const [Owner, setOwner] = useState<Owner>({});
  const [currentLang, setCurrentLang] = useState("en");
  const { language, setLanguage } = useLanguage();
 
  
  const [formErrors, setFormErrors] = useState<Partial<Owner>>({});

  const handleInputChange = (fieldName: keyof Owner, value: string | number) => {
    setOwner((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const validateField = (field: keyof Owner, value: string | number) => {
    if (!value) {
      setFormErrors((prev) => ({
        ...prev,
        [field]: `${capitalizeFirstLetter(field)} is required.`,
      }));
    } else if (field === 'email' && !isValidEmail(value as string)) {
      setFormErrors((prev) => ({
        ...prev,
        [field]: 'Please enter a valid email address.',
      }));
    }else {
      setFormErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
 
  const capitalizeFirstLetter = (field: keyof Owner) => {
    return field.charAt(0).toUpperCase() + field.slice(1);
  };



  return (
    <div className=" ml-[20px] w-[98%] mb-[40px] mt-4">
     {t("NewOwner",language as "en" |"ar")}
    <div className="border-b mt-2"></div>
    <div className="flex flex-col mt-8 ml-4">
        <div className="flex flex-row">
        <div className="flex flex-col">
            <div className="text-[#444658]">
            {t("CompanyName",language as "en" |"ar")} <span className="text-red-500">*</span>
            </div>
            <div className="flex mt-[14px] ml-[-6px]  relative">
              <input
                type="text"
                
                placeholder={t("CompanyName",language as "en" |"ar")}
                className={`w-[174px] px-4 py-2 border rounded-full placeholder-gray-400 focus:[#444658] ${
                  formErrors.companyName ? 'border-red-500' : ''
                }`}
                onBlur={(e) => validateField('companyName', e.target.value)}
                onChange={(e) => handleInputChange('companyName', e.target.value)}
                ></input>
                  {formErrors.companyName && (
        <span className="absolute text-red-500 text-sm ml-2  w-[200px] bottom-[-25px]">
          {formErrors.companyName}
        </span>
      )}      
            </div>
          </div>
            <div className="flex flex-col ml-8 ">
                <div className="text-[#444658]">
                {t("UserName",language as "en" |"ar")} <span className="text-red-500">*</span>
                </div>
                <div className="flex mt-[14px] ml-[-6px] relative ">
            <input
             type="text"
             placeholder="Nassar Ibn Ibrahim"
              className={`w-[246px] px-4 py-2 border rounded-full  placeholder-gray-400 focus:[#444658]${
                  formErrors.userName ? 'border-red-500' : ''
                }`}
                onBlur={(e) => validateField('userName', e.target.value)}
                onChange={(e) => handleInputChange('userName', e.target.value)}
                ></input>
                  {formErrors.userName && (
        <span className="absolute text-red-500 text-sm ml-2 bottom-[-25px]">
          {formErrors.userName}
        </span>
      )}
             
        </div>
            </div>
            <div className="flex flex-col ml-8">
                <div className="text-[#444658]">
                {t("Email",language as "en" |"ar")}  <span className="text-red-500">*</span>
                </div>
                <div className="flex mt-[14px] ml-[-6px] relative ">
            <input
             type="text"
           
             placeholder="Employee@nastecsol.com"
              className={`w-[266px] px-4 py-2 border rounded-full  placeholder-gray-400 focus:[#444658]${
                  formErrors.email ? 'border-red-500' : ''
                }`}
                onBlur={(e) => validateField('email', e.target.value)}
                onChange={(e) => handleInputChange('email', e.target.value)}
                ></input>
                  {formErrors.email && (
        <span className="absolute text-red-500 text-sm ml-2 bottom-[-25px]">
          {formErrors.email}
        </span>
      )}
           
        </div>
            </div>
        </div>

        <div className="flex flex-row mt-8">
            <div className="flex flex-col">
                <div className="text-[#444658]">
                {t("AddCompleteAddress",language as "en" |"ar")}  <span className="text-red-500">*</span>
                </div>
                <div className="flex mt-[14px] ml-[-6px]  relative">
            <input
             type="text"
             placeholder="Full address"
              className={`w-[264px] px-4 py-2 border rounded-full placeholder-gray-400 focus:[#444658] ${
                formErrors.address ? 'border-red-500' : ''
              }`}
              onBlur={(e) => validateField('address', e.target.value)}
              onChange={(e) => handleInputChange('address', e.target.value)}
              ></input>
                {formErrors.address && (
      <span className="absolute text-red-500 text-sm ml-2 bottom-[-25px]">
        {formErrors.address}
      </span>
    )}
             
        </div>
            </div>
            <div className="flex flex-col ml-8">
                <div className="text-[#444658]">
                {t("phoneNumber",language as "en" |"ar")}  <span className="text-red-500">*</span>
                </div>
                <div className="flex mt-[14px] ml-[-6px] relative ">
            <input
             type="number"
           
             placeholder="+92-320932983"
              className={`w-[264px] px-4 py-2 border rounded-full placeholder-gray-400 focus:[#444658]${
                formErrors.phoneNumber ? 'border-red-500' : ''
              }`}
              onBlur={(e) => validateField('phoneNumber', e.target.value)}
              onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
              ></input>
                {formErrors.phoneNumber && (
      <span className="absolute text-red-500 text-sm ml-2 bottom-[-25px]">
        {formErrors.phoneNumber}
      </span>
    )}
             
        </div>
            </div>
         
        </div>
        <div className="flex flex-col space-y-2 mt-4 ">
           <label htmlFor="file-upload" className="text-[#444658] w-32 size-[16px] mt-[18px] mb-[8px]">
           {t("AddUserPhoto",language as "en" |"ar")}  <span className="text-red-500">*</span>
            </label>
              <div className="mt-[14px] w-[375px] px-4 py-2 border rounded-full text-gray-600 placeholder-gray-400 focus:[#444658]">
                   <label
                    
                    className="cursor-pointer">
                  </label>
                 <input
               id="file-upload"
                type="file"
               accept="image/*"
                 />   
                                   
               
      </div>
  </div>
    </div>
  </div>  
   


);
}
export default  Owner; 
