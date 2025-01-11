// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/dist/ScrollTrigger";

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger);
// }

// const AnimatedSections = () => {
//   const wrapperRef = useRef<HTMLDivElement>(null);
//   const pointsRef = useRef<(HTMLDivElement | null)[]>([]);
//   const indicatorsRef = useRef<(HTMLDivElement | null)[]>([]);

//   useEffect(() => {
//     if (typeof window === "undefined") return;

//     const points = pointsRef.current.filter(
//       (ref): ref is HTMLDivElement => ref !== null
//     );
//     const indicators = indicatorsRef.current.filter(
//       (ref): ref is HTMLDivElement => ref !== null
//     );
//     const height = 100 * points.length;

//     // Set initial visibility
//     points.forEach((elem) => {
//       const img = elem.querySelector("img");
//       const article = elem.querySelector("article");

//       if (img && article) {
//         gsap.set(img, { autoAlpha: 1 }); // Set initial visibility
//         gsap.set(article, { autoAlpha: 1, y: 0 }); // Set initial position and visibility
//       }
//     });

//     gsap.set(".indicators", { display: "flex" });

//     points.forEach((elem, i) => {
//       gsap.set(elem, { position: "absolute", top: 0 });
//     });

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".philosophie",
//         start: "top center",
//         end: `+=${height}%`,
//         scrub: true,
//         id: "points",
//       },
//     });

//     gsap.timeline({
//       scrollTrigger: {
//         trigger: ".philosophie .wrapper",
//         start: "top top",
//         end: `+=${height}%`,
//         scrub: true,
//         pin: ".philosophie .wrapper",
//         pinSpacing: true,
//         id: "pinning",
//       },
//     });

//     // Create separate timelines for each point
//     points.forEach((elem, i) => {
//       const img = elem.querySelector("img");
//       const article = elem.querySelector("article");

//       if (img && article) {
//         // Only animate when scrolling to the section
//         if (i === 0) {
//           // First section starts visible
//           gsap.set(img, { autoAlpha: 1 });
//           gsap.set(article, { autoAlpha: 1, y: 0 });
//         } else {
//           // Other sections start invisible
//           gsap.set(img, { autoAlpha: 0 });
//           gsap.set(article, { autoAlpha: 0, y: 100 });
//         }

//         tl.to(indicators[i], { backgroundColor: "#EA580C", duration: 0.25 }, i);

//         // Fade in animations
//         if (i !== 0) {
//           tl.to(img, { autoAlpha: 1, duration: 0.5 }, i);
//           tl.to(article, { autoAlpha: 1, y: 0, duration: 0.5 }, i);
//         }

//         // Fade out animations (except for last section)
//         if (i !== points.length - 1) {
//           tl.to(
//             indicators[i],
//             { backgroundColor: "#adadad", duration: 0.25 },
//             i + 0.75
//           );
//           tl.to(article, { autoAlpha: 0, y: -100, duration: 0.5 }, i + 0.75);
//           tl.to(img, { autoAlpha: 0, duration: 0.5 }, i + 0.75);
//         }
//       }
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   const sections = [
//     { title: "Title 1", image: "/products3.jpg" },
//     { title: "Title 2", image: "/about-1.jpg" },
//     { title: "Title 3", image: "/about-2.jpg" },
//   ];

//   return (
//     <section className="relative philosophie">
//       <div className="absolute left-8 top-0 mt-[10vh] h-[80vh] w-[3px] hidden flex-col justify-between indicators">
//         {sections.map((_, index) => (
//           <div
//             key={`indicator-${index}`}
//             ref={(el) => {
//               indicatorsRef.current[index] = el;
//             }}
//             className="w-full bg-neutral-400 flex-grow my-0.5"
//           />
//         ))}
//       </div>
//       <div ref={wrapperRef} className="wrapper h-screen w-full">
//         {sections.map((section, index) => (
//           <div
//             key={`point-${index}`}
//             ref={(el) => {
//               pointsRef.current[index] = el;
//             }}
//             className="point h-screen w-full flex items-center p-16 outline outline-1 outline-red-500"
//           >
//             <article className="flex-[0_0_60%] mr-auto opacity-100 translate-y-0">
//               <h3 className="text-2xl font-bold mb-4 text-black">
//                 {section.title}
//               </h3>
//               <p className="text-base text-black">
//                 Lorem Ipsum is simply dummy text of the printing and typesetting
//                 industry. Lorem Ipsum has been the industry's standard dummy
//                 text ever since the 1500s, when an unknown printer took a galley
//                 of type and scrambled it to make a type specimen book.
//               </p>
//             </article>
//             <img
//               src={section.image}
//               alt={section.title}
//               className="flex-[0_0_25%] max-w-[25vw] h-80 opacity-100"
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default AnimatedSections;
// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/dist/ScrollTrigger";

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger);
// }

// const AnimatedSections = () => {
//   const wrapperRef = useRef<HTMLDivElement>(null);
//   const pointsRef = useRef<(HTMLDivElement | null)[]>([]);
//   const indicatorsRef = useRef<(HTMLDivElement | null)[]>([]);
//   const containerRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     if (typeof window === "undefined" || !containerRef.current) return;

//     const points = pointsRef.current.filter(
//       (ref): ref is HTMLDivElement => ref !== null
//     );
//     const indicators = indicatorsRef.current.filter(
//       (ref): ref is HTMLDivElement => ref !== null
//     );
//     const height = 100 * points.length;

//     points.forEach((elem) => {
//       const img = elem.querySelector("img");
//       const article = elem.querySelector("article");

//       if (img && article) {
//         gsap.set(img, { autoAlpha: 1 });
//         gsap.set(article, { autoAlpha: 1, y: 0 });
//       }
//     });

//     gsap.set(".indicators", { display: "flex" });

//     points.forEach((elem, i) => {
//       gsap.set(elem, { position: "absolute", top: 0 });
//     });

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top top",
//         end: `+=${height}%`,
//         scrub: true,
//         pin: true,
//         pinSpacing: true,
//         anticipatePin: 1,
//         id: "points",
//       },
//     });

//     points.forEach((elem, i) => {
//       const img = elem.querySelector("img");
//       const article = elem.querySelector("article");

//       if (img && article) {

//         if (i === 0) {

//           gsap.set(img, { autoAlpha: 1 });
//           gsap.set(article, { autoAlpha: 1, y: 0 });
//         } else {

//           gsap.set(img, { autoAlpha: 0 });
//           gsap.set(article, { autoAlpha: 0, y: 100 });
//         }

//         tl.to(indicators[i], { backgroundColor: "#EA580C", duration: 0.25 }, i);

//         if (i !== 0) {
//           tl.to(img, { autoAlpha: 1, duration: 0.5 }, i);
//           tl.to(article, { autoAlpha: 1, y: 0, duration: 0.5 }, i);
//         }

//         if (i !== points.length - 1) {
//           tl.to(
//             indicators[i],
//             { backgroundColor: "#adadad", duration: 0.25 },
//             i + 0.75
//           );
//           tl.to(article, { autoAlpha: 0, y: -100, duration: 0.5 }, i + 0.75);
//           tl.to(img, { autoAlpha: 0, duration: 0.5 }, i + 0.75);
//         }
//       }
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   const sections = [
//     { title: "Title 1", image: "/products3.jpg" },
//     { title: "Title 2", image: "/about-1.jpg" },
//     { title: "Title 3", image: "/about-2.jpg" },
//   ];

//   return (
//     <section
//       ref={containerRef}
//       className="relative philosophie h-screen overflow-hidden"
//     >
//       <div className="absolute left-8 top-1/2 -translate-y-1/2 h-[80vh] w-[3px] hidden flex-col justify-between indicators z-50">
//         {sections.map((_, index) => (
//           <div
//             key={`indicator-${index}`}
//             ref={(el) => {
//               indicatorsRef.current[index] = el;
//             }}
//             className="w-full bg-neutral-400 flex-grow my-0.5"
//           />
//         ))}
//       </div>
//       <div ref={wrapperRef} className="wrapper h-screen w-full">
//         {sections.map((section, index) => (
//           <div
//             key={`point-${index}`}
//             ref={(el) => {
//               pointsRef.current[index] = el;
//             }}
//             className="point h-screen w-full flex items-center p-16 outline outline-1 outline-red-500"
//           >
//             <article className="flex-[0_0_60%] mr-auto opacity-100 translate-y-0">
//               <h3 className="text-2xl font-bold mb-4 text-black">
//                 {section.title}
//               </h3>
//               <p className="text-base text-black">
//                 Lorem Ipsum is simply dummy text of the printing and typesetting
//                 industry. Lorem Ipsum has been the industry's standard dummy
//                 text ever since the 1500s, when an unknown printer took a galley
//                 of type and scrambled it to make a type specimen book.
//               </p>
//             </article>
//             <img
//               src={section.image}
//               alt={section.title}
//               className="flex-[0_0_25%] max-w-[25vw] h-80 opacity-100 object-cover"
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default AnimatedSections;
////

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const AnimatedSections = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const pointsRef = useRef<(HTMLDivElement | null)[]>([]);
  const indicatorsRef = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    const points = pointsRef.current.filter(
      (ref): ref is HTMLDivElement => ref !== null
    );
    const indicators = indicatorsRef.current.filter(
      (ref): ref is HTMLDivElement => ref !== null
    );
    const height = 100 * points.length;

    points.forEach((elem) => {
      const img = elem.querySelector("img");
      const article = elem.querySelector("article");

      if (img && article) {
        gsap.set(img, { autoAlpha: 1 });
        gsap.set(article, { autoAlpha: 1, y: 0 });
      }
    });

    gsap.set(".indicators", { display: "flex" });

    points.forEach((elem, i) => {
      gsap.set(elem, { position: "absolute", top: 0 });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${height}%`,
        scrub: true,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        id: "points",
      },
    });

    points.forEach((elem, i) => {
      const img = elem.querySelector("img");
      const article = elem.querySelector("article");

      if (img && article) {
        if (i === 0) {
          gsap.set(img, { autoAlpha: 1 });
          gsap.set(article, { autoAlpha: 1, y: 0 });
        } else {
          gsap.set(img, { autoAlpha: 0 });
          gsap.set(article, { autoAlpha: 0, y: 100 });
        }

        if (i !== 0) {
          tl.to(
            indicators[i],
            { backgroundColor: "#EA580C", duration: 0.25 },
            i
          );
          tl.to(img, { autoAlpha: 1, duration: 0.5 }, i);
          tl.to(article, { autoAlpha: 1, y: 0, duration: 0.5 }, i);
        }

        if (i !== points.length - 1) {
          tl.to(
            indicators[i],
            { backgroundColor: "#adadad", duration: 0.25 },
            i + 0.75
          );
          tl.to(article, { autoAlpha: 0, y: -100, duration: 0.5 }, i + 0.75);
          tl.to(img, { autoAlpha: 0, duration: 0.5 }, i + 0.75);
        }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const sections = [
    { title: "Title 1", image: "/products3.jpg" },
    { title: "Title 2", image: "/about-1.jpg" },
    { title: "Title 3", image: "/about-2.jpg" },
  ];

  return (
    <section
      ref={containerRef}
      className="relative philosophie h-screen overflow-hidden"
    >
      <div className="absolute left-8 top-1/2 -translate-y-1/2 h-[80vh] w-[3px] hidden flex-col justify-between indicators z-50">
        {sections.map((_, index) => (
          <div
            key={`indicator-${index}`}
            ref={(el) => {
              indicatorsRef.current[index] = el;
            }}
            className={`w-full flex-grow my-0.5 ${
              index === 0 ? "bg-[#EA580C]" : "bg-neutral-400"
            }`}
          />
        ))}
      </div>
      <div ref={wrapperRef} className="wrapper h-screen w-full">
        {sections.map((section, index) => (
          <div
            key={`point-${index}`}
            ref={(el) => {
              pointsRef.current[index] = el;
            }}
            className="point h-screen w-full flex items-center p-16 outline outline-1 outline-red-500"
          >
            <article className="flex-[0_0_60%] mr-auto opacity-100 translate-y-0">
              <h3 className="text-2xl font-bold mb-4 text-black">
                {section.title}
              </h3>
              <p className="text-base text-black">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </article>
            <img
              src={section.image}
              alt={section.title}
              className="flex-[0_0_25%] max-w-[25vw] h-80 opacity-100 object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnimatedSections;
