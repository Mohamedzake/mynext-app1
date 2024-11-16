// "use client";

// import { useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { useTranslations } from "next-intl";

// export default function HomePage({ params }) {
//   const t = useTranslations();
//   const router = useRouter();

//   const toggleLanguage = () => {
//     const newLang = params.lang === "en" ? "ar" : "en";
//     router.push(`/${newLang}/cabins`);
//   };

//   return (
//     <div>
//       <Button className="mt-4" onClick={toggleLanguage}>
//         {t("Title")}
//       </Button>
//       <p>{t("ourStory")}</p>
//       <a href="/" className="mr-4">
//         {t("backToHome")}
//       </a>
//     </div>
//   );
// }
