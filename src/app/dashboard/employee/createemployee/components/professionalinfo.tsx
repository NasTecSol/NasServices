import { useState } from "react";
import { t } from "../../../../../utils/localization";
import { useLanguage } from "@/context/LanguageContext";
interface ProfessionalInfo {
  Position?: string;
  occupationOnIqama?: string;
  profession?: string;
  designation?: string;
  workBackground?: string;

}
const ProfessionalInfoComponent = () => {
  const [ProfessionalInfo, setProfessionalInfo] = useState<ProfessionalInfo>({});
  const [currentLang, setCurrentLang] = useState("en");
  const { language, setLanguage } = useLanguage();
 
  
  const [formErrors, setFormErrors] = useState<Partial<ProfessionalInfo>>({});

  const handleInputChange = (fieldName: keyof ProfessionalInfo, value: string | number) => {
    setProfessionalInfo((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const validateField = (field: keyof ProfessionalInfo, value: string | number) => {
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

  const [fileName, setFileName] = useState("");
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      console.log(file?.name);
    };
  const capitalizeFirstLetter = (field: keyof ProfessionalInfo) => {
    return field.charAt(0).toUpperCase() + field.slice(1);
  };

    return(
      <div className="flex flex-col ml-4">
        <div className="flex flex-row  ml-[-400px] ">
            <div className="text-[#444658]w-[200px]" >
            {t("Position/Role",language as "en" |"ar")}  <span className="text-red-500">*</span>
            </div>
            <div className="flex mt-[32px] ml-[-105px] relative">
                     <input
                     type="text"
                     placeholder="Select"
                      className={`w-[290px] px-4 py-2 border rounded-full text-gray-600 placeholder-gray-400 focus:outline-[#444658] ${
                        formErrors.Position ? 'border-red-500' : ''
                      }`}
                      onBlur={(e) => validateField('Position', e.target.value)}
                      onChange={(e) => handleInputChange('Position', e.target.value)}
                      ></input>
                        {formErrors.Position && (
              <span className="absolute text-red-500 text-sm ml-2 bottom-[-20px]">
                {formErrors.Position}
              </span>
            )}
            </div>
            <div className="text-[#444658] ml-80 w-[200px]">
            {t("Occupationoniqama",language as "en" |"ar")}  <span className="text-red-500">*</span>
            </div>
            <div className="flex mt-[32px] ml-[-196px] relative ">
                     <input
                     type="text"
                     placeholder="Select"
                      className={`w-[290px] px-4 py-2 border rounded-full  text-gray-600 placeholder-gray-400 focus:outline-[#444658] ${
                        formErrors.occupationOnIqama ? 'border-red-500' : ''
                      }`}
                      onBlur={(e) => validateField('occupationOnIqama', e.target.value)}
                      onChange={(e) => handleInputChange('occupationOnIqama', e.target.value)}
                      ></input>
                      {formErrors.occupationOnIqama && (
              <span className="absolute text-red-500 text-sm ml-2 bottom-[-20px]">
                {formErrors.occupationOnIqama}
              </span>
            )}
            </div>  
        </div>
        <div className="flex flex-row mt-6  ml-[-400px] ">
            <div className="text-[#444658]  w-[80px]" >
            {t("Profession",language as "en" |"ar")}  <span className="text-red-500">*</span>
            </div>
            <div className="flex mt-[32px] ml-[-90px] relative">
                     <input
                     type="text"
                     placeholder="Select"
                      className={`w-[290px] px-4 py-2 border rounded-full text-gray-600 placeholder-gray-400 focus:outline-[#444658] ${
                        formErrors.profession ? 'border-red-500' : ''
                      }`}
                      onBlur={(e) => validateField('profession', e.target.value)}
                      onChange={(e) => handleInputChange('profession', e.target.value)}
                      ></input>
                      {formErrors.profession && (
              <span className="absolute text-red-500 text-sm ml-2 bottom-[-20px]">
                {formErrors.profession}
              </span>
            )}
                    
            </div>
            <div className="text-[#444658] ml-80 w-[200px]">
            {t("Designation",language as "en" |"ar")}  <span className="text-red-500">*</span>
            </div>
            <div className="flex mt-[32px] ml-[-196px] relative ">
                     <input
                     type="text"
                     placeholder="Select"
                      className={`w-[290px] px-4 py-2 border rounded-full ttext-gray-600 placeholder-gray-400 focus:outline-[#444658] ${
                        formErrors.designation ? 'border-red-500' : ''
                      }`}
                      onBlur={(e) => validateField('designation', e.target.value)}
                      onChange={(e) => handleInputChange('designation', e.target.value)}
                      ></input>
                      {formErrors.designation && (
              <span className="absolute text-red-500 text-sm ml-2 bottom-[-20px]">
                {formErrors.designation}
              </span>
            )}

            </div>  
        </div>
        <div className="text-[#444658] w-[200px] mt-6 ml-[-405px]"  >
        <label htmlFor="file-upload" className="text-[#444658] size-[16px] mt-[18px] mb-[8px]">
        {t("WorkBackground",language as "en" |"ar")} <span className="text-red-500">*</span>
                    </label>
                      <div className="mt-[14px] w-[375px] px-4 py-2 border rounded-full text-gray-600 placeholder-gray-400 focus:[#444658] ">
                           <label
                            
                            className="cursor-pointer">
                          </label>
                         <input
                       id="file-upload"
                        type="file"
                       accept="image/*"
                         onChange={handleFileChange} />                     
                       {fileName }
              </div>
           
            </div>
      </div>
    );
}
export default ProfessionalInfoComponent;