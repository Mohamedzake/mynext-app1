"use client";

import Header from "@/app/_components/Header";
import Image from "next/image";
import Link from "next/link";
import img from "@/public/pos_img.jpg";
import Footer from "@/app/_components/Footer";
import { useTranslations } from "next-intl";

import Contact from "@/app/_components/Contact";
import WhyChooseMyCash from "../_components/WhyChooseMyCash";
import WhyChooseMyCash2 from "../_components/WhyChooseMyCash2";

export default function Home() {
  const t = useTranslations("home");

  return (
    <div>
      <main className="relative pt-8 h-auto">
        <Header />
        <section className="flex flex-col lg:flex-row items-center justify-between p-8 bg-primary-10 rounded-lg shadow-md mx-auto">
          {/* Form Section */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg lg:w-5/12 w-full mb-8 lg:mb-0">
            <h2 className="text-lg font-semibold text-gray-700 mb-4 text-center lg:text-right">
              احصل اليوم على تطبيق ماي كاش: الحل الذكي لإدارة المبيعات والدفع
              بكل سهولة
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="الاسم الاول"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              <input
                type="text"
                placeholder="الاسم الثاني"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              <input
                type="tel"
                placeholder="رقم الهاتف"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              <input
                type="text"
                placeholder="اسم الشركة"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
                <option>كم عدد الفروع؟</option>
                {/* Add more options as needed */}
              </select>
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-3 rounded-md font-semibold hover:bg-green-600 transition duration-300"
              >
                إرسال
              </button>
            </form>
          </div>

          {/* Image Section */}
          <div className="relative lg:w-7/12 w-full flex justify-center lg:justify-end p-7">
            <Image
              src={img}
              alt="MyCash Illustration"
              className="rounded-lg object-cover w-3/4 lg:w-full shadow-lg"
            />
          </div>
        </section>
      </main>
      <WhyChooseMyCash />
      <WhyChooseMyCash2 />
      <Contact />
      <Footer />
    </div>
  );
}
