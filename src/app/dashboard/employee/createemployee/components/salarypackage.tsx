import shadows from "@mui/material/styles/shadows";
import { useState } from "react";
import { t } from "../../../../../utils/localization";
import { useLanguage } from "@/context/LanguageContext";

interface SalaryPackage {
   effectiveOn?: string;
   basicSalary?: string;
   currency?: string;
  
 
 }
 const SalaryPackageComponent = () => {
   const [SalaryPackage, setSalaryPackage] = useState<SalaryPackage>({});
   const [currentLang, setCurrentLang] = useState("en");
   const { language, setLanguage } = useLanguage();
  
   
   const [formErrors, setFormErrors] = useState<Partial<SalaryPackage>>({});
 
   const handleInputChange = (fieldName: keyof SalaryPackage, value: string | number) => {
     setSalaryPackage((prev) => ({
       ...prev,
       [fieldName]: value,
     }));
   };
 
   const validateField = (field: keyof SalaryPackage, value: string | number) => {
     if (!value) {
       setFormErrors((prev) => ({
         ...prev,
         [field]: `${capitalizeFirstLetter(field)} is required.`,
       }));
     } else {
       setFormErrors((prev) => {
         const newErrors = { ...prev };
         delete newErrors[field];
         return newErrors;
       });
     }
   };
 
  
   const capitalizeFirstLetter = (field: keyof SalaryPackage) => {
     return field.charAt(0).toUpperCase() + field.slice(1);
   };


    return(
       <div className="flex flex-row mt-[-10px]">
        <div className=" bg-[#ffffff] p-4 ml-[-380px] rounded-[42px] shadow-even-shadow w-[510px] h-[200px]">
         <div className="bg-[#DFEFEF] rounded-[50px]  w-[120px] h-[120px] mt-[30px]">   
         </div>
         <p className="text-[#444658] size-17 ml-[50px] mt-[-80px] font-bold  "> AR</p>
         <div className="flex flex-col w-[440px] mt-[-50px] ml-[140px]">
            <p className=" text-[#444658] size-5 font-semibold w-48 "> Ali Rana</p>
            <p className="text-[#616161] size-4 font-medium w-80 mt-1">{t("CustomerSuccessManager",language as "en" |"ar")}  </p>
            <p className=" text-[#616161] size-4 font-medium w-80 mt-2"> {t("ITSolutions",language as "en" |"ar")}</p>
         </div>
         <div className="mt-[-68px] ml-[440px]">
            <img src="/employee/edit.png" width={13} height={13}></img>
        </div>
        </div>
       <div className="flex flex-col mt-[-10px] ml-[470px]">
       <div className="text-[#444658] w-[200px] mt-6 ml-[-405px]"  >
       {t("Effectiveon",language as "en" |"ar")}<span className="text-red-500">*</span>
            </div>
            <div className="flex mt-3 ml-[-405px] relative">
                     <input
                     type="date"
                     placeholder="Select Date"
                      className={`w-[281px] px-4 py-2 border rounded-full text-gray-600 placeholder-gray-400 focus:outline-[#444658] ${
                        formErrors.effectiveOn ? 'border-red-500' : ''
                      }`}
                      onBlur={(e) => validateField('effectiveOn', e.target.value)}
                      onChange={(e) => handleInputChange('effectiveOn', e.target.value)}
                      ></input>
                        {formErrors.effectiveOn && (
              <span className="absolute text-red-500 text-sm ml-2 bottom-[-20px]">
                {formErrors.effectiveOn}
              </span>
            )}
                     
            </div>
           <div className="flex flex-row mt-[-12px]">
           <div className="text-[#444658] w-[200px] mt-6 ml-[-405px]"  >
           {t("BasicSalary",language as "en" |"ar")} <span className="text-red-500">*</span>
            </div>
            <div className="flex mt-16 ml-[-205px] relative">
                     <input
                     type="text"
                     placeholder="0.00"
                      className={`w-[281px] px-4 py-2 border rounded-full text-gray-600 placeholder-gray-400 focus:outline-[#444658] ${
                        formErrors.basicSalary ? 'border-red-500' : ''
                      }`}
                      onBlur={(e) => validateField('basicSalary', e.target.value)}
                      onChange={(e) => handleInputChange('basicSalary', e.target.value)}
                      ></input>
                        {formErrors.basicSalary && (
              <span className="absolute text-red-500 text-sm ml-2 bottom-[-20px]">
                {formErrors.basicSalary}
              </span>
            )}
            </div>
            <div className="text-[#444658] w-[200px] mt-6 ml-[40px]"  >
            {t("Currency",language as "en" |"ar")}  <span className="text-red-500">*</span>
            </div>
            <div className="flex mt-16 ml-[-200px] relative">
                     <input
                     type="text"
                     placeholder="Saudi Riyal - SAR - ر.س "
                      className={`w-[281px] px-4 py-2 border rounded-full text-gray-600 placeholder-gray-400 focus:outline-[#444658] ${
                        formErrors.currency ? 'border-red-500' : ''
                      }`}
                      onBlur={(e) => validateField('currency', e.target.value)}
                      onChange={(e) => handleInputChange('currency', e.target.value)}
                      ></input>
                        {formErrors.currency && (
              <span className="absolute text-red-500 text-sm ml-2 bottom-[-20px]">
                {formErrors.currency}
              </span>
            )}
                      
            </div>
            </div> 
       </div>
       
       </div>
    );
}
export default  SalaryPackageComponent;