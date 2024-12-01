"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { Josefin_Sans } from "next/font/google";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import { IntlProvider } from "next-intl";
import enMessages from "@/public/dictionaries/en.json";
import arMessages from "@/public/dictionaries/ar.json";
import React, {
  useState,
  useEffect,
  ReactNode,
  createContext,
  useContext,
} from "react";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: "400",
  display: "swap",
});
const LocaleContext = createContext({
  currentLocale: "ar",
  setLocale: (locale: string) => {},
});

export const useLocale = () => useContext(LocaleContext);

export default function RootLayout({ children }: { children: ReactNode }) {
  const [currentLocale, setLocale] = useState("ar");
  console.log(currentLocale);

  const messages = currentLocale === "en" ? enMessages : arMessages;

  return (
    <LocaleContext.Provider value={{ currentLocale, setLocale }}>
      <html
        lang={currentLocale}
        dir={currentLocale === "en" ? "ltr" : "rtl"}
        suppressHydrationWarning
      >
        <body
          className={`${
            currentLocale === "en"
              ? ibmPlexArabic.className + " text-sm"
              : ibmPlexArabic.className
          } antialiased bg-primary-10 text-primary-100 min-h-screen flex flex-col relative`}
        >
          <IntlProvider locale={currentLocale} messages={messages}>
            {children}
          </IntlProvider>
        </body>
      </html>
    </LocaleContext.Provider>
  );
}
