// "use client";

// import Header from "@/app/_components/Header";
// import Image from "next/image";
// import { useTranslations } from "next-intl";
// import { FiPlayCircle } from "react-icons/fi";
// import Contact from "@/app/_components/Contact";
// import WhyChooseMyCash from "@/app/_components/WhyChooseMyCash";
// import WhyChooseMyCash2 from "@/app/_components/WhyChooseMyCash2";
// import CompanyLogos from "@/app/_components/CompanyLogos";
// import Footer from "@/app/_components/Footer";
// import bg from "@/public/bg.png";

// export default function Home() {
//   const t = useTranslations("landing");

//   return (
//     <div>
//       <main className="relative pt-8">
//         <div className="absolute inset-0">
//           <Image
//             src={bg}
//             layout="fill"
//             placeholder="blur"
//             quality={80}
//             className="object-cover"
//             alt={t("header_title")}
//           />
//         </div>
//         <Header />
//         <div className="flex flex-col items-center justify-center bg-gray-100">
//           {/* Watch Video Section */}
//           <div className="flex flex-col items-center mb-20 mt-28 z-50">
//             <FiPlayCircle className="text-5xl text-primary-10 mb-2" />
//             <p className="text-xl font-medium text-primary-10">
//               {t("watch_video")}
//             </p>
//           </div>

//           {/* Form Container */}
//           <div className="bg-white border p-8 rounded-2xl shadow-lg lg:w-10/12 w-11/12 z-40">
//             <h2 className="text-2xl text-end font-semibold text-gray-700 mb-4">
//               {t("header_title")}
//             </h2>
//             <form className="flex flex-col">
//               <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
//                 {/* Email */}
//                 <input
//                   type="email"
//                   placeholder={t("email_placeholder")}
//                   className="p-4 text-end text-xl border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
//                 />
//                 {/* Last Name */}
//                 <input
//                   type="text"
//                   placeholder={t("last_name_placeholder")}
//                   className="p-4 text-end text-xl border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
//                 />
//                 {/* First Name */}
//                 <input
//                   type="text"
//                   placeholder={t("first_name_placeholder")}
//                   className="p-4 text-end text-xl border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
//                 />
//                 {/* Number of Branches */}
//                 <select className="p-4 text-gray-400 text-xl text-end border bg-white border-gray-300 rounded-full focus:outline-none focus:border-blue-500">
//                   <option>{t("branch_count")}</option>
//                   <option value="1">{t("branch_1")}</option>
//                   <option value="2">{t("branch_2")}</option>
//                   <option value="3">{t("branch_3")}</option>
//                   <option value="4">{t("branch_4")}</option>
//                   <option value="5+">{t("branch_5+")}</option>
//                 </select>
//                 {/* Company Name */}
//                 <input
//                   type="text"
//                   placeholder={t("company_placeholder")}
//                   className="p-4 text-end text-xl border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
//                 />
//                 {/* Phone Number */}
//                 <input
//                   type="tel"
//                   placeholder={t("phone_placeholder")}
//                   className="p-4 text-end text-xl border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
//                 />
//               </div>
//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className="col-span-2 text-xl bg-primary-20 text-white py-3 rounded-full font-semibold hover:bg-green-600 transition duration-300"
//               >
//                 {t("submit_button")}
//               </button>
//             </form>
//           </div>
//         </div>
//         <section className="flex flex-col lg:flex-row items-center justify-between p-8 bg-primary-10 mx-auto"></section>
//       </main>
//       <CompanyLogos />
//       <WhyChooseMyCash />
//       <WhyChooseMyCash2 />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// "use client";

// import Header from "@/app/_components/Header";
// import Image from "next/image";
// import Link from "next/link";
// // import img from "@/public/pos_img.jpg";
// import img from "@/public/landing-page.jpeg";
// import Footer from "@/app/_components/Footer";
// import { useTranslations } from "next-intl";

// import Contact from "@/app/_components/Contact";
// import WhyChooseMyCash from "@/app/_components/WhyChooseMyCash";
// import WhyChooseMyCash2 from "@/app/_components/WhyChooseMyCash2";

// export default function Home() {
//   const t = useTranslations("home");

//   return (
//     <div>
//       <main className="relative pt-8 h-auto">
//         <Header />
//         <section className="flex flex-col lg:flex-row items-center justify-between p-10 bg-primary-10 rounded-lg shadow-md mx-auto">
//           {/* Form Section */}
//           <div className="bg-gray-50 p-8 rounded-lg shadow-lg lg:w-5/12 w-full mb-8 lg:mb-0">
//             <h2 className="text-lg font-semibold text-gray-700 mb-4 text-center lg:text-right">
//               احصل اليوم على تطبيق ماي كاش: الحل الذكي لإدارة المبيعات والدفع
//               بكل سهولة
//             </h2>
//             <form className="space-y-4">
//               <input
//                 type="text"
//                 placeholder="الاسم الاول"
//                 className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//               />
//               <input
//                 type="text"
//                 placeholder="الاسم الثاني"
//                 className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//               />
//               <input
//                 type="email"
//                 placeholder="البريد الإلكتروني"
//                 className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//               />
//               <input
//                 type="tel"
//                 placeholder="رقم الهاتف"
//                 className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//               />
//               <input
//                 type="text"
//                 placeholder="اسم الشركة"
//                 className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//               />
//               <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
//                 <option>كم عدد الفروع؟</option>
//                 {/* Add more options as needed */}
//               </select>
//               <button
//                 type="submit"
//                 className="w-full bg-green-500 text-white py-3 rounded-md font-semibold hover:bg-green-600 transition duration-300"
//               >
//                 إرسال
//               </button>
//             </form>
//           </div>

//           {/* Image Section */}
//           <div className="relative lg:w-7/12 w-full flex justify-center lg:justify-end p-10">
//             <Image
//               src={img}
//               alt="MyCash Illustration"
//               className="rounded-lg object-cover w-3/4 lg:w-full shadow-lg"
//             />
//           </div>
//         </section>
//       </main>
//       <WhyChooseMyCash />
//       <WhyChooseMyCash2 />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }
// "use client";

// import Header from "@/app/_components/Header";
// import Image from "next/image";
// import Footer from "@/app/_components/Footer";
// import Contact from "@/app/_components/Contact";
// import WhyChooseMyCash from "@/app/_components/WhyChooseMyCash";
// import WhyChooseMyCash2 from "@/app/_components/WhyChooseMyCash2";
// import { useTranslations } from "next-intl";

// import img from "@/public/landing-page.jpeg";
// import CompanyLogos from "../_components/CompanyLogos";

// export default function Home() {
//   const t = useTranslations("home");

//   return (
//     <div>
//       <main className="relative pt-8 h-auto">
//         <Header />

//         <section className="flex flex-col lg:flex-row items-center justify-between px-2 sm:px-10 py-10 bg-primary-10 rounded-lg mx-auto">
//           {/* Form Section */}
//           <div className="bg-gray-50 p-2 sm:p-8 mt-10 rounded-lg shadow-lg lg:w-5/12 w-full mb-8 lg:mb-0">
//             <h2 className="text-lg font-semibold text-gray-700 mb-4 text-center lg:text-right">
//               احصل اليوم على تطبيق ماي كاش: الحل الذكي لإدارة المبيعات والدفع
//               بكل سهولة
//             </h2>
//             <form
//               className="space-y-4"
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 alert("Form Submitted!");
//               }}
//             >
//               <input
//                 type="text"
//                 placeholder="الاسم"
//                 required
//                 className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//               />
//               <input
//                 type="tel"
//                 placeholder="رقم الهاتف"
//                 required
//                 className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//               />
//               <textarea
//                 placeholder="الرسالة"
//                 required
//                 rows={4}
//                 className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 resize-none"
//               ></textarea>
//               <button
//                 type="submit"
//                 className="w-full bg-primary-20 text-white py-3 rounded-full font-semibold hover:bg-green-600 transition duration-300"
//               >
//                 إرسال
//               </button>
//             </form>
//           </div>

//           {/* Image Section */}
//           <div className="relative lg:w-7/12 w-full flex justify-center lg:justify-end p-0 lg:p-10">
//             <Image
//               src={img}
//               alt="MyCash Illustration"
//               className="rounded-lg object-cover w-full shadow-lg"
//             />
//           </div>
//         </section>
//       </main>
//       <CompanyLogos />
//       <WhyChooseMyCash />
//       <WhyChooseMyCash2 />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

"use client";

import Header from "@/app/_components/Header";
import Image from "next/image";
import Footer from "@/app/_components/Footer";
import Contact from "@/app/_components/Contact";
import WhyChooseMyCash from "@/app/_components/WhyChooseMyCash";
import WhyChooseMyCash2 from "@/app/_components/WhyChooseMyCash2";
import { useTranslations } from "next-intl";

import img from "@/public/landing-page.jpeg";
import CompanyLogos from "../_components/CompanyLogos";
import Froms from "../_components/Froms";
import FeaturesLanding from "../_components/FeaturesLanding";
import CompanyLogosright from "../_components/CompanyLogos3";
import CompanyLogos2 from "../_components/CompanyLogos2";
import CompanyLogos3 from "../_components/CompanyLogos3";
export default function Home() {
  const t = useTranslations("landing2");

  return (
    <div>
      <main className="relative pt-8 h-auto">
        <Header />

        <div className="bg-slate-50 py-24">
          <header className="text-center py-8">
            <h1 className="text-2xl font-bold text-blue-900">
              احصل اليوم على تطبيق ماي كاش
            </h1>
            <p className="text-gray-700 text-lg">
              الحل الذكي لإدارة المبيعات والمدفوعات بكل سهولة
            </p>
          </header>

          <main className="max-w-6xl mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/hero.jpeg"
                  alt="Image 1"
                  className="rounded-lg shadow-md h-full object-cover"
                  width={300}
                  height={500}
                />
                <Image
                  src="/hero.jpeg"
                  alt="Image 2"
                  className="rounded-lg shadow-md h-full object-cover"
                  width={300}
                  height={500}
                />
                <Image
                  src="/hero.jpeg"
                  alt="Image 3"
                  className="rounded-lg shadow-md h-full object-cover"
                  width={300}
                  height={500}
                />
                <Image
                  src="/hero.jpeg"
                  alt="Image 4"
                  className="rounded-lg shadow-md h-full object-cover"
                  width={300}
                  height={500}
                />
              </div>
              <Froms />
            </div>
          </main>
        </div>

        {/* <section className="flex flex-col lg:flex-row items-center justify-between px-2 sm:px-10 py-10 bg-primary-10 rounded-lg mx-auto">
        
          <div className="bg-gray-50 p-2 sm:p-8 mt-10 rounded-lg shadow-lg lg:w-5/12 w-full mb-8 lg:mb-0">
            <h2 className="text-lg font-semibold text-gray-700 mb-4 text-center lg:text-right">
              {t("formHeader")}
            </h2>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert(t("formSubmitted"));
              }}
            >
              <input
                type="text"
                placeholder={t("formNamePlaceholder")}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              <input
                // type="tel"
                type="text"
                placeholder={t("formPhonePlaceholder")}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              <textarea
                placeholder={t("formMessagePlaceholder")}
                required
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-primary-20 text-white py-3 rounded-full font-semibold hover:bg-green-600 transition duration-300"
              >
                {t("formSubmitButton")}
              </button>
            </form>
          </div>

        
          <div className="relative lg:w-7/12 w-full flex justify-center lg:justify-end p-0 lg:p-10">
            <Image
              src={img}
              alt={t("imageAltText")}
              className="rounded-lg object-cover w-full shadow-lg"
            />
          </div>
        </section> */}
      </main>

      <FeaturesLanding />
      <div className=" flex justify-center items-center flex-col">
        <CompanyLogos />
        <CompanyLogos2 />
        <CompanyLogos3 />
      </div>

      <Contact />
      <Footer />
    </div>
  );
}
