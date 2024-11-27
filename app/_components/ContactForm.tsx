import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useTranslations } from "next-intl";
function ContactForm() {
  const t = useTranslations("contact");
  return (
    <section className="container mx-auto py-8 sm:py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-8 flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-3/5 bg-slate-50 rounded-lg p-6 md:p-8 text-slate-700 font-bold shadow-md border border-primary-50">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="fullName" className="text-right font-medium mb-2">
                {t("name")}
              </label>
              <input
                type="text"
                id="fullName"
                placeholder={t("name")}
                className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-right font-medium mb-2">
                {t("email")}
              </label>
              <input
                type="email"
                id="email"
                placeholder={t("email")}
                className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label
                htmlFor="companyName"
                className="text-right font-medium mb-2"
              >
                {t("companyName")}
              </label>
              <input
                type="text"
                id="companyName"
                placeholder={t("companyName")}
                className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-right font-medium mb-2">
                {t("phone")}
              </label>
              <input
                type="tel"
                id="phone"
                placeholder={t("phone")}
                className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-right font-medium mb-2">
              {t("yourMessage")}
            </label>
            <textarea
              id="message"
              placeholder={t("yourMessage")}
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 h-32 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary-20 text-white py-3 rounded-full hover:bg-green-600 transition duration-200"
          >
            {t("submit")}
          </button>
        </form>
      </div>

      <div className="w-full md:w-2/5 flex flex-col justify-start items-end space-y-8">
        <h2 className="text-4xl font-bold text-primary-30 mb-6">
          {t("contactUs")}
        </h2>
        <div className="space-y-6">
          <div className="flex flex-col items-end rtl:space-y-reverse mb-11 space-y-1">
            <div className="flex items-center gap-2 space-x-2 mb-2 rtl:space-x-reverse">
              <h3 className="text-3xl font-semibold text-primary-20">
                {t("phoneNumber")}
              </h3>
              <div className="bg-primary-20 rounded-full h-8 w-8 flex justify-center items-center">
                <FaPhone className="text-primary-10 text-1xl" />
              </div>
            </div>
            <p className="text-gray-700 text-xl">+966920031014</p>
          </div>

          <div className="flex flex-col items-end rtl:space-y-reverse mb-11 space-y-1">
            <div className="flex items-center gap-2 mb-2 space-x-2 rtl:space-x-reverse">
              <h3 className="text-3xl font-semibold text-primary-20">
                {t("email")}
              </h3>
              <div className="bg-primary-20 rounded-full h-8 w-8 flex justify-center items-center">
                <FaEnvelope className="text-primary-10 text-1xl" />
              </div>
            </div>
            <p className="text-gray-700 text-xl">sales@mycash.sa</p>
          </div>

          <div className="flex flex-col items-end rtl:space-y-reverse mb-11 space-y-1">
            <div className="flex items-center gap-2 mb-2 space-x-2 rtl:space-x-reverse">
              <h3 className="text-3xl font-semibold text-primary-20">
                {t("address")}
              </h3>
              <div className="bg-primary-20 rounded-full h-8 w-8 flex justify-center items-center">
                <FaMapMarkerAlt className="text-primary-10 text-1xl" />
              </div>
            </div>
            <p className="text-gray-700 text-xl text-end">
              {t("addressDetails")
                .split("\n")
                .map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
            </p>
          </div>
        </div>
      </div>
    </section>

    // <section className="container mx-auto py-8 sm:py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-8 flex flex-col md:flex-row gap-8">
    //   <div className="w-full md:w-3/5 bg-slate-50 rounded-lg p-6 md:p-8 text-slate-700 font-bold shadow-md border border-primary-50">
    //     <form className="space-y-6">
    //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    //         <div className="flex flex-col">
    //           <label htmlFor="fullName" className="text-right font-medium mb-2">
    //             اسمك
    //           </label>
    //           <input
    //             type="text"
    //             id="fullName"
    //             placeholder="أدخل اسمك الكامل"
    //             className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
    //           />
    //         </div>
    //         <div className="flex flex-col">
    //           <label htmlFor="email" className="text-right font-medium mb-2">
    //             البريد الإلكتروني
    //           </label>
    //           <input
    //             type="email"
    //             id="email"
    //             placeholder="أدخل بريدك الإلكتروني"
    //             className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
    //           />
    //         </div>
    //       </div>
    //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    //         <div className="flex flex-col">
    //           <label
    //             htmlFor="companyName"
    //             className="text-right font-medium mb-2"
    //           >
    //             اسم الشركة (اختياري)
    //           </label>
    //           <input
    //             type="text"
    //             id="companyName"
    //             placeholder="أدخل اسم الشركة"
    //             className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
    //           />
    //         </div>
    //         <div className="flex flex-col">
    //           <label htmlFor="phone" className="text-right font-medium mb-2">
    //             الهاتف
    //           </label>
    //           <input
    //             type="tel"
    //             id="phone"
    //             placeholder="أدخل رقم هاتفك"
    //             className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
    //           />
    //         </div>
    //       </div>
    //       <div className="flex flex-col">
    //         <label htmlFor="message" className="text-right font-medium mb-2">
    //           رسالتك (اختياري)
    //         </label>
    //         <textarea
    //           id="message"
    //           placeholder="أدخل رسالتك...."
    //           className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 h-32 resize-none"
    //         />
    //       </div>

    //       <button
    //         type="submit"
    //         className="w-full bg-primary-20 text-white py-3 rounded-full hover:bg-green-600 transition duration-200"
    //       >
    //         إرسال
    //       </button>
    //     </form>
    //   </div>

    //   <div className="w-full md:w-2/5 flex flex-col justify-start items-end space-y-8">
    //     <h2 className="text-4xl font-bold text-primary-30 mb-6">
    //       تواصل معنا اليوم على
    //     </h2>
    //     <div className="space-y-6">
    //       <div className="flex flex-col items-end rtl:space-y-reverse mb-11 space-y-1">
    //         <div className="flex items-center gap-2 space-x-2 mb-2 rtl:space-x-reverse">
    //           <h3 className="text-3xl font-semibold text-primary-20">
    //             رقم الهاتف
    //           </h3>
    //           <FaPhone className="text-green-500 text-3xl" />
    //         </div>
    //         <p className="text-gray-700 text-xl">+966920031014</p>
    //       </div>

    //       <div className="flex flex-col items-end rtl:space-y-reverse mb-11space-y-1">
    //         <div className="flex items-center gap-2 mb-2 space-x-2 rtl:space-x-reverse">
    //           <h3 className="text-3xl font-semibold text-primary-20">
    //             البريد الإلكتروني
    //           </h3>
    //           <FaEnvelope className="text-green-500 text-3xl" />
    //         </div>
    //         <p className="text-gray-700 text-xl">sales@mycash.sa</p>
    //       </div>

    //       <div className="flex flex-col items-end rtl:space-y-reverse mb-11 space-y-1">
    //         <div className="flex items-center gap-2 mb-2 space-x-2 rtl:space-x-reverse">
    //           <h3 className="text-3xl font-semibold text-primary-20">
    //             العنوان
    //           </h3>
    //           <FaMapMarkerAlt className="text-green-500 text-3xl" />
    //         </div>
    //         <p className="text-gray-700 text-xl">
    //           3273، أنس بن مالك، حي الصحافة، 8369
    //           <br />
    //           الرياض - المملكة العربية السعودية
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}

export default ContactForm;
