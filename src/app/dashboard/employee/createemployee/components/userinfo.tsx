import { useState } from "react";
import { useFormContext } from "../context/formcontext";
import { t } from "../../../../../utils/localization";
import { useLanguage } from "@/context/LanguageContext";

export default function UserInfo() {
  const { formData, updateFormData } = useFormContext();
  const [currentLang, setCurrentLang] = useState("en");
  const { language, setLanguage } = useLanguage();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData("userInfo", { [e.target.name]: e.target.value });
  };

  // const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const file = e.target.files ? e.target.files[0] : null;
  //     if (file) {
  //         updateFormData('userInfo', { companyLogo: file.name });
  //     }
  // };

  const [fileName, setFileName] = useState<File | null>(null);

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const validateField = (field: string, value: string | File | null) => {
    let error = "";

    switch (field) {
      case "firstName":
        if (!value || (typeof value === "string" && !value.trim())) {
          error = "First name is required.";
        }
        break;
      case "lastName":
        if (!value || (typeof value === "string" && !value.trim())) {
          error = "Last name is required.";
        }
        break;
      case "email":
        if (!value || (typeof value === "string" && !value.trim())) {
          error = "Email is required.";
        } else if (typeof value === "string" && !/^\S+@\S+\.\S+$/.test(value)) {
          error = "Email is invalid.";
        }
        break;
      case "password":
        if (!value || (typeof value === "string" && !value.trim())) {
          error = "Password is required.";
        } else if (typeof value === "string" && value.length < 6) {
          error = "Password must be at least 6 characters.";
        }
        break;
      case "fileName":
        if (!value || value === null) {
          error = "Profile picture is required.";
        }
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [field]: error }));
  };

  const handleBlur = (field: string, value: string | File | null) => {
    validateField(field, value);
  };

  return (
    <div className="mt-1 flex felx-col ml-[10px]">
      <div className="flex flex-row">
        <div className="flex flex-col ml-[-400px]">
          <div className="text-[#444658] size-[16px] w-60">
          {t("Name", language as "en" |"ar")}  <span className="text-red-500">*</span>
          </div>
          <div className="flex mt-[14px] ml-[-6px] gap-5">
            <div>
              <input
                type="text"
                placeholder= {t("Firstname", language as "en" |"ar")}
                name="firstName"
                value={formData.userInfo.firstName}
                onChange={handleChange}
                onBlur={() =>
                  handleBlur("firstName", formData.userInfo.firstName)
                }
                className={`w-44 px-4 py-2 border rounded-full text-gray-600 placeholder-gray-400 focus:[#444658]  ${
                  errors.firstName ? "border-red-500" : ""
                }`}
              />
              {errors.firstName && (
                <span className="text-red-500 flex flex-col">
                  {errors.firstName}
                </span>
              )}
            </div>
            <div>
              <input
                type="text"
                placeholder={t("Lastname", language as "en" |"ar")}
                name="lastName"
                value={formData.userInfo.lastName}
                onChange={handleChange}
                onBlur={() =>
                  handleBlur("lastName", formData.userInfo.lastName)
                }
                className={`w-44 px-4 py-2 border rounded-full text-gray-600 placeholder-gray-400 focus:[#444658]  ${
                  errors.lastName ? "border-red-500" : ""
                }`}
              />
              {errors.lastName && (
                <span className="text-red-500 flex flex-col">
                  {errors.lastName}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-[99px] ml-[-400px]">
        <div className="text-[#444658] size-[16px] w-60">
        {t("Email", language as "en" |"ar")} <span className="text-red-500">*</span>
        </div>
        <div className="flex mt-[14px] ml-[-6px] gap-5">
          <div>
            <input
              type="text"
              placeholder="employee@nastecsol.com"
              name="email"
              value={formData.userInfo.email}
              onChange={handleChange}
              onBlur={() => handleBlur("email", formData.userInfo.email)}
              className={`w-[375px] px-4 py-2 border rounded-full text-gray-600 placeholder-gray-400 focus:[#444658] ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <span className="text-red-500 flex flex-col">{errors.email}</span>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-[199px] ml-[-370px]">
        <div className="text-[#444658] size-[16px] w-60">
        {t("Password", language as "en" |"ar")}  <span className="text-red-500">*</span>
        </div>
        <div className="flex mt-[14px] ml-[-6px] gap-5 bg-[#ffffff]">
          <div>
            <input
              type="password"
              placeholder="********"
              name="password"
              value={formData.userInfo.password}
              onChange={handleChange}
              onBlur={() => handleBlur("password", formData.userInfo.password)}
              className={`w-[375px] px-4 py-2 border rounded-full  focus:[#444658]  ${
                errors.password ? "border-red-500" : ""
              }`}
            />
            {errors.password && (
              <span className="text-red-500 flex flex-col">
                {errors.password}
              </span>
            )}
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col space-y-2 mt-[280px] ml-[-370px]">
        <label
          htmlFor="file-upload"
          className="text-[#444658] size-[16px] mt-[18px] mb-[8px]"
        >
          Picture<span className="text-red-500">*</span>
        </label>
        <div className="mt-[14px] w-[375px] px-4 py-2 border rounded-full text-gray-600 placeholder-gray-400 focus:[#444658]">
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
          {fileName && <span>{fileName.name}</span>}
        </div>
      </div> */}
    </div>
  );
}
