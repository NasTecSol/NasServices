import { useState } from "react";
import { t } from "../../../../../utils/localization";
import { useLanguage } from "@/context/LanguageContext";
interface EmployeeAttachments {
  name?: string;
  type?: string;
  expiry?: string;
  document?: string;
  reminderName?: string;
  selectDate?: string;

}
const EmployeeAttachments = () => {
  const [EmployeeAttachments, setEmployeeAttachments] = useState<EmployeeAttachments>({});
  const [currentLang, setCurrentLang] = useState("en");
   const { language, setLanguage } = useLanguage();
 
  
  const [formErrors, setFormErrors] = useState<Partial<EmployeeAttachments>>({});

  const handleInputChange = (fieldName: keyof EmployeeAttachments, value: string | number) => {
    setEmployeeAttachments((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const validateField = (field: keyof EmployeeAttachments, value: string | number) => {
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
  const capitalizeFirstLetter = (field: keyof EmployeeAttachments) => {
    return field.charAt(0).toUpperCase() + field.slice(1);
  };

    return(
       <div className="flex flex-col">
        <div className="flex flex-row">
        <div className="flex flex-col ml-[-400px]">
            <div className="text-[#444658] ml-[10px]">
            {t("Name",language as "en" |"ar")} <span className="text-red-500">*</span>
            </div>
            <div className=" flex relative">
                     <input
                     type="text"
                     placeholder="Enter Attachment Name"
                      className={`mt-[8px] w-[293px] px-4 py-2 border rounded-full text-gray-600 placeholder-gray-400 focus:outline-[#444658]  ${
                        formErrors.name ? 'border-red-500' : ''
                      }`}
                      onBlur={(e) => validateField('name', e.target.value)}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      ></input>
                        {formErrors.name&& (
              <span className="absolute text-red-500 text-sm ml-2 bottom-[-25px]">
                {formErrors.name}
              </span>
            )}
            </div>
           </div>
           <div className="flex flex-col ml-[30px]">
            <div className="text-[#444658] ml-[10px]">
            {t("Type",language as "en" |"ar")}  <span className="text-red-500">*</span>
            </div>
            <div className="flex relative">
                     <input
                     type="text"
                     placeholder="Enter Attachment Type"
                      className={`mt-[8px] w-[293px] px-4 py-2 border rounded-full text-gray-600 placeholder-gray-400 focus:outline-[#444658]${
                        formErrors.type ? 'border-red-500' : ''
                      }`}
                      onBlur={(e) => validateField('type', e.target.value)}
                      onChange={(e) => handleInputChange('type', e.target.value)}
                      ></input>
                        {formErrors.type&& (
              <span className="absolute text-red-500 text-sm ml-2 bottom-[-25px]">
                {formErrors.type}
              </span>
            )}
            </div>
           </div>
           <div className="flex flex-col ml-[30px]">
            <div className="text-[#444658]  ml-[10px]">
            {t("Expiry",language as "en" |"ar")}   <span className="text-red-500">*</span>
            </div>
            <div className="flex relative">
                     <input
                     type="date"
                     placeholder="Select Date"
                      className={`mt-[8px] w-[293px] px-4 py-2 border rounded-full text-gray-600 placeholder-gray-400 focus:outline-[#444658] ${
                        formErrors.expiry ? 'border-red-500' : ''
                      }`}
                      onBlur={(e) => validateField('expiry', e.target.value)}
                      onChange={(e) => handleInputChange('expiry', e.target.value)}
                      ></input>
                        {formErrors.expiry&& (
              <span className="absolute text-red-500 text-sm ml-2 bottom-[-25px]">
                {formErrors.expiry}
              </span>
            )}
            </div>
           </div>
         </div>  
         <div className="flex flex-row mt-[25px]">
        <div className="flex flex-col ml-[-400px]">
            <div className="text-[#444658] ml-[10px]">
            <label htmlFor="file-upload" className="text-[#444658] size-[16px] mt-[18px] mb-[8px]">
            {t("Document",language as "en" |"ar")} <span className="text-red-500">*</span>
                    </label>
                      <div className="mt-[14px] w-[280px] px-4 py-2 border rounded-full text-gray-600 placeholder-gray-400 focus:[#444658]">
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
           <div className="flex flex-col ml-[30px]">
            <div className="text-[#444658] ml-[10px]">
            {t("ReminderName",language as "en" |"ar")}  <span className="text-red-500">*</span>
            </div>
            <div className="flex relative">
                     <input
                     type="text"
                     placeholder="Expiry is Near"
                      className={`mt-[8px] w-[293px] px-4 py-2 border rounded-full text-gray-600 placeholder-gray-400 focus:outline-[#444658]${
                        formErrors.reminderName ? 'border-red-500' : ''
                      }`}
                      onBlur={(e) => validateField('reminderName', e.target.value)}
                      onChange={(e) => handleInputChange('reminderName', e.target.value)}
                      ></input>
                        {formErrors.reminderName&& (
              <span className="absolute text-red-500 text-sm  ml-2 bottom-[-25px]">
                {formErrors.reminderName}
              </span>
            )}
            </div>
           </div>
           <div className="flex flex-col ml-[30px]">
            <div className="text-[#444658]  ml-[10px]">
            {t("SelectDate&Time",language as "en" |"ar")}  <span className="text-red-500">*</span>
            </div>
            <div className="flex relative">
                     <input
                     type="date"
                     placeholder="Select Date"
                      className={`mt-[8px] w-[293px] px-4 py-2 border rounded-full text-gray-600 placeholder-gray-400 focus:outline-[#444658] ${
                        formErrors.selectDate ? 'border-red-500' : ''
                      }`}
                      onBlur={(e) => validateField('selectDate', e.target.value)}
                      onChange={(e) => handleInputChange('selectDate', e.target.value)}
                      ></input>
                        {formErrors.selectDate&& (
              <span className="absolute text-red-500 text-sm ml-2 bottom-[-25px]">
                {formErrors.selectDate}
              </span>
            )}
            </div>
           </div>
         </div> 
                 <div className="ml-[-400px] mt-[20px]">
                     <input
                     type="text"
                     placeholder="+ Add attachment"
                      className=" bg-[#444658] mt-[8px] w-[210px] px-4 py-2 border rounded-full text-gray-600 placeholder-gray-400 focus:outline-[#444658] "
                      ></input>
               </div>
       </div>
    );
}
export default  EmployeeAttachments;