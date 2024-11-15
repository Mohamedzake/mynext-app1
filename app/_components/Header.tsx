import React, { useState } from "react";
import im from "@/public/auth-logo.svg";
import Image from "next/image";
import Footer from "./Footer";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLang, setIsLang] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleLang = () => {
    setIsLang(!isLang);
  };
  console.log(isLang);
  return (
    <header
      className={`bg-white shadow-lg py-2 z-10 relative ${
        isMenuOpen ? "mx-8 rounded-none" : "mx-8 rounded-l-full rounded-r-full"
      }`}
    >
      <div className="container mx-auto px-6 py-1 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-all">
            ابدأ الآن
          </button>
          <a
            onClick={toggleLang}
            className="text-gray-600 hover:underline"
            href="#"
          >
            العربية
          </a>
        </div>

        <nav className="hidden md:flex md:items-center space-x-6">
          <a className="text-gray-600 hover:underline" href="#">
            تواصل معنا
          </a>
          <a className="text-gray-600 hover:underline" href="#">
            المقالات
          </a>
          <a className="text-gray-600 hover:underline" href="#">
            الباقات
          </a>
          <a className="text-gray-600 hover:underline" href="#">
            الحلول
          </a>
          <a className="text-gray-600 hover:underline" href="#">
            من نحن
          </a>
          <a className="text-gray-600 hover:underline" href="#">
            الرئيسية
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500"
              aria-label="toggle menu"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>

          <div className="text-gray-700 text-2xl font-semibold">
            <Image
              src={im}
              width={60}
              height={60}
              quality={80}
              alt="Logo"
              className="w-14 h-14 object-contain"
            />
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden px-8 py-4 bg-white   flex flex-col space-y-2 mt-4">
          <a className="text-gray-600 hover:underline" href="#">
            تواصل معنا
          </a>
          <a className="text-gray-600 hover:underline" href="#">
            المقالات
          </a>
          <a className="text-gray-600 hover:underline" href="#">
            الباقات
          </a>
          <a className="text-gray-600 hover:underline" href="#">
            الحلول
          </a>
          <a className="text-gray-600 hover:underline" href="#">
            من نحن
          </a>
          <a className="text-gray-600 hover:underline" href="#">
            الرئيسية
          </a>
        </nav>
      )}
    </header>
  );
}

export default Header;
