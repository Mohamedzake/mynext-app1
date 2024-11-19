import feature1 from "@/public/about-1.jpg";
import feature2 from "@/public/about-2.jpg";

export default function FeaturesSection2() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-2xl bg-gray-200 sm:aspect-h-3 sm:aspect-w-2">
              <img
                src={feature1.src}
                alt="Feature 1"
                className="h-full w-full object-cover object-center group-hover:scale-110 transition duration-500 ease-in-out"
              />
            </div>
            <h3 className="mt-6 text-lg font-semibold text-gray-900">
              إمكانية الوصول للنظام من أي جهاز
            </h3>
            <p className="text-base text-gray-600">
              يمكنك الوصول إلى النظام من أي جهاز كمبيوتر لوحي أو هاتف ذكي.
              يمكانك الوصول إلى جميع البيانات والخدمات من أي مكان.
            </p>
          </div>

          <div className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-2xl bg-gray-200 sm:aspect-h-3 sm:aspect-w-2">
              <img
                src={feature2.src}
                alt="Feature 2"
                className="h-full w-full object-cover object-center group-hover:scale-110 transition duration-500 ease-in-out"
              />
            </div>
            <h3 className="mt-6 text-lg font-semibold text-gray-900">
              تتبع البيانات بسرعة وسهولة
            </h3>
            <p className="text-base text-gray-600">
              تتبع البيانات والحصول على تقارير دقيقة حول أداء التجاري وتبعية كل
              عملية بكل سهولة وبدون تعقيد.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
