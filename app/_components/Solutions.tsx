// components/Solutions.tsx

import Image from "next/image";
import Link from "next/link";
import posImage from "@/public/about-1.jpg";
import deliveryImage from "@/public/about-2.jpg";
import { useTranslations } from "next-intl";
export default function Solutions() {
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
            <div className="relative w-full h-48 mb-6">
              <Image
                src={posImage}
                alt="حلول نقاط البيع"
                className="rounded-lg"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {t("pos_solutions")}
            </h3>
            <p className="text-gray-500 mb-6">{t("dummy_text")}</p>
            <div className="flex gap-4">
              <a className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">
                {t("get_your_trial")}
              </a>

              <a className="border border-green-600 text-green-600 px-6 py-2 rounded-full hover:bg-green-50 transition">
                {t("learn_more")}
              </a>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
            <div className="relative w-full h-48 mb-6">
              <Image
                src={deliveryImage}
                alt="حلول المبيعات"
                className="rounded-lg"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {t("pos_solutions")}
            </h3>
            <p className="text-gray-500 mb-6">{t("dummy_text")}</p>
            <div className="flex gap-4">
              <a className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">
                {t("get_your_trial")}
              </a>

              <a className="border border-green-600 text-green-600 px-6 py-2 rounded-full hover:bg-green-50 transition">
                {t("learn_more")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
