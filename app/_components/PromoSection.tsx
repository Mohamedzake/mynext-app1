import React from "react";
import img from "@/public/Frame 1171278757.png";
import Image from "next/image";
import im from "@/public/Frame.png";
const PromoSection: React.FC = () => {
  return (
    <section className="relative flex justify-center items-center px-20 bg-slate-300 mt-20">
      {/* Content Container */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="lg:w-1/2 text-end px-4 py-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            احصل على تجربتك المثالية مع تطبيقنا
          </h2>
          <p className="text-2xl text-gray-800">
            اكتشف تجربة سلسة ومخصصة مع كل الأدوات التي تحتاجها في متناول يدك.
            سواء كنت في المنزل أو في الخارج، فإن تطبيقنا يبقيك على اتصال ويبقيك
            تحت السيطرة في أي وقت وفي أي مكان.
          </p>

          {/* Call-to-action Button */}
          <button>
            <Image
              src={im}
              alt="Download on Google Play"
              height={200}
              width={200}
              className="mt-10"
            />
          </button>
        </div>

        {/* Image Section (Right-Aligned) */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center lg:justify-end">
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
