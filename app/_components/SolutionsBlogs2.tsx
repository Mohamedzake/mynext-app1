// components/Solutions.tsx

// import Image from "next/image";
// import Link from "next/link";
// import posImage from "@/public/about-1.jpg";
// import deliveryImage from "@/public/about-2.jpg";
// import { useTranslations } from "next-intl";
// export default function SolutionsBlogs() {
//   const t = useTranslations("solutions");
//   return (
//     <section className=" bg-gray-50 py-16 mb-20">
//       <div className="container mx-auto px-14">
//         <div className="text-center mb-12">
//           <h2 className="text-xl text-blue-600 font-semibold mb-2">
//             {t("discover_our_solutions")}
//           </h2>
//           <h1 className="text-4xl font-bold text-gray-800">
//             {t("control_store_payments")}
//           </h1>
//           <p className="text-gray-500 max-w-2xl mx-auto mt-4">
//             {t("dummy_text")}
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
//             <div className="relative w-full h-48 mb-6">
//               <Image
//                 src={posImage}
//                 alt="حلول نقاط البيع"
//                 className="rounded-lg"
//                 layout="fill"
//                 objectFit="cover"
//               />
//             </div>
//             <h3 className="text-2xl font-bold text-gray-800 mb-4">
//               {t("pos_solutions")}
//             </h3>
//             <p className="text-gray-500 mb-6">{t("dummy_text")}</p>
//             <div className="flex gap-4">
//               <a className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">
//                 {t("get_your_trial")}
//               </a>

//               <a className="border border-green-600 text-green-600 px-6 py-2 rounded-full hover:bg-green-50 transition">
//                 {t("learn_more")}
//               </a>
//             </div>
//           </div>
//           <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
//             <div className="relative w-full h-48 mb-6">
//               <Image
//                 src={posImage}
//                 alt="حلول نقاط البيع"
//                 className="rounded-lg"
//                 layout="fill"
//                 objectFit="cover"
//               />
//             </div>
//             <h3 className="text-2xl font-bold text-gray-800 mb-4">
//               {t("pos_solutions")}
//             </h3>
//             <p className="text-gray-500 mb-6">{t("dummy_text")}</p>
//             <div className="flex gap-4">
//               <a className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">
//                 {t("get_your_trial")}
//               </a>

//               <a className="border border-green-600 text-green-600 px-6 py-2 rounded-full hover:bg-green-50 transition">
//                 {t("learn_more")}
//               </a>
//             </div>
//           </div>
//           <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
//             <div className="relative w-full h-48 mb-6">
//               <Image
//                 src={deliveryImage}
//                 alt="حلول المبيعات"
//                 className="rounded-lg"
//                 layout="fill"
//                 objectFit="cover"
//               />
//             </div>
//             <h3 className="text-2xl font-bold text-gray-800 mb-4">
//               {t("pos_solutions")}
//             </h3>
//             <p className="text-gray-500 mb-6">{t("dummy_text")}</p>
//             <div className="flex gap-4">
//               <a className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">
//                 {t("get_your_trial")}
//               </a>

//               <a className="border border-green-600 text-green-600 px-6 py-2 rounded-full hover:bg-green-50 transition">
//                 {t("learn_more")}
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import Image from "next/image";

import posImage from "@/public/about-1.jpg";
import deliveryImage from "@/public/about-2.jpg";
import { useTranslations } from "next-intl";
import avatar from "@/public/avatar.jpg";
export default function SolutionsBlogs() {
  const t = useTranslations("solutionsBlogs");

  return (
    <section className="bg-gray-50 py-16 px-2 sm:px-8">
      <div className="mx-auto px-0 sm:px-6">
        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden px-2 py-5 sm:p-5 z-20">
            <div className="relative w-full h-60">
              <Image
                src={posImage}
                alt="حلول نقاط البيع"
                className="object-cover w-full h-full"
                layout="fill"
              />
            </div>
            <div className="py-2 px-0 sm:p-6">
              <h3 className="text-green-600 text-sm font-semibold mb-2 text-end">
                {t("design")}
              </h3>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 flex items-center justify-between text-end">
                <a className="text-2xl text-gray-600 hover:text-gray-800 transition ml-2">
                  ↗
                </a>
                {t("article_title")}
              </h2>
              <p className="text-gray-500 mb-8 text-end leading-relaxed">
                {t("article_body")}
              </p>

              <div className="flex items-center justify-end mt-4">
                <div className="flex items-center gap-4 space-x-2 rtl:space-x-reverse flex-row-reverse">
                  <Image
                    src={avatar}
                    alt="Avatar"
                    width={42}
                    height={42}
                    className="rounded-full"
                  />
                  <div className="text-right">
                    <p className="text-sm font-semibold text-black">
                      {t("author_name")}
                    </p>
                    <p className="text-xs text-gray-500">{t("publish_date")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card 2 (Same structure as Card 1) */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden px-2 py-5 sm:p-5 z-20">
            <div className="relative w-full h-60">
              <Image
                src={posImage}
                alt="حلول نقاط البيع"
                className="object-cover w-full h-full"
                layout="fill"
              />
            </div>
            <div className="py-2 px-0 sm:p-6">
              <h3 className="text-green-600 text-sm font-semibold mb-2 text-end">
                {t("design")}
              </h3>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 flex items-center justify-between text-end">
                <a className="text-2xl text-gray-600 hover:text-gray-800 transition ml-2">
                  ↗
                </a>
                {t("article_title")}
              </h2>
              <p className="text-gray-500 mb-8 text-end leading-relaxed">
                {t("article_body")}
              </p>

              <div className="flex items-center justify-end mt-4">
                <div className="flex items-center gap-4 space-x-2 rtl:space-x-reverse flex-row-reverse">
                  <Image
                    src={avatar}
                    alt="Avatar"
                    width={42}
                    height={42}
                    className="rounded-full"
                  />
                  <div className="text-right">
                    <p className="text-sm font-semibold text-black">
                      {t("author_name")}
                    </p>
                    <p className="text-xs text-gray-500">{t("publish_date")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card 3 (Different Image) */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden px-2 py-5 sm:p-5 z-20">
            <div className="relative w-full h-60">
              <Image
                src={posImage}
                alt="حلول نقاط البيع"
                className="object-cover w-full h-full"
                layout="fill"
              />
            </div>
            <div className="py-2 px-0 sm:p-6">
              <h3 className="text-green-600 text-sm font-semibold mb-2 text-end">
                {t("design")}
              </h3>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 flex items-center justify-between text-end">
                <a className="text-2xl text-gray-600 hover:text-gray-800 transition ml-2">
                  ↗
                </a>
                {t("article_title")}
              </h2>
              <p className="text-gray-500 mb-8 text-end leading-relaxed">
                {t("article_body")}
              </p>

              <div className="flex items-center justify-end mt-4">
                <div className="flex items-center gap-4 space-x-2 rtl:space-x-reverse flex-row-reverse">
                  <Image
                    src={avatar}
                    alt="Avatar"
                    width={42}
                    height={42}
                    className="rounded-full"
                  />
                  <div className="text-right">
                    <p className="text-sm font-semibold text-black">
                      {t("author_name")}
                    </p>
                    <p className="text-xs text-gray-500">{t("publish_date")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* Card 4 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden px-2 py-5 sm:p-5">
            <div className="relative w-full h-60">
              <Image
                src={posImage}
                alt="حلول نقاط البيع"
                className="object-cover w-full h-full"
                layout="fill"
              />
            </div>
            <div className="py-2 px-0 sm:p-6">
              <h3 className="text-green-600 text-sm font-semibold mb-2 text-end">
                {t("design")}
              </h3>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 flex items-center justify-between text-end">
                <a className="text-2xl text-gray-600 hover:text-gray-800 transition ml-2">
                  ↗
                </a>
                {t("article_title")}
              </h2>
              <p className="text-gray-500 mb-8 text-end leading-relaxed">
                {t("article_body")}
              </p>

              <div className="flex items-center justify-end mt-4">
                <div className="flex items-center gap-4 space-x-2 rtl:space-x-reverse flex-row-reverse">
                  <Image
                    src={avatar}
                    alt="Avatar"
                    width={42}
                    height={42}
                    className="rounded-full"
                  />
                  <div className="text-right">
                    <p className="text-sm font-semibold text-black">
                      {t("author_name")}
                    </p>
                    <p className="text-xs text-gray-500">{t("publish_date")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card 5 (Same structure as Card 1) */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden px-2 py-5 sm:p-5">
            <div className="relative w-full h-60">
              <Image
                src={posImage}
                alt="حلول نقاط البيع"
                className="object-cover w-full h-full"
                layout="fill"
              />
            </div>
            <div className="py-2 px-0 sm:p-6">
              <h3 className="text-green-600 text-sm font-semibold mb-2 text-end">
                {t("design")}
              </h3>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 flex items-center justify-between text-end">
                <a className="text-2xl text-gray-600 hover:text-gray-800 transition ml-2">
                  ↗
                </a>
                {t("article_title")}
              </h2>
              <p className="text-gray-500 mb-8 text-end leading-relaxed">
                {t("article_body")}
              </p>

              <div className="flex items-center justify-end mt-4">
                <div className="flex items-center gap-4 space-x-2 rtl:space-x-reverse flex-row-reverse">
                  <Image
                    src={avatar}
                    alt="Avatar"
                    width={42}
                    height={42}
                    className="rounded-full"
                  />
                  <div className="text-right">
                    <p className="text-sm font-semibold text-black">
                      {t("author_name")}
                    </p>
                    <p className="text-xs text-gray-500">{t("publish_date")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card 6 (Different Image) */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden px-2 py-5 sm:p-5">
            <div className="relative w-full h-60">
              <Image
                src={posImage}
                alt="حلول نقاط البيع"
                className="object-cover w-full h-full"
                layout="fill"
              />
            </div>
            <div className="py-2 px-0 sm:p-6">
              <h3 className="text-green-600 text-sm font-semibold mb-2 text-end">
                {t("design")}
              </h3>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 flex items-center justify-between text-end">
                <a className="text-2xl text-gray-600 hover:text-gray-800 transition ml-2">
                  ↗
                </a>
                {t("article_title")}
              </h2>
              <p className="text-gray-500 mb-8 text-end leading-relaxed">
                {t("article_body")}
              </p>

              <div className="flex items-center justify-end mt-4">
                <div className="flex items-center gap-4 space-x-2 rtl:space-x-reverse flex-row-reverse">
                  <Image
                    src={avatar}
                    alt="Avatar"
                    width={42}
                    height={42}
                    className="rounded-full"
                  />
                  <div className="text-right">
                    <p className="text-sm font-semibold text-black">
                      {t("author_name")}
                    </p>
                    <p className="text-xs text-gray-500">{t("publish_date")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden px-2 py-5 sm:p-5">
            <div className="relative w-full h-60">
              <Image
                src={posImage}
                alt="حلول نقاط البيع"
                className="object-cover w-full h-full"
                layout="fill"
              />
            </div>
            <div className="py-2 px-0 sm:p-6">
              <h3 className="text-green-600 text-sm font-semibold mb-2 text-end">
                {t("design")}
              </h3>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 flex items-center justify-between text-end">
                <a className="text-2xl text-gray-600 hover:text-gray-800 transition ml-2">
                  ↗
                </a>
                {t("article_title")}
              </h2>
              <p className="text-gray-500 mb-8 text-end leading-relaxed">
                {t("article_body")}
              </p>

              <div className="flex items-center justify-end mt-4">
                <div className="flex items-center gap-4 space-x-2 rtl:space-x-reverse flex-row-reverse">
                  <Image
                    src={avatar}
                    alt="Avatar"
                    width={42}
                    height={42}
                    className="rounded-full"
                  />
                  <div className="text-right">
                    <p className="text-sm font-semibold text-black">
                      {t("author_name")}
                    </p>
                    <p className="text-xs text-gray-500">{t("publish_date")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card 2 (Same structure as Card 1) */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden px-2 py-5 sm:p-5">
            <div className="relative w-full h-60">
              <Image
                src={posImage}
                alt="حلول نقاط البيع"
                className="object-cover w-full h-full"
                layout="fill"
              />
            </div>
            <div className="py-2 px-0 sm:p-6">
              <h3 className="text-green-600 text-sm font-semibold mb-2 text-end">
                {t("design")}
              </h3>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 flex items-center justify-between text-end">
                <a className="text-2xl text-gray-600 hover:text-gray-800 transition ml-2">
                  ↗
                </a>
                {t("article_title")}
              </h2>
              <p className="text-gray-500 mb-8 text-end leading-relaxed">
                {t("article_body")}
              </p>

              <div className="flex items-center justify-end mt-4">
                <div className="flex items-center gap-4 space-x-2 rtl:space-x-reverse flex-row-reverse">
                  <Image
                    src={avatar}
                    alt="Avatar"
                    width={42}
                    height={42}
                    className="rounded-full"
                  />
                  <div className="text-right">
                    <p className="text-sm font-semibold text-black">
                      {t("author_name")}
                    </p>
                    <p className="text-xs text-gray-500">{t("publish_date")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card 3 (Different Image) */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden px-2 py-5 sm:p-5">
            <div className="relative w-full h-60">
              <Image
                src={posImage}
                alt="حلول نقاط البيع"
                className="object-cover w-full h-full"
                layout="fill"
              />
            </div>
            <div className="py-2 px-0 sm:p-6">
              <h3 className="text-green-600 text-sm font-semibold mb-2 text-end">
                {t("design")}
              </h3>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 flex items-center justify-between text-end">
                <a className="text-2xl text-gray-600 hover:text-gray-800 transition ml-2">
                  ↗
                </a>
                {t("article_title")}
              </h2>
              <p className="text-gray-500 mb-8 text-end leading-relaxed">
                {t("article_body")}
              </p>

              <div className="flex items-center justify-end mt-4">
                <div className="flex items-center gap-4 space-x-2 rtl:space-x-reverse flex-row-reverse">
                  <Image
                    src={avatar}
                    alt="Avatar"
                    width={42}
                    height={42}
                    className="rounded-full"
                  />
                  <div className="text-right">
                    <p className="text-sm font-semibold text-black">
                      {t("author_name")}
                    </p>
                    <p className="text-xs text-gray-500">{t("publish_date")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
