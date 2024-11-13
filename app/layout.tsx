import { Inter } from "next/font/google";
import "./globals.css";
import { i18n } from "@/i18n-config";
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UDO | Dashboard",

  icons: {
    icon: "/logo.png",
  },
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({
    lang: locale,
  }));
}

export default function RootLayout({ children, modal, params }) {
  console.log(params);
  return (
    <html
      dir={params.lang === "en" ? "ltr" : "rtl"}
      lang={params.lang}
      suppressHydrationWarning
    >
      <head></head>
      <body
        className={`${josefin.className}
       antialiased bg-primary-950 text-primary-100
         min-h-screen flex flex-col relative`}
      >
        {children}
      </body>
    </html>
  );
}
