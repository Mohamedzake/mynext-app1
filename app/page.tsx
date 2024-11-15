"use client";

import Header from "@/app/_components/Header";
import Image from "next/image";
import Link from "next/link";
import bg from "@/public/bg.png";

export default function Home() {
  return (
    <div>
      <main className="mt-5">
        <Image
          src={bg}
          fill
          placeholder="blur"
          quality={80}
          className="object-cover"
          alt="Mountains and forests with two cabins"
        />
        <Header />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8 mt-40">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary-50 mb-10 tracking-tight font-bold leading-tight">
            حل متكامل لإدارة مبيعاتك <br /> بكفاءة، سلاسة، منهجية.
          </h1>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl text-white">
            نظام ماي كاش صُمم لتحسين إدارة المدفوعات والمبيعات وتسهيل عملياتها
            وفقاً لمعايير احترافية وخبرة عميقة.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="bg-white text-green-600 px-6 py-3 rounded-full hover:bg-gray-100 transition"
            >
              اعرف المزيد
            </Link>
            <Link
              href="#"
              className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
            >
              احصل على نسختك التجريبية
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
