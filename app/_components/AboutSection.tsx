// import React from "react";
// import img1 from "@/public/45f643be65ab28969385bbce6fbe20fa.jpg";
// import img2 from "@/public/Frame 1171278876 (1).png";
// import Image from "next/image";
// const AboutSection: React.FC = () => {
//   return (
//     <section className="relative bg-blue-900 h-[80vh]">
//       <div className="absolute inset-0">
//         <Image
//           src={img2}
//           layout="fill"
//           placeholder="blur"
//           quality={80}
//           className="object-cover"
//           alt="Mountains and forests with two cabins"
//         />
//       </div>
//       <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
//         {/* Image Section */}
//         <div className="relative lg:w-1/2 mb-12 lg:mb-0 flex justify-center bg-white">
//           {/* <div className="rounded-lg overflow-hidden relative w-11/12 lg:w-full">
//             <Image
//               src={img2}
//               alt="Shelf Image"
//               className="w-full h-full object-cover"
//             />
//           </div> */}
//         </div>
//         {/* Text Section */}
//         <div className="lg:w-1/2 text-center lg:text-right text-white p-4">
//           <h2 className="text-6xl font-bold mb-6">عن ماي كاش</h2>
//           <p className="text-lg mb-8 leading-relaxed">
//             أُسست ماي كاش لتلبي الاحتياج الذي تطلبه النمو المتسارع في قطاع
//             الأعمال في المملكة. حيث طورنا نظاماً لتحسين طرق إدارة المدفوعات
//             وإصدار فواتير للمبيعات بسلاسة. تستخدم ماي كاش أحدث تقنيات الحوسبة
//             السحابية لتقديم حلول فعّالة ومرنة، مما يجعلها الخيار المثالي للأعمال
//             الراغبة في تعزيز كفاءتها التشغيلية.
//           </p>
//           <div className="flex justify-center lg:justify-end lg:space-x-reverse gap-4">
//             <button className="bg-white text-blue-900 rounded-full px-6 py-3 font-medium hover:bg-gray-100 transition duration-300">
//               اعرف المزيد
//             </button>
//             <button className="bg-green-500 text-white rounded-full px-6 py-3 font-medium hover:bg-green-600 transition duration-300">
//               احصل على نسختك التجريبية
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;
import React from "react";
import img2 from "@/public/Frame 1171278876 (1).png";
import Image from "next/image";

const AboutSection: React.FC = () => {
  return (
    <section className="relative bg-blue-900 h-[90vh]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={img2}
          layout="fill"
          placeholder="blur"
          quality={80}
          className="object-cover"
          alt="Background Image"
        />
      </div>

      {/* Content Section */}
      <div className="relative container mx-auto flex flex-col lg:flex-row items-center justify-between  ">
        {/* Text Section */} <div></div>
        <div className="lg:w-[46%] text-center lg:text-right text-black flex flex-col justify-center p-20 bg-black  rounded-l-full">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            عن ماي كاش
          </h2>
          <p className="text-base sm:text-lg mb-8 leading-relaxed px-20">
            أُسست ماي كاش لتلبي الاحتياج الذي تطلبه النمو المتسارع في قطاع
            الأعمال في المملكة. حيث طورنا نظاماً لتحسين طرق إدارة المدفوعات
            وإصدار فواتير للمبيعات بسلاسة. تستخدم ماي كاش أحدث تقنيات الحوسبة
            السحابية لتقديم حلول فعّالة ومرنة، مما يجعلها الخيار المثالي للأعمال
            الراغبة في تعزيز كفاءتها التشغيلية.
          </p>
          <p className="text-base sm:text-lg mb-8 leading-relaxed px-20">
            يقوم نظام ماي كاش AI باستخدام أجهزة الذكاء الاصطناعي وشبكات
            الكاميرات المتصوره على أنظمة التخزين مما يُمكن تحويل البيانات
          </p>
          <p className="text-base sm:text-lg mb-8 leading-relaxed px-20">
            يقوم نظام ماي كاش AI باستخدام أجهزة الذكاء الاصطناعي وشبكات
          </p>
          <p className="text-base sm:text-lg mb-8 leading-relaxed px-20">
            يقوم نظام ماي كاش AI باستخدام أجهزة الذكاء الاصطناعي وشبكات
          </p>
          <div className="flex justify-center lg:justify-end lg:space-x-reverse gap-4">
            <button className="bg-slate-500 text-blue-900 rounded-full px-6 py-3 font-medium hover:bg-gray-100 transition duration-300">
              اعرف المزيد
            </button>
            <button className="bg-green-500 text-black rounded-full px-6 py-3 font-medium hover:bg-green-600 transition duration-300">
              احصل على نسختك التجريبية
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
