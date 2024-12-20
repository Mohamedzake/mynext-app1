// import React from "react";
// import img from "@/public/product-chain 1-1.png";
// import img1 from "@/public/feather-pen 1.png";
// import img2 from "@/public/feather-pen 1-1.png";
// import Image from "next/image";
// const WhyChooseMyCash2: React.FC = () => {
//   return (
//     <section className="p-12 bg-primary-10">
//       {/* Header Section */}
//       <div className="text-center mb-12">
//         <h2 className="text-5xl font-bold text-gray-800 mb-2">
//           لماذا تختار تطبيق ماي كاش؟
//         </h2>
//         <p className="text-gray-600 text-2xl">
//           نظام ذكاء اصطناعي AI حصري صنع لإجلك لتحسين الكفاءة وإدارة الأعمال
//           بذكاء
//         </p>
//       </div>

//       {/* Grid Container */}
//       <div className="container mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//         {/* Card 1 */}
//         <div className="bg-primary-200 shadow-md rounded-lg p-6 text-center">
//           <div className="flex justify-end mb-4 p-4">
//             <button className="flex items-center justify-center w-20 h-20 bg-primary-10 hover:bg-gray-300 rounded-lg shadow-md">
//               <Image
//                 src={img}
//                 alt="Attendance System"
//                 className="w-16 h-16 object-cover"
//               />
//             </button>
//           </div>
//           <div className="p-4 text-end">
//             <h3 className="text-4xl font-bold text-gray-800 mb-8">
//               : نظام الحضور والانصراف
//             </h3>
//             <p className="text-gray-600 text-2xl">
//               يعتمد على التعرف على الوجه لتسجيل دخول وخروج الموظفين بدقة، مما
//               يعزز الانضباط ويوفر تقارير فورية.
//             </p>
//           </div>
//         </div>

//         {/* Card 2 */}
//         <div className="bg-primary-200 shadow-md rounded-lg p-6 text-center">
//           <div className="flex justify-end mb-4 p-4">
//             <button className="flex items-center justify-center w-20 h-20 bg-primary-10 hover:bg-gray-300 rounded-lg shadow-md">
//               <Image
//                 src={img1}
//                 alt="Attendance System"
//                 className="w-16 h-16 object-cover"
//               />
//             </button>
//           </div>
//           <div className="p-4 text-end">
//             <h3 className="text-4xl font-bold text-gray-800 mb-8">
//               : نظام الحضور والانصراف
//             </h3>
//             <p className="text-gray-600 text-2xl">
//               يعتمد على التعرف على الوجه لتسجيل دخول وخروج الموظفين بدقة، مما
//               يعزز الانضباط ويوفر تقارير فورية.
//             </p>
//           </div>
//         </div>

//         {/* Card 3 */}
//         <div className="bg-primary-200 shadow-md rounded-lg p-6 text-center">
//           <div className="flex justify-end mb-4 p-4">
//             <button className="flex items-center justify-center w-20 h-20 bg-primary-10 hover:bg-gray-300 rounded-lg shadow-md">
//               <Image
//                 src={img2}
//                 alt="Attendance System"
//                 className="w-16 h-16 object-cover"
//               />
//             </button>
//           </div>
//           <div className="p-4 text-end">
//             <h3 className="text-4xl font-bold text-gray-800 mb-8">
//               : نظام الحضور والانصراف
//             </h3>
//             <p className="text-gray-600 text-2xl">
//               يعتمد على التعرف على الوجه لتسجيل دخول وخروج الموظفين بدقة، مما
//               يعزز الانضباط ويوفر تقارير فورية.
//             </p>
//           </div>
//         </div>
//         {/* Card 4 */}
//         <div className="bg-primary-200 shadow-md rounded-lg p-6 text-center">
//           <div className="flex justify-end mb-4 p-4">
//             <button className="flex items-center justify-center w-20 h-20 bg-primary-10 hover:bg-gray-300 rounded-lg shadow-md">
//               <Image
//                 src={img}
//                 alt="Attendance System"
//                 className="w-16 h-16 object-cover"
//               />
//             </button>
//           </div>
//           <div className="p-4 text-end">
//             <h3 className="text-4xl font-bold text-gray-800 mb-8">
//               : نظام الحضور والانصراف
//             </h3>
//             <p className="text-gray-600 text-2xl">
//               يعتمد على التعرف على الوجه لتسجيل دخول وخروج الموظفين بدقة، مما
//               يعزز الانضباط ويوفر تقارير فورية.
//             </p>
//           </div>
//         </div>

//         {/* Card 5 */}
//         <div className="bg-primary-200 shadow-md rounded-lg p-6 text-center">
//           <div className="flex justify-end mb-4 p-4">
//             <button className="flex items-center justify-center w-20 h-20 bg-primary-10 hover:bg-gray-300 rounded-lg shadow-md">
//               <Image
//                 src={img}
//                 alt="Attendance System"
//                 className="w-16 h-16 object-cover"
//               />
//             </button>
//           </div>
//           <div className="p-4 text-end">
//             <h3 className="text-4xl font-bold text-gray-800 mb-8">
//               : نظام الحضور والانصراف
//             </h3>
//             <p className="text-gray-600 text-2xl">
//               يعتمد على التعرف على الوجه لتسجيل دخول وخروج الموظفين بدقة، مما
//               يعزز الانضباط ويوفر تقارير فورية.
//             </p>
//           </div>
//         </div>

//         {/* Card 6 */}
//         <div className="bg-primary-200 shadow-md rounded-lg p-6 text-center">
//           <div className="flex justify-end mb-4 p-4">
//             <button className="flex items-center justify-center w-20 h-20 bg-primary-10 hover:bg-gray-300 rounded-lg shadow-md">
//               <Image
//                 src={img}
//                 alt="Attendance System"
//                 className="w-16 h-16 object-cover"
//               />
//             </button>
//           </div>
//           <div className="p-4 text-end">
//             <h3 className="text-4xl font-bold text-gray-800 mb-8">
//               : نظام الحضور والانصراف
//             </h3>
//             <p className="text-gray-600 text-2xl">
//               يعتمد على التعرف على الوجه لتسجيل دخول وخروج الموظفين بدقة، مما
//               يعزز الانضباط ويوفر تقارير فورية.
//             </p>
//           </div>
//         </div>

//         {/* Card 7 */}
//         <div className="bg-primary-200 shadow-md rounded-lg p-6 text-center">
//           <div className="flex justify-end mb-4 p-4">
//             <button className="flex items-center justify-center w-20 h-20 bg-primary-10 hover:bg-gray-300 rounded-lg shadow-md">
//               <Image
//                 src={img}
//                 alt="Attendance System"
//                 className="w-16 h-16 object-cover"
//               />
//             </button>
//           </div>
//           <div className="p-4 text-end">
//             <h3 className="text-4xl font-bold text-gray-800 mb-8">
//               : نظام الحضور والانصراف
//             </h3>
//             <p className="text-gray-600 text-2xl">
//               يعتمد على التعرف على الوجه لتسجيل دخول وخروج الموظفين بدقة، مما
//               يعزز الانضباط ويوفر تقارير فورية.
//             </p>
//           </div>
//         </div>

//         {/* Card 8 */}
//         <div className="bg-primary-200 shadow-md rounded-lg p-6 text-center">
//           <div className="flex justify-end mb-4 p-4">
//             <button className="flex items-center justify-center w-20 h-20 bg-primary-10 hover:bg-gray-300 rounded-lg shadow-md">
//               <Image
//                 src={img}
//                 alt="Attendance System"
//                 className="w-16 h-16 object-cover"
//               />
//             </button>
//           </div>
//           <div className="p-4 text-end">
//             <h3 className="text-4xl font-bold text-gray-800 mb-8">
//               : نظام الحضور والانصراف
//             </h3>
//             <p className="text-gray-600 text-2xl">
//               يعتمد على التعرف على الوجه لتسجيل دخول وخروج الموظفين بدقة، مما
//               يعزز الانضباط ويوفر تقارير فورية.
//             </p>
//           </div>
//         </div>

//         {/* Card 9 */}
//         <div className="bg-primary-200 shadow-md rounded-lg p-6 text-center">
//           <div className="flex justify-end mb-4 p-4">
//             <button className="flex items-center justify-center w-20 h-20 bg-primary-10 hover:bg-gray-300 rounded-lg shadow-md">
//               <Image
//                 src={img}
//                 alt="Attendance System"
//                 className="w-16 h-16 object-cover"
//               />
//             </button>
//           </div>
//           <div className="p-4 text-end">
//             <h3 className="text-4xl font-bold text-gray-800 mb-8">
//               : نظام الحضور والانصراف
//             </h3>
//             <p className="text-gray-600 text-2xl">
//               يعتمد على التعرف على الوجه لتسجيل دخول وخروج الموظفين بدقة، مما
//               يعزز الانضباط ويوفر تقارير فورية.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseMyCash2;
import React from "react";
import img from "@/public/product-chain 1-1.png";
import img1 from "@/public/feather-pen 1.png";
import img2 from "@/public/feather-pen 1-1.png";
import Image from "next/image";
import { useTranslations } from "next-intl";

const WhyChooseMyCash2: React.FC = () => {
  const t = useTranslations("whyChooseMyCash2");

  return (
    <section className="px-2 py-12 sm:p-12 bg-primary-10">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">
          {t("headerTitle")}
        </h2>
        <p className="text-gray-600 text-2xl">{t("headerSubtitle")}</p>
      </div>

      {/* Grid Container */}
      <div className="container mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {/* Cards */}
        {[
          {
            id: 1,
            imgSrc: img,
            titleKey: "card1.title",
            descKey: "card1.description",
          },
          {
            id: 2,
            imgSrc: img1,
            titleKey: "card2.title",
            descKey: "card2.description",
          },
          {
            id: 3,
            imgSrc: img2,
            titleKey: "card3.title",
            descKey: "card3.description",
          },
          {
            id: 4,
            imgSrc: img,
            titleKey: "card4.title",
            descKey: "card4.description",
          },
          {
            id: 5,
            imgSrc: img,
            titleKey: "card5.title",
            descKey: "card5.description",
          },
          {
            id: 6,
            imgSrc: img,
            titleKey: "card6.title",
            descKey: "card6.description",
          },
          {
            id: 7,
            imgSrc: img,
            titleKey: "card7.title",
            descKey: "card7.description",
          },
          {
            id: 8,
            imgSrc: img,
            titleKey: "card8.title",
            descKey: "card8.description",
          },
          {
            id: 9,
            imgSrc: img,
            titleKey: "card9.title",
            descKey: "card9.description",
          },
        ].map(({ id, imgSrc, titleKey, descKey }) => (
          <div
            key={id}
            className="bg-primary-200 shadow-md rounded-lg py-3 px-2 text-center"
          >
            <div className="flex justify-end p-4">
              <button className="flex items-center justify-center w-20 h-20 bg-primary-10 hover:bg-gray-300 rounded-lg shadow-md">
                <Image
                  src={imgSrc}
                  alt={t(`${titleKey}`)}
                  className="w-16 h-16 object-cover"
                />
              </button>
            </div>
            <div className=" text-end">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {t(titleKey)}
              </h3>
              <p className="text-gray-600 text-2xl">{t(descKey)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseMyCash2;
