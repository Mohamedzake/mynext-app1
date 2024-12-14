import React from "react";
import { useTranslations } from "next-intl";
import img from "@/public/Frame 1171278757.png";
import Image from "next/image";
import im from "@/public/Frame.png";
import im1 from "@/public/frame.jpeg";
import svg from "@/public/svg2-removebg-preview.png";
import svg1 from "@/public/Get_Started_Right_Image__1_.svg.png";
const PromoSection: React.FC = () => {
  const t = useTranslations("PromoSection");

  return (
    <section className="relative flex justify-center items-center px-4 sm:px-8 lg:px-20 bg-slate-50 mt-20">
      <div className="absolute z-0 bottom-0 right-0">
        <Image
          src={svg}
          // layout="fill"
          placeholder="blur"
          quality={80}
          className="h-80 lg:h-auto "
          alt="Mountains and forests with two cabins"
        />
      </div>
      <div className="absolute lg:bottom-0 left-0">
        <Image
          src={svg1}
          // layout="fill"
          placeholder="blur"
          quality={80}
          className="h-80 lg:h-auto "
          alt="Mountains and forests with two cabins"
        />
      </div>
      {/* Content Container */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-20 lg:gap-8 justify-between">
        {/* Text Section */}
        <div className="lg:w-1/2 text-center z-40 lg:text-end px-4 py-8 order-2 mb-20 lg:order-1">
          <h2 className="text-2xl md:text-4xl font-bold text-primary-30 mb-4">
            {t("promoHeading")}
          </h2>
          <p className="text-1xl text-primary-30">{t("promoDescription")}</p>

          {/* Call-to-action Button */}
          <button>
            <Image
              src={im}
              alt={t("ctaText")}
              height={200}
              width={200}
              className="mt-10"
            />
          </button>
        </div>

        {/* Image Section (Appears First on Small Screens) */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative">
            {/* Single Image for the two phones */}
            <Image src={img} alt="App Preview" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
// import React from "react";
// import { useTranslations } from "next-intl";
// import img from "@/public/Frame 1171278757.png";
// import Image from "next/image";
// import im from "@/public/Frame.png";
// import im1 from "@/public/frame.jpeg";
// import bg from "@/public/last-img.jpeg";
// const PromoSection: React.FC = () => {
//   const t = useTranslations("PromoSection");

//   return (
//     <section className="relative lg:h-[70vh] flex justify-center items-center px-0 md:px-0 sm:px-0 lg:px-20 bg-slate-300 mt-20">
//       <div className="  hidden lg:block absolute inset-0">
//         <Image
//           src={bg}
//           layout="fill"
//           placeholder="blur"
//           quality={80}
//           // className="object-cover"
//           alt="Mountains and forests with two cabins"
//         />
//       </div>
//       {/* Content Container */}
//       <div className="container mx-auto flex z-40 flex-col lg:flex-row items-center justify-between">
//         {/* Text Section */}
//         <div className="lg:w-1/2 text-center lg:text-end px-4 py-8 order-2 lg:order-1">
//           <h2 className="text-4xl font-bold text-gray-800 mb-4">
//             {t("promoHeading")}
//           </h2>
//           <p className="text-2xl text-gray-800">{t("promoDescription")}</p>

//           {/* Call-to-action Button */}
//           <button>
//             <Image
//               src={im}
//               alt={t("ctaText")}
//               height={200}
//               width={200}
//               className="mt-10"
//             />
//           </button>
//         </div>

//         {/* Image Section (Appears First on Small Screens) */}
//         <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2 mt-10 lg:mt-0">
//           {/* <div></div> */}
//           <div className="block lg:hidden relative">
//             <Image src={im1} alt="App Preview" className="max-w-full h-auto" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PromoSection;
