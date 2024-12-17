// import Image from "next/image";

// import sol from "@/public/servicesAI.png";
// import { useTranslations } from "next-intl";
// const YourComponent = () => {
//   const t = useTranslations("items");
//   return (
//     <div className="flex justify-center mt-20 mb-14 bg-primary-10">
//       <div className="flex w-full px-20 gap-4 flex-col lg:flex-row ">
//         {/* Left Column */}
//         <div className="w-full lg:w-1/4 flex flex-col gap-6  items-center space-y-4 order-2 lg:order-1">
//           <div className="flex flex-col items-center lg:items-end text-right">
//             <p className="text-4xl font-bold text-primary-20 mb-5">
//               {t("numbers.04")}
//             </p>
//             <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
//               {t("system_cloud_pos")}
//             </h3>
//             <p className="text-base md:text-lg text-gray-700 text-end">
//               {t("digital_connection")}
//             </p>
//           </div>
//           <div className="flex flex-col items-center lg:items-end text-right">
//             <p className="text-4xl font-bold text-primary-20 mb-5">
//               {t("numbers.05")}
//             </p>
//             <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
//               {t("system_cloud_pos")}
//             </h3>
//             <p className="text-base md:text-lg text-gray-700 text-end">
//               {t("digital_connection")}
//             </p>
//           </div>
//           <div className="flex flex-col items-center lg:items-end text-right">
//             <p className="text-4xl font-bold text-primary-20 mb-5">
//               {t("numbers.06")}
//             </p>
//             <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
//               {t("system_cloud_pos")}
//             </h3>
//             <p className="text-base md:text-lg text-gray-700 text-end">
//               {t("digital_connection")}
//             </p>
//           </div>
//         </div>

//         {/* Center Image */}
//         <div className="w-full lg:w-1/2 flex flex-col justify-center items-center gap-4 text-center order-3 lg:order-2 mb-6 lg:mb-0">
//           <Image
//             src={sol}
//             alt="Central Image"
//             className="rounded-md"
//             width={570}
//             height={570}
//           />
//         </div>

//         {/* Right Column */}
//         <div className="w-full lg:w-1/4 flex flex-col gap-6 items-center space-y-4 order-1 lg:order-3">
//           <div className="flex flex-col items-center lg:items-end text-right">
//             <p className="text-4xl font-bold text-primary-20 mb-5">
//               {t("numbers.01")}
//             </p>
//             <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
//               {t("system_cloud_pos")}
//             </h3>
//             <p className="text-base md:text-lg text-gray-700 text-end">
//               {t("digital_connection")}
//             </p>
//           </div>
//           <div className="flex flex-col items-center lg:items-end text-right">
//             <p className="text-4xl font-bold text-primary-20 mb-5">
//               {t("numbers.02")}
//             </p>
//             <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
//               {t("system_cloud_pos")}
//             </h3>
//             <p className="text-base md:text-lg text-gray-700 text-end">
//               {t("digital_connection")}
//             </p>
//           </div>
//           <div className="flex flex-col items-center lg:items-end text-right">
//             <p className="text-4xl font-bold text-primary-20 mb-5">
//               {t("numbers.03")}
//             </p>
//             <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
//               {t("system_cloud_pos")}
//             </h3>
//             <p className="text-base md:text-lg text-gray-700 text-end">
//               {t("digital_connection")}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default YourComponent;
import Image from "next/image";
// import sol from "@/public/services2.png";
import tes from "@/public/tes.webp";
import sol from "@/public/servicesAI.png";
import { useTranslations } from "next-intl";
const YourComponent = () => {
  const t = useTranslations("items");
  return (
    <div>
      <div className="text-center mb-8 md:mb-12 mt-16">
        <h1 className="text-3xl md:text-4xl lg:px-48 font-bold text-gray-800">
          {t("control_store_payments")}
        </h1>
        <p className="text-gray-500 max-w-lg md:max-w-2xl mx-auto mt-4">
          {t("dummy_text")}
        </p>
      </div>
      <div className="flex justify-center mt-20 mb-14 bg-primary-10">
        <div className="flex w-full px-2 sm:px-16 gap-3 flex-col lg:flex-row">
          {/* Left Column */}
          <div className="w-full lg:w-1/4 flex flex-col gap-6  items-center space-y-4 order-2 lg:order-1">
            <div className="flex flex-col items-center lg:items-end text-right">
              <p className="text-4xl font-bold text-primary-20 mb-5">
                {t("numbers.04")}
              </p>
              <h3 className="text-xl sm:text-2xl md:text-2xl font-semibold text-gray-800 mb-4 text-center md:text-end">
                {t("system_cloud_pos")}
              </h3>
              <p className="text-base md:text-base text-gray-700 text-center md:text-end">
                {t("digital_connection")}
              </p>
            </div>
            <div className="flex flex-col items-center lg:items-end text-right">
              <p className="text-4xl font-bold text-primary-20 mb-5">
                {t("numbers.05")}
              </p>
              <h3 className="text-xl sm:text-2xl md:text-2xl font-semibold text-gray-800 mb-4 text-center md:text-end">
                {t("system_cloud_pos")}
              </h3>
              <p className="text-base md:text-base text-gray-700 text-center md:text-end">
                {t("digital_connection")}
              </p>
            </div>
            <div className="flex flex-col items-center lg:items-end text-right ">
              <p className="text-4xl font-bold text-primary-20 mb-5">
                {t("numbers.06")}
              </p>
              <h3 className="text-xl sm:text-2xl md:text-2xl font-semibold text-gray-800 mb-4 text-center md:text-end">
                {t("system_cloud_pos")}
              </h3>
              <p className="text-base md:text-base text-gray-700 text-center md:text-end mb-8">
                {t("digital_connection")}
              </p>
            </div>
          </div>

          {/* Center Image */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center gap-4 text-center order-3 lg:order-2 mb-6 lg:mb-0">
            <Image
              src={sol}
              alt="Central Image"
              className="rounded-md"
              width={570}
              height={570}
            />
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/4 flex flex-col gap-6 items-center space-y-4 order-1 lg:order-3">
            <div className="flex flex-col items-center lg:items-end text-right">
              <p className="text-4xl font-bold text-primary-20 mb-5">
                {t("numbers.01")}
              </p>
              <h3 className="text-xl sm:text-2xl md:text-2xl font-semibold text-gray-800 mb-4 text-center md:text-end">
                {t("system_cloud_pos")}
              </h3>
              <p className="text-base md:text-base text-gray-700 text-center md:text-end">
                {t("digital_connection")}
              </p>
            </div>
            <div className="flex flex-col items-center lg:items-end text-right">
              <p className="text-4xl font-bold text-primary-20 mb-5">
                {t("numbers.02")}
              </p>
              <h3 className="text-xl sm:text-2xl md:text-2xl font-semibold text-gray-800 mb-4 text-center md:text-end">
                {t("system_cloud_pos")}
              </h3>
              <p className="text-base md:text-base text-gray-700 text-center md:text-end">
                {t("digital_connection")}
              </p>
            </div>
            <div className="flex flex-col items-center lg:items-end text-right">
              <p className="text-4xl font-bold text-primary-20 mb-5">
                {t("numbers.03")}
              </p>
              <h3 className="text-xl sm:text-2xl md:text-2xl font-semibold text-gray-800 mb-4 text-center md:text-end">
                {t("system_cloud_pos")}
              </h3>
              <p className="text-base md:text-base text-gray-700 text-center md:text-end">
                {t("digital_connection")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
