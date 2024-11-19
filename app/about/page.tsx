"use client";

import Header from "@/app/_components/Header";
import Image from "next/image";

import bg from "@/public/bg.png";
import Footer from "@/app/_components/Footer";
import { useTranslations } from "next-intl";
import Contact from "../_components/Contact";

import Missions from "../_components/Missions";
export default function Page() {
  const t = useTranslations("about_my_cash");
  return (
    <div>
      <main className="relative pt-8 h-[60vh]">
        <div className="absolute inset-0">
          <Image
            src={bg}
            layout="fill"
            placeholder="blur"
            quality={80}
            className="object-cover"
            alt="Mountains and forests with two cabins"
          />
        </div>
        <Header />
        <div className="relative z-10 flex flex-col items-center justify-start h-full text-center px-4 sm:px-6 lg:px-8 mt-16">
          {/* <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8"> */}
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl text-primary-10 mb-1 tracking-tight font-bold leading-tight">
            {t("title")}
          </h1>
          <p className="text-base sm:text-lg mb-8 max-w-2xl text-primary-10">
            {t("content")}
          </p>
        </div>
      </main>
      <Missions />
      <Contact />
      <Footer />
    </div>
  );
}
//////////////////////////////////////
