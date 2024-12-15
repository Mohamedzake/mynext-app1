// import React from "react";
// import Image from "next/image";
// import { useTranslations } from "next-intl";
// import imgbg from "@/public/small-r.jpeg";
// import small1 from "@/public/small1.png";
// import bg from "@/public/bg-half.png";

// function AboutSection() {
//   const t = useTranslations("aboutSection");

//   return (
//     <section className="relative bg-primary-30 h-auto" dir="ltr">
//       <div className="absolute hidden lg:block bg-primary-30 inset-0">
//         <Image
//           src={bg}
//           layout="fill"
//           placeholder="blur"
//           quality={80}
//           className="object-cover bg-primary-30"
//           alt={t("bgAlt")}
//         />
//       </div>
//       {/* Content Section */}
//       <div className="relative mx-auto flex flex-col-reverse lg:flex-row items-center justify-between lg:h-[78vh]">
//         {/* Text Section */}
//         <div className="w-full lg:w-1/2 text-center lg:text-right z-50 text-black flex flex-col justify-center lg:py-24 py-10 px-6 sm:px-10 bg-white rounded-b-full lg:rounded-br-none lg:rounded-l-full order-2 lg:order-2">
//           <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4">
//             {t("title")}
//           </h2>
//           <p className="text-lg sm:text-xl lg:text-1xl mb-6 leading-relaxed">
//             {t("description")}
//           </p>

//           <div className="flex flex-col mr-7 lg:mr-0 gap-4 mb-8">
//             <div className="flex items-center justify-end gap-4 text-end sm:text-end">
//               <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed">
//                 {t("feature1")}
//               </p>
//               <div className="w-4 h-4 rounded-full bg-green-500"></div>
//             </div>
//             <div className="flex items-center justify-end gap-4 text-end sm:text-start">
//               <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed">
//                 {t("feature2")}
//               </p>
//               <div className="w-4 h-4 rounded-full bg-green-500"></div>
//             </div>
//             <div className="flex items-center justify-end gap-4 text-end sm:text-start">
//               <p className="text-lg sm:text-xl lg:text-2xl font-bold leading-relaxed">
//                 {t("feature3")}
//               </p>
//               <div className="w-4 h-4 rounded-full bg-green-500"></div>
//             </div>
//           </div>

//           <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-end gap-4">
//             <a className="border border-primary-20 text-primary-20 font-bold text-lg px-4 py-2 rounded-full hover:bg-green-50 transition w-56 lg:w-auto text-center">
//               {t("learnMore")}
//             </a>
//             <a className="bg-primary-20 text-lg text-white px-4 py-2 rounded-full hover:bg-green-700 transition w-56 lg:w-auto text-center">
//               {t("getTrial")}
//             </a>
//           </div>
//         </div>
//         <div></div>
//         {/* Background Image */}
//         <div className="w-full bg-primary-30 block lg:hidden lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-full relative order-1 lg:order-1">
//           <Image
//             src={small1}
//             placeholder="blur"
//             quality={80}
//             layout="fill"
//             alt={t("bgAlt")}
//             className="bg-primary-30"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default AboutSection;
////
////
//////
// import React from "react";
// import Image from "next/image";
// import { useTranslations } from "next-intl";
// import imgbg from "@/public/small-r.jpeg";
// import small1 from "@/public/small1.png";
// import bg from "@/public/bg-half.png";
// import { useLocale } from "../layout";

// function AboutSection() {
//   const { currentLocale } = useLocale();
//   console.log(currentLocale);
//   const t = useTranslations("aboutSection");

//   return (
//     <section className="relative bg-primary-30 h-auto">
//       <div className="absolute hidden lg:block bg-primary-30 inset-0">
//         <Image
//           src={bg}
//           layout="fill"
//           placeholder="blur"
//           quality={80}
//           className={`object-cover bg-primary-30 ${
//             currentLocale === "en" ? "transform scale-x-[-1]" : ""
//           }`}
//           alt={t("bgAlt")}
//         />
//       </div>

//       {/* Content Section */}
//       <div className="relative mx-auto flex flex-col-reverse lg:flex-row items-center justify-between lg:h-[78vh]">
//         {/* Text Section */}
//         <div
//           className={`w-full lg:w-1/2 text-center lg:text-right z-40 text-black flex flex-col justify-center lg:py-24 py-10 px-2 sm:px-10
//          bg-white ${
//            currentLocale === "ar"
//              ? "rounded-b-full lg:rounded-br-none lg:rounded-l-full"
//              : "rounded-b-full lg:rounded-bl-none lg:rounded-r-full"
//          } order-2 lg:order-2`}
//         >
//           <div className="flex flex-col justify-center lg:justify-end items-center lg:items-end text-center lg:text-end">
//             <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4">
//               {t("title")}
//             </h2>
//             <p className="text-lg sm:text-xl lg:text-1xl mb-6 leading-relaxed">
//               {t("description")}
//             </p>
//           </div>
//           <div className="flex flex-col mx-10 md:mx-16 lg:mx-0 gap-4 mb-8">
//             <div className="flex items-center justify-end gap-4 text-end sm:text-end">
//               <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed">
//                 {t("feature1")}
//               </p>
//               <div className="w-4 h-4 rounded-full bg-green-500"></div>
//             </div>
//             <div className="flex items-center justify-end gap-4 text-end sm:text-start">
//               <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed">
//                 {t("feature2")}
//               </p>
//               <div className="w-4 h-4 rounded-full bg-green-500"></div>
//             </div>
//             <div className="flex items-center justify-end gap-4 text-end sm:text-start">
//               <p className="text-lg sm:text-xl lg:text-2xl font-bold leading-relaxed">
//                 {t("feature3")}
//               </p>
//               <div className="w-4 h-4 rounded-full bg-green-500"></div>
//             </div>
//           </div>

//           <div className="flex flex-row sm:w-full sm:flex-col lg:flex-row justify-center items-center lg:justify-end gap-2 sm:gap-4 mb-6">
//             <a className="border border-primary-20 text-primary-20 font-bold text-lg px-2 sm:px-4 py-2 rounded-full hover:bg-green-50 transition  w-32 sm:w-60 lg:w-auto text-center">
//               {t("learnMore")}
//             </a>
//             <a className="bg-primary-20 hidden md:block text-lg text-white px-4 py-2 rounded-full hover:bg-green-700 transition w-32 sm:w-60 lg:w-auto text-center">
//               {t("getTrial")}
//             </a>
//             <a className="bg-primary-20 block md:hidden text-lg text-white px-4 py-2 rounded-full hover:bg-green-700 transition w-32 sm:w-56 lg:w-auto text-center">
//               {t("get_your_trial1")}
//             </a>
//           </div>
//         </div>
//         <div></div>
//         {/* Background Image */}
//         <div className="w-full bg-primary-30 block lg:hidden lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-full relative order-1 lg:order-1">
//           <Image
//             src={small1}
//             placeholder="blur"
//             quality={80}
//             layout="fill"
//             alt={t("bgAlt")}
//             className="bg-primary-30"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default AboutSection;
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import imgbg from "@/public/small-r.jpeg";
import small1 from "@/public/small1.png";
// import bg from "@/public/bg-half.png";
import bg from "@/public/Test1-01.png";
import bg1 from "@/public/Test2-03.png";

import { useLocale } from "../layout";

function AboutSection() {
  const { currentLocale } = useLocale();
  console.log(currentLocale);
  const t = useTranslations("aboutSection");

  return (
    <section className="relative bg-primary-30 h-auto">
      <div className="absolute hidden lg:block bg-primary-30 inset-0">
        <Image
          src={bg}
          layout="fill"
          placeholder="blur"
          quality={80}
          className={`object-cover bg-primary-30 ${
            currentLocale === "en" ? "transform scale-x-[-1]" : ""
          }`}
          alt={t("bgAlt")}
        />
      </div>
      <div className="absolute block lg:hidden bg-primary-30 inset-0">
        <Image
          src={bg1}
          layout="fill"
          placeholder="blur"
          quality={80}
          className={`object-cover bg-primary-30 ${
            currentLocale === "en" ? "transform scale-x-[-1]" : ""
          }`}
          alt={t("bgAlt")}
        />
      </div>

      {/* Content Section */}
      <div className="relative mx-auto flex flex-col-reverse lg:flex-row items-center justify-between lg:h-[78vh]">
        {/* Text Section */}
        <div
          className={`w-full lg:w-1/2 text-center lg:text-right z-40 text-black flex flex-col justify-center lg:py-24 py-10 px-2 sm:px-10
         order-2 lg:order-2`}
        >
          <div className="flex flex-col justify-center lg:justify-end items-center lg:items-end text-center lg:text-end">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4">
              {t("title")}
            </h2>
            <p
              className={`text-lg sm:text-xl lg:text-lg ${
                currentLocale === "en" ? "pr-14" : "pl-14"
              }  mb-6 leading-relaxed`}
            >
              {t("description")}
            </p>
          </div>
          <div className="flex flex-col mx-10 md:mx-16 lg:mx-0 gap-4 mb-8">
            <div className="flex items-center justify-end gap-4 text-end sm:text-end">
              <p className="text-lg sm:text-xl lg:text-lg leading-relaxed">
                {t("feature1")}
              </p>
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
            </div>
            <div className="flex items-center justify-end gap-4 text-end sm:text-start">
              <p className="text-lg sm:text-xl lg:text-lg leading-relaxed">
                {t("feature2")}
              </p>
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
            </div>
            <div className="flex items-center justify-end gap-4 text-end sm:text-start">
              <p className="text-lg sm:text-xl lg:text-lg leading-relaxed">
                {t("feature3")}
              </p>
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
            </div>
          </div>

          <div className="flex flex-row sm:w-full sm:flex-col lg:flex-row justify-center items-center lg:justify-end gap-2 sm:gap-4 mb-6">
            <a className="border border-primary-20 text-primary-20 font-bold text-lg px-2 sm:px-4 py-2 rounded-full hover:bg-green-50 transition  w-32 sm:w-60 lg:w-auto text-center">
              {t("learnMore")}
            </a>
            <a className="bg-primary-20 hidden md:block text-lg text-white px-4 py-2 rounded-full hover:bg-green-700 transition w-32 sm:w-60 lg:w-auto text-center">
              {t("getTrial")}
            </a>
            <a className="bg-primary-20 block md:hidden text-lg text-white px-4 py-2 rounded-full hover:bg-green-700 transition w-32 sm:w-56 lg:w-auto text-center">
              {t("get_your_trial1")}
            </a>
          </div>
        </div>
        <div></div>
        {/* Background Image */}
        <div className="w-full bg-primary-30  lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-full relative order-1 lg:order-1">
          <Image
            src={small1}
            placeholder="blur"
            quality={80}
            layout="fill"
            alt={t("bgAlt")}
            className="bg-primary-30"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
