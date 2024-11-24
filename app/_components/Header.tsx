// "use client";
// import React, { useState, useEffect } from "react";
// import im from "@/public/auth-logo.svg";
// import Image from "next/image";
// import { useTranslations } from "next-intl";
// import Link from "next/link";
// function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [currentLocale, setCurrentLocale] = useState();
//   const t = useTranslations("home");

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   /////////////////////////////
//   const updateLanguage = (newLanguage: string) => {
//     localStorage.setItem(
//       "userPreferences",
//       JSON.stringify({ language: newLanguage })
//     );
//     window.location.reload();
//   };

//   ///////////////////////////////

//   useEffect(() => {
//     const storedPrefs = localStorage.getItem("userPreferences");
//     if (storedPrefs) {
//       const { language } = JSON.parse(storedPrefs);
//       setCurrentLocale(language);
//     }
//   }, [setCurrentLocale]);
//   console.log(currentLocale);
//   return (
//     <header
//       className={`bg-white shadow-lg py-2 z-10 relative ${
//         isMenuOpen ? "rounded-none" : "md:mx-8 rounded-l-full rounded-r-full"
//       }`}
//     >
//       <div className="container mx-auto px-6 py-1 flex items-center justify-between">
//         <div className="flex items-center space-x-4">
//           {!isMenuOpen && (
//             <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-all hidden sm:block">
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

//         <nav className="hidden md:flex md:items-center space-x-6">
//           <Link className="text-gray-600 hover:underline" href="/contacts">
//             {t("contact_us")}
//           </Link>
//           <Link className="text-gray-600 hover:underline" href="/blogs">
//             {t("articles")}
//           </Link>
//           <Link className="text-gray-600 hover:underline" href="/pricing">
//             {t("packages")}
//           </Link>
//           <Link className="text-gray-600 hover:underline" href="/services">
//             {t("solutions")}
//           </Link>
//           <Link className="text-gray-600 hover:underline" href="/about">
//             {t("about_us")}
//           </Link>
//           <Link className="text-gray-600 hover:underline" href="/">
//             {t("home")}
//           </Link>
//         </nav>

//         <div className="flex items-center space-x-4">
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

//       {isMenuOpen && (
//         <nav className="md:hidden px-8 py-4 bg-white   flex flex-col space-y-2 mt-4">
//           <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-all">
//             {t("start_now")}
//           </button>
//           <Link className="text-gray-600 hover:underline" href="/contacts">
//             {t("contact_us")}
//           </Link>
//           <Link className="text-gray-600 hover:underline" href="/blogs">
//             {t("articles")}
//           </Link>
//           <Link className="text-gray-600 hover:underline" href="/pricing">
//             {t("packages")}
//           </Link>
//           <Link className="text-gray-600 hover:underline" href="/services">
//             {t("solutions")}
//           </Link>
//           <Link className="text-gray-600 hover:underline" href="/about">
//             {t("about_us")}
//           </Link>
//           <Link className="text-gray-600 hover:underline" href="/">
//             {t("home")}
//           </Link>
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

// function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [currentLocale, setCurrentLocale] = useState();
//   const [activeLink, setActiveLink] = useState<string | null>(null);
//   const t = useTranslations("home");

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   /////////////////////////////
//   const updateLanguage = (newLanguage: string) => {
//     localStorage.setItem(
//       "userPreferences",
//       JSON.stringify({ language: newLanguage })
//     );
//     window.location.reload();
//   };

//   ///////////////////////////////
//   useEffect(() => {
//     const storedPrefs = localStorage.getItem("userPreferences");
//     if (storedPrefs) {
//       const { language } = JSON.parse(storedPrefs);
//       setCurrentLocale(language);
//     }
//   }, [setCurrentLocale]);

//   // Handle active link styling
//   const handleLinkClick = (link: string) => {
//     setActiveLink(link);
//   };

//   return (
//     <header
//       className={`bg-white shadow-lg py-2 z-10 relative ${
//         isMenuOpen ? "rounded-none" : "md:mx-8 rounded-l-full rounded-r-full"
//       }`}
//     >
//       <div className="container mx-auto px-6 py-1 flex items-center justify-between">
//         <div className="flex items-center space-x-4">
//           {!isMenuOpen && (
//             <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-all hidden sm:block">
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
//         <nav className="hidden md:flex md:items-center space-x-6">
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

//         <div className="flex items-center space-x-4">
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
//               } hover:underline`}
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
"use client";
import React, { useState, useEffect } from "react";
import im from "@/public/auth-logo.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLocale, setCurrentLocale] = useState();
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const t = useTranslations("home");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  /////////////////////////////
  const updateLanguage = (newLanguage: string) => {
    localStorage.setItem(
      "userPreferences",
      JSON.stringify({ language: newLanguage })
    );
    window.location.reload();
  };

  ///////////////////////////////
  useEffect(() => {
    // Retrieve and set the user's language preference
    const storedPrefs = localStorage.getItem("userPreferences");
    if (storedPrefs) {
      const { language } = JSON.parse(storedPrefs);
      setCurrentLocale(language);
    }

    // Retrieve the stored active link from localStorage if it exists
    const storedActiveLink = localStorage.getItem("activeLink");
    if (storedActiveLink) {
      setActiveLink(storedActiveLink);
    }
  }, []);

  // Handle active link styling and persist to localStorage
  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    localStorage.setItem("activeLink", link); // Persist the active link
  };

  return (
    <header
      className={`bg-white shadow-lg py-2 z-10 relative ${
        isMenuOpen ? "rounded-none" : "md:mx-8 rounded-l-full rounded-r-full"
      }`}
    >
      <div className="container mx-auto px-4 py-1 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {!isMenuOpen && (
            <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-all hidden lg:block">
              {t("start_now")}
            </button>
          )}
          {currentLocale === "en" ? (
            <button
              onClick={() => updateLanguage("ar")}
              className="text-gray-600 hover:underline"
            >
              {t("arabic")}
            </button>
          ) : (
            <button
              onClick={() => updateLanguage("en")}
              className="text-gray-600 hover:underline"
            >
              {t("english")}
            </button>
          )}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center gap-4">
          {[
            { href: "/home", label: t("home") },
            { href: "/about", label: t("about_us") },
            { href: "/services", label: t("solutions") },
            { href: "/pricing", label: t("packages") },
            { href: "/blogs", label: t("articles") },
            { href: "/contacts", label: t("contact_us") },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                activeLink === link.href
                  ? "text-green-600"
                  : "text-gray-600 hover:text-green-600"
              } `}
              onClick={() => handleLinkClick(link.href)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
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
              width={100}
              height={100}
              quality={80}
              alt="Logo"
              className="object-contain"
            />
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
            { href: "/services", label: t("solutions") },
            { href: "/pricing", label: t("packages") },
            { href: "/blogs", label: t("articles") },
            { href: "/contacts", label: t("contact_us") },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                activeLink === link.href
                  ? "text-green-600"
                  : "text-gray-600 hover:text-green-600"
              }`}
              onClick={() => {
                handleLinkClick(link.href);
                setIsMenuOpen(false); // Close menu on mobile after click
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Header;
