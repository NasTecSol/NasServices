import type { Metadata } from "next";

import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "NasServices Next App",
  description: "NesServices App",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) 
{
  return (
    <html lang="en">
      <body>
      <LanguageProvider>
        {children}
      </LanguageProvider>
      </body>
    </html>
  );
}
