"use client"
import Link from 'next/link';
import { t } from "../../../utils/localization";
import { useLanguage } from "@/context/LanguageContext";

export default function Header()
{
    const { language, setLanguage } = useLanguage();
    return(
        <div className="w-full h-[72px] flex flex-row justify-between items-center border-b border-[#666666]">

            <div className="pl-8 flex flex-row justify-center items-center gap-2 text-xl font-normal">

                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="#666666" />
                </svg>
                <Link href="/">
                    <span>{ t( "back" , language as "en" | "ar" ) } </span>
                </Link>
            </div>

            <div className="pr-8 text-2xl font-bold text-[#444658]">
                <Link href="/auth/signup">
                    <p>{t("Create",language as "en"| "ar")}</p>
                </Link>
            </div>  
                      
        </div>
    );
}