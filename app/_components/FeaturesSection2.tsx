import Image from "next/image";
import Link from "next/link";
import posImage from "@/public/tes.webp";
import deliveryImage from "@/public/about-2.jpg";
import { useTranslations } from "next-intl";
export default function FeaturesSection2() {
  const t = useTranslations("solutions");
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-xl text-blue-600 font-semibold mb-2">
            {t("discover_our_solutions")}
          </h2>
          <h1 className="text-4xl font-bold text-gray-800">
            {t("control_store_payments")}
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto mt-4">
            {t("dummy_text")}
          </p>
        </div>{" "}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          <div>
            <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 mb-6 bg-slate-100">
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
