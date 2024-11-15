// components/Footer.tsx

import Image from "next/image";
import React from "react";
import im from "@/public/pngwing.com.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <footer className="bg-[#212175] text-white py-8 px-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* Column 1 */}
        <div className="flex flex-col items-center md:items-start">
          <p> للأندرويد My Cash قم بتنزيل تطبيق </p>
          <button className="mt-2">
            <Image
              src={im}
              alt="Download on Google Play"
              height={150}
              width={150}
              // className="h-12"
            />
          </button>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-green-500 text-lg font-bold mb-2">الحلول</h4>
          <ul>
            <li>حلول نقاط الدفع</li>
            <li>حلول المدفوعات</li>
            <li>ماي كاش AI</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="text-green-500 text-lg font-bold mb-2">My Cash</h4>
          <ul>
            <li>من نحن</li>
            <li>رؤيتنا ومهمتنا</li>
            <li>شركاؤنا</li>
            <li>الباقات</li>
            <li>تواصل معنا</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col items-center md:items-end">
          <p className="mb-4">
            نظام ماي كاش مصمم لتحسين إدارة المدفوعات والمبيعات وتسهيل عملياتها
            وفقًا لمعايير احترافية وخبرة عميقة.
          </p>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook">
              <FontAwesomeIcon
                icon={faFacebookSquare}
                className="text-white text-2xl"
              />
            </a>
            <a href="#" aria-label="Instagram">
              <FontAwesomeIcon
                icon={faInstagramSquare}
                className="text-white text-2xl"
              />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-white text-2xl"
              />
            </a>
            <a href="#" aria-label="X (Twitter)">
              <FontAwesomeIcon
                icon={faTwitterSquare}
                className="text-white text-2xl"
              />
            </a>
          </div>
          {/* <div className="flex space-x-4">
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook-square text-white text-2xl"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram-square text-white text-2xl"></i>
            </a>
            <a href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin text-white text-2xl"></i>
            </a>
            <a href="#" aria-label="X (Twitter)">
              <i className="fab fa-twitter-square text-white text-2xl"></i>
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
