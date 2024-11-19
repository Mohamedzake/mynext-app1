import Image from "next/image";
import posImage from "@/public/about-1.jpg";
import tes from "@/public/tes.webp";
// import { useTranslations } from "next-intl";
const YourComponent = () => {
  // const t = useTranslations("about_my_cash");
  return (
    <div className="flex justify-center mt-20 mb-14 bg-primary-10">
      <div className="flex w-full px-8">
        {/* Left Column */}
        <div className="w-1/4 flex flex-col gap-6 items-center space-y-4">
          <div className="flex flex-col items-end text-right">
            <p className="text-4xl font-bold text-primary-20 mb-5">04</p>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              نظام نقاط بيع سحابي
            </h3>
            <p className="text-base md:text-lg text-gray-700">
              إمكانية الربط الرقمي وتخزين كافة العمليات
            </p>
          </div>
          <div className="flex flex-col items-end text-right">
            <p className="text-4xl font-bold text-primary-20 mb-5">05</p>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              نظام نقاط بيع سحابي
            </h3>
            <p className="text-base md:text-lg text-gray-700">
              إمكانية الربط الرقمي وتخزين كافة العمليات
            </p>
          </div>
          <div className="flex flex-col items-end text-right">
            <p className="text-4xl font-bold text-primary-20 mb-5">06</p>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              نظام نقاط بيع سحابي
            </h3>
            <p className="text-base md:text-lg text-gray-700">
              إمكانية الربط الرقمي وتخزين كافة العمليات
            </p>
          </div>
        </div>

        {/* Center Image */}
        <div className="w-1/2 flex justify-center items-center">
          <Image
            src={tes}
            alt="Central Image"
            className="rounded-md"
            width={800}
            height={800}
          />
        </div>

        {/* Right Column */}
        <div className="w-1/4 flex flex-col gap-6 items-center space-y-4">
          <div className="flex flex-col items-end text-right">
            <p className="text-4xl font-bold text-primary-20 mb-5">01</p>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              نظام نقاط بيع سحابي
            </h3>
            <p className="text-base md:text-lg text-gray-700">
              إمكانية الربط الرقمي وتخزين كافة العمليات
            </p>
          </div>
          <div className="flex flex-col items-end text-right">
            <p className="text-4xl font-bold text-primary-20 mb-5">02</p>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              نظام نقاط بيع سحابي
            </h3>
            <p className="text-base md:text-lg text-gray-700">
              إمكانية الربط الرقمي وتخزين كافة العمليات
            </p>
          </div>
          <div className="flex flex-col items-end text-right">
            <p className="text-4xl font-bold text-primary-20 mb-5">03</p>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              نظام نقاط بيع سحابي
            </h3>
            <p className="text-base md:text-lg text-gray-700">
              إمكانية الربط الرقمي وتخزين كافة العمليات
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
