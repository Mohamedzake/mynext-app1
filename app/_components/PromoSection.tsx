import React from "react";
import { useTranslations } from "next-intl";
import img from "@/public/Frame 1171278757.png";
import Image from "next/image";
import im from "@/public/Frame.png";

const PromoSection: React.FC = () => {
  const t = useTranslations("PromoSection");

  return (
    <section className="relative flex justify-center items-center px-4 sm:px-8 lg:px-20 bg-slate-300 mt-20">
      {/* Content Container */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-end px-4 py-8 order-2 lg:order-1">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {t("promoHeading")}
          </h2>
          <p className="text-2xl text-gray-800">{t("promoDescription")}</p>

          {/* Call-to-action Button */}
          <button>
            <Image
              src={im}
              alt={t("ctaText")}
              height={200}
              width={200}
              className="mt-10"
            />
          </button>
        </div>

        {/* Image Section (Appears First on Small Screens) */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2 mt-10 lg:mt-0">
          <div className="relative">
            {/* Single Image for the two phones */}
            <Image src={img} alt="App Preview" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
