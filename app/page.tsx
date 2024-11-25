// "use client";

// import Header from "@/app/_components/Header";
// import Image from "next/image";
// import Link from "next/link";
// import img from "@/public/pos_img.jpg";
// import Footer from "@/app/_components/Footer";
// import { useTranslations } from "next-intl";

// import Contact from "@/app/_components/Contact";
// import WhyChooseMyCash from "@/app/_components/WhyChooseMyCash";
// import WhyChooseMyCash2 from "@/app/_components/WhyChooseMyCash2";
// import CompanyLogos from "./_components/CompanyLogos";

// export default function Home() {
//   const t = useTranslations("landing");

//   return (
//     <div>
//       <main className="relative pt-8 h-auto">
//         <Header />
//         <section className="flex flex-col lg:flex-row items-center justify-between p-8 bg-primary-10 mx-auto">
//           {/* Form Section */}
//           <div className="bg-primary-10 border p-8 rounded-2xl shadow-lg lg:w-5/12 w-full mb-8 lg:mb-0">
//             <h2 className="text-2xl text-end font-semibold text-gray-700 mb-4">
//               {t("getApp")}
//             </h2>
//             <form className="space-y-4">
//               <input
//                 type="text"
//                 placeholder={t("firstName")}
//                 className="w-full p-4 text-end text-2xl border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//               />
//               <input
//                 type="text"
//                 placeholder={t("lastName")}
//                 className="w-full p-4 border text-2xl text-end border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//               />
//               <input
//                 type="email"
//                 placeholder={t("email")}
//                 className="w-full p-4 border text-2xl text-end border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//               />
//               <input
//                 type="tel"
//                 placeholder={t("phoneNumber")}
//                 className="w-full p-4 border text-2xl text-end border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//               />
//               <input
//                 type="text"
//                 placeholder={t("companyName")}
//                 className="w-full p-4 border text-2xl text-end border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//               />
//               <select className="w-full p-4 text-2xl text-black text-end border bg-primary-10 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
//                 <option>{t("numberOfBranches")}</option>
//                 {/* Add more options as needed */}
//               </select>
//               <button
//                 type="submit"
//                 className="w-full bg-primary-20 text-white py-3 rounded-full font-semibold hover:bg-green-600 transition duration-300"
//               >
//                 {t("submit")}
//               </button>
//             </form>
//           </div>

//           {/* Image Section */}
//           <div className="relative lg:w-7/12 w-full flex justify-center lg:justify-end p-7">
//             <Image
//               src={img}
//               alt={t("myCashIllustration")}
//               className="rounded-lg object-cover w-3/4 lg:w-full shadow-lg"
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
import Link from "next/link";
import bg from "@/public/bg.png";
import Footer from "@/app/_components/Footer";
import { useTranslations } from "next-intl";
import Solutions from "@/app/_components/Solutions";
import FeaturesSection from "@/app/_components/FeaturesSection";
import FeaturesSection2 from "@/app/_components/FeaturesSection2";
import AboutSection from "@/app/_components/AboutSection";
import Contact from "@/app/_components/Contact";
import PromoSection from "@/app/_components/PromoSection";
import CompanyLogos from "@/app/_components/CompanyLogos";
// import FeaturesSection2 from "@/app/_components/FeaturesSection2";
export default function Home() {
  const t = useTranslations("home");

  return (
    <div>
      <main className="relative pt-8 h-screen">
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
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-8">
          <h1 className="text-6xl text-primary-50 mb-10 tracking-tight font-bold leading-tight">
            حل متكامل لإدارة مبيعاتك <br /> بكفاءة، سلاسة، منهجية
          </h1>
          <p className="text-xl mb-8 max-w-xl text-white">
            نظام ماي كاش صُمم لتحسين إدارة المدفوعات والمبيعات وتسهيل عملياتها
            وفقاً لمعايير احترافية وخبرة عميقة
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="bg-white text-green-600 px-8 py-4 rounded-full hover:bg-gray-100 transition"
            >
              اعرف المزيد
            </Link>
            <Link
              href="#"
              className="bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition"
            >
              احصل على نسختك التجريبية
            </Link>
          </div>
        </div>
      </main>

      <CompanyLogos />
      <Solutions />
      <FeaturesSection />
      <FeaturesSection2 />
      <AboutSection />
      <PromoSection />
      <Contact />
      <Footer />
    </div>
  );
}
