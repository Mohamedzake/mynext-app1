"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { i18n } from "@/i18n-config";
import { Josefin_Sans } from "next/font/google";
import { IntlProvider } from "next-intl";
import enMessages from "@/public/dictionaries/en.json";
import arMessages from "@/public/dictionaries/ar.json";
import { useParams } from "next/navigation";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});
const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "UDO | Dashboard",
  icons: {
    icon: "/logo.png",
  },
};

function generateStaticParams() {
  return i18n.locales.map((locale) => ({
    lang: locale,
  }));
}

export default function RootLayout({ children }) {
  const { lang } = useParams();
  console.log(lang);
  const params = {
    lang: lang,
  };
  const locale = params.lang || "en";
  const messages = locale === "en" ? enMessages : arMessages;
  console.log(params.lang);
  return (
    <html
      dir={locale === "en" ? "ltr" : "rtl"}
      lang={locale}
      suppressHydrationWarning
    >
      <head></head>
      <body
        className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <IntlProvider locale={locale} messages={messages}>
          {children}
        </IntlProvider>
      </body>
    </html>
  );
}
