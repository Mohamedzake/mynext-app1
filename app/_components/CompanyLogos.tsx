// import React from "react";
// import Image from "next/image";
// import img from "@/public/zakat_authority.png";
// const CompanyLogos = () => {
//   const logos = [
//     {
//       src: "/stc_payy.png",
//       alt: "STC Pay",
//       width: 100,
//     },
//     {
//       src: "/alrajhi_bank.png",
//       alt: "Al Rajhi Bank",
//       width: 110,
//     },
//     {
//       src: "/geidea.png",
//       alt: "Geidea",
//       width: 100,
//     },
//     {
//       src: "/mada.png",
//       alt: "Mada",
//       width: 100,
//     },
//     {
//       src: "/urpay.png",
//       alt: "UrPay",
//       width: 90,
//     },
//   ];

//   return (
//     <section className="w-full bg-primary-300">
//       <div className=" mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
//           <div className="flex items-center justify-center w-32 md:w-40 lg:w-56 h-32">
//             <div className="relative flex items-center justify-center w-full h-full">
//               <Image
//                 src={img}
//                 alt="Logo"
//                 width={300}
//                 height={500}
//                 objectFit="contain"
//                 className="transition-opacity duration-300 hover:opacity-80"
//               />
//             </div>
//           </div>
//           {logos.map((logo, index) => (
//             <div
//               key={index}
//               className="flex items-center justify-center w-32 md:w-40 lg:w-40 h-32"
//             >
//               <div className="relative flex items-center justify-center w-full h-full">
//                 <Image
//                   src={logo.src}
//                   alt={logo.alt}
//                   width={300}
//                   height={300}
//                   // layout="fill"
//                   objectFit="contain"
//                   className="transition-opacity duration-300 hover:opacity-80"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CompanyLogos;

// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import { DndProvider, useDrag, useDrop } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";

// const ItemType = "LOGO";

// const DraggableLogo = ({ logo, index, moveLogo }: any) => {
//   const [, dragRef] = useDrag({
//     type: ItemType,
//     item: { index },
//   });

//   const [, dropRef] = useDrop({
//     accept: ItemType,
//     hover: (draggedItem: { index: number }) => {
//       if (draggedItem.index !== index) {
//         moveLogo(draggedItem.index, index);
//         draggedItem.index = index;
//       }
//     },
//   });

//   return (
//     <div
//       ref={(node) => dragRef(dropRef(node))}
//       className="flex items-center justify-center w-32 h-32 cursor-move"
//     >
//       <Image
//         src={logo.src}
//         alt={logo.alt}
//         width={100}
//         height={100}
//         objectFit="contain"
//         className="transition-opacity duration-300 hover:opacity-80"
//       />
//     </div>
//   );
// };

// const CompanyLogos = () => {
//   const [logos, setLogos] = useState([
//     { src: "/stc_payy.png", alt: "STC Pay", width: 100 },
//     { src: "/alrajhi_bank.png", alt: "Al Rajhi Bank", width: 110 },
//     { src: "/geidea.png", alt: "Geidea", width: 100 },
//     { src: "/mada.png", alt: "Mada", width: 100 },
//     { src: "/urpay.png", alt: "UrPay", width: 90 },
//     { src: "/stc_payy.png", alt: "STC Pay", width: 100 },
//   ]);

//   const moveLogo = (fromIndex: number, toIndex: number) => {
//     const updatedLogos = [...logos];
//     const [movedLogo] = updatedLogos.splice(fromIndex, 1);
//     updatedLogos.splice(toIndex, 0, movedLogo);
//     setLogos(updatedLogos);
//   };

//   return (
//     <DndProvider backend={HTML5Backend}>
//       <section className="w-full bg-primary-300 py-6">
//         <div className="mx-auto flex flex-wrap justify-center gap-6">
//           {logos.map((logo, index) => (
//             <DraggableLogo
//               key={index}
//               logo={logo}
//               index={index}
//               moveLogo={moveLogo}
//             />
//           ))}
//         </div>
//       </section>
//     </DndProvider>
//   );
// };

// export default CompanyLogos;

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { useSwipeable } from "react-swipeable";

// const SwipeableSlider: React.FC = () => {
//   const logos = [
//     { src: "/stc_payy.png", alt: "STC Pay" },
//     { src: "/alrajhi_bank.png", alt: "Al Rajhi Bank" },
//     { src: "/geidea.png", alt: "Geidea" },
//     { src: "/mada.png", alt: "Mada" },
//     { src: "/urpay.png", alt: "UrPay" },
//     { src: "/stc_payy.png", alt: "STC Pay" },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [visibleCount, setVisibleCount] = useState(4);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 640) {
//         setVisibleCount(2);
//       } else if (window.innerWidth < 770) {
//         setVisibleCount(3);
//       } else {
//         setVisibleCount(4);
//       }
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const handlers = useSwipeable({
//     onSwipedLeft: () => {
//       if (currentIndex < logos.length - visibleCount) {
//         setCurrentIndex(currentIndex + 1);
//       }
//     },
//     onSwipedRight: () => {
//       if (currentIndex > 0) {
//         setCurrentIndex(currentIndex - 1);
//       }
//     },
//     preventDefaultTouchmoveEvent: true,
//     trackTouch: true,
//     trackMouse: true,
//   });

//   const sliderStyle = {
//     transform: `translateX(-${(currentIndex / visibleCount) * 100}%)`,
//     transition: "transform 0.3s ease-in-out",
//     display: "flex",
//   };

//   return (
//     <div className="relative w-full mx-auto overflow-hidden" {...handlers}>
//       <div style={sliderStyle} className="flex">
//         {logos.map((logo, index) => (
//           <div
//             key={index}
//             className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 flex justify-center items-center"
//           >
//             <Image
//               src={logo.src}
//               alt={logo.alt}
//               width={150}
//               height={150}
//               className="object-contain"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SwipeableSlider;

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { useSwipeable } from "react-swipeable";

// const SwipeableSlider: React.FC = () => {
//   const logos = [
//     { src: "/stc_payy.png", alt: "STC Pay" },
//     { src: "/alrajhi_bank.png", alt: "Al Rajhi Bank" },
//     { src: "/geidea.png", alt: "Geidea" },
//     { src: "/mada.png", alt: "Mada" },
//     { src: "/urpay.png", alt: "UrPay" },
//     { src: "/stc_payy.png", alt: "STC Pay" },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [visibleCount, setVisibleCount] = useState(4);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 640) {
//         setVisibleCount(2);
//       } else if (window.innerWidth < 770) {
//         setVisibleCount(3);
//       } else {
//         setVisibleCount(4);
//       }
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const handlers = useSwipeable({
//     onSwipedLeft: () => {
//       if (currentIndex < logos.length - visibleCount) {
//         setCurrentIndex(currentIndex + 1);
//       }
//     },
//     onSwipedRight: () => {
//       if (currentIndex > 0) {
//         setCurrentIndex(currentIndex - 1);
//       }
//     },
//     preventDefaultTouchmoveEvent: true,
//     trackTouch: true,
//     trackMouse: true,
//   });

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex < logos.length - visibleCount ? prevIndex + 1 : 0
//       );
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [visibleCount, logos.length]);

//   const sliderStyle = {
//     transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
//     transition: "transform 0.3s ease-in-out",
//     display: "flex",
//   };

//   return (
//     <div className="relative w-full mx-auto overflow-hidden" {...handlers}>
//       <div style={sliderStyle} className="flex">
//         {logos.map((logo, index) => (
//           <div
//             key={index}
//             className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 flex justify-center items-center"
//           >
//             <Image
//               src={logo.src}
//               alt={logo.alt}
//               width={150}
//               height={150}
//               className="object-contain"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SwipeableSlider;
////////////////////////////////////////////////////////

// import React, { useState, useEffect } from "react";
// import Image from "next/image";

// const SwipeableSlider: React.FC = () => {
//   const logos = [
//     { src: "/stc_payy.png", alt: "STC Pay" },
//     { src: "/alrajhi_bank.png", alt: "Al Rajhi Bank" },
//     { src: "/geidea.png", alt: "Geidea" },
//     { src: "/mada.png", alt: "Mada" },
//     { src: "/urpay.png", alt: "UrPay" },
//   ];

//   const [offset, setOffset] = useState(0);
//   const [transition, setTransition] = useState("transform 0.3s linear");
//   const [visibleCount, setVisibleCount] = useState(4);

//   const logoWidth = 100 / visibleCount;

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 640) {
//         setVisibleCount(2);
//       } else if (window.innerWidth < 770) {
//         setVisibleCount(3);
//       } else {
//         setVisibleCount(4);
//       }
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setOffset((prevOffset) => prevOffset + 1);
//     }, 30);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const totalWidth = logoWidth * logos.length;

//     if (offset >= totalWidth) {
//       setTimeout(() => {
//         setTransition("none");
//         setOffset(0);
//       }, 300);

//       setTimeout(() => {
//         setTransition("transform 0.3s linear");
//       }, 350);
//     }
//   }, [offset, logoWidth, logos.length]);

//   const sliderStyle = {
//     transform: `translateX(-${offset}%)`,
//     transition: transition,
//     display: "flex",
//   };

//   return (
//     <div className="relative w-full mx-auto overflow-hidden">
//       <div style={sliderStyle} className="flex">
//         {[...logos, ...logos].map((logo, index) => (
//           <div
//             key={index}
//             className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 flex justify-center items-center"
//           >
//             <Image
//               src={logo.src}
//               alt={logo.alt}
//               width={150}
//               height={150}
//               className="object-contain"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SwipeableSlider;
// import React, { useState, useEffect } from "react";
// import Image from "next/image";

// const SwipeableSlider: React.FC = () => {
//   const logos = [
//     { src: "/stc_payy.png", alt: "STC Pay" },
//     { src: "/alrajhi_bank.png", alt: "Al Rajhi Bank" },
//     { src: "/geidea.png", alt: "Geidea" },

//     { src: "/urpay.png", alt: "UrPay" },
//     { src: "/mada.png", alt: "Mada" },
//     { src: "/alrajhi_bank.png", alt: "Al Rajhi Bank" },
//   ];

//   const [offset, setOffset] = useState(0);
//   const [transition, setTransition] = useState("transform 0.3s linear");
//   const [visibleCount, setVisibleCount] = useState(4);

//   const logoWidth = 100 / visibleCount;

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 640) {
//         setVisibleCount(2);
//       } else if (window.innerWidth < 770) {
//         setVisibleCount(3);
//       } else {
//         setVisibleCount(4);
//       }
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [setVisibleCount]);

//   // Slower interval for logo movement
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setOffset((prevOffset) => prevOffset + 2); // Smaller increment for slower movement
//     }, 50); // Slower interval (50ms)

//     return () => clearInterval(interval);
//   }, []);

//   // Handle seamless looping with reset at the end of the loop
//   useEffect(() => {
//     const totalWidth = logoWidth * logos.length;

//     if (offset >= totalWidth) {
//       setTimeout(() => {
//         setTransition("none");
//         setOffset(0); // Reset offset to loop
//       }, 300); // Wait for transition to complete

//       setTimeout(() => {
//         setTransition("transform 0.3s linear");
//       }, 350);
//     }
//   }, [offset, logoWidth, logos.length]);

//   const sliderStyle = {
//     transform: `translateX(-${offset}%)`,
//     transition: transition,
//     display: "flex",
//   };

//   return (
//     <div className="relative w-full mx-auto overflow-hidden">
//       <div style={sliderStyle} className="flex">
//         {[...logos, ...logos].map((logo, index) => (
//           <div
//             key={index}
//             className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 flex justify-center items-center"
//           >
//             <Image
//               src={logo.src}
//               alt={logo.alt}
//               width={150}
//               height={150}
//               className="object-contain"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SwipeableSlider;
import React, { useState, useEffect } from "react";
import Image from "next/image";

const SwipeableSlider: React.FC = () => {
  const logos = [
    { src: "/stc_payy.png", alt: "STC Pay" },
    { src: "/alrajhi_bank.png", alt: "Al Rajhi Bank" },
    { src: "/geidea.png", alt: "Geidea" },
    { src: "/urpay.png", alt: "UrPay" },
    { src: "/mada.png", alt: "Mada" },
    { src: "/alrajhi_bank.png", alt: "Al Rajhi Bank" },
  ];

  const [offset, setOffset] = useState(0);
  const [transition, setTransition] = useState("transform 0.3s linear");
  const [visibleCount, setVisibleCount] = useState(4);
  const [isLooping, setIsLooping] = useState(false); // To track if we need to loop the slider

  const logoWidth = 100 / visibleCount;

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
  }, [setVisibleCount]);

  // Slower interval for logo movement
  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => prevOffset + 0.2); // Smaller increment for slower movement
    }, 50); // Slower interval (50ms)

    return () => clearInterval(interval);
  }, []);

  // Handle seamless looping with reset at the end of the loop
  useEffect(() => {
    const totalWidth = logoWidth * logos.length;

    if (offset >= totalWidth) {
      // After reaching the end, we set the offset back to 0 to start the loop again
      setIsLooping(true);
      setTimeout(() => {
        setTransition("none");
        setOffset(0); // Reset the offset to simulate an infinite loop
      }, 10); // Wait for transition to complete

      // After the reset, enable the transition back again
      setTimeout(() => {
        setTransition("transform 0.3s linear");
        setIsLooping(false);
      }, 350);
    }
  }, [offset, logoWidth, logos.length]);

  // Prepare the logos for the infinite scroll
  const sliderStyle = {
    transform: `translateX(-${offset}%)`,
    transition: transition,
    display: "flex",
  };

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      <div style={sliderStyle} className="flex">
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 flex justify-center items-center"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={150}
              height={150}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SwipeableSlider;
