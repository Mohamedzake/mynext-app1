// components/Solutions.tsx

import Image from "next/image";
import Link from "next/link";
import posImage from "@/public/about-1.jpg";
import deliveryImage from "@/public/about-2.jpg";
import { useTranslations } from "next-intl";
import { HiOutlineLightBulb } from "react-icons/hi";

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
          <div className="order-2 lg:order-1">
            <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 mb-6 ">
              <Image
                src={posImage}
                alt="حلول نقاط البيع"
                className="rounded-lg"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 sm:p-8 md:p-10 flex flex-col justify-center items-center text-center lg:items-end lg:text-right order-1 lg:order-2">
            <div className="flex gap-4 flex-col lg:flex-row">
              <div className="bg-primary-20 rounded-full h-8 w-8 flex justify-center items-center lg:order-2">
                <HiOutlineLightBulb size={24} className="text-primary-10" />
              </div>{" "}
              <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold text-primary-20 mb-4 lg:order-1">
                {t("vision")}
              </h3>
            </div>
            <p className="text-black text-end text-2xl sm:text-base lg:text-2xl font-bold mb-6">
              {t("leadership_in_technology")}
            </p>
          </div>
        </div>
        {/* ////////////// */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-white rounded-lg p-6 sm:p-8 md:p-10 flex flex-col justify-center items-center text-center lg:items-end lg:text-right order-1 lg:order-1">
            <div className="flex gap-4 flex-col lg:flex-row">
              <div className="bg-primary-20 rounded-full h-8 w-8 flex justify-center items-center lg:order-2">
                <HiOutlineLightBulb size={24} className="text-primary-10" />
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold text-primary-20 mb-4 lg:order-1">
                {t("vision")}
              </h3>
            </div>
            <p className="text-black text-2xl text-end sm:text-base lg:text-2xl font-bold mb-6">
              {t("leadership_in_technology")}
            </p>
          </div>
          <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 mb-6 order-2 lg:order-2">
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
