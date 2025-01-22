// "use client";

// import { Inter } from "next/font/google";
// import "./globals.css";
// import { Josefin_Sans } from "next/font/google";
// import { IBM_Plex_Sans_Arabic } from "next/font/google";
// import { IntlProvider } from "next-intl";
// import enMessages from "@/public/dictionaries/en.json";
// import arMessages from "@/public/dictionaries/ar.json";
// import React, {
//   useState,
//   useEffect,
//   ReactNode,
//   createContext,
//   useContext,
// } from "react";

// const josefin = Josefin_Sans({
//   subsets: ["latin"],
//   display: "swap",
// });

// const inter = Inter({
//   subsets: ["latin"],
//   weight: "400",
//   display: "swap",
// });

// const ibmPlexArabic = IBM_Plex_Sans_Arabic({
//   subsets: ["arabic"],
//   weight: "400",
//   display: "swap",
// });
// const LocaleContext = createContext({
//   currentLocale: "ar",
//   setLocale: (locale: string) => {},
// });

// export const useLocale = () => useContext(LocaleContext);

// export default function RootLayout({ children }: { children: ReactNode }) {
//   const [currentLocale, setLocale] = useState("ar");
//   console.log(currentLocale);

//   const messages = currentLocale === "en" ? enMessages : arMessages;
//   // console.log(messages);

//   return (
//     <LocaleContext.Provider value={{ currentLocale, setLocale }}>
//       <html
//         lang={currentLocale}
//         dir={currentLocale === "ar" ? "ltr" : "rtl"}
//         suppressHydrationWarning
//       >
//         <body
//           className={`${
//             currentLocale === "en"
//               ? ibmPlexArabic.className + " text-sm"
//               : ibmPlexArabic.className
//           } antialiased bg-primary-10 text-primary-100 min-h-screen flex flex-col relative`}
//         >
//           <IntlProvider locale={currentLocale} messages={messages}>
//             {children}
//           </IntlProvider>
//         </body>
//       </html>
//     </LocaleContext.Provider>
//   );
// }
// "use client";

// import "./globals.css";

// import { IBM_Plex_Sans_Arabic } from "next/font/google";
// import { IntlProvider } from "next-intl";
// import enMessages from "@/public/dictionaries/en.json";
// import arMessages from "@/public/dictionaries/ar.json";
// import React, {
//   useState,
//   useEffect,
//   ReactNode,
//   createContext,
//   useContext,
// } from "react";
// import Head from "next/head";

// type Messages = Record<string, string>;

// const ibmPlexArabic = IBM_Plex_Sans_Arabic({
//   subsets: ["arabic"],
//   weight: "400",
//   display: "swap",
// });

// const LocaleContext = createContext({
//   currentLocale: "ar",
//   setLocale: (locale: string) => {},
// });

// export const useLocale = () => useContext(LocaleContext);

// export default function RootLayout({ children }: { children: ReactNode }) {
//   const [currentLocale, setLocale] = useState("ar");
//   console.log(currentLocale);

//   const messages: Messages =
//     currentLocale === "en"
//       ? (enMessages as unknown as Messages)
//       : (arMessages as unknown as Messages);

//   return (
//     <LocaleContext.Provider value={{ currentLocale, setLocale }}>
//       <html
//         lang={currentLocale}
//         dir={currentLocale === "ar" ? "ltr" : "rtl"}
//         suppressHydrationWarning
//       >
//         <Head>
//           {/* Facebook Domain Verification */}
//           <meta
//             name="facebook-domain-verification"
//             content="kkrd506y1ao3crgzgm7wxpi08nhfsv"
//           />
//         </Head>
//         <body
//           className={`${
//             currentLocale === "en"
//               ? ibmPlexArabic.className + " text-sm"
//               : ibmPlexArabic.className
//           } antialiased bg-primary-10 text-primary-100 min-h-screen flex flex-col relative`}
//         >
//           <IntlProvider locale={currentLocale} messages={messages}>
//             {children}
//           </IntlProvider>
//         </body>
//       </html>
//     </LocaleContext.Provider>
//   );
// }
//
//
//
// "use client";

// import "./globals.css";

// import { IBM_Plex_Sans_Arabic, IBM_Plex_Sans } from "next/font/google";
// import { IntlProvider } from "next-intl";
// import enMessages from "@/public/dictionaries/en.json";
// import arMessages from "@/public/dictionaries/ar.json";
// import React, {
//   useState,
//   useEffect,
//   ReactNode,
//   createContext,
//   useContext,
// } from "react";
// import Head from "next/head";

// type Messages = Record<string, string>;

// const ibmPlexArabic = IBM_Plex_Sans_Arabic({
//   subsets: ["arabic"],
//   weight: "400",
//   display: "swap",
// });

// const ibmPlexSans = IBM_Plex_Sans({
//   subsets: ["latin"],
//   weight: "400",
//   display: "swap",
// });

// const LocaleContext = createContext({
//   currentLocale: "ar",
//   setLocale: (locale: string) => {},
// });

// export const useLocale = () => useContext(LocaleContext);

// export default function RootLayout({ children }: { children: ReactNode }) {
//   const [currentLocale, setLocale] = useState("ar");
//   console.log(currentLocale);

//   const messages: Messages =
//     currentLocale === "en"
//       ? (enMessages as unknown as Messages)
//       : (arMessages as unknown as Messages);

//   const fontClass =
//     currentLocale === "en" ? ibmPlexSans.className : ibmPlexArabic.className;

//   return (
//     <LocaleContext.Provider value={{ currentLocale, setLocale }}>
//       <html
//         lang={currentLocale}
//         dir={currentLocale === "ar" ? "ltr" : "rtl"}
//         // dir={currentLocale === "ar" ? "rtl" : "ltr"}
//         suppressHydrationWarning
//       >
//         <Head>
//           {/* Facebook Domain Verification */}
//           <meta
//             name="facebook-domain-verification"
//             content="kkrd506y1ao3crgzgm7wxpi08nhfsv"
//           />
//         </Head>
//         <body
//           className={`${fontClass} text-sm antialiased bg-primary-10 text-primary-100 min-h-screen flex flex-col relative`}
//         >
//           <IntlProvider locale={currentLocale} messages={messages}>
//             {children}
//           </IntlProvider>
//         </body>
//       </html>
//     </LocaleContext.Provider>
//   );
// }
"use client";
import "./globals.css";
import { IBM_Plex_Sans_Arabic, IBM_Plex_Sans } from "next/font/google";
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
import Head from "next/head";

type Messages = Record<string, string>;

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: "400",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
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

  useEffect(() => {
    // Check for saved locale in localStorage
    const savedLocale = localStorage.getItem("locale");
    if (savedLocale) {
      setLocale(savedLocale);
    }
  }, []);

  const updateLocale = (locale: string) => {
    setLocale(locale);
    localStorage.setItem("locale", locale); // Save preference in localStorage
  };

  const messages: Messages =
    currentLocale === "en"
      ? (enMessages as unknown as Messages)
      : (arMessages as unknown as Messages);

  const fontClass =
    currentLocale === "en" ? ibmPlexSans.className : ibmPlexArabic.className;

  return (
    <LocaleContext.Provider value={{ currentLocale, setLocale: updateLocale }}>
      <html
        lang={currentLocale}
        dir={currentLocale === "ar" ? "rtl" : "ltr"}
        suppressHydrationWarning
      >
        <Head>
          <meta
            name="facebook-domain-verification"
            content="kkrd506y1ao3crgzgm7wxpi08nhfsv"
          />
        </Head>
        <body
          className={`${fontClass} text-sm antialiased bg-primary-10 text-primary-100 min-h-screen flex flex-col relative`}
        >
          <IntlProvider locale={currentLocale} messages={messages}>
            {children}
          </IntlProvider>
        </body>
      </html>
    </LocaleContext.Provider>
  );
}
