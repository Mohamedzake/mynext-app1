"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
export default function HomePage({ params }) {
  const router = useRouter();

  const toggleLanguage = () => {
    const newLang = params.lang === "en" ? "ar" : "en";
    router.push(`/${newLang}`);
  };

  return (
    <div>
      <Button className="mt-4" onClick={toggleLanguage}>
        Toggle Language
      </Button>
      {params.lang === "en" ? "Our Story" : "قصتنا"}
    </div>
  );
}
