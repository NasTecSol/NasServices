"use client";
import { useState } from "react";
import { t } from "../../../../utils/localization";
import { useLanguage } from "@/context/LanguageContext";
export default function CompanyNotification(props : any)
{
    const [currentLang, setCurrentLang] = useState("en");

    const { language, setLanguage } = useLanguage();
    return(
        <>
        <div className="p-4  rounded-2xl shadow-xl">
                    <div className='flex flex-col gap-5'>

                        <div className='flex justify-between'>

                            <div className='flex flex-row justify-center items-center gap-3'>
                                <div>
                                    <svg width="40.000000" height="40.000000" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <desc>
                                            Created with Pixso.
                                        </desc>
                                        <defs>
                                            <pattern id="pattern_27_18860" patternContentUnits="objectBoundingBox" width="1.000000" height="1.000000">
                                                <use xlinkHref="#image27_1886_0" transform="matrix(0.001953,0,0,0.001953,0,0)" />
                                            </pattern>
                                            <image id="image27_1886_0" width="512.000000" height="512.000000" xlinkHref="data:image/png;base64,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" />
                                        </defs>
                                        <rect id="Frame 40701" rx="19.500000" width="39.000000" height="39.000000" transform="translate(0.500000 0.500000)" fill="#444658" fillOpacity="1.000000" />
                                        <mask id="mask27_1886" mask-type="alpha" maskUnits="userSpaceOnUse" x="3.200195" y="3.199997" width="33.600098" height="33.600006">
                                            <rect id="office-building 1" x="3.200195" y="3.199997" width="33.600002" height="33.600002" fill="url(#pattern_27_18860)" fillOpacity="1.000000" />
                                        </mask>
                                        <g mask="url(#mask27_1886)">
                                            <rect id="Rectangle 12" x="3.200195" y="3.199997" width="33.600002" height="33.600002" fill="#FFFFFF" fillOpacity="1.000000" />
                                        </g>
                                    </svg>

                                </div>
                                <div>
                                    <p>
                                        {t("Company’s Notifications",language as "en" |"ar")}
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
                                {t("Filters",language as "en" |"ar")}
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
                        {/* table start from here */}
                        {props.data ? (<div className="overflow-x-auto">
                            <div className="min-w-full space-y-2">
                                <div className="flex items-center rounded-full border border-gray-300">
                                    <div className="px-4 py-2 flex items-center space-x-2 flex-1">
                                    <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                     <path d="M1.5 24H21C21.3978 24 21.7794 23.842 22.0607 23.5607C22.342 23.2794 22.5 22.8978 22.5 22.5V13.5C22.5 13.1022 22.342 12.7206 22.0607 12.4393C21.7794 12.158 21.3978 12 21 12H16.5C16.1022 12 15.7206 12.158 15.4393 12.4393C15.158 12.7206 15 13.1022 15 13.5V1.5C15 1.10218 14.842 0.720644 14.5607 0.43934C14.2794 0.158035 13.8978 0 13.5 0L9 0C8.60218 0 8.22064 0.158035 7.93934 0.43934C7.65804 0.720644 7.5 1.10218 7.5 1.5V7.5C7.5 7.10218 7.34196 6.72064 7.06066 6.43934C6.77936 6.15804 6.39782 6 6 6H1.5C1.10218 6 0.720644 6.15804 0.43934 6.43934C0.158035 6.72064 0 7.10218 0 7.5L0 22.5C0 22.8978 0.158035 23.2794 0.43934 23.5607C0.720644 23.842 1.10218 24 1.5 24ZM1.5 22.5V19.5H3V22.5H1.5ZM3 13.5V15H1.5V13.5H3ZM1.5 12V10.5H3V12H1.5ZM3 16.5V18H1.5V16.5H3ZM4.5 15V13.5H6V15H4.5ZM6 16.5V18H4.5V16.5H6ZM4.5 12V10.5H6V12H4.5ZM4.5 22.5V19.5H6V22.5H4.5ZM6 9H4.5V7.5H6V9ZM3 9H1.5V7.5H3V9ZM12 22.5V19.5H13.5V22.5H12ZM10.5 7.5V9H9V7.5H10.5ZM9 6V4.5H10.5V6H9ZM10.5 10.5V12H9V10.5H10.5ZM10.5 13.5V15H9V13.5H10.5ZM10.5 16.5V18H9V16.5H10.5ZM12 15V13.5H13.5V15H12ZM13.5 16.5V18H12V16.5H13.5ZM12 12V10.5H13.5V12H12ZM12 9V7.5H13.5V9H12ZM12 6V4.5H13.5V6H12ZM13.5 3H12V1.5H13.5V3ZM10.5 3H9V1.5H10.5V3ZM9 19.5H10.5V22.5H9V19.5ZM18 18H16.5V16.5H18V18ZM19.5 16.5H21V18H19.5V16.5ZM19.5 19.5H21V22.5H19.5V19.5ZM21 15H19.5V13.5H21V15ZM18 15H16.5V13.5H18V15ZM16.5 19.5H18V22.5H16.5V19.5Z" fill="#444658"/>
                                     </svg>
                                        <span className="text-[#444658]">{t("GulbergBranch",language as "en" |"ar")}  </span>
                                    </div>
                                    <div className="px-4 py-2 flex-1 text-[#444658]">{t("License",language as "en" |"ar")}</div>
                                    <div className="px-4 py-2 flex-1">
                                        <span className="bg-[#FFF0E5] ml-[120px] text-[#FCD36F] text-xs font-medium me-2 px-2.5 py-0.5 rounded-full ">{t("Pending",language as "en" |"ar")}</span>
                                    </div>
                                </div>
                                <div className="flex items-center rounded-full border border-gray-300">
                                    <div className="px-4 py-2 flex items-center space-x-2 flex-1">
                                    <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5 24H21C21.3978 24 21.7794 23.842 22.0607 23.5607C22.342 23.2794 22.5 22.8978 22.5 22.5V13.5C22.5 13.1022 22.342 12.7206 22.0607 12.4393C21.7794 12.158 21.3978 12 21 12H16.5C16.1022 12 15.7206 12.158 15.4393 12.4393C15.158 12.7206 15 13.1022 15 13.5V1.5C15 1.10218 14.842 0.720644 14.5607 0.43934C14.2794 0.158035 13.8978 0 13.5 0L9 0C8.60218 0 8.22064 0.158035 7.93934 0.43934C7.65804 0.720644 7.5 1.10218 7.5 1.5V7.5C7.5 7.10218 7.34196 6.72064 7.06066 6.43934C6.77936 6.15804 6.39782 6 6 6H1.5C1.10218 6 0.720644 6.15804 0.43934 6.43934C0.158035 6.72064 0 7.10218 0 7.5L0 22.5C0 22.8978 0.158035 23.2794 0.43934 23.5607C0.720644 23.842 1.10218 24 1.5 24ZM1.5 22.5V19.5H3V22.5H1.5ZM3 13.5V15H1.5V13.5H3ZM1.5 12V10.5H3V12H1.5ZM3 16.5V18H1.5V16.5H3ZM4.5 15V13.5H6V15H4.5ZM6 16.5V18H4.5V16.5H6ZM4.5 12V10.5H6V12H4.5ZM4.5 22.5V19.5H6V22.5H4.5ZM6 9H4.5V7.5H6V9ZM3 9H1.5V7.5H3V9ZM12 22.5V19.5H13.5V22.5H12ZM10.5 7.5V9H9V7.5H10.5ZM9 6V4.5H10.5V6H9ZM10.5 10.5V12H9V10.5H10.5ZM10.5 13.5V15H9V13.5H10.5ZM10.5 16.5V18H9V16.5H10.5ZM12 15V13.5H13.5V15H12ZM13.5 16.5V18H12V16.5H13.5ZM12 12V10.5H13.5V12H12ZM12 9V7.5H13.5V9H12ZM12 6V4.5H13.5V6H12ZM13.5 3H12V1.5H13.5V3ZM10.5 3H9V1.5H10.5V3ZM9 19.5H10.5V22.5H9V19.5ZM18 18H16.5V16.5H18V18ZM19.5 16.5H21V18H19.5V16.5ZM19.5 19.5H21V22.5H19.5V19.5ZM21 15H19.5V13.5H21V15ZM18 15H16.5V13.5H18V15ZM16.5 19.5H18V22.5H16.5V19.5Z" fill="#444658"/>
                                     </svg>
                                        <span className="text-[#444658]">{t("LahoreBranch",language as "en" |"ar")} </span>
                                    </div>
                                    <div className="px-4 py-2 flex-1 text-[#444658]">{t("CommercialRegistration",language as "en" |"ar")}</div>
                                    <div className="px-4 py-2 flex-1">
                                        <span className="bg-[#D9ECEC] ml-[120px] text-[#2D9596] text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">{t("Renewal",language as "en" |"ar")}</span>
                                    </div>
                                </div>
                                <div className="flex items-center rounded-full border border-gray-300">
                                    <div className="px-4 py-2 flex items-center space-x-2 flex-1">
                                    <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                     <path d="M1.5 24H21C21.3978 24 21.7794 23.842 22.0607 23.5607C22.342 23.2794 22.5 22.8978 22.5 22.5V13.5C22.5 13.1022 22.342 12.7206 22.0607 12.4393C21.7794 12.158 21.3978 12 21 12H16.5C16.1022 12 15.7206 12.158 15.4393 12.4393C15.158 12.7206 15 13.1022 15 13.5V1.5C15 1.10218 14.842 0.720644 14.5607 0.43934C14.2794 0.158035 13.8978 0 13.5 0L9 0C8.60218 0 8.22064 0.158035 7.93934 0.43934C7.65804 0.720644 7.5 1.10218 7.5 1.5V7.5C7.5 7.10218 7.34196 6.72064 7.06066 6.43934C6.77936 6.15804 6.39782 6 6 6H1.5C1.10218 6 0.720644 6.15804 0.43934 6.43934C0.158035 6.72064 0 7.10218 0 7.5L0 22.5C0 22.8978 0.158035 23.2794 0.43934 23.5607C0.720644 23.842 1.10218 24 1.5 24ZM1.5 22.5V19.5H3V22.5H1.5ZM3 13.5V15H1.5V13.5H3ZM1.5 12V10.5H3V12H1.5ZM3 16.5V18H1.5V16.5H3ZM4.5 15V13.5H6V15H4.5ZM6 16.5V18H4.5V16.5H6ZM4.5 12V10.5H6V12H4.5ZM4.5 22.5V19.5H6V22.5H4.5ZM6 9H4.5V7.5H6V9ZM3 9H1.5V7.5H3V9ZM12 22.5V19.5H13.5V22.5H12ZM10.5 7.5V9H9V7.5H10.5ZM9 6V4.5H10.5V6H9ZM10.5 10.5V12H9V10.5H10.5ZM10.5 13.5V15H9V13.5H10.5ZM10.5 16.5V18H9V16.5H10.5ZM12 15V13.5H13.5V15H12ZM13.5 16.5V18H12V16.5H13.5ZM12 12V10.5H13.5V12H12ZM12 9V7.5H13.5V9H12ZM12 6V4.5H13.5V6H12ZM13.5 3H12V1.5H13.5V3ZM10.5 3H9V1.5H10.5V3ZM9 19.5H10.5V22.5H9V19.5ZM18 18H16.5V16.5H18V18ZM19.5 16.5H21V18H19.5V16.5ZM19.5 19.5H21V22.5H19.5V19.5ZM21 15H19.5V13.5H21V15ZM18 15H16.5V13.5H18V15ZM16.5 19.5H18V22.5H16.5V19.5Z" fill="#444658"/>
                                </svg>

                                        <span className="text-[#444658]">{t("IslamabadBranch",language as "en" |"ar")} </span>
                                    </div>
                                    <div className="px-4 py-2 flex-1 text-[#444658]">{t("CommercialRegistration",language as "en" |"ar")}</div>
                                    <div className="px-4 py-2 flex-1">
                                        <span className="bg-[#FBDFE3] ml-[120px] text-[#E52C42] text-xs font-medium me-2 px-2.5 py-0.5 rounded-full w-[300px] ">{t("Expired",language as "en" |"ar")}</span>
                                    </div>
                                </div>
                                <div className="flex items-center rounded-full border border-gray-300">
                                    <div className="px-4 py-2 flex items-center space-x-2 flex-1">
                                    <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M1.5 24H21C21.3978 24 21.7794 23.842 22.0607 23.5607C22.342 23.2794 22.5 22.8978 22.5 22.5V13.5C22.5 13.1022 22.342 12.7206 22.0607 12.4393C21.7794 12.158 21.3978 12 21 12H16.5C16.1022 12 15.7206 12.158 15.4393 12.4393C15.158 12.7206 15 13.1022 15 13.5V1.5C15 1.10218 14.842 0.720644 14.5607 0.43934C14.2794 0.158035 13.8978 0 13.5 0L9 0C8.60218 0 8.22064 0.158035 7.93934 0.43934C7.65804 0.720644 7.5 1.10218 7.5 1.5V7.5C7.5 7.10218 7.34196 6.72064 7.06066 6.43934C6.77936 6.15804 6.39782 6 6 6H1.5C1.10218 6 0.720644 6.15804 0.43934 6.43934C0.158035 6.72064 0 7.10218 0 7.5L0 22.5C0 22.8978 0.158035 23.2794 0.43934 23.5607C0.720644 23.842 1.10218 24 1.5 24ZM1.5 22.5V19.5H3V22.5H1.5ZM3 13.5V15H1.5V13.5H3ZM1.5 12V10.5H3V12H1.5ZM3 16.5V18H1.5V16.5H3ZM4.5 15V13.5H6V15H4.5ZM6 16.5V18H4.5V16.5H6ZM4.5 12V10.5H6V12H4.5ZM4.5 22.5V19.5H6V22.5H4.5ZM6 9H4.5V7.5H6V9ZM3 9H1.5V7.5H3V9ZM12 22.5V19.5H13.5V22.5H12ZM10.5 7.5V9H9V7.5H10.5ZM9 6V4.5H10.5V6H9ZM10.5 10.5V12H9V10.5H10.5ZM10.5 13.5V15H9V13.5H10.5ZM10.5 16.5V18H9V16.5H10.5ZM12 15V13.5H13.5V15H12ZM13.5 16.5V18H12V16.5H13.5ZM12 12V10.5H13.5V12H12ZM12 9V7.5H13.5V9H12ZM12 6V4.5H13.5V6H12ZM13.5 3H12V1.5H13.5V3ZM10.5 3H9V1.5H10.5V3ZM9 19.5H10.5V22.5H9V19.5ZM18 18H16.5V16.5H18V18ZM19.5 16.5H21V18H19.5V16.5ZM19.5 19.5H21V22.5H19.5V19.5ZM21 15H19.5V13.5H21V15ZM18 15H16.5V13.5H18V15ZM16.5 19.5H18V22.5H16.5V19.5Z" fill="#444658"/>
                                 </svg>

                                        <span className="text-[#444658]">{t("MianwaliBranch",language as "en" |"ar")} </span>
                                    </div>
                                    <div className="px-4 py-2 flex-1 text-[#444658]">{t("CommercialRegistration",language as "en" |"ar")}</div>
                                    <div className="px-4 py-2 flex-1 ">
                                        <span className="bg-[#FFF0E5] ml-[120px] text-[#FBC948] text-xs font-medium me-2 px-2.5 py-0.5 rounded-full ">Pending</span>
                                    </div>
                                </div>
                            </div>
                        </div>) : (
                            <div>
                               {t("Nodataforcompany'snotifications",language as "en" |"ar")} 
                            </div>
                        )}
                        {/* <div className="overflow-x-auto">
                            <div className="min-w-full space-y-2">
                                <div className="flex items-center rounded-full border border-gray-300">
                                    <div className="px-4 py-2 flex items-center space-x-2 flex-1">
                                        <svg width="40.000000" height="40.000000" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                            <desc>
                                                Created with Pixso.
                                            </desc>
                                            <defs>
                                                <pattern id="pattern_27_18860" patternContentUnits="objectBoundingBox" width="1.000000" height="1.000000">
                                                    <use xlinkHref="#image27_1886_0" transform="matrix(0.001953,0,0,0.001953,0,0)" />
                                                </pattern>
                                                <image id="image27_1886_0" width="512.000000" height="512.000000" xlinkHref="data:image/png;base64,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" />
                                            </defs>
                                            <rect id="Frame 40701" rx="19.500000" width="39.000000" height="39.000000" transform="translate(0.500000 0.500000)" fill="#444658" fillOpacity="1.000000" />
                                            <mask id="mask27_1886" mask-type="alpha" maskUnits="userSpaceOnUse" x="3.200195" y="3.199997" width="33.600098" height="33.600006">
                                                <rect id="office-building 1" x="3.200195" y="3.199997" width="33.600002" height="33.600002" fill="url(#pattern_27_18860)" fillOpacity="1.000000" />
                                            </mask>
                                            <g mask="url(#mask27_1886)">
                                                <rect id="Rectangle 12" x="3.200195" y="3.199997" width="33.600002" height="33.600002" fill="#FFFFFF" fillOpacity="1.000000" />
                                            </g>
                                        </svg>
                                        <span> Gulberg Branch </span>
                                    </div>
                                    <div className="px-4 py-2 flex-1">License</div>
                                    <div className="px-4 py-2 flex-1">
                                        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">Pending</span>
                                    </div>
                                </div>
                                <div className="flex items-center rounded-full border border-gray-300">
                                    <div className="px-4 py-2 flex items-center space-x-2 flex-1">
                                        <svg width="40.000000" height="40.000000" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                            <desc>
                                                Created with Pixso.
                                            </desc>
                                            <defs>
                                                <pattern id="pattern_27_18860" patternContentUnits="objectBoundingBox" width="1.000000" height="1.000000">
                                                    <use xlinkHref="#image27_1886_0" transform="matrix(0.001953,0,0,0.001953,0,0)" />
                                                </pattern>
                                                <image id="image27_1886_0" width="512.000000" height="512.000000" xlinkHref="data:image/png;base64,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" />
                                            </defs>
                                            <rect id="Frame 40701" rx="19.500000" width="39.000000" height="39.000000" transform="translate(0.500000 0.500000)" fill="#444658" fillOpacity="1.000000" />
                                            <mask id="mask27_1886" mask-type="alpha" maskUnits="userSpaceOnUse" x="3.200195" y="3.199997" width="33.600098" height="33.600006">
                                                <rect id="office-building 1" x="3.200195" y="3.199997" width="33.600002" height="33.600002" fill="url(#pattern_27_18860)" fillOpacity="1.000000" />
                                            </mask>
                                            <g mask="url(#mask27_1886)">
                                                <rect id="Rectangle 12" x="3.200195" y="3.199997" width="33.600002" height="33.600002" fill="#FFFFFF" fillOpacity="1.000000" />
                                            </g>
                                        </svg>
                                        <span> Gulberg Branch </span>
                                    </div>
                                    <div className="px-4 py-2 flex-1">License</div>
                                    <div className="px-4 py-2 flex-1">
                                        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">Pending</span>
                                    </div>
                                </div>
                                <div className="flex items-center rounded-full border border-gray-300">
                                    <div className="px-4 py-2 flex items-center space-x-2 flex-1">
                                        <svg width="40.000000" height="40.000000" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                            <desc>
                                                Created with Pixso.
                                            </desc>
                                            <defs>
                                                <pattern id="pattern_27_18860" patternContentUnits="objectBoundingBox" width="1.000000" height="1.000000">
                                                    <use xlinkHref="#image27_1886_0" transform="matrix(0.001953,0,0,0.001953,0,0)" />
                                                </pattern>
                                                <image id="image27_1886_0" width="512.000000" height="512.000000" xlinkHref="data:image/png;base64,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" />
                                            </defs>
                                            <rect id="Frame 40701" rx="19.500000" width="39.000000" height="39.000000" transform="translate(0.500000 0.500000)" fill="#444658" fillOpacity="1.000000" />
                                            <mask id="mask27_1886" mask-type="alpha" maskUnits="userSpaceOnUse" x="3.200195" y="3.199997" width="33.600098" height="33.600006">
                                                <rect id="office-building 1" x="3.200195" y="3.199997" width="33.600002" height="33.600002" fill="url(#pattern_27_18860)" fillOpacity="1.000000" />
                                            </mask>
                                            <g mask="url(#mask27_1886)">
                                                <rect id="Rectangle 12" x="3.200195" y="3.199997" width="33.600002" height="33.600002" fill="#FFFFFF" fillOpacity="1.000000" />
                                            </g>
                                        </svg>
                                        <span> Gulberg Branch </span>
                                    </div>
                                    <div className="px-4 py-2 flex-1">License</div>
                                    <div className="px-4 py-2 flex-1">
                                        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">Pending</span>
                                    </div>
                                </div>
                                <div className="flex items-center rounded-full border border-gray-300">
                                    <div className="px-4 py-2 flex items-center space-x-2 flex-1">
                                        <svg width="40.000000" height="40.000000" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                            <desc>
                                                Created with Pixso.
                                            </desc>
                                            <defs>
                                                <pattern id="pattern_27_18860" patternContentUnits="objectBoundingBox" width="1.000000" height="1.000000">
                                                    <use xlinkHref="#image27_1886_0" transform="matrix(0.001953,0,0,0.001953,0,0)" />
                                                </pattern>
                                                <image id="image27_1886_0" width="512.000000" height="512.000000" xlinkHref="data:image/png;base64,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" />
                                            </defs>
                                            <rect id="Frame 40701" rx="19.500000" width="39.000000" height="39.000000" transform="translate(0.500000 0.500000)" fill="#444658" fillOpacity="1.000000" />
                                            <mask id="mask27_1886" mask-type="alpha" maskUnits="userSpaceOnUse" x="3.200195" y="3.199997" width="33.600098" height="33.600006">
                                                <rect id="office-building 1" x="3.200195" y="3.199997" width="33.600002" height="33.600002" fill="url(#pattern_27_18860)" fillOpacity="1.000000" />
                                            </mask>
                                            <g mask="url(#mask27_1886)">
                                                <rect id="Rectangle 12" x="3.200195" y="3.199997" width="33.600002" height="33.600002" fill="#FFFFFF" fillOpacity="1.000000" />
                                            </g>
                                        </svg>
                                        <span> Gulberg Branch </span>
                                    </div>
                                    <div className="px-4 py-2 flex-1">License</div>
                                    <div className="px-4 py-2 flex-1">
                                        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">Pending</span>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                    </div>
                </div>
        </>
    );
}