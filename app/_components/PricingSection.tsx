// import React from "react";

// const PricingSection: React.FC = () => {
//   return (
//     <section className="py-40 relative z-20">
//       <div className="container mx-auto px-6">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//           {/* Professional Plan */}

//           <div className="relative z-20 bg-gray-100 rounded-b-lg  shadow-lg">
//             <div className="flex flex-col py-3 justify-center items-center bg-white">
//               <h3 className="text-4xl font-semibold text-gray-600">
//                 Professional
//               </h3>
//               <div className="mt-4 text-3xl text-gray-500">
//                 <span className=" text-6xl text-gray-800">899</span> SAR/year
//               </div>
//               <div className="mt-2 text-1xl font-bold text-green-500">
//                 Valid for up to 5 users
//               </div>
//             </div>
//             <ul className="mt-6 space-y-4 text-sm text-gray-600 p-8">
//               <li>✅ Add 5 branches</li>
//               <li>✅ Add unlimited products</li>
//               <li>✅ Add unlimited clients</li>
//               <li>✅ Issuing tax invoices</li>
//               <li>✅ Issuing simplified invoices</li>
//               <li>✅ Issuing instant invoices</li>
//               <li>✅ Issuing tax reports</li>
//               <li>✅ Issuing inventory reports</li>
//             </ul>
//             <div className="flex justify-center items-center">
//               <button className="w-96  flex justify-center items-center mt-6 mb-8 bg-blue-900 text-white py-4 rounded-lg ">
//                 Get started
//               </button>
//             </div>
//           </div>
//           {/* Basic Plan */}
//           <div className="relative z-20 bg-gray-100 rounded-b-lg  shadow-lg transform md:scale-125">
//             <div className="absolute flex justify-center items-center  w-full p-3 h-16 top-0 left-1/2 transform -translate-x-1/2 -translate-y-16 bg-blue-900 text-white text-2xl font-bold rounded-t-lg">
//               Most popular ✨
//             </div>
//             <div className="flex flex-col py-3 justify-center items-center bg-white">
//               <h3 className="text-4xl font-semibold text-gray-600">Basic</h3>
//               <div className="mt-4 text-3xl text-gray-500">
//                 <span className=" text-6xl text-gray-800">699</span> SAR/year
//               </div>
//               <div className="mt-2 text-1xl font-bold text-green-500">
//                 Valid for up to 5 users
//               </div>
//             </div>
//             <ul className="mt-6 space-y-4 text-sm text-gray-600 p-8">
//               <li>✅ Add 5 branches</li>
//               <li>✅ Add unlimited products</li>
//               <li>✅ Add unlimited clients</li>
//               <li>✅ Issuing tax invoices</li>
//               <li>✅ Issuing simplified invoices</li>
//               <li>✅ Issuing instant invoices</li>
//               <li>✅ Issuing tax reports</li>
//               <li>✅ Issuing inventory reports</li>
//             </ul>
//             <div className="flex justify-center items-center">
//               <button className="w-96  flex justify-center items-center mt-6 mb-8 bg-blue-600 text-white py-4 rounded-lg ">
//                 Get started
//               </button>
//             </div>
//           </div>

//           {/* Integrated Plan */}

//           <div className="relative z-20 bg-gray-100 rounded-b-lg  shadow-lg">
//             <div className="flex flex-col py-3 justify-center items-center bg-white">
//               <h3 className="text-4xl font-semibold text-gray-600">
//                 Integrated
//               </h3>
//               <div className="mt-4 text-3xl text-gray-500">
//                 <span className=" text-6xl text-gray-800">1199</span> SAR/year
//               </div>
//               <div className="mt-2 text-1xl font-bold text-green-500">
//                 Valid for up to 5 users
//               </div>
//             </div>
//             <ul className="mt-6 space-y-4 text-sm text-gray-600 p-8">
//               <li>✅ Add 5 branches</li>
//               <li>✅ Add unlimited products</li>
//               <li>✅ Add unlimited clients</li>
//               <li>✅ Issuing tax invoices</li>
//               <li>✅ Issuing simplified invoices</li>
//               <li>✅ Issuing instant invoices</li>
//               <li>✅ Issuing tax reports</li>
//               <li>✅ Issuing inventory reports</li>
//             </ul>
//             <div className="flex justify-center items-center">
//               <button className="w-96  flex justify-center items-center mt-6 mb-8 bg-blue-600 text-white py-4 rounded-lg ">
//                 Get started
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PricingSection;
import React from "react";
import { useTranslations } from "next-intl";

const PricingSection: React.FC = () => {
  const t = useTranslations("pricing");

  return (
    <section className="py-40 relative z-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Professional Plan */}

          <div className="relative border bg-gray-100 rounded-lg mb-11 shadow-lg">
            <div className="flex flex-col py-3 justify-center items-center bg-white">
              <h3 className="text-4xl font-semibold text-gray-600">
                {t("professional")}
              </h3>
              <div className="mt-4 text-3xl text-gray-500">
                <span className="text-6xl text-gray-800">899</span>
                {t("perYear")}
              </div>
              <div className="mt-2 text-1xl font-bold text-green-500">
                {t("validForUsers")}
              </div>
            </div>
            <ul className="mt-6 space-y-4 text-sm text-gray-600 p-8">
              <li>✅ {t("features.addBranches")}</li>
              <li>✅ {t("features.unlimitedProducts")}</li>
              <li>✅ {t("features.unlimitedClients")}</li>
              <li>✅ {t("features.taxInvoices")}</li>
              <li>✅ {t("features.simplifiedInvoices")}</li>
              <li>✅ {t("features.instantInvoices")}</li>
              <li>✅ {t("features.taxReports")}</li>
              <li>✅ {t("features.inventoryReports")}</li>
            </ul>
            <div className="flex justify-center items-center">
              <button className="w-96 flex justify-center items-center mt-6 mb-8 bg-blue-900 text-white py-4 rounded-lg">
                {t("getStarted")}
              </button>
            </div>
          </div>

          {/* Basic Plan */}
          <div className="relative z-20 bg-gray-100 rounded-b-lg shadow-lg transform md:scale-125">
            <div className="absolute flex justify-center items-center w-full p-3 h-16 top-0 left-1/2 transform -translate-x-1/2 -translate-y-16 bg-blue-900 text-white text-2xl font-bold rounded-t-lg">
              {t("mostPopular")}
            </div>
            <div className="flex flex-col py-3 justify-center items-center bg-white">
              <h3 className="text-4xl font-semibold text-gray-600">
                {t("basic")}
              </h3>
              <div className="mt-4 text-3xl text-gray-500">
                <span className="text-6xl text-gray-800">699</span>{" "}
                {t("perYear")}
              </div>
              <div className="mt-2 text-1xl font-bold text-green-500">
                {t("validForUsers")}
              </div>
            </div>
            <ul className="mt-6 space-y-4 text-sm text-gray-600 p-8">
              <li>✅ {t("features.addBranches")}</li>
              <li>✅ {t("features.unlimitedProducts")}</li>
              <li>✅ {t("features.unlimitedClients")}</li>
              <li>✅ {t("features.taxInvoices")}</li>
              <li>✅ {t("features.simplifiedInvoices")}</li>
              <li>✅ {t("features.instantInvoices")}</li>
              <li>✅ {t("features.taxReports")}</li>
              <li>✅ {t("features.inventoryReports")}</li>
            </ul>
            <div className="flex justify-center items-center">
              <button className="w-96 flex justify-center items-center mt-6 mb-8 bg-blue-600 text-white py-4 rounded-lg">
                {t("getStarted")}
              </button>
            </div>
          </div>

          {/* Integrated Plan */}
          <div className="relative border bg-gray-100 rounded-lg shadow-lg">
            <div className="flex flex-col py-3 justify-center items-center bg-white">
              <h3 className="text-4xl font-semibold text-gray-600">
                {t("integrated")}
              </h3>
              <div className="mt-4 text-3xl text-gray-500">
                <span className="text-6xl text-gray-800">1199</span>{" "}
                {t("perYear")}
              </div>
              <div className="mt-2 text-1xl font-bold text-green-500">
                {t("validForUsers")}
              </div>
            </div>
            <ul className="mt-6 space-y-4 text-sm text-gray-600 p-8">
              <li>✅ {t("features.addBranches")}</li>
              <li>✅ {t("features.unlimitedProducts")}</li>
              <li>✅ {t("features.unlimitedClients")}</li>
              <li>✅ {t("features.taxInvoices")}</li>
              <li>✅ {t("features.simplifiedInvoices")}</li>
              <li>✅ {t("features.instantInvoices")}</li>
              <li>✅ {t("features.taxReports")}</li>
              <li>✅ {t("features.inventoryReports")}</li>
            </ul>
            <div className="flex justify-center items-center">
              <button className="w-96 flex justify-center items-center mt-6 mb-8 bg-blue-600 text-white py-4 rounded-lg">
                {t("getStarted")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
