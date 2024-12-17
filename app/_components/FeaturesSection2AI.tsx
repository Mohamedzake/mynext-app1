import React from "react";
import Image from "next/image";
import posImage from "@/public/div.relative.png";
import { useTranslations } from "next-intl";

const FeaturesSection2: React.FC = () => {
  const t = useTranslations("featuresSection2");
  return (
    <section className="bg-white py-16">
      <div className="mx-auto px-2 sm:px-8">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:px-32 font-bold text-gray-900 mt-2">
            {t("enhanceYourBusiness1")}
          </h1>
        </div>

        {/* Feature Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-14">
          {/* Feature Content */}
          <div className="flex flex-col justify-center items-center lg:items-end p-8">
            <div className="text-primary-20 text-4xl font-bold mb-4">01</div>
            <h3 className="text-2xl sm:text-3xl text-center lg:text-end font-semibold text-gray-900 mb-4">
              {t("feature1Title")}
            </h3>
            <p className="text-gray-600 mb-6 text-center lg:text-end">
              {t("feature1Description")}
            </p>
            <button className="bg-primary-20 text-white rounded-full px-6 py-3 font-medium hover:bg-green-600 transition duration-300">
              {t("ctaButtonText")}
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

        {/* Additional Sections (Feature 2 and 3) */}
        {/* Feature 2 */}
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
          <div className="flex flex-col justify-center items-center lg:items-end p-8 order-1 lg:order-2">
            <div className="text-primary-20 text-4xl font-bold mb-4">02</div>
            <h3 className="text-2xl sm:text-3xl text-center lg:text-end font-semibold text-gray-900 mb-4">
              {t("feature1Title")}
            </h3>
            <p className="text-gray-600 mb-6 text-center lg:text-end">
              {t("feature1Description")}
            </p>
            <button className="bg-primary-20 text-white rounded-full px-6 py-3 font-medium hover:bg-green-600 transition duration-300">
              {t("ctaButtonText")}
            </button>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-14">
          {/* Feature Content */}
          <div className="flex flex-col justify-center items-center lg:items-end p-8">
            <div className="text-primary-20 text-4xl font-bold mb-4">03</div>
            <h3 className="text-2xl sm:text-3xl text-center lg:text-end font-semibold text-gray-900 mb-4">
              {t("feature1Title")}
            </h3>
            <p className="text-gray-600 mb-6 text-center lg:text-end">
              {t("feature1Description")}
            </p>
            <button className="bg-primary-20 text-white rounded-full px-6 py-3 font-medium hover:bg-green-600 transition duration-300">
              {t("ctaButtonText")}
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
