"use client";

import Header from "@/app/_components/Header";
import Image from "next/image";
import Link from "next/link";
import img from "@/public/pos_img.jpg";
import Footer from "@/app/_components/Footer";
import { useTranslations } from "next-intl";
import { FiPlayCircle } from "react-icons/fi";
import Contact from "@/app/_components/Contact";
import WhyChooseMyCash from "@/app/_components/WhyChooseMyCash";
import WhyChooseMyCash2 from "@/app/_components/WhyChooseMyCash2";
import CompanyLogos from "./_components/CompanyLogos";
import bg from "@/public/bg.png";
export default function Home() {
  const t = useTranslations("landing");

  return (
    <div>
      <main className="relative pt-8">
        {" "}
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
        <div className="flex flex-col items-center justify-center bg-gray-100">
          {/* Watch Video Section */}
          <div className="flex flex-col items-center mb-20 mt-28 z-50">
            <FiPlayCircle className="text-5xl text-primary-10 mb-2" />
            <p className="text-xl font-medium text-primary-10">Watch video</p>
          </div>

          {/* Form Container */}
          <div className="bg-white border p-8 rounded-2xl shadow-lg lg:w-10/12 w-11/12 z-50">
            <h2 className="text-2xl text-end font-semibold text-gray-700 mb-4">
              احصل اليوم على تطبيق ماي كاش: الحل الذكي لإدارة المبيعات والدفع
              بكل سهولة
            </h2>
            <form className="flex flex-col">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {/* Email */}
                <input
                  type="email"
                  placeholder="البريد الإلكتروني"
                  className="p-4 text-end text-xl border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
                />
                {/* Last Name */}
                <input
                  type="text"
                  placeholder="الاسم الثاني"
                  className="p-4 text-end text-xl border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
                />{" "}
                {/* First Name */}
                <input
                  type="text"
                  placeholder="الاسم الأول"
                  className="p-4 text-end text-xl  border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
                />{" "}
                {/* Number of Branches */}
                <select className="p-4 text-gray-400 text-xl text-end border bg-white border-gray-300 rounded-full focus:outline-none focus:border-blue-500">
                  <option>كم عدد الفروع؟</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5+">5+</option>
                </select>
                {/* Company Name */}
                <input
                  type="text"
                  placeholder="اسم الشركة"
                  className="p-4 text-end text-xl border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
                />
                {/* Phone Number */}
                <input
                  type="tel"
                  placeholder="رقم الهاتف"
                  className="p-4 text-end text-xl border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
                />
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="col-span-2 text-xl bg-primary-20 text-white py-3 rounded-full font-semibold hover:bg-green-600 transition duration-300"
              >
                إرسال
              </button>
            </form>
          </div>
        </div>
        <section className="flex flex-col lg:flex-row items-center justify-between p-8 bg-primary-10 mx-auto">
          {/* Form Section */}
          {/* <div className="bg-primary-10 border p-8 rounded-2xl shadow-lg lg:w-5/12 w-full mb-8 lg:mb-0 z-20">
            <h2 className="text-2xl text-end font-semibold text-gray-700 mb-4">
              {t("getApp")}
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder={t("firstName")}
                className="w-full p-4 text-end text-2xl border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <input
                type="text"
                placeholder={t("lastName")}
                className="w-full p-4 border text-2xl text-end border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <input
                type="email"
                placeholder={t("email")}
                className="w-full p-4 border text-2xl text-end border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <input
                type="tel"
                placeholder={t("phoneNumber")}
                className="w-full p-4 border text-2xl text-end border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <input
                type="text"
                placeholder={t("companyName")}
                className="w-full p-4 border text-2xl text-end border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <select className="w-full p-4 text-2xl text-black text-end border bg-primary-10 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                <option>{t("numberOfBranches")}</option>
              </select>
              <button
                type="submit"
                className="w-full bg-primary-20 text-white py-3 rounded-full font-semibold hover:bg-green-600 transition duration-300"
              >
                {t("submit")}
              </button>
            </form>
          </div> */}

          {/* Image Section */}
          {/* <div className="relative lg:w-7/12 w-full flex justify-center lg:justify-end p-7">
            <Image
              src={img}
              alt={t("myCashIllustration")}
              className="rounded-lg object-cover w-3/4 lg:w-full shadow-lg"
            />
          </div> */}
        </section>
      </main>
      <CompanyLogos />
      <WhyChooseMyCash />
      <WhyChooseMyCash2 />
      <Contact />
      <Footer />
    </div>
  );
}
