"use client";
import { useState } from "react";
import { t } from "../../../../utils/localization";
import { useLanguage } from "@/context/LanguageContext";
export default function EmployeesNotification(props : any) {
    const [currentLang, setCurrentLang] = useState("en");

    const { language, setLanguage } = useLanguage();
    return (
        <>
            <div className="p-4 rounded-2xl shadow-xl">

                <div className='flex flex-col gap-5'>

                    <div className='flex justify-between'>

                        <div className='flex flex-row justify-center items-center gap-3'>
                            <div>
                                <svg width="40.000000" height="40.000000" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <desc>
                                        Created with Pixso.
                                    </desc>
                                    <defs />
                                    <rect id="Frame 40700" rx="19.500000" width="39.000000" height="39.000000" transform="translate(0.500000 0.500000)" fill="#444658" fillOpacity="1.000000" />
                                    <path id="Vector" d="M28.83 23.83C27.9 23.44 26.81 23.77 26.23 24.62L23.05 29.51C22.94 29.68 22.65 29.68 22.59 29.45L21.26 25.18C21.21 25.01 21.26 24.79 21.38 24.67L22.36 23.72C22.59 23.55 22.42 23.16 22.13 23.16L18.66 23.16C18.38 23.16 18.2 23.49 18.43 23.72L19.42 24.67C19.53 24.79 19.59 25.01 19.53 25.18L18.2 29.45C18.14 29.68 17.86 29.68 17.74 29.51L14.56 24.62C13.99 23.77 12.95 23.44 11.97 23.83C6.07 26.19 4 28.27 4 34.34C4 35.07 4.57 35.63 5.32 35.63L35.47 35.63C36.22 35.63 36.8 35.07 36.8 34.34C36.8 28.27 28.83 23.83 28.83 23.83ZM20.4 21.3C28.14 21.3 32.18 4.16 20.4 4C8.62 4.22 12.66 21.3 20.4 21.3Z" fill="#FFFFFF" fillOpacity="1.000000" fillRule="nonzero" />
                                </svg>

                            </div>
                            <div>
                                <p>
                                   {t("Employees’ Notifications",language as "en"| "ar")} 
                                </p>
                            </div>
                            <div>
                                <span className="inline-flex items-center justify-center w-6 h-6 ms-2 text-sm font-semibold text-white bg-red-600 rounded-full">
                                    2
                                </span>
                            </div>
                        </div>
                        <div>
                            <button type="button" className="font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center shadow-md">
                            {t("Filters",language as "en"| "ar")} 
                                <svg width="12.000000" height="8.000000" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <desc>
                                        Created with Pixso.
                                    </desc>
                                    <defs />
                                    <path id="Vector" d="M5.33 8L6.66 8C7.03 8 7.33 7.7 7.33 7.33C7.33 6.96 7.03 6.66 6.66 6.66L5.33 6.66C4.96 6.66 4.66 6.96 4.66 7.33C4.66 7.7 4.96 8 5.33 8ZM0.66 0C0.29 0 0 0.29 0 0.66C0 1.03 0.29 1.33 0.66 1.33L11.33 1.33C11.7 1.33 12 1.03 12 0.66C12 0.29 11.7 0 11.33 0L0.66 0ZM2.66 4.66L9.33 4.66C9.7 4.66 10 4.36 10 4C10 3.63 9.7 3.33 9.33 3.33L2.66 3.33C2.29 3.33 2 3.63 2 4C2 4.36 2.29 4.66 2.66 4.66Z" fill="#808080" fillOpacity="1.000000" fillRule="nonzero" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    {props.data  ? (
                        <div className="overflow-x-auto">
                        <table className="min-w-full">
                            <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="px-4 py-2"><button type="button" className="bg-[#D9ECEC] ml-[4px] text-[#2D9596] text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">{t("Renewal",language as "en"| "ar")}</button></td>
                                    <td className="px-4 py-2 text-[#444658]">Arqum Satti</td>
                                    <td className="px-4 py-2 text-[#444658]">{t("PassportExpiry",language as "en"| "ar")}</td>
                                    <td className="px-4 py-2 text-[#444658]">15 {t("DaysLeft",language as "en"| "ar")}</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2"><button type="button" className="bg-[#D9ECEC] ml-[4px] text-[#2D9596] text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">{t("Renewal",language as "en"| "ar")}</button></td>
                                    <td className="px-4 py-2 text-[#444658]">Hamza Akram</td>
                                    <td className="px-4 py-2 text-[#444658]">{t("VisaExpiry",language as "en"| "ar")}</td>
                                    <td className="px-4 py-2 text-[#444658]">10 {t("DaysLeft",language as "en"| "ar")}</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 text-[#444658]"><button type="button" className="bg-[#D9ECEC] ml-[4px] text-[#2D9596] text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">{t("Renewal",language as "en"| "ar")}</button></td>
                                    <td className="px-4 py-2 text-[#444658]">Suleman Khan</td>
                                    <td className="px-4 py-2 text-[#444658]">{t("InsuranceExpiry",language as "en"| "ar")}</td>
                                    <td className="px-4 py-2 text-[#444658]">15 {t("DaysLeft",language as "en"| "ar")}</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 text-[#444658]"><button type="button" className="bg-[#D9ECEC] ml-[4px] text-[#2D9596] text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">{t("Renewal",language as "en"| "ar")}</button></td>
                                    <td className="px-4 py-2 text-[#444658]">Shoaib Sardar</td>
                                    <td className="px-4 py-2 text-[#444658]">{t("IqamaExpiry",language as "en"| "ar")}</td>
                                    <td className="px-4 py-2 text-[#444658]">4 {t("DaysLeft",language as "en"| "ar")}</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 text-[#444658]"><button type="button" className="bg-[#D9ECEC] ml-[4px] text-[#2D9596] text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">{t("Renewal",language as "en"| "ar")}</button></td>
                                    <td className="px-4 py-2 text-[#444658]">Ammad</td>
                                    <td className="px-4 py-2 text-[#444658]">{t("LoanExpiry",language as "en"| "ar")}</td>
                                    <td className="px-4 py-2 text-[#444658]">9 {t("DaysLeft",language as "en"| "ar")}</td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                    ) : (
                        <div className="no-data-message">
                            <p>No data available for Company Notifications</p>
                        </div>
                    )}
                </div>

            </div>
        </>
    );
}