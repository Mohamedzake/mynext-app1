"use client";

import Header from "@/app/_components/Header";
import Image from "next/image";

import bg from "@/public/bg.png";

import Footer from "@/app/_components/Footer";

import Contact from "../_components/Contact";
import SolutionsBlogs from "../_components/SolutionsBlogs";
import ArticlesDet from "../_components/ArticlesDet";

export default function Page() {
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

      <ArticlesDet />
      <SolutionsBlogs />
      <Contact />
      <Footer />
    </div>
  );
}
