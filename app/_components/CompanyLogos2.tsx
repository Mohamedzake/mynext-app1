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

  const [visibleCount, setVisibleCount] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const goToNextSlide = () => {
    if (currentIndex < slides.length * 2 - visibleCount) {
      setCurrentIndex(currentIndex + 3);
    }
  };

  const goToPreviousSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 3);
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      <style jsx>{`
        .slider-track {
          display: flex;
          gap: 8px;
          transition: transform 0.3s ease-out;
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

        .button-container {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          transform: translateY(-50%);
          display: flex;
          justify-content: space-between;
          width: 100%;
          padding: 0 10px;
        }

        .button-container button {
          background: rgba(0, 0, 0, 0.5);
          color: white;
          border: none;
          padding: 10px;
          cursor: pointer;
          transition: background-color 0.2s ease-in-out;
        }

        .button-container button:hover {
          background-color: rgba(0, 0, 0, 0.7);
        }
      `}</style>

      <div className="slider-container relative p-8">
        <div
          className="slider-track"
          style={{
            transform: `translateX(-${(currentIndex / repeatCount) * 100}%)`,
          }}
        >
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

        <div className="button-container">
          <button onClick={goToPreviousSlide}>Previous</button>
          <button onClick={goToNextSlide}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default SwipeableSlider;
