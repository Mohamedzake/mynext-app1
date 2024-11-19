// import React from "react";
// import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// const ContactForm: React.FC = () => {
//   return (
//     <section className="container mx-auto py-16 px-4 md:px-8">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Form Section */}
//         <div className="bg-slate-50 rounded-lg p-6 md:p-8 text-slate-700 font-bold">
//           <form className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="flex flex-col">
//                 <label
//                   htmlFor="fullName"
//                   className="text-right font-medium mb-2"
//                 >
//                   اسمك
//                 </label>
//                 <input
//                   type="text"
//                   id="fullName"
//                   placeholder="أدخل اسمك الكامل"
//                   className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <label htmlFor="email" className="text-right font-medium mb-2">
//                   البريد الإلكتروني
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   placeholder="أدخل بريدك الإلكتروني"
//                   className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
//                 />
//               </div>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="flex flex-col">
//                 <label
//                   htmlFor="companyName"
//                   className="text-right font-medium mb-2"
//                 >
//                   اسم الشركة (اختياري)
//                 </label>
//                 <input
//                   type="text"
//                   id="companyName"
//                   placeholder="أدخل اسم الشركة"
//                   className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <label htmlFor="phone" className="text-right font-medium mb-2">
//                   الهاتف
//                 </label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   placeholder="أدخل رقم هاتفك"
//                   className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
//                 />
//               </div>
//             </div>
//             <div className="flex flex-col">
//               <label htmlFor="message" className="text-right font-medium mb-2">
//                 رسالتك (اختياري)
//               </label>
//               <textarea
//                 id="message"
//                 placeholder="أدخل رسالتك...."
//                 className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 h-32 resize-none"
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition duration-200"
//             >
//               إرسال
//             </button>
//           </form>
//         </div>

//         {/* Contact Information Section */}
//         <div className="flex flex-col justify-center items-end space-y-8 text-right">
//           <h2 className="text-2xl font-bold text-primary-900 mb-6">
//             تواصل معنا اليوم على
//           </h2>
//           <div className="flex items-center space-x-4 rtl:space-x-reverse">
//             <FaPhone className="text-green-500 text-xl" />
//             <div>
//               <h3 className="text-lg font-semibold">رقم الهاتف</h3>
//               <p className="text-gray-700">+966920031014</p>
//             </div>
//           </div>
//           <div className="flex items-center space-x-4 rtl:space-x-reverse">
//             <FaEnvelope className="text-green-500 text-xl" />
//             <div>
//               <h3 className="text-lg font-semibold">البريد الإلكتروني</h3>
//               <p className="text-gray-700">sales@mycash.sa</p>
//             </div>
//           </div>
//           <div className="flex items-center space-x-4 rtl:space-x-reverse">
//             <FaMapMarkerAlt className="text-green-500 text-xl" />
//             <div>
//               <h3 className="text-lg font-semibold">العنوان</h3>
//               <p className="text-gray-700">
//                 3273، أنس بن مالك، حي الصحافة، 8369
//                 <br />
//                 الرياض - المملكة العربية السعودية
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactForm;
import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function ContactForm() {
  return (
    <section className="container mx-auto py-8 sm:py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-8 flex flex-col md:flex-row gap-8">
      {/* // <section className="container mx-auto py-16 px-4 md:px-8 lg:px-8 flex flex-col md:flex-row gap-8"> */}
      {/* Form Section (60% width) */}
      <div className="w-full md:w-3/5 bg-slate-50 rounded-lg p-6 md:p-8 text-slate-700 font-bold">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="fullName" className="text-right font-medium mb-2">
                اسمك
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="أدخل اسمك الكامل"
                className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-right font-medium mb-2">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                id="email"
                placeholder="أدخل بريدك الإلكتروني"
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
                اسم الشركة (اختياري)
              </label>
              <input
                type="text"
                id="companyName"
                placeholder="أدخل اسم الشركة"
                className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-right font-medium mb-2">
                الهاتف
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="أدخل رقم هاتفك"
                className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-right font-medium mb-2">
              رسالتك (اختياري)
            </label>
            <textarea
              id="message"
              placeholder="أدخل رسالتك...."
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 h-32 resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition duration-200"
          >
            إرسال
          </button>
        </form>
      </div>

      {/* Contact Information Section (40% width) */}
      <div className="w-full md:w-2/5 flex flex-col justify-start items-end space-y-8">
        <h2 className="text-4xl font-bold text-primary-30 mb-6">
          تواصل معنا اليوم على
        </h2>
        <div className="space-y-6">
          {/* Phone Section */}
          <div className="flex flex-col items-end rtl:space-y-reverse mb-11 space-y-1">
            <div className="flex items-center gap-2 space-x-2 mb-2 rtl:space-x-reverse">
              <h3 className="text-3xl font-semibold text-primary-20">
                رقم الهاتف
              </h3>
              <FaPhone className="text-green-500 text-3xl" />
            </div>
            <p className="text-gray-700 text-xl">+966920031014</p>
          </div>

          {/* Email Section */}
          <div className="flex flex-col items-end rtl:space-y-reverse mb-11space-y-1">
            <div className="flex items-center gap-2 mb-2 space-x-2 rtl:space-x-reverse">
              <h3 className="text-3xl font-semibold text-primary-20">
                البريد الإلكتروني
              </h3>
              <FaEnvelope className="text-green-500 text-3xl" />
            </div>
            <p className="text-gray-700 text-xl">sales@mycash.sa</p>
          </div>

          {/* Address Section */}
          <div className="flex flex-col items-end rtl:space-y-reverse mb-11 space-y-1">
            <div className="flex items-center gap-2 mb-2 space-x-2 rtl:space-x-reverse">
              <h3 className="text-3xl font-semibold text-primary-20">
                العنوان
              </h3>
              <FaMapMarkerAlt className="text-green-500 text-3xl" />
            </div>
            <p className="text-gray-700 text-xl">
              3273، أنس بن مالك، حي الصحافة، 8369
              <br />
              الرياض - المملكة العربية السعودية
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
