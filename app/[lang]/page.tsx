"use client";

import { useRouter } from "next/navigation";

export default function HomePage({ params }) {
  const router = useRouter();

  const toggleLanguage = () => {
    const newLang = params.lang === "en" ? "ar" : "en";
    router.push(`/${newLang}`);
  };

  return (
    <div>
      <button onClick={toggleLanguage}>Toggle Language</button>

      {params.lang === "en" ? "Our Story" : "قصتنا"}
    </div>
  );
}
