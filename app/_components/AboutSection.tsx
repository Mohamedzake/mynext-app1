// import React from "react";
// import img2 from "@/public/Frame 1171278876 (1).png";
// import Image from "next/image";

// const AboutSection: React.FC = () => {
//   return (
//     <section className="relative bg-blue-900 h-[87vh]">
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         {/* <Image
//           src={img2}
//           layout="fill"
//           placeholder="blur"
//           quality={80}
//           className="object-cover"
//           alt="Background Image"
//         /> */}
//       </div>

//       {/* Content Section */}
//       <div className="relative container mx-auto flex flex-col lg:flex-row items-center justify-between  ">
//         {/* Text Section */}
//         <div className="w-[54%]">
//           <Image
//             src={img2}
//             placeholder="blur"
//             quality={80}
//             width={400}
//             className=""
//             alt="Background Image"
//           />
//         </div>
//         <div className="w-[46%] text-center lg:text-right text-black flex flex-col justify-center py-10 px-24 bg-white  rounded-l-full">
//           <h2 className="text-6xl sm:text-5xl lg:text-6xl font-bold mb-4">
//             AI ماي كاش
//           </h2>
//           <p className="text-2xl mb-8 leading-relaxed ">
//             أُسست ماي كاش لتلبي الاحتياج الذي تطلبه النمو المتسارع في قطاع
//             الأعمال في المملكة. حيث طورنا نظاماً لتحسين طرق إدارة المدفوعات
//             وإصدار فواتير للمبيعات بسلاسة. تستخدم ماي كاش أحدث تقنيات الحوسبة
//           </p>

//           <div className="flex flex-col justify-end items-end text-end">
//             <div className="flex items-center gap-4 mb-8">
//               <p className="text-2xl leading-relaxed">
//                 AI بالعديد من المميزات المصممة خصيصاً لتسهيل
//               </p>
//               <div className="w-4 h-4 ml-4 rounded-full bg-green-500"></div>
//             </div>
//             <div className="flex items-center gap-4 mb-8">
//               <p className="text-2xl leading-relaxed">
//                 التعرف على المنتجات تلقائيا والتكامل مع قاعدة البيآنآت
//               </p>
//               <div className="w-4 h-4 rounded-full bg-green-500"></div>
//             </div>
//             <div className="flex items-center gap-4 mb-8">
//               <p className="text-2xl font-bold leading-relaxed">
//                 التحليل الديموغرافي للعملاء وتوقعات
//               </p>
//               <div className="w-4 h-4 rounded-full bg-green-500"></div>
//             </div>
//           </div>

//           <div className="flex flex-col gap-4 md:flex-col lg:flex-row justify-end">
//             <a className="border flex items-center justify-center border-primary-20 text-primary-20 font-bold text-lg md:text-xl px-4 py-2 rounded-full hover:bg-green-50 transition w-full md:w-full lg:w-auto">
//               اعرف المزيد
//             </a>
//             <a className="bg-primary-20 text-lg md:text-xl text-white px-4 py-2 rounded-full hover:bg-green-700 transition w-full md:w-full lg:w-auto">
//               احصل على نسختك التجريبية
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;
// import React from "react";
// import img2 from "@/public/Frame 1171278876 (1).png";
// import Image from "next/image";

// const AboutSection: React.FC = () => {
//   return (
//     <section className="relative bg-blue-900 h-[87vh]">
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         {/* <Image
//           src={img2}
//           layout="fill"
//           placeholder="blur"
//           quality={80}
//           className="object-cover"
//           alt="Background Image"
//         /> */}
//       </div>

//       {/* Content Section */}
//       <div className="relative container mx-auto flex flex-col lg:flex-row items-center justify-between h-full">
//         {/* Image Section */}
//         <div className="w-full lg:w-1/2 h-full">
//           <Image
//             src={img2}
//             placeholder="blur"
//             quality={80}
//             layout="fill"
//             objectFit="cover"
//             alt="Background Image"
//           />
//         </div>

//         {/* Text Section */}
//         <div className="w-full lg:w-1/2 text-center lg:text-right text-black flex flex-col justify-center py-10 px-24 bg-white rounded-l-full h-full">
//           <h2 className="text-6xl sm:text-5xl lg:text-6xl font-bold mb-4">
//             AI ماي كاش
//           </h2>
//           <p className="text-2xl mb-8 leading-relaxed">
//             أُسست ماي كاش لتلبي الاحتياج الذي تطلبه النمو المتسارع في قطاع
//             الأعمال في المملكة. حيث طورنا نظاماً لتحسين طرق إدارة المدفوعات
//             وإصدار فواتير للمبيعات بسلاسة. تستخدم ماي كاش أحدث تقنيات الحوسبة
//           </p>

//           <div className="flex flex-col justify-end items-end text-end">
//             <div className="flex items-center gap-4 mb-8">
//               <p className="text-2xl leading-relaxed">
//                 AI بالعديد من المميزات المصممة خصيصاً لتسهيل
//               </p>
//               <div className="w-4 h-4 ml-4 rounded-full bg-green-500"></div>
//             </div>
//             <div className="flex items-center gap-4 mb-8">
//               <p className="text-2xl leading-relaxed">
//                 التعرف على المنتجات تلقائيا والتكامل مع قاعدة البيآنآت
//               </p>
//               <div className="w-4 h-4 rounded-full bg-green-500"></div>
//             </div>
//             <div className="flex items-center gap-4 mb-8">
//               <p className="text-2xl font-bold leading-relaxed">
//                 التحليل الديموغرافي للعملاء وتوقعات
//               </p>
//               <div className="w-4 h-4 rounded-full bg-green-500"></div>
//             </div>
//           </div>

//           <div className="flex flex-col gap-4 md:flex-col lg:flex-row justify-end">
//             <a className="border flex items-center justify-center border-primary-20 text-primary-20 font-bold text-lg md:text-xl px-4 py-2 rounded-full hover:bg-green-50 transition w-full md:w-full lg:w-auto">
//               اعرف المزيد
//             </a>
//             <a className="bg-primary-20 text-lg md:text-xl text-white px-4 py-2 rounded-full hover:bg-green-700 transition w-full md:w-full lg:w-auto">
//               احصل على نسختك التجريبية
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;
// import React from "react";

// import Image from "next/image";
// import imgbg from "@/public/small-r.jpeg";
// import small from "@/public/mid-r.jpeg";
// const AboutSection: React.FC = () => {
//   return (
//     <section className="relative bg-blue-900 h-auto lg:h-[87vh]">
//       {/* Content Section */}
//       <div className="relative mx-auto flex flex-col lg:flex-row items-center justify-between h-full">
//         <div className="w-full lg:w-1/2 text-center z-50 lg:text-right text-black flex flex-col justify-center py-10 px-24 bg-white rounded-l-full order-1 lg:order-2 h-full">
//           <h2 className="text-6xl sm:text-5xl lg:text-6xl font-bold mb-4">
//             AI ماي كاش
//           </h2>
//           <p className="text-2xl mb-8 leading-relaxed">
//             أُسست ماي كاش لتلبي الاحتياج الذي تطلبه النمو المتسارع في قطاع
//             الأعمال في المملكة. حيث طورنا نظاماً لتحسين طرق إدارة المدفوعات
//             وإصدار فواتير للمبيعات بسلاسة. تستخدم ماي كاش أحدث تقنيات الحوسبة
//           </p>

//           <div className="flex flex-col justify-end items-end text-end">
//             <div className="flex items-center gap-4 mb-8">
//               <p className="text-2xl leading-relaxed">
//                 AI بالعديد من المميزات المصممة خصيصاً لتسهيل
//               </p>
//               <div className="w-4 h-4 ml-4 rounded-full bg-green-500"></div>
//             </div>
//             <div className="flex items-center gap-4 mb-8">
//               <p className="text-2xl leading-relaxed">
//                 التعرف على المنتجات تلقائيا والتكامل مع قاعدة البيآنآت
//               </p>
//               <div className="w-4 h-4 rounded-full bg-green-500"></div>
//             </div>
//             <div className="flex items-center gap-4 mb-8">
//               <p className="text-2xl font-bold leading-relaxed">
//                 التحليل الديموغرافي للعملاء وتوقعات
//               </p>
//               <div className="w-4 h-4 rounded-full bg-green-500"></div>
//             </div>
//           </div>

//           <div className="flex flex-col gap-4 md:flex-col lg:flex-row justify-end">
//             <a className="border flex items-center justify-center border-primary-20 text-primary-20 font-bold text-lg md:text-xl px-4 py-2 rounded-full hover:bg-green-50 transition w-full md:w-full lg:w-auto">
//               اعرف المزيد
//             </a>
//             <a className="bg-primary-20 text-lg md:text-xl text-white px-4 py-2 rounded-full hover:bg-green-700 transition w-full md:w-full lg:w-auto">
//               احصل على نسختك التجريبية
//             </a>
//           </div>
//         </div>

//         <div className="hidden lg:block w-full lg:w-1/2 h-full order-2 lg:order-1">
//           <Image
//             src={imgbg}
//             placeholder="blur"
//             quality={80}
//             layout="fill"
//             objectFit="cover"
//             alt="Background Image"
//           />
//         </div>
//         <div className=" block lg:hidden w-full lg:w-1/2 h-full order-2 lg:order-1">
//           <Image
//             src={small}
//             placeholder="blur"
//             quality={80}
//             layout="fill"
//             objectFit="cover"
//             alt="Background Image"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;
// import React from "react";
// import Image from "next/image";
// import imgbg from "@/public/small-r.jpeg";
// import small from "@/public/mid-r.jpeg";

// const AboutSection: React.FC = () => {
//   return (
//     <section className="relative bg-blue-900 h-auto lg:h-[87vh]">
//       {/* Content Section */}
//       <div className="relative mx-auto flex flex-col lg:flex-row items-center justify-between lg:h-full">
//         {/* Text Section */}
//         <div className="w-full lg:w-1/2 text-center z-50 lg:text-right text-black flex flex-col justify-center py-10 px-6 sm:px-10 lg:px-24 bg-white rounded-b-3xl lg:rounded-l-full order-2 lg:order-1">
//           <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4">
//             AI ماي كاش
//           </h2>
//           <p className="text-lg sm:text-xl lg:text-2xl mb-8 leading-relaxed">
//             أُسست ماي كاش لتلبي الاحتياج الذي تطلبه النمو المتسارع في قطاع
//             الأعمال في المملكة. حيث طورنا نظاماً لتحسين طرق إدارة المدفوعات
//             وإصدار فواتير للمبيعات بسلاسة. تستخدم ماي كاش أحدث تقنيات الحوسبة
//           </p>

//           <div className="flex flex-col gap-4 mb-8">
//             <div className="flex items-center gap-4">
//               <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed">
//                 AI بالعديد من المميزات المصممة خصيصاً لتسهيل
//               </p>
//               <div className="w-4 h-4 rounded-full bg-green-500"></div>
//             </div>
//             <div className="flex items-center gap-4">
//               <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed">
//                 التعرف على المنتجات تلقائيا والتكامل مع قاعدة البيآنآت
//               </p>
//               <div className="w-4 h-4 rounded-full bg-green-500"></div>
//             </div>
//             <div className="flex items-center gap-4">
//               <p className="text-lg sm:text-xl lg:text-2xl font-bold leading-relaxed">
//                 التحليل الديموغرافي للعملاء وتوقعات
//               </p>
//               <div className="w-4 h-4 rounded-full bg-green-500"></div>
//             </div>
//           </div>

//           <div className="flex flex-col lg:flex-row justify-center lg:justify-end gap-4">
//             <a className="border border-primary-20 text-primary-20 font-bold text-lg px-4 py-2 rounded-full hover:bg-green-50 transition w-full lg:w-auto text-center">
//               اعرف المزيد
//             </a>
//             <a className="bg-primary-20 text-lg text-white px-4 py-2 rounded-full hover:bg-green-700 transition w-full lg:w-auto text-center">
//               احصل على نسختك التجريبية
//             </a>
//           </div>
//         </div>

//         {/* Background Image for Large Screens */}
//         <div className="hidden lg:block w-full lg:w-1/2 h-full order-1 lg:order-2 relative">
//           <Image
//             src={imgbg}
//             placeholder="blur"
//             quality={80}
//             layout="fill"
//             objectFit="cover"
//             alt="Background Image"
//             className="rounded-lg"
//           />
//         </div>

//         {/* Background Image for Small Screens */}
//         <div className="block lg:hidden w-full h-64 sm:h-80 md:h-96 relative order-1">
//           <Image
//             src={small}
//             placeholder="blur"
//             quality={80}
//             layout="fill"
//             objectFit="cover"
//             alt="Small Screen Background Image"
//             className="rounded-lg"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;
import React from "react";
import Image from "next/image";
import imgbg from "@/public/small-r.jpeg";
import small from "@/public/mid-r.jpeg";

const AboutSection: React.FC = () => {
  return (
    <section className="relative bg-blue-900 h-auto">
      {/* Content Section */}
      <div className="relative mx-auto flex flex-col-reverse lg:flex-row items-center justify-between lg:h-[87vh]">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-right z-50 text-black flex flex-col justify-center py-10 px-6 sm:px-10 lg:px-24 bg-white lg:rounded-l-full order-2 lg:order-2">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4">
            AI ماي كاش
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 leading-relaxed">
            أُسست ماي كاش لتلبي الاحتياج الذي تطلبه النمو المتسارع في قطاع
            الأعمال في المملكة. حيث طورنا نظاماً لتحسين طرق إدارة المدفوعات
            وإصدار فواتير للمبيعات بسلاسة. تستخدم ماي كاش أحدث تقنيات الحوسبة
          </p>

          {/* <div className="flex flex-col gap-4 mb-8">
            <div className="flex items-center gap-4">
              <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed">
                AI بالعديد من المميزات المصممة خصيصاً لتسهيل
              </p>
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed">
                التعرف على المنتجات تلقائيا والتكامل مع قاعدة البيآنآت
              </p>
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-lg sm:text-xl lg:text-2xl font-bold leading-relaxed">
                التحليل الديموغرافي للعملاء وتوقعات
              </p>
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
            </div>
          </div> */}
          <div className="flex flex-col gap-4 mb-8">
            <div className="flex items-center justify-end gap-4 text-end sm:text-end">
              <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed">
                AI بالعديد من المميزات المصممة خصيصاً لتسهيل
              </p>
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
            </div>
            <div className="flex items-center justify-end gap-4 text-end sm:text-start">
              <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed">
                التعرف على المنتجات تلقائيا والتكامل مع قاعدة البيآنآت
              </p>
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
            </div>
            <div className="flex items-center justify-end gap-4 text-end sm:text-start">
              <p className="text-lg sm:text-xl lg:text-2xl font-bold leading-relaxed">
                التحليل الديموغرافي للعملاء وتوقعات
              </p>
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-center lg:justify-end gap-4">
            <a className="border border-primary-20 text-primary-20 font-bold text-lg px-4 py-2 rounded-full hover:bg-green-50 transition w-full lg:w-auto text-center">
              اعرف المزيد
            </a>
            <a className="bg-primary-20 text-lg text-white px-4 py-2 rounded-full hover:bg-green-700 transition w-full lg:w-auto text-center">
              احصل على نسختك التجريبية
            </a>
          </div>
        </div>
        {/* Background Image */}
        <div className="w-full bg-primary-30 hidden lg:block lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-full relative order-1 lg:order-1">
          <Image
            src={imgbg}
            placeholder="blur"
            quality={80}
            layout="fill"
            objectFit="cover"
            alt="Background Image"
            className="rounded-lg"
          />
        </div>
        <div className="w-full bg-primary-30  block lg:hidden lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-full relative order-1 lg:order-1">
          <Image
            src={small}
            placeholder="blur"
            quality={80}
            layout="fill"
            // objectFit="cover"
            alt="Background Image"
            className="bg-primary-30"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
