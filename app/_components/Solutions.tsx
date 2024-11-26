// import Image from "next/image";
// import Link from "next/link";
// import posImage from "@/public/about-1.jpg";
// import pos from "@/public/pos_img.jpg";
// import deliveryImage from "@/public/about-2.jpg";
// import { useTranslations } from "next-intl";

// export default function Solutions() {
//   const t = useTranslations("solutions");

//   return (
//     <section className="bg-white py-12 px-6 md:py-16 md:px-16">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-8 md:mb-12">
//           <h2 className="text-lg md:text-xl text-blue-600 font-semibold mb-2">
//             {t("discover_our_solutions")}
//           </h2>
//           <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
//             {t("control_store_payments")}
//           </h1>
//           <p className="text-gray-500 max-w-lg md:max-w-2xl mx-auto mt-4">
//             {t("dummy_text")}
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div className="bg-stone-50 shadow-lg rounded-2xl p-6 flex flex-col items-center text-center">
//             <div className="relative mb-8 md:mb-16 w-full max-w-md mx-auto">
//               <Image
//                 src={pos}
//                 alt="حلول نقاط البيع"
//                 className="rounded-lg"
//                 width={500}
//                 height={400}
//               />
//             </div>
//             <h3 className="text-2xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
//               {t("pos_solutions")}
//             </h3>
//             <p className="text-gray-500 mb-4 md:mb-6 text-lg md:text-xl">
//               {t("dummy_text")}
//             </p>
//             <div className="flex flex-col gap-4 md:flex-col lg:flex-row justify-center">
//               <a className="border flex items-center justify-center border-primary-20 text-primary-20 font-bold text-lg md:text-xl px-4 py-2 rounded-full hover:bg-green-50 transition w-full md:w-full lg:w-auto">
//                 {t("learn_more")}
//               </a>
//               <a className="bg-primary-20 text-lg md:text-xl text-white px-4 py-2 rounded-full hover:bg-green-700 transition w-full md:w-full lg:w-auto">
//                 {t("get_your_trial")}
//               </a>
//             </div>
//           </div>

//           <div className="bg-stone-50 shadow-lg rounded-2xl p-6 flex flex-col items-center text-center">
//             <div className="relative mb-8 md:mb-16 w-full max-w-md mx-auto">
//               <Image
//                 src={pos}
//                 alt="حلول نقاط البيع"
//                 className="rounded-lg"
//                 width={500}
//                 height={400}
//               />
//             </div>
//             <h3 className="text-2xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
//               {t("pos_solutions")}
//             </h3>
//             <p className="text-gray-500 mb-4 md:mb-6 text-lg md:text-xl">
//               {t("dummy_text")}
//             </p>
//             <div className="flex flex-col gap-4 md:flex-col lg:flex-row justify-center">
//               <a className="border flex items-center justify-center border-primary-20 text-primary-20 font-bold text-lg md:text-xl px-4 py-2 rounded-full hover:bg-green-50 transition w-full md:w-full lg:w-auto">
//                 {t("learn_more")}
//               </a>
//               <a className="bg-primary-20 text-lg md:text-xl text-white px-4 py-2 rounded-full hover:bg-green-700 transition w-full md:w-full lg:w-auto">
//                 {t("get_your_trial")}
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import Image from "next/image";
import Link from "next/link";
import posImage from "@/public/about-1.jpg";
import pos from "@/public/pos_img.jpg";
import deliveryImage from "@/public/about-2.jpg";
import { useTranslations } from "next-intl";

export default function Solutions() {
  const t = useTranslations("solutions");

  return (
    <section className="bg-white py-12 px-6 md:py-16 md:px-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-lg md:text-xl text-blue-600 font-semibold mb-2">
            {t("discover_our_solutions")}
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            {t("control_store_payments")}
          </h1>
          <p className="text-gray-500 max-w-lg md:max-w-2xl mx-auto mt-4">
            {t("dummy_text")}
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* First Item */}
          <div className="bg-stone-50 shadow-lg rounded-2xl p-6 flex flex-col items-center text-center">
            <div className="relative mb-8 md:mb-16 w-full max-w-md mx-auto">
              <Image
                src={pos}
                alt="حلول نقاط البيع"
                className="rounded-lg"
                width={500}
                height={400}
              />
            </div>
            <h3 className="text-2xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
              {t("pos_solutions")}
            </h3>
            <p className="text-gray-500 mb-4 md:mb-6 text-lg md:text-xl">
              {t("dummy_text")}
            </p>
            <div className="flex flex-col gap-4 md:flex-col lg:flex-row justify-center">
              <a className="border flex items-center justify-center border-primary-20 text-primary-20 font-bold text-lg md:text-xl px-4 py-2 rounded-full hover:bg-green-50 transition w-full md:w-full lg:w-auto">
                {t("learn_more")}
              </a>
              <a className="bg-primary-20 text-lg md:text-xl text-white px-4 py-2 rounded-full hover:bg-green-700 transition w-full md:w-full lg:w-auto">
                {t("get_your_trial")}
              </a>
            </div>
          </div>

          {/* Second Item */}
          <div className="bg-stone-50 shadow-lg rounded-2xl p-6 flex flex-col items-center text-center">
            <div className="relative mb-8 md:mb-16 w-full max-w-md mx-auto">
              <Image
                src={pos}
                alt="حلول نقاط البيع"
                className="rounded-lg"
                width={500}
                height={400}
              />
            </div>
            <h3 className="text-2xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
              {t("pos_solutions")}
            </h3>
            <p className="text-gray-500 mb-4 md:mb-6 text-lg md:text-xl">
              {t("dummy_text")}
            </p>
            <div className="flex flex-col gap-4 md:flex-col lg:flex-row justify-center">
              <a className="border flex items-center justify-center border-primary-20 text-primary-20 font-bold text-lg md:text-xl px-4 py-2 rounded-full hover:bg-green-50 transition w-full md:w-full lg:w-auto">
                {t("learn_more")}
              </a>
              <a className="bg-primary-20 text-lg md:text-xl text-white px-4 py-2 rounded-full hover:bg-green-700 transition w-full md:w-full lg:w-auto">
                {t("get_your_trial")}
              </a>
            </div>
          </div>

          {/* Third Item */}
          <div className="bg-stone-50 shadow-lg rounded-2xl p-6 flex flex-col items-center text-center">
            <div className="relative mb-8 md:mb-16 w-full max-w-md mx-auto">
              <Image
                src={pos}
                alt="حلول نقاط البيع"
                className="rounded-lg"
                width={500}
                height={400}
              />
            </div>
            <h3 className="text-2xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
              {t("pos_solutions")}
            </h3>
            <p className="text-gray-500 mb-4 md:mb-6 text-lg md:text-xl">
              {t("dummy_text")}
            </p>
            <div className="flex flex-col gap-4 md:flex-col lg:flex-row justify-center">
              <a className="border flex items-center justify-center border-primary-20 text-primary-20 font-bold text-lg md:text-xl px-4 py-2 rounded-full hover:bg-green-50 transition w-full md:w-full lg:w-auto">
                {t("learn_more")}
              </a>
              <a className="bg-primary-20 text-lg md:text-xl text-white px-4 py-2 rounded-full hover:bg-green-700 transition w-full md:w-full lg:w-auto">
                {t("get_your_trial")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
