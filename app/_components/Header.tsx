// "use client";
// import React, { useState, useEffect } from "react";
// import im from "@/public/auth-logo.svg";
// import Image from "next/image";
// import { useTranslations } from "next-intl";
// import Link from "next/link";
// import { useLocale } from "../layout";

// function Header() {
//   const { currentLocale, setLocale } = useLocale();
//   console.log(currentLocale);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const [activeLink, setActiveLink] = useState<string | null>(null);
//   const t = useTranslations("home");

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   /////////////////////////////
//   const updateLanguage = (newLanguage: string) => {
//     setLocale(newLanguage);
//   };

//   ///////////////////////////////
//   useEffect(() => {
//     const storedActiveLink = localStorage.getItem("activeLink");
//     if (storedActiveLink) {
//       setActiveLink(storedActiveLink);
//     }
//   }, []);

//   const handleLinkClick = (link: string) => {
//     setActiveLink(link);
//     localStorage.setItem("activeLink", link);
//   };

//   return (
//     <header
//       className={`bg-white shadow-lg py-2 z-50 fixed top-6 left-0 right-0 border ${
//         isMenuOpen ? "rounded-none" : "lg:mx-8 rounded-l-full rounded-r-full"
//       }`}
//     >
//       <div className="container mx-auto px-4 py-1 flex items-center justify-between">
//         <div className="flex items-center gap-4">
//           {!isMenuOpen && (
//             <button className="bg-primary-20 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-all hidden lg:block">
//               {t("start_now")}
//             </button>
//           )}
//           {currentLocale === "en" ? (
//             <button
//               onClick={() => updateLanguage("ar")}
//               className="text-gray-600 hover:underline"
//             >
//               {t("arabic")}
//             </button>
//           ) : (
//             <button
//               onClick={() => updateLanguage("en")}
//               className="text-gray-600 hover:underline"
//             >
//               {t("english")}
//             </button>
//           )}
//         </div>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex md:items-center gap-4">
//           {[
//             { href: "/", label: t("home") },
//             { href: "/about", label: t("about_us") },
//             { href: "/services", label: t("solutions") },
//             { href: "/pricing", label: t("packages") },
//             { href: "/blogs", label: t("articles") },
//             { href: "/contacts", label: t("contact_us") },
//           ].map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               className={`${
//                 activeLink === link.href
//                   ? "text-green-600"
//                   : "text-gray-600 hover:text-green-600"
//               } `}
//               onClick={() => handleLinkClick(link.href)}
//             >
//               {link.label}
//             </Link>
//           ))}
//         </nav>

//         <div className="flex items-center gap-4">
//           <div className="md:hidden">
//             <button
//               onClick={toggleMenu}
//               type="button"
//               className="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500"
//               aria-label="toggle menu"
//             >
//               <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
//                 <path
//                   fillRule="evenodd"
//                   d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
//                 ></path>
//               </svg>
//             </button>
//           </div>

//           <div className="text-gray-700 text-2xl font-semibold">
//             <Image
//               src={im}
//               width={100}
//               height={100}
//               quality={80}
//               alt="Logo"
//               className="object-contain"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isMenuOpen && (
//         <nav className="md:hidden px-8 py-4 bg-white flex flex-col space-y-2 mt-4">
//           <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-all">
//             {t("start_now")}
//           </button>
//           {[
//             { href: "/", label: t("home") },
//             { href: "/about", label: t("about_us") },
//             { href: "/services", label: t("solutions") },
//             { href: "/pricing", label: t("packages") },
//             { href: "/blogs", label: t("articles") },
//             { href: "/contacts", label: t("contact_us") },
//           ].map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               className={`${
//                 activeLink === link.href
//                   ? "text-green-600"
//                   : "text-gray-600 hover:text-green-600"
//               }`}
//               onClick={() => {
//                 handleLinkClick(link.href);
//                 setIsMenuOpen(false); // Close menu on mobile after click
//               }}
//             >
//               {link.label}
//             </Link>
//           ))}
//         </nav>
//       )}
//     </header>
//   );
// }

// export default Header;

// "use client";
// import React, { useState, useEffect } from "react";
// import im from "@/public/auth-logo.svg";
// import Image from "next/image";
// import { useTranslations } from "next-intl";
// import Link from "next/link";
// import { useLocale } from "../layout";

// function Header() {
//   const { currentLocale, setLocale } = useLocale();

//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeLink, setActiveLink] = useState<string | null>(null);
//   const t = useTranslations("home");

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const updateLanguage = (newLanguage: string) => {
//     setLocale(newLanguage);
//   };

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       setActiveLink(window.location.pathname);
//     }
//   }, []);

//   return (
//     <header
//       className={`bg-white shadow-lg py-2 z-50 fixed top-6 left-0 right-0 border ${
//         isMenuOpen ? "rounded-none" : "lg:mx-8 rounded-l-full rounded-r-full"
//       }`}
//     >
//       <div className="container mx-auto px-4 py-1 flex items-center justify-between">
//         <div className="flex items-center gap-4">
//           {!isMenuOpen && (
//             <button className="bg-primary-20 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-all hidden lg:block">
//               {t("start_now")}
//             </button>
//           )}
//           {currentLocale === "en" ? (
//             <button
//               onClick={() => updateLanguage("ar")}
//               className="text-black hover:underline"
//             >
//               {t("arabic")}
//             </button>
//           ) : (
//             <button
//               onClick={() => updateLanguage("en")}
//               className="text-black hover:underline"
//             >
//               {t("english")}
//             </button>
//           )}
//         </div>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex md:items-center gap-4 lg:gap-10">
//           {[
//             // { href: "/", label: t("home") },
//             // { href: "/landing", label: "offer" },
//             // { href: "#", label: t("about_us") },
//             // { href: "#", label: t("solutions") },
//             // { href: "/pricing", label: t("packages") },
//             // { href: "#", label: t("articles") },
//             // { href: "#", label: t("contact_us") },
//             { href: "/contacts", label: t("contact_us") },

//             { href: "/blogs", label: t("articles") },
//             { href: "/pricing", label: t("packages") },
//             { href: "/services", label: t("solutions") },
//             { href: "/about", label: t("about_us") },
//             { href: "/", label: t("home") },
//           ].map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               // href=""
//               className={`${
//                 activeLink === link.href
//                   ? "text-green-600"
//                   : "text-black hover:text-green-600"
//               }`}
//             >
//               {link.label}
//             </Link>
//           ))}
//         </nav>

//         <div className="flex items-center gap-4">
//           <div className="md:hidden">
//             <button
//               onClick={toggleMenu}
//               type="button"
//               className="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500"
//               aria-label="toggle menu"
//             >
//               <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
//                 <path
//                   fillRule="evenodd"
//                   d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
//                 ></path>
//               </svg>
//             </button>
//           </div>

//           <div className="text-gray-700 text-2xl font-semibold">
//             <Image
//               src={im}
//               width={100}
//               height={100}
//               quality={80}
//               alt="Logo"
//               className="object-contain"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isMenuOpen && (
//         <nav className="md:hidden px-8 py-4 bg-white flex flex-col space-y-2 mt-4">
//           <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-all">
//             {t("start_now")}
//           </button>
//           {[
//             // { href: "/", label: t("home") },
//             // { href: "/landing", label: "offer" },
//             // { href: "#", label: t("about_us") },
//             // { href: "#", label: t("solutions") },
//             // { href: "/pricing", label: t("packages") },
//             // { href: "#", label: t("articles") },
//             // { href: "#", label: t("contact_us") },
//             { href: "/", label: t("home") },
//             { href: "/about", label: t("about_us") },
//             { href: "/services", label: t("solutions") },
//             { href: "/pricing", label: t("packages") },
//             { href: "/blogs", label: t("articles") },
//             { href: "/contacts", label: t("contact_us") },
//           ].map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               // href=""
//               className={`${
//                 activeLink === link.href
//                   ? "text-green-600"
//                   : "text-gray-600 hover:text-green-600"
//               }`}
//               onClick={() => {
//                 setIsMenuOpen(false);
//               }}
//             >
//               {link.label}
//             </Link>
//           ))}
//         </nav>
//       )}
//     </header>
//   );
// }

// export default Header;

"use client";
import React, { useState, useEffect } from "react";
import im from "@/public/auth-logo.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useLocale } from "../layout";
import { usePathname } from "next/navigation";
import Flag from "react-world-flags";
function Header() {
  const { currentLocale, setLocale } = useLocale();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const t = useTranslations("home");
  const pathname = usePathname();
  // console.log(pathname);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const updateLanguage = (newLanguage: string) => {
    setLocale(newLanguage);
  };

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setActiveLink(pathname);
    }
  }, [pathname]);

  return (
    <header
      className={`bg-white shadow-lg py-2 z-50 fixed top-6 left-0 right-0 border ${
        isMenuOpen
          ? "rounded-none md:rounded-l-full md:rounded-r-full md:mx-8"
          : "md:mx-8 rounded-l-full rounded-r-full"
      }`}
    >
      <div className="container mx-auto px-4 py-1 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {!isMenuOpen && (
            <button className="bg-primary-20 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-all hidden lg:block">
              {t("start_now")}
            </button>
          )}
          {currentLocale === "en" ? (
            <button
              onClick={() => updateLanguage("ar")}
              className="text-black hover:underline flex items-center gap-2"
            >
              <Flag code="SA" style={{ width: "16px", height: "14px" }} />
              {t("arabic")}
            </button>
          ) : (
            <button
              onClick={() => updateLanguage("en")}
              className="text-black hover:underline flex items-center gap-2"
            >
              <Flag code="US" style={{ width: "16px", height: "14px" }} />
              {t("english")}
            </button>
          )}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center gap-4 lg:gap-10">
          {[
            { href: "/", label: t("home") },
            { href: "/about", label: t("about_us") },
            {
              href: "#",
              label: t("solutions"),
              dropdown: true,
            },
            { href: "/pricing", label: t("packages") },
            { href: "/blogs", label: t("articles") },
            { href: "/contacts", label: t("contact_us") },
          ].map((link) => (
            <div key={link.href} className="relative">
              <Link
                href={link.href}
                className={`${
                  activeLink === link.href
                    ? "text-primary-20"
                    : "text-primary-30 hover:text-primary-20"
                } ${link.dropdown ? "cursor-pointer" : ""}`}
                onClick={() => link.dropdown && toggleDropdown("solutions")}
              >
                {link.label}
              </Link>
              {link.dropdown && openDropdown === "solutions" && (
                <div className="absolute z-10 bg-white shadow-lg rounded-lg mt-2 py-2 w-48">
                  <Link
                    href="/services"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    onClick={() => setOpenDropdown(null)}
                  >
                    {t("pos_solutions")}
                  </Link>
                  <Link
                    href="/services2"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    onClick={() => setOpenDropdown(null)}
                  >
                    {t("payment_solutions")}
                  </Link>
                  <Link
                    href="/servicesAI"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    onClick={() => setOpenDropdown(null)}
                  >
                    {t("sales_solutions")}
                  </Link>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="text-gray-700 text-2xl font-semibold">
            <Image
              src={im}
              width={100}
              height={100}
              quality={80}
              alt="Logo"
              className="object-contain"
            />
          </div>
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
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden px-8 py-4 bg-white flex flex-col space-y-2 mt-4">
          <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-all">
            {t("start_now")}
          </button>
          {[
            { href: "/", label: t("home") },
            { href: "/about", label: t("about_us") },
            {
              href: "#",
              label: t("solutions"),
              dropdown: true,
            },
            { href: "/pricing", label: t("packages") },
            { href: "/blogs", label: t("articles") },
            { href: "/contacts", label: t("contact_us") },
          ].map((link) => (
            <div key={link.href} className="flex flex-col">
              <Link
                href={link.href}
                className={`${
                  activeLink === link.href
                    ? "text-primary-20"
                    : "text-primary-30 hover:text-primary-20"
                } ${link.dropdown ? "cursor-pointer" : ""}`}
                onClick={() => {
                  if (link.dropdown) {
                    toggleDropdown("solutions");
                  } else {
                    setIsMenuOpen(false);
                  }
                }}
              >
                {link.label}
              </Link>
              {link.dropdown && openDropdown === "solutions" && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link
                    href="/services"
                    className="block text-gray-600 hover:text-green-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t("pos_solutions")}
                  </Link>
                  <Link
                    href="/services2"
                    className="block text-gray-600 hover:text-green-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t("payment_solutions")}
                  </Link>
                  <Link
                    href="/servicesAI"
                    className="block text-gray-600 hover:text-green-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t("sales_solutions")}
                  </Link>
                </div>
              )}
            </div>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Header;
