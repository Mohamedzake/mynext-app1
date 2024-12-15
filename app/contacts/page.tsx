"use client";

import Header from "@/app/_components/Header";
import Image from "next/image";
import Link from "next/link";
// import bg from "@/public/bg.png";
import bg from "@/public/hero.jpeg";
import Footer from "@/app/_components/Footer";
import { useTranslations } from "next-intl";
import Contact from "../_components/Contact";
import ContactForm from "../_components/ContactForm";

export default function Page() {
  const t = useTranslations("contact");
  return (
    <div>
      <main className="relative pt-8 h-[50vh]">
        <div className="absolute inset-0">
          <Image
            src={bg}
            layout="fill"
            placeholder="blur"
            quality={80}
            className="object-cover"
            alt="Mountains and forests with two cabins"
          />
        </div>{" "}
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <Header />
        <div className="relative z-10 flex flex-col items-center justify-start h-full text-center px-4 sm:px-6 lg:px-8 mt-20">
          {/* <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8"> */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary-10 mb-5 tracking-tight font-bold leading-tight">
            {t("title")}
          </h1>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl text-primary-10">
            {t("content")}
          </p>
        </div>
      </main>
      <ContactForm />
      <Contact />
      <Footer />
    </div>
  );
}
