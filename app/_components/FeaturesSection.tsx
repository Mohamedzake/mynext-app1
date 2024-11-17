import Image from "next/image";
import feature1 from "@/public/about-1.jpg";
import feature2 from "@/public/about-2.jpg";
import feature3 from "@/public/about-1.jpg";
import { useTranslations } from "next-intl";
export default function FeaturesSection() {
  const t = useTranslations("featuresSection");

  return (
    <section className="bg-primary-30 py-16">
      <div className="container mx-auto px-6 text-center text-white">
        <div className="mb-12">
          <h3 className="text-xl font-medium"> {t("exclusive_features")}</h3>
          <h2 className="text-4xl font-bold mb-4">
            {t("enhance_your_business")}
          </h2>
          <p className="max-w-3xl mx-auto text-lg">
            {t("enhance_performance")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 text-gray-800">
            <Image
              src={feature1}
              alt="خيار إصدار الفواتير فوريًا"
              className="rounded-md mb-4"
              width={400}
              height={250}
            />
            <h4 className="text-2xl font-bold mb-2">
              {t("instant_invoice_option")}
            </h4>
            <p className="text-gray-600">{t("instant_invoice_description")}</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-gray-800 md:row-span-2 relative">
            <Image
              src={feature2}
              alt="إصدار التقارير بتحديثات لحظية"
              className="rounded-md mb-4"
              width={400}
              height={500}
            />
            <h4 className="text-2xl font-bold mb-2">
              {t("live_report_generation")}
            </h4>
            <p className="text-gray-600">{t("live_report_description")}</p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-gray-800">
            <Image
              src={feature3}
              alt="إدارة المخزون بسلاسة"
              className="rounded-md mb-4"
              width={400}
              height={250}
            />
            <h4 className="text-2xl font-bold mb-2">
              {t("smooth_inventory_management")}
            </h4>
            <p className="text-gray-600">{t("smooth_inventory_description")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
