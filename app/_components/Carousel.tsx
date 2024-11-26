// import React, { useState } from "react";

// const carouselData = [
//   {
//     title: "إدارة ذكية بالمستقبل:",
//     description: [
//       "نظام قائم على الذكاء الاصطناعي يوفر تحليلات دقيقة ومباشرة للمبيعات، العملاء، وسلوكيات السوق.",
//       "تكامل كامل بين الويب، الأندرويد، والأجهزة الذكية لتقديم تجربة مبيعات ومدفوعات متقدمة.",
//     ],
//     buttonText: "احصل على نسختك التجريبية",
//     imageUrl: "/products3.jpg",
//   },
//   {
//     title: "Section 2 Title",
//     description: [
//       "نظام قائم على الذكاء الاصطناعي يوفر تحليلات دقيقة ومباشرة للمبيعات، العملاء، وسلوكيات السوق.",
//       "تكامل كامل بين الويب، الأندرويد، والأجهزة الذكية لتقديم تجربة مبيعات ومدفوعات متقدمة.",
//     ],
//     buttonText: "احصل على نسختك التجريبية",
//     imageUrl: "/products3.jpg",
//   },
//   {
//     title: "Section 3 Title",
//     description: [
//       "نظام قائم على الذكاء الاصطناعي يوفر تحليلات دقيقة ومباشرة للمبيعات، العملاء، وسلوكيات السوق.",
//       "تكامل كامل بين الويب، الأندرويد، والأجهزة الذكية لتقديم تجربة مبيعات ومدفوعات متقدمة.",
//     ],
//     buttonText: "احصل على نسختك التجريبية",
//     imageUrl: "/products3.jpg",
//   },
// ];

// const Carousel: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const currentItem = carouselData[currentIndex];

//   return (
//     <div className=" p-28">
//       <div className="text-center mb-12">
//         <h2 className="text-blue-600 text-2xl font-semibold">ميزات حصرية</h2>
//         <h1 className="text-6xl font-bold text-gray-900 mt-2">
//           عزز تجارتك مع مزايا ماي كاش
//         </h1>
//         <p className="text-gray-500 mt-4">
//           My Cash عزز أداء عملك باستخدام الميزات المتقدمة التي يوفرها تطبيق
//         </p>
//       </div>
//       <div className="relative w-full mx-auto flex justify-center items-center rounded-3xl p-8 bg-gray-100">
//         {/* Left Arrow */}
//         <button
//           onClick={handlePrev}
//           className="absolute left-12 p-2 rounded-full hover:bg-gray-200"
//         >
//           <svg
//             className="h-14 w-14 text-gray-700"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M15 19l-7-7 7-7"
//             />
//           </svg>
//         </button>

//         {/* Content Section */}
//         <div className="flex flex-row justify-center items-center text-end gap-4 bg-white p-4 rounded-lg shadow-lg">
//           <div className="w-7/12">
//             <div className="flex flex-col text-end space-x-4 mb-4">
//               <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-end">
//                 <svg
//                   className="h-6 w-6 text-white"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M3 3h18v18H3V3z"
//                   />
//                 </svg>
//               </div>
//               <h2 className="text-xl font-semibold text-gray-600">
//                 {currentItem.title}
//               </h2>
//             </div>
//             <ul className="space-y-2 mb-6 text-gray-600">
//               {currentItem.description.map((line, index) => (
//                 <li key={index}>{line}</li>
//               ))}
//             </ul>
//             <button className="px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600">
//               {currentItem.buttonText}
//             </button>
//           </div>
//           {/* Image Section */}
//           <div className="w-2/4">
//             <img
//               src={currentItem.imageUrl}
//               alt={currentItem.title}
//               className="w-full h-80 object-cover rounded-lg shadow-lg"
//             />
//           </div>
//         </div>

//         {/* Right Arrow */}
//         <button
//           onClick={handleNext}
//           className="absolute right-12 p-2  rounded-full  hover:bg-gray-200"
//         >
//           <svg
//             className="h-14 w-14 text-gray-700"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M9 5l7 7-7 7"
//             />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Carousel;
// import React, { useState } from "react";

// const carouselData = [
//   {
//     title: "إدارة ذكية بالمستقبل:",
//     description: [
//       "نظام قائم على الذكاء الاصطناعي يوفر تحليلات دقيقة ومباشرة للمبيعات، العملاء، وسلوكيات السوق.",
//       "تكامل كامل بين الويب، الأندرويد، والأجهزة الذكية لتقديم تجربة مبيعات ومدفوعات متقدمة.",
//     ],
//     buttonText: "احصل على نسختك التجريبية",
//     imageUrl: "/products3.jpg",
//   },
//   {
//     title: "Section 2 Title",
//     description: [
//       "نظام قائم على الذكاء الاصطناعي يوفر تحليلات دقيقة ومباشرة للمبيعات، العملاء، وسلوكيات السوق.",
//       "تكامل كامل بين الويب، الأندرويد، والأجهزة الذكية لتقديم تجربة مبيعات ومدفوعات متقدمة.",
//     ],
//     buttonText: "احصل على نسختك التجريبية",
//     imageUrl: "/products3.jpg",
//   },
//   {
//     title: "Section 3 Title",
//     description: [
//       "نظام قائم على الذكاء الاصطناعي يوفر تحليلات دقيقة ومباشرة للمبيعات، العملاء، وسلوكيات السوق.",
//       "تكامل كامل بين الويب، الأندرويد، والأجهزة الذكية لتقديم تجربة مبيعات ومدفوعات متقدمة.",
//     ],
//     buttonText: "احصل على نسختك التجريبية",
//     imageUrl: "/products3.jpg",
//   },
// ];

// const Carousel: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const currentItem = carouselData[currentIndex];

//   return (
//     <div className="p-8 sm:p-16 lg:p-28">
//       <div className="text-center mb-12">
//         <h2 className="text-blue-600 text-xl sm:text-2xl font-semibold">
//           ميزات حصرية
//         </h2>
//         <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mt-2">
//           عزز تجارتك مع مزايا ماي كاش
//         </h1>
//         <p className="text-gray-500 mt-4 text-sm sm:text-base">
//           My Cash عزز أداء عملك باستخدام الميزات المتقدمة التي يوفرها تطبيق
//         </p>
//       </div>
//       <div className="relative w-full mx-auto flex flex-col lg:flex-row justify-center items-center rounded-3xl p-6 lg:p-8 bg-gray-100">
//         {/* Left Arrow */}
//         <button
//           onClick={handlePrev}
//           className="absolute left-4 lg:left-12 p-2 rounded-full hover:bg-gray-200"
//         >
//           <svg
//             className="h-8 w-8 sm:h-10 sm:w-10 lg:h-14 lg:w-14 text-gray-700"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M15 19l-7-7 7-7"
//             />
//           </svg>
//         </button>

//         {/* Content Section */}
//         <div className="flex-1 w-full lg:w-7/12 flex flex-col justify-center items-end text-end gap-4 bg-white p-6 lg:p-8 rounded-lg shadow-lg">
//           <div className="flex flex-col text-end mb-4">
//             <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
//               <svg
//                 className="h-6 w-6 text-white"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M3 3h18v18H3V3z"
//                 />
//               </svg>
//             </div>
//             <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-600 mt-2">
//               {currentItem.title}
//             </h2>
//           </div>
//           <ul className="space-y-2 mb-6 text-gray-600 text-sm sm:text-base">
//             {currentItem.description.map((line, index) => (
//               <li key={index}>{line}</li>
//             ))}
//           </ul>
//           <button className="px-4 sm:px-6 py-2 sm:py-3 bg-green-500 text-white rounded-full hover:bg-green-600">
//             {currentItem.buttonText}
//           </button>
//         </div>

//         {/* Image Section */}
//         <div className="w-full lg:w-5/12 mt-6 lg:mt-0 lg:ml-8">
//           <img
//             src={currentItem.imageUrl}
//             alt={currentItem.title}
//             className="w-full h-60 sm:h-72 lg:h-80 object-cover rounded-lg shadow-lg"
//           />
//         </div>

//         {/* Right Arrow */}
//         <button
//           onClick={handleNext}
//           className="absolute right-4 lg:right-12 p-2 rounded-full hover:bg-gray-200"
//         >
//           <svg
//             className="h-8 w-8 sm:h-10 sm:w-10 lg:h-14 lg:w-14 text-gray-700"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M9 5l7 7-7 7"
//             />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Carousel;
// import React, { useState } from "react";

// const carouselData = [
//   {
//     title: "إدارة ذكية بالمستقبل:",
//     description: [
//       "نظام قائم على الذكاء الاصطناعي يوفر تحليلات دقيقة ومباشرة للمبيعات، العملاء، وسلوكيات السوق.",
//       "تكامل كامل بين الويب، الأندرويد، والأجهزة الذكية لتقديم تجربة مبيعات ومدفوعات متقدمة.",
//     ],
//     buttonText: "احصل على نسختك التجريبية",
//     imageUrl: "/products3.jpg",
//   },
//   {
//     title: "Section 2 Title",
//     description: [
//       "نظام قائم على الذكاء الاصطناعي يوفر تحليلات دقيقة ومباشرة للمبيعات، العملاء، وسلوكيات السوق.",
//       "تكامل كامل بين الويب، الأندرويد، والأجهزة الذكية لتقديم تجربة مبيعات ومدفوعات متقدمة.",
//     ],
//     buttonText: "احصل على نسختك التجريبية",
//     imageUrl: "/products3.jpg",
//   },
//   {
//     title: "Section 3 Title",
//     description: [
//       "نظام قائم على الذكاء الاصطناعي يوفر تحليلات دقيقة ومباشرة للمبيعات، العملاء، وسلوكيات السوق.",
//       "تكامل كامل بين الويب، الأندرويد، والأجهزة الذكية لتقديم تجربة مبيعات ومدفوعات متقدمة.",
//     ],
//     buttonText: "احصل على نسختك التجريبية",
//     imageUrl: "/products3.jpg",
//   },
// ];

// const Carousel: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const currentItem = carouselData[currentIndex];

//   return (
//     <div className="p-8 sm:p-16 lg:p-28">
//       <div className="text-center mb-12">
//         <h2 className="text-blue-600 text-xl sm:text-2xl font-semibold">
//           ميزات حصرية
//         </h2>
//         <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mt-2">
//           عزز تجارتك مع مزايا ماي كاش
//         </h1>
//         <p className="text-gray-500 mt-4 text-sm sm:text-base">
//           My Cash عزز أداء عملك باستخدام الميزات المتقدمة التي يوفرها تطبيق
//         </p>
//       </div>
//       <div className="relative w-full mx-auto flex justify-center items-center">
//         {/* Left Arrow */}
//         <button
//           onClick={handlePrev}
//           className="absolute left-4 lg:left-12 p-2 rounded-full hover:bg-gray-200"
//         >
//           <svg
//             className="h-8 w-8 sm:h-10 sm:w-10 lg:h-14 lg:w-14 text-gray-700"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M15 19l-7-7 7-7"
//             />
//           </svg>
//         </button>

//         {/* Unified Content and Image Section */}
//         <div className="flex flex-col lg:flex-row items-center justify-between bg-white rounded-lg shadow-lg p-6 lg:p-8 gap-6 lg:gap-12 w-full max-w-6xl">
//           {/* Content Section */}
//           <div className="flex-1 flex flex-col text-end">
//             <div className="flex flex-col items-end mb-4">
//               <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
//                 <svg
//                   className="h-6 w-6 text-white"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M3 3h18v18H3V3z"
//                   />
//                 </svg>
//               </div>
//               <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-600 mt-2">
//                 {currentItem.title}
//               </h2>
//             </div>
//             <ul className="space-y-2 mb-6 text-gray-600 text-sm sm:text-base">
//               {currentItem.description.map((line, index) => (
//                 <li key={index}>{line}</li>
//               ))}
//             </ul>
//             <button className="w-48 sm:w-60 px-4 sm:px-6 py-2 sm:py-3 bg-green-500 text-white rounded-full hover:bg-green-600">
//               {currentItem.buttonText}
//             </button>
//           </div>

//           {/* Image Section */}
//           <div className="flex-1">
//             <img
//               src={currentItem.imageUrl}
//               alt={currentItem.title}
//               className="w-full h-60 sm:h-72 lg:h-80 object-cover rounded-lg"
//             />
//           </div>
//         </div>

//         {/* Right Arrow */}
//         <button
//           onClick={handleNext}
//           className="absolute right-4 lg:right-12 p-2 rounded-full hover:bg-gray-200"
//         >
//           <svg
//             className="h-8 w-8 sm:h-10 sm:w-10 lg:h-14 lg:w-14 text-gray-700"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M9 5l7 7-7 7"
//             />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Carousel;
import React, { useState } from "react";

const carouselData = [
  {
    title: "إدارة ذكية بالمستقبل:",
    description: [
      "نظام قائم على الذكاء الاصطناعي يوفر تحليلات دقيقة ومباشرة للمبيعات، العملاء، وسلوكيات السوق.",
      "تكامل كامل بين الويب، الأندرويد، والأجهزة الذكية لتقديم تجربة مبيعات ومدفوعات متقدمة.",
    ],
    buttonText: "احصل على نسختك التجريبية",
    imageUrl: "/products3.jpg",
  },
  {
    title: "Section 2 Title",
    description: [
      "نظام قائم على الذكاء الاصطناعي يوفر تحليلات دقيقة ومباشرة للمبيعات، العملاء، وسلوكيات السوق.",
      "تكامل كامل بين الويب، الأندرويد، والأجهزة الذكية لتقديم تجربة مبيعات ومدفوعات متقدمة.",
    ],
    buttonText: "احصل على نسختك التجريبية",
    imageUrl: "/products3.jpg",
  },
  {
    title: "Section 3 Title",
    description: [
      "نظام قائم على الذكاء الاصطناعي يوفر تحليلات دقيقة ومباشرة للمبيعات، العملاء، وسلوكيات السوق.",
      "تكامل كامل بين الويب، الأندرويد، والأجهزة الذكية لتقديم تجربة مبيعات ومدفوعات متقدمة.",
    ],
    buttonText: "احصل على نسختك التجريبية",
    imageUrl: "/products3.jpg",
  },
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentItem = carouselData[currentIndex];

  return (
    <div className="p-8 sm:p-16 lg:p-28 relative">
      <div className="text-center mb-12">
        <h2 className="text-blue-600 text-xl sm:text-2xl font-semibold">
          ميزات حصرية
        </h2>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mt-2">
          عزز تجارتك مع مزايا ماي كاش
        </h1>
        <p className="text-gray-500 mt-4 text-sm sm:text-base">
          My Cash عزز أداء عملك باستخدام الميزات المتقدمة التي يوفرها تطبيق
        </p>
      </div>
      <div className="relative w-full mx-auto flex justify-center items-center p-4 pb-16 lg:p-20 bg-slate-100 rounded-3xl ">
        {/* Unified Content and Image Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between bg-primary-10 rounded-lg shadow-lg p-6 lg:p-8 gap-6 lg:gap-12 w-full max-w-6xl">
          {/* Content Section */}
          <div className="flex-1 flex flex-col text-center lg:text-end mb-6 lg:mb-0">
            <div className="flex flex-col items-center lg:items-end mb-4">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-4 lg:mb-0">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h18v18H3V3z"
                  />
                </svg>
              </div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-600 mt-2">
                {currentItem.title}
              </h2>
            </div>
            <ul className="space-y-2 mb-6 text-gray-600 text-sm sm:text-base">
              {currentItem.description.map((line, index) => (
                <li key={index}>{line}</li>
              ))}
            </ul>
            {/* Button Section */}
            <div className="w-full">
              <button className="w-48 sm:w-60 px-4 sm:px-6 py-2 sm:py-3 bg-primary-20 text-white rounded-full hover:bg-green-600">
                {currentItem.buttonText}
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 mb-6 lg:mb-0">
            <img
              src={currentItem.imageUrl}
              alt={currentItem.title}
              className="w-96 lg:w-full h-72 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Left Arrow (Positioning for Small Screens) */}
        <button
          onClick={handlePrev}
          className="absolute left-4 lg:left-0 p-2 rounded-full hover:bg-gray-200 bottom-4 lg:bottom-auto"
        >
          <svg
            className="h-8 w-8 sm:h-10 sm:w-10 lg:h-14 lg:w-14 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Right Arrow (Positioning for Small Screens) */}
        <button
          onClick={handleNext}
          className="absolute right-4 lg:right-0 p-2 rounded-full hover:bg-gray-200 bottom-4 lg:bottom-auto"
        >
          <svg
            className="h-8 w-8 sm:h-10 sm:w-10 lg:h-14 lg:w-14 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
