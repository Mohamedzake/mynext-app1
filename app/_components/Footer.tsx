// components/Footer.tsx

import Image from "next/image";
import React from "react";
import im from "@/public/pngwing.com.png";
import img from "@/public/Layer 2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";
import {
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  const t = useTranslations("footer");
  return (
    <div>
      <footer className="bg-[#212175] text-white py-8 px-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
          {/* Column 1 */}
          <div className="flex flex-col items-center md:items-start order-4 md:order-1">
            <p>{t("download_app")}</p>
            <button className="mt-2">
              <Image
                src={im}
                alt="Download on Google Play"
                height={150}
                width={150}
              />
            </button>
          </div>

          {/* Column 2 */}
          <div className="order-3 md:order-2 text-center">
            <h4 className="text-green-500 text-lg font-bold mb-2">
              {t("solutions_title")}
            </h4>
            <ul>
              <li>{t("payment_solutions")}</li>
              <li>{t("solutions_title")}</li>
              <li>{t("cash_ai")}</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="order-2 md:order-3 text-center">
            <h4 className="text-green-500 text-lg font-bold mb-2">
              {t("my_cash_title")}
            </h4>
            <ul>
              <li>{t("about_us")}</li>
              <li>{t("our_vision")}</li>
              <li>{t("our_partners")}</li>
              <li>{t("packages")}</li>
              <li>{t("contact_us")}</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col items-center md:items-end text-center md:text-end order-1 md:order-4">
            <Image
              src={img}
              alt="Download on Google Play"
              height={130}
              width={130}
              className="mb-4 flex justify-center md:justify-end"
            />
            <p className="mb-4 text-1xl flex justify-center md:justify-end">
              {t("footer_description")}
            </p>
            <div className="flex gap-4 justify-center md:justify-end">
              <div className="border-primary-10 border-2 p-1 rounded-lg">
                <a href="#" aria-label="Facebook">
                  <FontAwesomeIcon
                    icon={faFacebookSquare}
                    className="text-white text-2xl flex text-center justify-center items-center"
                  />
                </a>
              </div>
              <div className="border-primary-10 border-2 p-1 rounded-lg">
                <a href="#" aria-label="Instagram">
                  <FontAwesomeIcon
                    icon={faInstagramSquare}
                    className="text-white text-2xl flex text-center justify-center items-center"
                  />
                </a>
              </div>
              <div className="border-primary-10 border-2 p-1 rounded-lg">
                <a href="#" aria-label="LinkedIn">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-white text-2xl flex text-center justify-center items-center"
                  />
                </a>
              </div>
              <div className="border-primary-10 border-2 p-1 rounded-lg">
                <a href="#" aria-label="X (Twitter)">
                  <FontAwesomeIcon
                    icon={faTwitterSquare}
                    className="text-white text-2xl flex text-center justify-center items-center"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="bg-gray-200">
        <div className="container mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex gap-6 mb-4 sm:mb-0">
            <h1 className="text-lg text-black hover:text-gray-400 cursor-pointer">
              Terms of Service
            </h1>
            <h1 className="text-lg text-black hover:text-gray-400 cursor-pointer">
              Privacy Policy
            </h1>
          </div>
          <div className="flex gap-4">
            <p className="text-gray-500">2025 My Cash Inc &copy;</p>
            <p className="text-gray-500">All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
