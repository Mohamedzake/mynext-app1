// components/Solutions.tsx

import Image from "next/image";
import Link from "next/link";
import posImage from "@/public/about-1.jpg";
import deliveryImage from "@/public/about-2.jpg";
import { useTranslations } from "next-intl";
export default function Missions() {
  const t = useTranslations("about_my_cash");
  return (
    <section className="bg-white py-16 px-6 sm:px-10 lg:px-20 mt-10">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-10 sm:mb-14 lg:mb-20">
            {t("vision_mission")}
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          <div>
            <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 mb-6">
              <Image
                src={posImage}
                alt="حلول نقاط البيع"
                className="rounded-lg"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 sm:p-8 md:p-10 flex flex-col justify-center items-end text-right">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary-20 mb-4">
              {t("vision")}
            </h3>
            <p className="text-black text-2xl sm:text-base lg:text-2xl font-bold mb-6">
              {t("leadership_in_technology")}
            </p>
          </div>
        </div>
        {/* ////////////// */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-white rounded-lg p-6 sm:p-8 md:p-10 flex flex-col justify-center items-end text-right order-2 lg:order-1">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary-20 mb-4">
              {t("vision")}
            </h3>
            <p className="text-black text-2xl sm:text-base lg:text-2xl font-bold mb-6">
              {t("leadership_in_technology")}
            </p>
          </div>
          <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 mb-6 order-1 lg:order-2">
            <Image
              src={posImage}
              alt="حلول نقاط البيع"
              className="rounded-lg"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
