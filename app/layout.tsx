// "use client";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import { i18n } from "@/i18n-config";
// import { Josefin_Sans } from "next/font/google";
// import { IntlProvider } from "next-intl";
// import enMessages from "@/public/dictionaries/en.json";
// import arMessages from "@/public/dictionaries/ar.json";
// import { useParams } from "next/navigation";
// import React, { useState, useEffect } from "react";
// const josefin = Josefin_Sans({
//   subsets: ["latin"],
//   display: "swap",
// });
// const inter = Inter({ subsets: ["latin"] });

// const metadata = {
//   title: "UDO | Dashboard",
//   icons: {
//     icon: "/logo.png",
//   },
// };

// function generateStaticParams() {
//   return i18n.locales.map((locale) => ({
//     lang: locale,
//   }));
// }

// export default function RootLayout({ children }) {
//   const [userPreferences, setUserPreferences] = useState<{
//     theme: string;
//     language: string;
//   } | null>(null);
//   // Retrieve data from localStorage
//   const getFromLocalStorage = (key: string) => {
//     const storedData = localStorage.getItem(key);
//     return storedData ? JSON.parse(storedData) : null; // Parse JSON string back to an object
//   };
//   // Example usage
//   useEffect(() => {
//     const preferences = getFromLocalStorage("userPreferences");
//     if (preferences) {
//       setUserPreferences(preferences);
//     } else {
//       // Default preferences if nothing is found in localStorage
//       setUserPreferences({ theme: "light", language: "en" });
//     }
//   }, []);

//   // If preferences are not loaded yet, show a loading indicator
//   if (!userPreferences) {
//     return <div>Loading...</div>;
//   }
//   console.log(userPreferences);
//   // const { lang } = useParams();
//   // console.log(lang);
//   const params = {
//     lang: userPreferences.language,
//   };
//   const locale = params.lang || "en";
//   const messages = locale === "en" ? enMessages : arMessages;
//   console.log(params.lang);
//   return (
//     <html
//       // dir={locale === "en" ? "ltr" : "rtl"}
//       lang={locale}
//       suppressHydrationWarning
//     >
//       <head></head>
//       <body
//         className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
//       >
//         <IntlProvider locale={locale} messages={messages}>
//           {children}
//         </IntlProvider>
//       </body>
//     </html>
//   );
// }
"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { i18n } from "@/i18n-config";
import { Josefin_Sans } from "next/font/google";
import { IntlProvider } from "next-intl";
import enMessages from "@/public/dictionaries/en.json";
import arMessages from "@/public/dictionaries/ar.json";
import React, { useState, useEffect, ReactNode } from "react";
// import Header from "@/app/_components/Header";
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [currentLocale, setCurrentLocale] = useState("ar");

  useEffect(() => {
    const storedPrefs = localStorage.getItem("userPreferences");
    if (storedPrefs) {
      const { language } = JSON.parse(storedPrefs);
      setCurrentLocale(language);
    }
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <html lang="ar" suppressHydrationWarning>
        <body
          className={`${josefin.className} antialiased bg-primary-10 text-primary-100 min-h-screen flex flex-col relative`}
        >
          <IntlProvider locale="ar" messages={arMessages}>
            {children}
          </IntlProvider>
        </body>
      </html>
    );
  }

  const messages = currentLocale === "en" ? enMessages : arMessages;

  return (
    <html
      lang={currentLocale}
      // dir={currentLocale === "en" ? "ltr" : "rtl"}
      suppressHydrationWarning
    >
      <body
        className={`${josefin.className} antialiased bg-primary-10 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <IntlProvider locale={currentLocale} messages={messages}>
          {/* <Header /> */}
          {children}
        </IntlProvider>
      </body>
    </html>
  );
}
