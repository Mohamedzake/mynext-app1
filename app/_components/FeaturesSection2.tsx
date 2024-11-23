// import Image from "next/image";
// import Link from "next/link";
// import posImage from "@/public/tes.webp";
// import deliveryImage from "@/public/about-2.jpg";
// import { useTranslations } from "next-intl";
// export default function FeaturesSection2() {
//   const t = useTranslations("solutions");
//   return (
//     <section className="bg-white py-16">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-xl text-blue-600 font-semibold mb-2">
//             {t("discover_our_solutions")}
//           </h2>
//           <h1 className="text-4xl font-bold text-gray-800">
//             {t("control_store_payments")}
//           </h1>
//           <p className="text-gray-500 max-w-2xl mx-auto mt-4">
//             {t("dummy_text")}
//           </p>
//         </div>{" "}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
//           <div>
//             <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 mb-6 bg-slate-100">
//               <Image
//                 src={posImage}
//                 alt="حلول نقاط البيع"
//                 className="rounded-lg"
//                 layout="fill"
//                 objectFit="cover"
//               />
//             </div>
//           </div>

//           <div className="bg-white rounded-lg p-6 sm:p-8 md:p-10 flex flex-col justify-center items-end text-right">
//             <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary-20 mb-4">
//               {t("vision")}
//             </h3>
//             <p className="text-black text-2xl sm:text-base lg:text-2xl font-bold mb-6">
//               {t("leadership_in_technology")}
//             </p>
//           </div>
//         </div>
//         {/* ////////////// */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
//           <div className="bg-white rounded-lg p-6 sm:p-8 md:p-10 flex flex-col justify-center items-end text-right order-2 lg:order-1">
//             <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary-20 mb-4">
//               {t("vision")}
//             </h3>
//             <p className="text-black text-2xl sm:text-base lg:text-2xl font-bold mb-6">
//               {t("leadership_in_technology")}
//             </p>
//           </div>
//           <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 mb-6 order-1 lg:order-2">
//             <Image
//               src={posImage}
//               alt="حلول نقاط البيع"
//               className="rounded-lg"
//               layout="fill"
//               objectFit="cover"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// import React from "react";
// import posImage from "@/public/tes.webp";
// import Image from "next/image";
// const FeaturesSection2: React.FC = () => {
//   return (
//     <section className="bg-white py-16">
//       <div className="container mx-auto px-4">
//         {/* Heading Section */}
//         <div className="text-center mb-12">
//           <h2 className="text-blue-600 text-lg font-semibold">ميزات حصرية</h2>
//           <h1 className="text-4xl font-bold text-gray-900 mt-2">
//             عزز تجارتك مع مزايا ماي كاش
//           </h1>
//           <p className="text-gray-500 mt-4">
//             عزز أداء عملك باستخدام الميزات المتقدمة التي يوفرها تطبيق My Cash
//           </p>
//         </div>

//         {/* Feature Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Feature Content */}
//           <div className="lg:order-1 flex flex-col justify-center">
//             <div className="text-green-600 text-3xl font-bold mb-4">01</div>
//             <h3 className="text-2xl font-semibold text-gray-900 mb-4">
//               إمكانية الوصول للنظام من أي جهاز
//             </h3>
//             <p className="text-gray-600 mb-6">
//               يمكنك الوصول إلى النظام من أي جهاز بكل سهولة سواء كنت تستخدم
//               الهاتف، الكمبيوتر اللوحي أو الكمبيوتر الشخصي. يمكنك متابعة أعمالك
//               وإدارة مبيعاتك ومخزونك في أي وقت ومن أي مكان.
//             </p>
//             <button className="bg-green-500 text-white rounded-full px-6 py-3 font-medium hover:bg-green-600 transition duration-300">
//               احصل على نسختك التجريبية
//             </button>
//           </div>

//           {/* Feature Image */}
//           <div className="lg:order-2 flex justify-center">
//             <div className="relative w-full max-w-md">
//               <Image
//                 src={posImage}
//                 alt="Mobile View"
//                 className="absolute top-0 left-0 transform translate-x-[-50%] w-1/2"
//               />
//               <Image
//                 src={posImage}
//                 alt="Desktop View"
//                 className="relative w-full"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturesSection2;
import React from "react";
import Image from "next/image";
import posImage from "@/public/div.relative.png";

const FeaturesSection2: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-8">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h2 className="text-blue-600 text-2xl font-semibold">ميزات حصرية</h2>
          <h1 className="text-6xl font-bold text-gray-900 mt-2">
            عزز تجارتك مع مزايا ماي كاش
          </h1>
          <p className="text-gray-500 mt-4">
            My Cash عزز أداء عملك باستخدام الميزات المتقدمة التي يوفرها تطبيق
          </p>
        </div>
        {/* Feature Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-14">
          {/* Feature Content */}
          <div className="flex flex-col justify-center items-end p-8">
            <div className="text-primary-20 text-4xl font-bold mb-4">01</div>
            <h3 className="text-3xl font-semibold text-gray-900 mb-4">
              إمكانية الوصول للنظام من أي جهاز
            </h3>
            <p className="text-gray-600 mb-6 text-end">
              يمكنك الوصول إلى النظام من أي جهاز بكل سهولة سواء كنت تستخدم
              الهاتف، الكمبيوتر اللوحي أو الكمبيوتر الشخصي. يمكنك متابعة أعمالك
              وإدارة مبيعاتك ومخزونك في أي وقت ومن أي مكان.
            </p>
            <button className="bg-primary-20 text-white rounded-full px-6 py-3 font-medium hover:bg-green-600 transition duration-300">
              احصل على نسختك التجريبية
            </button>
          </div>

          {/* Feature Image */}
          <div className="flex justify-center items-center bg-slate-100 rounded-2xl">
            <div className="relative w-full max-w-2xl">
              <Image
                src={posImage}
                alt="System View"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
        {/* two */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-14">
          {/* Feature Image */}
          <div className="flex justify-center items-center bg-slate-100 rounded-2xl">
            <div className="relative w-full max-w-2xl">
              <Image
                src={posImage}
                alt="System View"
                className="w-full h-auto"
              />
            </div>
          </div>
          {/* Feature Content */}
          <div className="flex flex-col justify-center items-end p-8">
            <div className="text-primary-20 text-4xl font-bold mb-4">01</div>
            <h3 className="text-3xl font-semibold text-gray-900 mb-4">
              إمكانية الوصول للنظام من أي جهاز
            </h3>
            <p className="text-gray-600 mb-6 text-end">
              يمكنك الوصول إلى النظام من أي جهاز بكل سهولة سواء كنت تستخدم
              الهاتف، الكمبيوتر اللوحي أو الكمبيوتر الشخصي. يمكنك متابعة أعمالك
              وإدارة مبيعاتك ومخزونك في أي وقت ومن أي مكان.
            </p>
            <button className="bg-primary-20 text-white rounded-full px-6 py-3 font-medium hover:bg-green-600 transition duration-300">
              احصل على نسختك التجريبية
            </button>
          </div>
        </div>
        {/* three */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-14">
          {/* Feature Content */}
          <div className="flex flex-col justify-center items-end p-8">
            <div className="text-primary-20 text-4xl font-bold mb-4">01</div>
            <h3 className="text-3xl font-semibold text-gray-900 mb-4">
              إمكانية الوصول للنظام من أي جهاز
            </h3>
            <p className="text-gray-600 mb-6 text-end">
              يمكنك الوصول إلى النظام من أي جهاز بكل سهولة سواء كنت تستخدم
              الهاتف، الكمبيوتر اللوحي أو الكمبيوتر الشخصي. يمكنك متابعة أعمالك
              وإدارة مبيعاتك ومخزونك في أي وقت ومن أي مكان.
            </p>
            <button className="bg-primary-20 text-white rounded-full px-6 py-3 font-medium hover:bg-green-600 transition duration-300">
              احصل على نسختك التجريبية
            </button>
          </div>

          {/* Feature Image */}
          <div className="flex justify-center items-center bg-slate-100 rounded-2xl">
            <div className="relative w-full max-w-2xl">
              <Image
                src={posImage}
                alt="System View"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection2;
