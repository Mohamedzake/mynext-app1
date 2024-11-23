import React from "react";
import img from "@/public/pos_img.jpg";
import Image from "next/image";
const WhyChooseMyCash: React.FC = () => {
  return (
    <section className="p-12 bg-primary-100">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-gray-800 mb-2">
          لماذا تختار تطبيق ماي كاش؟
        </h2>
        <p className="text-gray-600 text-2xl">
          نظام ذكاء اصطناعي AI حصري صنع لإجلك لتحسين الكفاءة وإدارة الأعمال
          بذكاء
        </p>
      </div>

      {/* Card Container */}
      <div className="container mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="relative">
            <Image
              src={img}
              alt="Attendance System"
              className="w-full h-56 object-cover"
            />
          </div>
          <div className="p-6 text-end">
            <h3 className="text-4xl font-bold text-gray-800 mb-8">
              : نظام الحضور والانصراف
            </h3>
            <p className="text-gray-600 font-bold text-2xl">
              يعتمد على التعرف على الوجه لتسجيل دخول وخروج الموظفين بدقة، مما
              يعزز الانضباط ويوفر تقارير فورية.
            </p>
          </div>
          <div className="flex justify-start mb-4 p-6">
            <button className="flex items-center justify-center w-20 h-16 bg-gray-200 hover:bg-gray-300 rounded-bl-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-10 w-10 text-black text-1xl font-bold"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="relative">
            <Image
              src={img}
              alt="Attendance System"
              className="w-full h-56 object-cover"
            />
          </div>
          <div className="p-6 text-end">
            <h3 className="text-4xl font-bold text-gray-800 mb-8">
              : نظام الحضور والانصراف
            </h3>
            <p className="text-gray-600 font-bold text-2xl">
              يعتمد على التعرف على الوجه لتسجيل دخول وخروج الموظفين بدقة، مما
              يعزز الانضباط ويوفر تقارير فورية.
            </p>
          </div>
          <div className="flex justify-start mb-4 p-6">
            <button className="flex items-center justify-center w-20 h-16 bg-gray-200 hover:bg-gray-300 rounded-bl-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-10 w-10 text-black text-1xl font-bold"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="relative">
            <Image
              src={img}
              alt="Attendance System"
              className="w-full h-56 object-cover"
            />
          </div>
          <div className="p-6 text-end">
            <h3 className="text-4xl font-bold text-gray-800 mb-8">
              : نظام الحضور والانصراف
            </h3>
            <p className="text-gray-600 font-bold text-2xl">
              يعتمد على التعرف على الوجه لتسجيل دخول وخروج الموظفين بدقة، مما
              يعزز الانضباط ويوفر تقارير فورية.
            </p>
          </div>
          <div className="flex justify-start mb-4 p-6">
            <button className="flex items-center justify-center w-20 h-16 bg-gray-200 hover:bg-gray-300 rounded-bl-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-10 w-10 text-black text-1xl font-bold"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMyCash;
