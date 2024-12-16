// import React from "react";
// import img from "@/public/sell_over_cameras.jpg";
// import img2 from "@/public/attend_leave.jpg";
// import Image from "next/image";

// const Solutions: React.FC = () => {
//   return (
//     <div className=" bg-primary-100 p-8 sm:p-16 lg:p-28">
//       {/* Header Section */}
//       <div className="text-center mb-12">
//         <h2 className="text-blue-600 text-xl sm:text-2xl font-semibold">
//           رؤية جديدة لإدارة الأعمال
//         </h2>
//         <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mt-2">
//           حلول الذكاء الاصطناعي المتقدمة
//         </h1>
//         <p className="text-gray-500 mt-4 text-sm sm:text-base">
//           اجعل أعمالك ذكية مع حلول الذكاء الاصطناعي الرائدة، وكن مستعدًا
//           لاستقبال الأعمال الرقمية!
//         </p>
//       </div>

//       {/* Content Grid */}
//       <div className="space-y-12">
//         {/* Row 1 */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border-b-2 border-gray-300 pb-8">
//           {/* Item 1 */}
//           <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-end">
//             <div className="sm:w-2/3">
//               <h3 className="text-2xl font-semibold text-gray-700 mb-4">
//                 :الحضور والانصراف
//               </h3>
//               <p className="text-gray-600 text-xl mb-2">
//                 وداعًا للطرق التقليدية لتسجيل الحضور والانصراف! يعتمد نظام
//                 الذكاء الاصطناعي على التعرف على الوجه لتسجيل دخول وخروج الموظفين
//                 بدقة وأمان، مما يساهم في تحسين الانضباط وتوفير تقارير فورية.
//               </p>
//             </div>
//             <div className="sm:w-1/3 w-full">
//               <Image
//                 src={img2}
//                 alt="الحضور والانصراف"
//                 className="w-full h-80 object-cover rounded-3xl"
//               />
//             </div>
//           </div>

//           {/* Item 2 */}
//           <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-end">
//             <div className="sm:w-2/3">
//               <h3 className="text-2xl font-semibold text-gray-700 mb-4">
//                 :البيع عبر الكاميرات
//               </h3>
//               <p className="text-gray-600 text-xl mb-2">
//                 نظام ذكاء اصطناعي يتيح التعرف على المنتجات وتسجيل المبيعات
//                 تلقائيًا بمجرد التقاط الكاميرا للسلع. هذه التقنية توفر الوقت،
//                 تقلل الأخطاء البشرية، وتعزز تجربة العملاء من خلال تسريع عمليات
//                 الشراء.
//               </p>
//             </div>
//             <div className="sm:w-1/3 w-full">
//               <Image
//                 src={img}
//                 alt="البيع عبر الكاميرات"
//                 className="w-full h-80 object-cover rounded-3xl"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Row 2 */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-8">
//           {/* Item 3 */}
//           <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-end">
//             <div className="sm:w-2/3">
//               <h3 className="text-2xl font-semibold text-gray-700 mb-4">
//                 :تحليل الأعمار والجنس
//               </h3>
//               <p className="text-gray-600 text-xl mb-2">
//                 تقنيات الذكاء الاصطناعي تقدم تقارير متكاملة حول الفئات العمرية
//                 وجنس العملاء، مما يتيح لك تخصيص العروض والخدمات بناءً على
//                 احتياجات جمهورك، وتحسين استراتيجيات التسويق.
//               </p>
//             </div>
//             <div className="sm:w-1/3 w-full">
//               <Image
//                 src={img2}
//                 alt="تحليل الأعمار والجنس"
//                 className="w-full h-80 object-cover rounded-3xl"
//               />
//             </div>
//           </div>

//           {/* Item 4 */}
//           <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-end">
//             <div className="sm:w-2/3">
//               <h3 className="text-2xl font-semibold text-gray-700 mb-4">
//                 :قياس عدد زيارات العملاء
//               </h3>
//               <p className="text-gray-600 text-xl mb-2">
//                 تعرف على نشاط متجرك بشكل غير مسبوق. يوفر النظام إحصائيات دقيقة
//                 عن عدد الزوار، أوقات الذروة، ومستوى الإقبال في أيام محددة، مما
//                 يساعدك على التخطيط بشكل أفضل وزيادة الأرباح.
//               </p>
//             </div>
//             <div className="sm:w-1/3 w-full">
//               <Image
//                 src={img}
//                 alt="قياس عدد زيارات العملاء"
//                 className="w-full h-80 object-cover rounded-3xl"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Solutions;
import React from "react";

import img from "@/public/sell_over_cameras.jpg";
import img2 from "@/public/attend_leave.jpg";
import Image from "next/image";
import { useTranslations } from "next-intl";
const Solutions: React.FC = () => {
  const t = useTranslations("solutions2");

  return (
    <div className="bg-primary-100 px-2 py-8 sm:p-16 lg:p-28">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-blue-600 text-xl sm:text-2xl font-semibold">
          <span className="bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
            {t("headerSubtitle")}
          </span>
        </h2>
        <h1 className="text-2xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mt-2">
          {t("headerTitle")}
        </h1>
        <p className="text-gray-500 mt-4 text-sm sm:text-base">
          {t("headerDescription")}
        </p>
      </div>

      {/* Content Grid */}
      <div className="space-y-12">
        {/* Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border-b-2 border-gray-300 pb-8">
          {/* Item 1 */}
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-end">
            <div className="sm:w-2/3">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                {t("items.attendanceTitle")}
              </h3>
              <p className="text-gray-600 text-xl mb-2">
                {t("items.attendanceDescription")}
              </p>
            </div>
            <div className="sm:w-1/3 w-full">
              <Image
                src={img2}
                alt={t("items.attendanceTitle")}
                className="w-full h-80 object-cover rounded-3xl"
              />
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-end">
            <div className="sm:w-2/3">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                {t("items.salesTitle")}
              </h3>
              <p className="text-gray-600 text-xl mb-2">
                {t("items.salesDescription")}
              </p>
            </div>
            <div className="sm:w-1/3 w-full">
              <Image
                src={img}
                alt={t("items.salesTitle")}
                className="w-full h-80 object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-8">
          {/* Item 3 */}
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-end">
            <div className="sm:w-2/3">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                {t("items.ageGenderTitle")}
              </h3>
              <p className="text-gray-600 text-xl mb-2">
                {t("items.ageGenderDescription")}
              </p>
            </div>
            <div className="sm:w-1/3 w-full">
              <Image
                src={img2}
                alt={t("items.ageGenderTitle")}
                className="w-full h-80 object-cover rounded-3xl"
              />
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-end">
            <div className="sm:w-2/3">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                {t("items.customerVisitsTitle")}
              </h3>
              <p className="text-gray-600 text-xl mb-2">
                {t("items.customerVisitsDescription")}
              </p>
            </div>
            <div className="sm:w-1/3 w-full">
              <Image
                src={img}
                alt={t("items.customerVisitsTitle")}
                className="w-full h-80 object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
