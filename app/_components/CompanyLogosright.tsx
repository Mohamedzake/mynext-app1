import React, { useEffect, useState } from "react";
import Image from "next/image";

const SwipeableSlider: React.FC = () => {
  const slides = [
    { src: "/zakat_authority.png", alt: "Zakat Authority" },
    { src: "/stc_payy.png", alt: "STC Pay" },
    { src: "/alrajhi_bank.png", alt: "Al Rajhi Bank" },
    { src: "/geidea.png", alt: "Geidea" },
    { src: "/urpay.png", alt: "UrPay" },
    { src: "/mada.png", alt: "Mada" },
  ];

  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(2);
      } else if (window.innerWidth < 770) {
        setVisibleCount(3);
      } else {
        setVisibleCount(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const slideWidth = 100 / visibleCount;
  const repeatCount = 20;

  return (
    <div className="relative w-full overflow-hidden bg-slate-50">
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(-300%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .slider-track {
          display: flex;
          width: calc(50%);
          animation: slide 17s linear infinite;
          gap: 8px;
        }

        .slide {
          width: calc(${slideWidth}% - 8px);
          flex-shrink: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 4px;
        }

        img {
          object-fit: contain;
        }
      `}</style>

      <div className="slider-track py-2">
        {[...Array(repeatCount)].map((_, i) => (
          <div key={`original-${i}`} className="slide">
            <Image
              src={slides[i % slides.length].src}
              alt={slides[i % slides.length].alt}
              width={150}
              height={150}
              className="object-contain bg-primary-10 shadow-lg"
              priority={i < visibleCount}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SwipeableSlider;
