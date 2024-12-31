import React from "react";

function Newpackages() {
  return (
    <div className="bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-gray-100 rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <table className="table-auto w-full border-collapse border-2 bg-primary-10 border-gray-100">
            <tbody>
              <tr className="border-b-2 border-gray-100">
                <td className="w-1/3 text-center border-r-2 border-gray-100 p-2">
                  <div className="text-black">
                    <h1 className="text-2xl font-bold">البداية</h1>
                    <p className="text-xl text-gray-400">
                      ريال
                      <span className="text-3xl font-bold text-black">
                        1000
                      </span>
                      سنويًا
                    </p>
                    <p className=" text-gray-400">
                      تدفع سنويًا غير شامل الضريبة
                    </p>
                  </div>
                </td>
                <td className="w-2/3 bg-gray-100"></td>
              </tr>

              {[
                "لوحة تحكم مبسطة مع رؤية دقيقة وتحليلات وتقارير متقدمة",
                "إمكانية إدارة العمليات بسلاسة، وتصنيف المنتجات حسب الحاجة",
                "إدارة المبيعات والمخزون",
                "عدد منتجات غير محدود",
                "نظام متابعة للمخزون والجرد والتالف",
                "إصدار عروض الأسعار وإدارة العملاء والموردين",
                "استقبال الدفعات وتقسيمها بمرونة",
                "دعم نظام 'ادفع لاحقًا' (تابي، تمارا)",
                "توافق مع نقاط البيع",
                "فواتير فورية، مبسطة، وضريبية",
                "تتبع فواتير كل بائع بسهولة",
                "تصميم سهل الاستخدام يناسب الجميع مع دعم مختلف الأجهزة",
                "تخصيص حسب احتياجات العملاء",
                "تقارير مبيعات ومدفوعات تفصيلية (مدى، فيزا، ماستر)",
                "تقارير دورية للضرائب (يومية، شهرية، ربع سنوية)",
                "تقارير دقيقة للمنتجات الضافة الباعة والمرتجعة",
                "كاشير ويب متكامل",
                "تحديثات مجانية ودعم فني متوفر 7/24",
                "الربط مع خدمات التوصيل (مثل جاهز، تويو، نينجا...)",
                "تصدير واستيراد المنتجات عبر ملف اكسل",
              ].map((feature, index) => (
                <tr key={index} className="border-b-2 border-gray-100">
                  <td className="w-1/3 text-center border-r-2 border-gray-100">
                    <span className=" text-primary-30 text-3xl font-bold h-2 w-2 flex items-center justify-center mx-auto">
                      &#10003;
                    </span>
                  </td>

                  <td className="w-2/3 text-end text-black p-6">{feature}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Newpackages;
