"use client";

import Header from "@/app/_components/Header";
import Image from "next/image";
import Link from "next/link";
// import bg from "@/public/bg.png";
import bg from "@/public/hero.jpeg";
import Footer from "@/app/_components/Footer";
import { useTranslations } from "next-intl";
import Solutions from "@/app/_components/Solutions";
import Solutions2 from "@/app/_components/Solutions2";
import FeaturesSection from "@/app/_components/FeaturesSection";
import FeaturesSection2 from "@/app/_components/FeaturesSection2";
import AboutSection from "@/app/_components/AboutSection";
import Contact from "@/app/_components/Contact";
import PromoSection from "@/app/_components/PromoSection";
import CompanyLogos from "@/app/_components/CompanyLogos";
import Carousel from "@/app/_components/Carousel";
import AnimatedSections from "./_components/AnimatedSections";

export default function Home() {
  const t = useTranslations("home");

  return (
    <div>
      <main className="relative pt-8 h-screen">
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
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <Header />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-1 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-primary-50 mb-10 tracking-tight sm:p-8 font-bold leading-tight">
            {t("main_title")}
          </h1>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl text-white">
            {t("description")}
          </p>
          <div className="flex gap-2 sm:gap-4">
            <Link
              href="/landing"
              className="bg-white text-primary-20 px-6 lg:px-10 py-3 rounded-full border-2 border-primary-20 hover:bg-gray-100 transition"
            >
              {t("learn_more")}
            </Link>
            <Link
              href="#"
              className="bg-primary-20 text-white px-2 sm:px-6 md:px-14 py-3 rounded-full hover:bg-green-700 transition"
            >
              {t("get_trial")}
            </Link>
          </div>
        </div>
      </main>
      <CompanyLogos />
      <Solutions />
      <Solutions2 />
      <Carousel />
      <AnimatedSections />
      {/* <FeaturesSection /> */}
      <FeaturesSection2 />
      <AboutSection />
      <PromoSection />
      <Contact />
      <Footer />
    </div>
  );
}
