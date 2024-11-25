// import React from "react";
// import img1 from "@/public/45f643be65ab28969385bbce6fbe20fa.jpg";
// import img2 from "@/public/products_mobile.png";
// import Image from "next/image";
// const AboutSection: React.FC = () => {
//   return (
//     <section className="bg-blue-900 p-6">
//       <div className="container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-14">
//         {/* Image Section */}
//         <div className="relative lg:w-1/2 mb-12 lg:mb-0 flex justify-center">
//           <div className="rounded-lg overflow-hidden relative w-11/12 lg:w-full">
//             <Image
//               src={img1}
//               alt="Shelf Image"
//               className="w-full h-full object-cover"
//             />

//             <Image
//               src={img2}
//               alt="Overlay Image"
//               className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg w-2/3"
//             />
//           </div>
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
import img1 from "@/public/45f643be65ab28969385bbce6fbe20fa.jpg";
import img2 from "@/public/products_mobile.png";
import Image from "next/image";

const AboutSection: React.FC = () => {
  return (
    <section className="bg-blue-900 p-6">
      <div className="container mx-auto px-6 flex items-center justify-between gap-14 flex-row">
        {/* Image Section */}
        <div className="relative w-1/2 mb-0">
          <div className="rounded-lg overflow-hidden relative w-11/12 mx-auto">
            <Image
              src={img1}
              alt="Shelf Image"
              className="object-cover"
              width={500} // Fixed width
              height={400} // Fixed height
            />

            <Image
              src={img2}
              alt="Overlay Image"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg"
              width={300}
              height={300} // Adjusted to maintain fixed width and automatic height
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="text-white p-4 w-1/2 text-right">
          <h2 className="font-bold mb-6 text-5xl">عن ماي كاش</h2>
          <p className="mb-8 leading-relaxed text-lg">
            أُسست ماي كاش لتلبي الاحتياج الذي تطلبه النمو المتسارع في قطاع
            الأعمال في المملكة. حيث طورنا نظاماً لتحسين طرق إدارة المدفوعات
            وإصدار فواتير للمبيعات بسلاسة. تستخدم ماي كاش أحدث تقنيات الحوسبة
            السحابية لتقديم حلول فعّالة ومرنة، مما يجعلها الخيار المثالي للأعمال
            الراغبة في تعزيز كفاءتها التشغيلية.
          </p>
          <div className="flex justify-end gap-4">
            <button className="bg-white text-blue-900 rounded-full px-6 py-3 font-medium hover:bg-gray-100 transition duration-300">
              اعرف المزيد
            </button>
            <button className="bg-green-500 text-white rounded-full px-6 py-3 font-medium hover:bg-green-600 transition duration-300">
              احصل على نسختك التجريبية
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
