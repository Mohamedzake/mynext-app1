"use client";

import Header from "@/app/_components/Header";
import Image from "next/image";
import Link from "next/link";
import bg from "@/public/bg.png";
import Footer from "@/app/_components/Footer";
import { useTranslations } from "next-intl";

import Contact from "../_components/Contact";
import Items3 from "../_components/Items3";
import FeaturesSection2AI from "../_components/FeaturesSection2AI";

export default function Page() {
  const t = useTranslations("solutions");
  return (
    <div>
      <main className="relative pt-8 h-[70vh]">
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
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8">
          {/* <div className="relative z-10 flex flex-col items-center justify-start h-full text-center px-4 sm:px-6 lg:px-8 mt-12"> */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary-10 mb-10 tracking-tight font-bold leading-tight">
            {t("access_point_services")}
          </h1>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl text-primary-10">
            {t("mycash_pos_system")}
          </p>
          <div className="flex">
            <Link
              href="#"
              className="bg-primary-20 text-primary-10 px-6 py-3 rounded-full hover:bg-green-700 transition"
            >
              {t("get_your_trial_version")}
            </Link>
          </div>
        </div>
      </main>
      <section>
        <div className="text-center mb-8 md:mb-12 bg-gray-50 py-14">
          <h2 className="text-lg md:text-2xl text-blue-600 font-bold mb-2">
            <span className="bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
              {t("discover_our_solutions1")}
            </span>
          </h2>

          <h1 className="text-3xl md:text-4xl lg:px-48 font-bold text-gray-800">
            {t("control_store_payments1")}
          </h1>
          <p className="text-black text-lg max-w-lg md:max-w-2xl mx-auto mt-4">
            {t("content")}
          </p>
        </div>
      </section>
      <Items3 />
      <FeaturesSection2AI />
      <Contact />
      <Footer />
    </div>
  );
}
