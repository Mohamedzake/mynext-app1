"use client";

import Link from "next/link";

import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("contact");
  return (
    <div>
      <main className="relative pt-8 h-[45vh] bg-gray-50">
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8">
          {/* <div className="relative z-10 flex flex-col items-center justify-start h-full text-center px-4 sm:px-6 lg:px-8 mt-12"> */}
          <h1 className="text-2xl sm:text-1xl md:text-3xl lg:text-4xl text-black mb-10 tracking-tight font-bold leading-tight">
            {t("contact_us_now")}
          </h1>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl text-black">
            {`"${t("dont_hesitate")}"`}
          </p>
          <div className="flex">
            <Link
              href="#"
              className="bg-primary-20 text-2xl  text-primary-10 px-10 py-3 rounded-full hover:bg-green-700 transition"
            >
              {t("contact_us")}
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
