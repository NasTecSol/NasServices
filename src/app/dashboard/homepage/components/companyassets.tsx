"use client";
import { useState } from "react";
import { t } from "../../../../utils/localization";
import { useLanguage } from "@/context/LanguageContext";
export default function CompanyAssets(props : any)
{
    const [currentLang, setCurrentLang] = useState("en");

    const { language, setLanguage } = useLanguage();
    return(
        <>
        <div className="p-4 rounded-2xl shadow-x bg-[#ffffff]">
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
                                        {t("Company Assets’ Notifications",language as "en"| "ar")}
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

                        { props.data ? (
                            <div className='grid grid-cols-4 grid-rows-1 place-items-center mt-[26px]'>

                            <div className='w-[152px] h-[167px] flex flex-col gap-3 place-i bg-[#FFFFFF] rounded-[8px] border border-[#BEBEBE]'>
                                <div className='flex justify-center items-center pt-[6px] pb-1'>
                                    <svg width="55.000000" height="55.000000" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <desc>
                                            Created with Pixso.
                                        </desc>
                                        <defs />
                                        <rect id="Frame 40700" rx="29.500000" width="59.000000" height="59.000000" transform="translate(0.500000 0.500000)" fill="#444658" fillOpacity="1.000000" />
                                        <path id="Vector" d="M42.41 17.76C42.24 17.25 41.91 16.8 41.47 16.48C41.03 16.17 40.51 16 39.97 16L21.02 16C19.89 16 18.93 16.73 18.58 17.76L15 28.25L15 42.25C15 43.21 15.77 44 16.72 44L18.44 44C18.9 44 19.33 43.81 19.66 43.48C19.98 43.15 20.16 42.71 20.16 42.25L20.16 40.5L40.83 40.5L40.83 42.25C40.83 43.21 41.6 44 42.55 44L44.27 44C44.73 44 45.17 43.81 45.49 43.48C45.81 43.15 46 42.71 46 42.25L46 28.25L42.41 17.76ZM21.02 35.25C19.59 35.25 18.44 34.07 18.44 32.62C18.44 31.17 19.59 30 21.02 30C22.45 30 23.61 31.17 23.61 32.62C23.61 34.07 22.45 35.25 21.02 35.25ZM39.97 35.25C38.54 35.25 37.38 34.07 37.38 32.62C37.38 31.17 38.54 30 39.97 30C41.4 30 42.55 31.17 42.55 32.62C42.55 34.07 41.4 35.25 39.97 35.25ZM18.44 26.5L21.02 18.62L39.97 18.62L42.55 26.5L18.44 26.5Z" fill="#FFFFFF" fillOpacity="1.000000" fillRule="nonzero" />
                                    </svg>

                                </div>
                                <div className='w-[138px] h-[68px] flex flex-col justify-center items-center gap-2'>

                                    <h1 className='text-[15px] text-[#444658] font-medium'>{t("ToyotaCammry",language as "en"| "ar")}</h1>

                                    <p className='text-[12px] text-[#444658] font-medium'>AFT 090</p>

                                    <div className='w-full flex justify-between'>
                                    <p className='text-[11px] ml-[4px] text-[#444658] font-medium'> {t("Registeration:",language as "en"|"ar")} </p>
                                    <span className="w-[64px] ml-[15px] text-[#47734D] text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-[#D3F5E1]">{t("Completed",language as "en"| "ar")}</span>
                                    </div>

                                    <div className='w-full flex justify-between'>
                                    <p className='text-[11px] ml-[4px] text-[#444658] font-medium'>{t("Token:",language as "en" | "ar")} </p>
                                    <span className="bg-[#FEF5E7] w-[62px] text-[10px] text-[#FBC948] text-xs   ml-[50px] font-medium me-2 px-2.5 py-0.5 rounded-full">{t("pending",language as "en"| "ar")}</span>
                                    </div>
                                    
                        
                                </div>

                            </div>

                            <div className='w-[152px] h-[167px] flex flex-col gap-3 place-i  bg-[#FFFFFF] rounded-[8px]  border border-[#BEBEBE]' >
                                <div className='flex justify-center items-center pt-[6px] pb-1'>
                                    <svg width="55.000000" height="55.000000" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <desc>
                                            Created with Pixso.
                                        </desc>
                                        <defs />
                                        <rect id="Frame 40700" rx="29.500000" width="59.000000" height="59.000000" transform="translate(0.500000 0.500000)" fill="#444658" fillOpacity="1.000000" />
                                        <path id="Vector" d="M42.41 17.76C42.24 17.25 41.91 16.8 41.47 16.48C41.03 16.17 40.51 16 39.97 16L21.02 16C19.89 16 18.93 16.73 18.58 17.76L15 28.25L15 42.25C15 43.21 15.77 44 16.72 44L18.44 44C18.9 44 19.33 43.81 19.66 43.48C19.98 43.15 20.16 42.71 20.16 42.25L20.16 40.5L40.83 40.5L40.83 42.25C40.83 43.21 41.6 44 42.55 44L44.27 44C44.73 44 45.17 43.81 45.49 43.48C45.81 43.15 46 42.71 46 42.25L46 28.25L42.41 17.76ZM21.02 35.25C19.59 35.25 18.44 34.07 18.44 32.62C18.44 31.17 19.59 30 21.02 30C22.45 30 23.61 31.17 23.61 32.62C23.61 34.07 22.45 35.25 21.02 35.25ZM39.97 35.25C38.54 35.25 37.38 34.07 37.38 32.62C37.38 31.17 38.54 30 39.97 30C41.4 30 42.55 31.17 42.55 32.62C42.55 34.07 41.4 35.25 39.97 35.25ZM18.44 26.5L21.02 18.62L39.97 18.62L42.55 26.5L18.44 26.5Z" fill="#FFFFFF" fillOpacity="1.000000" fillRule="nonzero" />
                                    </svg>

                                </div>
                                <div className='w-[138px] h-[68px] flex flex-col justify-center items-center gap-2'>

                                    <h1 className='text-[15px]  text-[#444658] font-medium'>Nissan Petrol</h1>

                                    <p className='text-[12px] text-[#444658] font-medium'>JMB-290</p>

                                    <div className='w-full flex justify-between'>
                                    <p className='text-[11px] ml-[4px] font-medium text-[#444658]'> {t("Registeration:",language as "en"|"ar")} </p>
                                    <span className="w-[64px] ml-[15px] text-[#47734D] text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-[#D3F5E1]">{t("Completed",language as "en"| "ar")}</span>
                                    </div>

                                    <div className='w-full flex justify-between'>
                                    <p className='text-[11px]  ml-[4px] text-[#444658] font-medium'> {t("Token:",language as "en" | "ar")}</p>
                                    <span className="bg-[#FEF5E7] w-[62px] text-[10px] text-[#FBC948] text-xs   ml-[50px] font-medium me-2 px-2.5 py-0.5 rounded-full">{t("pending",language as "en"| "ar")}</span>
                                    </div>
                                    
                        
                                </div>

                            </div>

                            <div className='w-[152px] h-[167px] flex flex-col gap-3 place-i rounded-[8px]  bg-[#FFFFFF] border border-[#BEBEBE]'>
                                <div className='flex justify-center items-center pt-[6px] pb-1'>
                                <svg width="55" height="55" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <rect width="60" height="60" rx="30" fill="#444658"/>
                                <path d="M41.9375 40.8235C43.6468 40.8235 45.0158 39.4021 45.0158 37.6471L45.0312 20.1765C45.0312 18.4215 43.6468 17 41.9375 17H17.1875C15.4782 17 14.0938 18.4215 14.0938 20.1765V37.6471C14.0938 39.4021 15.4782 40.8235 17.1875 40.8235H11C11 42.5785 12.3845 44 14.0938 44H45.0312C46.7405 44 48.125 42.5785 48.125 40.8235H41.9375ZM17.1875 20.1765H41.9375V37.6471H17.1875V20.1765ZM29.5625 42.4118C28.7117 42.4118 28.0156 41.6971 28.0156 40.8235C28.0156 39.95 28.7117 39.2353 29.5625 39.2353C30.4133 39.2353 31.1094 39.95 31.1094 40.8235C31.1094 41.6971 30.4133 42.4118 29.5625 42.4118Z" fill="white"/>
                                </svg>
                                </div>
                                <div className='w-[138px] h-[68px] flex flex-col justify-center items-center gap-2'>

                                    <h1 className='text-[15px] text-[#444658] font-medium'>{t("Laptop",language as "en"|"ar")}</h1>

                                    <p className='text-[12px] text-[#444658] font-medium'>Dell Latitude</p>

                                    <div className='w-full flex justify-between'>
                                    <p className='text-[11px] ml-[4px] font-medium text-[#444658]'>{t("Registeration:",language as "en"|"ar")}</p>
                                    <span className="w-[64px] ml-[15px] text-[#47734D] text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-[#D3F5E1]">{t("Completed",language as "en"| "ar")}</span>
                                    </div>

                                    <div className='w-full flex justify-between'>
                                    <p className='text-[11px]  ml-[4px] text-[#444658] font-medium'> {t("Token:",language as "en" | "ar")}</p>
                                    <span className="bg-[#FEF5E7] w-[62px] text-[10px] text-[#FBC948] text-xs   ml-[50px] font-medium me-2 px-2.5 py-0.5 rounded-full">{t("pending",language as "en"| "ar")}</span>
                                    </div>
                                    
                        
                                </div>

                            </div>
                            <div className='w-[152px] h-[167px] flex flex-col gap-3 place-i bg-[#FFFFFF] rounded-[8px]  border border-[#BEBEBE]'>
                                <div className='flex justify-center items-center pt-[6px] pb-1'>
                                <svg width="55" height="55" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <rect width="60" height="60" rx="30" fill="#444658"/>
                                  <path d="M35.8366 47H23.997C21.793 47 20 45.1599 20 42.8981V17.1026C20 14.8408 21.793 13 23.997 13H35.8366C38.0406 13 39.8336 14.8408 39.8336 17.1026V22.1833C39.8336 22.3712 39.7589 22.5515 39.626 22.6843C39.4931 22.8172 39.3129 22.8919 39.125 22.8919C38.9371 22.8919 38.7569 22.8172 38.624 22.6843C38.4911 22.5515 38.4164 22.3712 38.4164 22.1833V17.1026C38.4164 15.6217 37.2596 14.4164 35.8366 14.4164H23.997C22.5739 14.4164 21.4164 15.6217 21.4164 17.1026V42.8981C21.4164 44.3789 22.5739 45.5836 23.997 45.5836H35.8366C37.2596 45.5836 38.4164 44.3789 38.4164 42.8981V27.9009C38.4164 27.713 38.4911 27.5328 38.624 27.3999C38.7569 27.267 38.9371 27.1923 39.125 27.1923C39.3129 27.1923 39.4931 27.267 39.626 27.3999C39.7589 27.5328 39.8336 27.713 39.8336 27.9009V42.8981C39.8336 45.1599 38.0406 47 35.8366 47Z" fill="white"/>
                                  <path d="M29.9166 41.3333C30.0568 41.3332 30.1938 41.3746 30.3105 41.4524C30.4271 41.5302 30.518 41.6408 30.5717 41.7703C30.6254 41.8997 30.6396 42.0422 30.6123 42.1797C30.585 42.3172 30.5176 42.4435 30.4185 42.5427C30.3195 42.6418 30.1932 42.7094 30.0558 42.7368C29.9183 42.7642 29.7758 42.7502 29.6463 42.6966C29.5168 42.643 29.4061 42.5521 29.3282 42.4356C29.2503 42.3191 29.2087 42.1821 29.2087 42.0419C29.2091 41.8542 29.2838 41.6743 29.4164 41.5415C29.5491 41.4087 29.7289 41.3339 29.9166 41.3333ZM29.9166 39.9169C29.4963 39.9169 29.0855 40.0415 28.736 40.275C28.3866 40.5085 28.1142 40.8404 27.9534 41.2287C27.7925 41.617 27.7505 42.0442 27.8325 42.4565C27.9144 42.8687 28.1168 43.2473 28.414 43.5445C28.7112 43.8417 29.0898 44.0441 29.5021 44.1261C29.9143 44.208 30.3415 44.166 30.7298 44.0051C31.1181 43.8443 31.45 43.5719 31.6835 43.2225C31.917 42.873 32.0416 42.4622 32.0416 42.0419C32.0416 41.4783 31.8177 40.9378 31.4192 40.5393C31.0207 40.1408 30.4802 39.9169 29.9166 39.9169ZM32.0416 17.2498H27.7916C27.6075 17.2441 27.4329 17.1671 27.3047 17.0349C27.1765 16.9027 27.1048 16.7257 27.1048 16.5416C27.1048 16.3574 27.1765 16.1805 27.3047 16.0483C27.4329 15.9161 27.6075 15.839 27.7916 15.8333H32.0416C32.1365 15.8304 32.2309 15.8466 32.3194 15.8809C32.4078 15.9152 32.4885 15.9669 32.5566 16.0329C32.6247 16.099 32.6789 16.178 32.7158 16.2654C32.7528 16.3528 32.7719 16.4467 32.7719 16.5416C32.7719 16.6364 32.7528 16.7303 32.7158 16.8177C32.6789 16.9051 32.6247 16.9841 32.5566 17.0502C32.4885 17.1162 32.4078 17.1679 32.3194 17.2022C32.2309 17.2365 32.1365 17.2527 32.0416 17.2498ZM24.9587 15.8333C24.8186 15.8332 24.6815 15.8747 24.5649 15.9524C24.4483 16.0302 24.3574 16.1408 24.3036 16.2703C24.2499 16.3997 24.2358 16.5422 24.263 16.6797C24.2903 16.8172 24.3577 16.9435 24.4568 17.0427C24.5559 17.1418 24.6821 17.2094 24.8196 17.2368C24.9571 17.2642 25.0996 17.2502 25.2291 17.1966C25.3586 17.143 25.4693 17.0522 25.5472 16.9356C25.625 16.8191 25.6666 16.6821 25.6666 16.5419C25.6666 16.3541 25.5921 16.174 25.4593 16.0411C25.3266 15.9082 25.1465 15.8335 24.9587 15.8333Z" fill="white"/>
                                  <path d="M39.1231 25.7504C39.5144 25.7504 39.8317 25.4331 39.8317 25.0418C39.8317 24.6505 39.5144 24.3333 39.1231 24.3333C38.7318 24.3333 38.4146 24.6505 38.4146 25.0418C38.4146 25.4331 38.7318 25.7504 39.1231 25.7504Z" fill="white"/>
                                  <path d="M39.1231 24.3333C38.983 24.3333 38.846 24.3748 38.7295 24.4527C38.6129 24.5305 38.5221 24.6412 38.4685 24.7707C38.4149 24.9001 38.4008 25.0426 38.4282 25.18C38.4555 25.3175 38.523 25.4437 38.6221 25.5428C38.7212 25.6419 38.8474 25.7094 38.9849 25.7367C39.1223 25.7641 39.2648 25.7501 39.3943 25.6964C39.5237 25.6428 39.6344 25.552 39.7122 25.4355C39.7901 25.3189 39.8317 25.1819 39.8317 25.0418C39.8317 24.9488 39.8133 24.8566 39.7777 24.7707C39.7421 24.6847 39.6899 24.6066 39.6241 24.5408C39.5583 24.475 39.4802 24.4228 39.3943 24.3872C39.3083 24.3516 39.2162 24.3333 39.1231 24.3333Z" fill="white"/>
                                </svg>
                                </div>
                                <div className='w-[138px] h-[68px] flex flex-col justify-center items-center gap-2'>

                                    <h1 className='text-[15px] text-[#444658] font-medium'>Mobile Phone</h1>

                                    <p className='text-[12px] text-[#444658] font-medium'>iphone 13 Pro max</p>

                                    <div className='w-full flex justify-between'>
                                    <p className='text-[11px] ml-[4px] font-medium text-[#444658]'> {t("Registeration:",language as "en"|"ar")}</p>
                                    <span className=" w-[64px] ml-[15px] text-[#47734D] text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-[#D3F5E1]">{t("Completed",language as "en"| "ar")}</span>
                                    </div>

                                    <div className='w-full flex justify-between'>
                                    <p className='text-[11px]  ml-[4px] text-[#444658] font-medium'> {t("Token:",language as "en" | "ar")} </p>
                                    <span className="bg-[#FEF5E7] w-[62px] text-[10px] text-[#FBC948] text-xs ml-[50px] font-medium me-2 px-2.5 py-0.5 rounded-full">{t("pending",language as "en"| "ar")}</span>
                                    </div>
                                    
                        
                                </div>

                            </div>
                        </div>
                        ) :  (
                            <div>
                                {t("NodataforcompanyAssets",language as "en" | "ar")}
                            </div>
                        )}

                        {/* <div className='grid grid-cols-4 grid-rows-1 place-items-center'>

                            <div className='w-[152px] h-[167px] flex flex-col gap-3 place-i'>
                                <div className='flex justify-center items-center pt-[6px] pb-1'>
                                    <svg width="60.000000" height="60.000000" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <desc>
                                            Created with Pixso.
                                        </desc>
                                        <defs />
                                        <rect id="Frame 40700" rx="29.500000" width="59.000000" height="59.000000" transform="translate(0.500000 0.500000)" fill="#444658" fillOpacity="1.000000" />
                                        <path id="Vector" d="M42.41 17.76C42.24 17.25 41.91 16.8 41.47 16.48C41.03 16.17 40.51 16 39.97 16L21.02 16C19.89 16 18.93 16.73 18.58 17.76L15 28.25L15 42.25C15 43.21 15.77 44 16.72 44L18.44 44C18.9 44 19.33 43.81 19.66 43.48C19.98 43.15 20.16 42.71 20.16 42.25L20.16 40.5L40.83 40.5L40.83 42.25C40.83 43.21 41.6 44 42.55 44L44.27 44C44.73 44 45.17 43.81 45.49 43.48C45.81 43.15 46 42.71 46 42.25L46 28.25L42.41 17.76ZM21.02 35.25C19.59 35.25 18.44 34.07 18.44 32.62C18.44 31.17 19.59 30 21.02 30C22.45 30 23.61 31.17 23.61 32.62C23.61 34.07 22.45 35.25 21.02 35.25ZM39.97 35.25C38.54 35.25 37.38 34.07 37.38 32.62C37.38 31.17 38.54 30 39.97 30C41.4 30 42.55 31.17 42.55 32.62C42.55 34.07 41.4 35.25 39.97 35.25ZM18.44 26.5L21.02 18.62L39.97 18.62L42.55 26.5L18.44 26.5Z" fill="#FFFFFF" fillOpacity="1.000000" fillRule="nonzero" />
                                    </svg>

                                </div>
                                <div className='w-[138px] h-[68px] flex flex-col justify-center items-center gap-2'>

                                    <h1 className='text-[15px] font-medium'>Toyota Cammry</h1>

                                    <p className='text-[12px] font-medium'>AFT 090</p>

                                    <div className='w-full flex justify-between'>
                                    <p className='text-[11px] font-medium'> Registeration: </p>
                                    <span className="bg-green-100 w-[46px] text-green-800 text-[10px] font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">Green</span>
                                    </div>

                                    <div className='w-full flex justify-between'>
                                    <p className='text-[11px] font-medium'> Token: </p>
                                    <span className="bg-yellow-100 w-[41px] text-[10px] text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">Yellow</span>
                                    </div>
                                    
                        
                                </div>

                            </div>

                            <div className='w-[152px] h-[167px] flex flex-col gap-3 place-i'>
                                <div className='flex justify-center items-center pt-[6px] pb-1'>
                                    <svg width="60.000000" height="60.000000" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <desc>
                                            Created with Pixso.
                                        </desc>
                                        <defs />
                                        <rect id="Frame 40700" rx="29.500000" width="59.000000" height="59.000000" transform="translate(0.500000 0.500000)" fill="#444658" fillOpacity="1.000000" />
                                        <path id="Vector" d="M42.41 17.76C42.24 17.25 41.91 16.8 41.47 16.48C41.03 16.17 40.51 16 39.97 16L21.02 16C19.89 16 18.93 16.73 18.58 17.76L15 28.25L15 42.25C15 43.21 15.77 44 16.72 44L18.44 44C18.9 44 19.33 43.81 19.66 43.48C19.98 43.15 20.16 42.71 20.16 42.25L20.16 40.5L40.83 40.5L40.83 42.25C40.83 43.21 41.6 44 42.55 44L44.27 44C44.73 44 45.17 43.81 45.49 43.48C45.81 43.15 46 42.71 46 42.25L46 28.25L42.41 17.76ZM21.02 35.25C19.59 35.25 18.44 34.07 18.44 32.62C18.44 31.17 19.59 30 21.02 30C22.45 30 23.61 31.17 23.61 32.62C23.61 34.07 22.45 35.25 21.02 35.25ZM39.97 35.25C38.54 35.25 37.38 34.07 37.38 32.62C37.38 31.17 38.54 30 39.97 30C41.4 30 42.55 31.17 42.55 32.62C42.55 34.07 41.4 35.25 39.97 35.25ZM18.44 26.5L21.02 18.62L39.97 18.62L42.55 26.5L18.44 26.5Z" fill="#FFFFFF" fillOpacity="1.000000" fillRule="nonzero" />
                                    </svg>

                                </div>
                                <div className='w-[138px] h-[68px] flex flex-col justify-center items-center gap-2'>

                                    <h1 className='text-[15px] font-medium'>Toyota Cammry</h1>

                                    <p className='text-[12px] font-medium'>AFT 090</p>

                                    <div className='w-full flex justify-between'>
                                    <p className='text-[11px] font-medium'> Registeration: </p>
                                    <span className="bg-green-100 w-[46px] text-green-800 text-[10px] font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">Green</span>
                                    </div>

                                    <div className='w-full flex justify-between'>
                                    <p className='text-[11px] font-medium'> Token: </p>
                                    <span className="bg-yellow-100 w-[41px] text-[10px] text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">Yellow</span>
                                    </div>
                                    
                        
                                </div>

                            </div>

                            <div className='w-[152px] h-[167px] flex flex-col gap-3 place-i'>
                                <div className='flex justify-center items-center pt-[6px] pb-1'>
                                    <svg width="60.000000" height="60.000000" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <desc>
                                            Created with Pixso.
                                        </desc>
                                        <defs />
                                        <rect id="Frame 40700" rx="29.500000" width="59.000000" height="59.000000" transform="translate(0.500000 0.500000)" fill="#444658" fillOpacity="1.000000" />
                                        <path id="Vector" d="M42.41 17.76C42.24 17.25 41.91 16.8 41.47 16.48C41.03 16.17 40.51 16 39.97 16L21.02 16C19.89 16 18.93 16.73 18.58 17.76L15 28.25L15 42.25C15 43.21 15.77 44 16.72 44L18.44 44C18.9 44 19.33 43.81 19.66 43.48C19.98 43.15 20.16 42.71 20.16 42.25L20.16 40.5L40.83 40.5L40.83 42.25C40.83 43.21 41.6 44 42.55 44L44.27 44C44.73 44 45.17 43.81 45.49 43.48C45.81 43.15 46 42.71 46 42.25L46 28.25L42.41 17.76ZM21.02 35.25C19.59 35.25 18.44 34.07 18.44 32.62C18.44 31.17 19.59 30 21.02 30C22.45 30 23.61 31.17 23.61 32.62C23.61 34.07 22.45 35.25 21.02 35.25ZM39.97 35.25C38.54 35.25 37.38 34.07 37.38 32.62C37.38 31.17 38.54 30 39.97 30C41.4 30 42.55 31.17 42.55 32.62C42.55 34.07 41.4 35.25 39.97 35.25ZM18.44 26.5L21.02 18.62L39.97 18.62L42.55 26.5L18.44 26.5Z" fill="#FFFFFF" fillOpacity="1.000000" fillRule="nonzero" />
                                    </svg>

                                </div>
                                <div className='w-[138px] h-[68px] flex flex-col justify-center items-center gap-2'>

                                    <h1 className='text-[15px] font-medium'>Toyota Cammry</h1>

                                    <p className='text-[12px] font-medium'>AFT 090</p>

                                    <div className='w-full flex justify-between'>
                                    <p className='text-[11px] font-medium'> Registeration: </p>
                                    <span className="bg-green-100 w-[46px] text-green-800 text-[10px] font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">Green</span>
                                    </div>

                                    <div className='w-full flex justify-between'>
                                    <p className='text-[11px] font-medium'> Token: </p>
                                    <span className="bg-yellow-100 w-[41px] text-[10px] text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">Yellow</span>
                                    </div>
                                    
                        
                                </div>

                            </div>
                            <div className='w-[152px] h-[167px] flex flex-col gap-3 place-i'>
                                <div className='flex justify-center items-center pt-[6px] pb-1'>
                                    <svg width="60.000000" height="60.000000" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <desc>
                                            Created with Pixso.
                                        </desc>
                                        <defs />
                                        <rect id="Frame 40700" rx="29.500000" width="59.000000" height="59.000000" transform="translate(0.500000 0.500000)" fill="#444658" fillOpacity="1.000000" />
                                        <path id="Vector" d="M42.41 17.76C42.24 17.25 41.91 16.8 41.47 16.48C41.03 16.17 40.51 16 39.97 16L21.02 16C19.89 16 18.93 16.73 18.58 17.76L15 28.25L15 42.25C15 43.21 15.77 44 16.72 44L18.44 44C18.9 44 19.33 43.81 19.66 43.48C19.98 43.15 20.16 42.71 20.16 42.25L20.16 40.5L40.83 40.5L40.83 42.25C40.83 43.21 41.6 44 42.55 44L44.27 44C44.73 44 45.17 43.81 45.49 43.48C45.81 43.15 46 42.71 46 42.25L46 28.25L42.41 17.76ZM21.02 35.25C19.59 35.25 18.44 34.07 18.44 32.62C18.44 31.17 19.59 30 21.02 30C22.45 30 23.61 31.17 23.61 32.62C23.61 34.07 22.45 35.25 21.02 35.25ZM39.97 35.25C38.54 35.25 37.38 34.07 37.38 32.62C37.38 31.17 38.54 30 39.97 30C41.4 30 42.55 31.17 42.55 32.62C42.55 34.07 41.4 35.25 39.97 35.25ZM18.44 26.5L21.02 18.62L39.97 18.62L42.55 26.5L18.44 26.5Z" fill="#FFFFFF" fillOpacity="1.000000" fillRule="nonzero" />
                                    </svg>

                                </div>
                                <div className='w-[138px] h-[68px] flex flex-col justify-center items-center gap-2'>

                                    <h1 className='text-[15px] font-medium'>Toyota Cammry</h1>

                                    <p className='text-[12px] font-medium'>AFT 090</p>

                                    <div className='w-full flex justify-between'>
                                    <p className='text-[11px] font-medium'> Registeration: </p>
                                    <span className="bg-green-100 w-[46px] text-green-800 text-[10px] font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">Green</span>
                                    </div>

                                    <div className='w-full flex justify-between'>
                                    <p className='text-[11px] font-medium'> Token: </p>
                                    <span className="bg-yellow-100 w-[41px] text-[10px] text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">Yellow</span>
                                    </div>
                                    
                        
                                </div>

                            </div>
                        </div> */}



                    </div>
                </div>
        </>
    );
}
