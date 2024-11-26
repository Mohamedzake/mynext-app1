import React from "react";
import img2 from "@/public/Frame 1171278876 (1).png";
import Image from "next/image";

const AboutSection: React.FC = () => {
  return (
    <section className="relative bg-blue-900 h-[87vh]">
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
        <div className="lg:w-[46%] text-center lg:text-right text-black flex flex-col justify-center py-16 px-24 bg-white  rounded-l-full">
          <h2 className="text-6xl sm:text-5xl lg:text-6xl font-bold mb-4">
            AI ماي كاش
          </h2>
          <p className="text-2xl mb-8 leading-relaxed ">
            أُسست ماي كاش لتلبي الاحتياج الذي تطلبه النمو المتسارع في قطاع
            الأعمال في المملكة. حيث طورنا نظاماً لتحسين طرق إدارة المدفوعات
            وإصدار فواتير للمبيعات بسلاسة. تستخدم ماي كاش أحدث تقنيات الحوسبة
          </p>

          <div className="flex flex-col justify-end items-end text-end">
            <div className="flex items-center gap-4 mb-8">
              <p className="text-2xl leading-relaxed">
                AI بالعديد من المميزات المصممة خصيصاً لتسهيل
              </p>
              <div className="w-4 h-4 ml-4 rounded-full bg-green-500"></div>
            </div>
            <div className="flex items-center gap-4 mb-8">
              <p className="text-2xl leading-relaxed">
                التعرف على المنتجات تلقائيا والتكامل مع قاعدة البيآنآت
              </p>
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
            </div>
            <div className="flex items-center gap-4 mb-8">
              <p className="text-2xl font-bold leading-relaxed">
                التحليل الديموغرافي للعملاء وتوقعات
              </p>
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:flex-col lg:flex-row justify-end">
            <a className="border flex items-center justify-center border-primary-20 text-primary-20 font-bold text-lg md:text-xl px-4 py-2 rounded-full hover:bg-green-50 transition w-full md:w-full lg:w-auto">
              اعرف المزيد
            </a>
            <a className="bg-primary-20 text-lg md:text-xl text-white px-4 py-2 rounded-full hover:bg-green-700 transition w-full md:w-full lg:w-auto">
              احصل على نسختك التجريبية
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
