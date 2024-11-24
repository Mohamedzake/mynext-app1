import React from "react";
import Image from "next/image";
import img from "@/public/zakat_authority.png";
const CompanyLogos = () => {
  const logos = [
    // {
    //   src: "/zakat_authority.png",
    //   alt: "Zakat Tax and Customs Authority",
    //   width: 120,
    // },
    {
      src: "/stc_payy.png",
      alt: "STC Pay",
      width: 100,
    },
    {
      src: "/alrajhi_bank.png",
      alt: "Al Rajhi Bank",
      width: 110,
    },
    {
      src: "/geidea.png",
      alt: "Geidea",
      width: 100,
    },
    {
      src: "/mada.png",
      alt: "Mada",
      width: 100,
    },
    {
      src: "/urpay.png",
      alt: "UrPay",
      width: 90,
    },
  ];

  return (
    <section className="w-full bg-primary-300">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          <div className="flex items-center justify-center w-32 md:w-40 lg:w-56 h-32">
            <div className="relative flex items-center justify-center w-full h-full">
              <Image
                src={img}
                alt="Logo"
                width={300}
                height={500}
                // layout="fill"
                objectFit="contain"
                className="transition-opacity duration-300 hover:opacity-80"
              />
            </div>
          </div>
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-32 md:w-40 lg:w-40 h-32"
            >
              <div className="relative flex items-center justify-center w-full h-full">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={300}
                  height={300}
                  // layout="fill"
                  objectFit="contain"
                  className="transition-opacity duration-300 hover:opacity-80"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;
