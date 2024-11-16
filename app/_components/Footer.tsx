// components/Footer.tsx

import Image from "next/image";
import React from "react";
import im from "@/public/pngwing.com.png";
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
    <footer className="bg-[#212175] text-white py-8 px-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* Column 1 */}
        <div className="flex flex-col items-center md:items-start">
          <p>{t("download_app")}</p>
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
          <h4 className="text-green-500 text-lg font-bold mb-2">
            {" "}
            {t("solutions_title")}
          </h4>
          <ul>
            <li>{t("payment_solutions")}</li>
            <li>{t("solutions_title")}</li>
            <li>{t("cash_ai")}</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
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

        <div className="flex flex-col md:items-end text-right">
          <p className="mb-4">{t("footer_description")}</p>
          <div className="flex space-x-4 justify-end">
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
        </div>
      </div>
    </footer>
  );
}

export default Footer;
