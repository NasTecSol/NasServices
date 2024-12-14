"use client"

import Image from 'next/image';
import EmployeesNotification from './components/employeesnotification';
import CompanyNotification from './components/companynotification';
import CompanyAssets from './components/companyassets';
import Overview from './components/overview';
import { t } from "../../../utils/localization";
import { useLanguage } from "@/context/LanguageContext";

import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export default function Homepage() {

    const [currentLang, setCurrentLang] = useState("en");

    const { language, setLanguage } = useLanguage();

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Retrieve the user ID from localStorage
                const userId = localStorage.getItem('userid');
                if (!userId) {
                    throw new Error('User ID not found in localStorage');
                }

                // Retrieve the token from cookies
                const token = Cookies.get('authToken');
                if (!token) {
                    throw new Error('Authorization token not found in cookies');
                }

                // Construct the URL with the ID from localStorage
                const url = `http://localhost:3000/api/companies/user/${userId}`;

                // Make the API call with the Authorization header
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`, // Use the token from cookies
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const result = await response.json();
                setData(result);
            } catch (error) {
                console.log('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array to run only on mount

    return (
        <>
            {/* HomePage Section 1 */}
            <div className="grid grid-cols-2 grid-rows-1 gap-4 p-4">
                <div className="w-[326px] h-[110px]">

                    <h3 className="text-sm font-normal pb-[13px] text-[#515151]">{t("Register",language as "en"|"ar")}</h3>

                    <div className="flex gap-2">

                        <div className="w-[160px] h-[80px] bg-[#444658] rounded-lg pl-3 py-2 shadow-xl">

                            <div className='w-[25px] h-[25px]'>
                                <Image
                                    src="/header/user-profile 1.png"
                                    alt="My Image"
                                    width={25}
                                    height={25}
                                />
                            </div>
                            <div className='font-normal text-xl text-white'>
                                <p>Heading</p>
                            </div>
                            <div className='font-normal text-[11px] text-white'>
                               {t("seedetails",language as "en"| "ar")}
                            </div>
                        </div>

                        <div className="w-[160px] h-[80px] rounded-lg pl-3 py-2 shadow-xl">

                            <div className='w-[25px] h-[25px]'>
                                <Image
                                    src="/header/user-profile 1.png"
                                    alt="My Image"
                                    width={25}
                                    height={25}
                                />
                            </div>
                            <div className='font-normal text-xl text-[#444658]'>
                                <p>Heading</p>
                            </div>
                            <div className='font-normal text-[11px] text-[#444658]'>
                            {t("seedetails",language as "en"| "ar")}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <div className="w-[447px] h-[96px] flex gap-7">

                        <div className="flex flex-col gap-3">
                            <p className="text-sm font-normal text-[#515151]">{t("TotalAssets",language as "en" |"ar")}</p>
                            <h2 className="text-4xl font-semibold text-[#2F2F2F]">12</h2>
                            <p className="text-[12px] font-normal text-[#878482]">NasTecSol</p>
                        </div>

                        <div className="flex flex-col gap-3">
                            <p className="text-sm font-normal text-[#515151]">{t("TotalEmployees",language as "en" |"ar")}</p>
                            <h2 className="text-4xl font-semibold text-[#2F2F2F]">402</h2>
                            <p className="text-[12px] font-normal text-[#878482]">NasTecSol</p>
                        </div>

                        <div className="flex flex-col gap-3">
                            <p className="text-sm font-normal text-[#515151]">{t("TotalEmployeeSalary",language as "en" |"ar")}</p>
                            <h2 className="text-4xl font-semibold text-[#2F2F2F]">SAR 528,976</h2>
                            <p className="text-[12px] font-normal text-[#878482]">July, 2024</p>
                        </div>

                    </div>
                </div>

            </div>

            {/* HomePage Section 2 */}
            <div className="grid grid-cols-2 grid-rows-2 gap-4 p-4">

                {/* Employess Notifications Table Start */}
                <EmployeesNotification data={data} />

                {/* Company Notifications Table Start */}
                 <CompanyNotification data={data} /> 
                

                {/* Company Assets Table Start */}
                <CompanyAssets data={data} /> 
              

                {/* Company Overview Table Start */}
                <Overview data={data} /> 
                
            </div>
        </>
    );

}