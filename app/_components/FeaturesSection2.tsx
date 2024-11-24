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
            <h3 className="text-3xl text-end font-semibold text-gray-900 mb-4">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-8">
          {/* Feature Image */}
          <div className="flex justify-center items-center bg-slate-100 rounded-2xl order-2 lg:order-1">
            <div className="relative w-full max-w-2xl">
              <Image
                src={posImage}
                alt="System View"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Feature Content */}
          <div className="flex flex-col justify-center items-end p-8 order-1 lg:order-2">
            <div className="text-primary-20 text-4xl font-bold mb-4">02</div>
            <h3 className="text-3xl text-end font-semibold text-gray-900 mb-4">
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
            <div className="text-primary-20 text-4xl font-bold mb-4">03</div>
            <h3 className="text-3xl text-end font-semibold text-gray-900 mb-4">
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
