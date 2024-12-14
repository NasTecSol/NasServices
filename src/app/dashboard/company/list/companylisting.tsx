"use client";
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { t } from "../../../../utils/localization";
import { useLanguage } from "@/context/LanguageContext";
import Link from 'next/link';

export default function CompanyListing()
{
  
  const [currentLang, setCurrentLang] = useState("en");
  const { language, setLanguage } = useLanguage();
    const [data, setData] = useState<any[] | null>(null);

    useEffect(() => {
      const fetchData = async () => {
          try {
              
              const userId = localStorage.getItem('userid');
              if (!userId) {
                  throw new Error('User ID not found in localStorage');
              }

              const token = Cookies.get('authToken');
              if (!token) {
                  throw new Error('Authorization token not found in cookies');
              }

              const url = `http://localhost:3000/api/companies/user/${userId}`;

              const response = await fetch(url, {
                  method: 'GET',
                  headers: {
                      'Content-Type': 'application/json',
                      'Authorization': `Bearer ${token}`, 
                  },
              });

              if (!response.ok) {
                  throw new Error(`HTTP error! Status: ${response.status}`);
              }

              const result = await response.json();
              setData(result.Data);
          } catch (error) {
              console.log('Error fetching data:', error);
          }
      };

      fetchData();
  }, []);

    return(
        <div className="min-h-screen bg-gray-100 p-8">
         <div className=" ml-[-30px] mt-[-31px] w-[104%] bg-white shadow-md rounded-lg  h-[720px] p-4 sm:p-6">
         <h1 className="text-[#444658] size-6 border-b-2 mb-6 font-bold">{t("Companies",language as "en" |"ar")} </h1>
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-6">
           
            </div>
            <div className="flex space-x-4 mt-[-90px!important]">
            <button className=" text-[#444658] font-medium px-4 py-2  hover:bg-gray-300 border border-[#444658] rounded-[12px] ">
            {t("Filters",language as "en" |"ar")}
              </button>
              <Link href="/dashboard/company/create">
              <button className="bg-[#444658] text-white font-medium px-4 py-2 rounded-[17px] w-[240px]">
              {t("+RegisterNewCompany",language as "en" |"ar")} 
              </button>
              </Link>
            </div>
          </div>
          <div className="overflow-x-auto">
          <table className="min-w-full bg-white border-t border-gray-200">

              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-gray-600 font-semibold border-b">
                  CR no
                  </th>
                  <th className="px-4 py-2 text-left text-gray-600 font-semibold border-b">
                  {t("CompanyName",language as "en" |"ar")}
                  </th>
                  <th className="px-4 py-2 text-left text-gray-600 font-semibold border-b">
                  {t("Owner",language as "en" |"ar")}
                  </th>
                  <th className="px-4 py-2 text-left text-gray-600 font-semibold border-b">
                  {t("Location",language as "en" |"ar")}
                  </th>
                  <th className="px-4 py-2 text-left text-gray-600 font-semibold border-b">
                  {t("PhoneNo",language as "en" |"ar")}
                  </th>
                  <th className="px-4 py-2 text-left text-gray-600 font-semibold border-b">
                  {t("Address",language as "en" |"ar")}
                  </th>
                  <th className="px-4 py-2 text-left text-gray-600 font-semibold border-b">
                  {t("Actions",language as "en" |"ar")}
                  </th>
                </tr>
              </thead>
              <tbody>
              {data && data.length > 0 ? (
                data.map((emp: any) => (
                  <tr key={emp._id} className="hover:bg-gray-50">
                    <td className="px-4 py-2">{emp.companyInfo.commercialLicenseNumber}</td>
                    <td className="px-4 py-2">{emp.companyInfo.name}</td>
                    <td className="px-4 py-2 flex items-center space-x-3">
                      <span>{emp.ownership[0].userName}</span>
                    </td>
                    <td className="px-4 py-2">{emp.companyInfo.country}</td>
                    <td className="px-4 py-2">{emp.companyInfo.phoneNumber}</td>
                    <td className="px-4 py-2">{emp.companyInfo.address}</td>
                    <td className="px-4 py-2">
                      <button className="text-gray-800 font-medium px-3 py-1 border-b">
                      {t("View",language as "en" |"ar")} 
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="px-4 py-2 text-center text-gray-600">
                    No data available.
                  </td>
                </tr>
              )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
}