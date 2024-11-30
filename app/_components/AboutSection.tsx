import React from "react";
import Image from "next/image";
import imgbg from "@/public/small-r.jpeg";
import small from "@/public/mid-r.jpeg";
import small1 from "@/public/small1.png";
import bg from "@/public/bg-half.png";
const AboutSection: React.FC = () => {
  return (
    <section className="relative bg-primary-30 h-auto">
      <div className="absolute hidden lg:block bg-primary-30 inset-0">
        <Image
          src={bg}
          layout="fill"
          placeholder="blur"
          quality={80}
          className="object-cover bg-primary-30"
          alt="Mountains and forests with two cabins"
        />
      </div>
      {/* Content Section */}
      <div className="relative mx-auto flex flex-col-reverse lg:flex-row items-center justify-between lg:h-[78vh]">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-right z-50 text-black flex flex-col justify-center lg:py-24 py-10 px-6 sm:px-10  bg-white rounded-b-full lg:rounded-br-none lg:rounded-l-full order-2 lg:order-2">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4">
            AI ماي كاش
          </h2>
          <p className="text-lg sm:text-xl lg:text-1xl mb-6 leading-relaxed">
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
          <div className="flex flex-col mr-7 lg:mr-0 gap-4 mb-8">
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

          <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-end gap-4">
            <a className="border border-primary-20 text-primary-20 font-bold text-lg px-4 py-2 rounded-full hover:bg-green-50 transition w-56 lg:w-auto text-center">
              اعرف المزيد
            </a>
            <a className="bg-primary-20 text-lg text-white px-4 py-2 rounded-full hover:bg-green-700 transition w-56 lg:w-auto text-center">
              احصل على نسختك التجريبية
            </a>
          </div>
        </div>
        {/* Background Image */}
        {/* <div className="w-full bg-primary-30 hidden lg:block lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-full relative order-1 lg:order-1">
          <Image
            src={small1}
            placeholder="blur"
            quality={80}
            layout="fill"
            // objectFit="cover"
            alt="Background Image"
            className="rounded-lg"
          />
        </div> */}
        <div></div>
        <div className="w-full bg-primary-30  block lg:hidden lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-full relative order-1 lg:order-1">
          <Image
            src={small1}
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
