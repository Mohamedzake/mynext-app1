"use client";

import Header from "@/app/_components/Header";
import Image from "next/image";

import bg from "@/public/bg.png";
import avatar from "@/public/avatar.jpg";
import Footer from "@/app/_components/Footer";
import { useTranslations } from "next-intl";
import Contact from "../_components/Contact";
import SolutionsBlogs from "../_components/SolutionsBlogs";

export default function Page() {
  const t = useTranslations("blogs");
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
      </main>

      {/* //////////////// */}

      <div className="min-h-screen bg-primary-10 text-black">
        <header className="flex justify-between items-center py-4 border-b border-gray-200 max-w-4xl mx-auto my-8 px-2 sm:px-10">
          <div className="flex items-center space-x-4 gap-2">
            <Image
              src={avatar}
              alt="Profile"
              className="w-12 h-12 rounded-full"
            />
            <h1 className="text-base sm:text-xl font-semibold">
              {t("profile_name")}
            </h1>
          </div>
          <div>
            <span className="text-gray-500">{t("profile_date")}</span>
          </div>
        </header>

        <main>
          <div className="max-w-4xl mx-auto my-8 px-2 sm:px-10">
            <p className="text-lg mb-4">{t("intro_paragraph_1")}</p>
            <p className="text-lg mb-4">{t("intro_paragraph_2")}</p>
            <blockquote className="italic border-l-4 border-gray-300 pl-4 my-6">
              {t("quote")}
            </blockquote>
            <p className="text-lg mb-4">{t("passion_paragraph")}</p>
            <p className="text-lg mb-4">{t("conclusion_paragraph_1")}</p>
            <p className="text-lg mb-4">{t("conclusion_paragraph_2")}</p>
            <p className="text-lg mb-4">{t("conclusion_paragraph_3")}</p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center max-w-4xl mx-auto my-8 px-2 sm:px-10 border-t border-gray-200 py-6">
            <div>
              <button className="flex items-center space-x-2 px-4 py-2 border border-black rounded-full sm:rounded-md hover:bg-gray-100">
                <span>{t("previous_button")}</span>
              </button>
              <p className="text-gray-500 mt-2 hidden sm:block">
                {t("previous_text")}
              </p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <button className="flex items-center space-x-2 px-4 py-2 border border-black rounded-full sm:rounded-md hover:bg-gray-100">
                <span>{t("next_button")}</span>
              </button>
              <p className="text-gray-500 hidden sm:block">{t("next_text")}</p>
            </div>
          </div>
        </main>
      </div>

      <SolutionsBlogs />
      <Contact />
      <Footer />
    </div>
  );
}
