import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  branches: string;
  terms: boolean;
  privacyPolicy: boolean;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  company?: string;
  branches?: string;
  terms?: string;
  privacyPolicy?: string;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    branches: "",
    terms: false,
    privacyPolicy: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();

    const newErrors: FormErrors = {};
    if (!formData.firstName) newErrors.firstName = "الاسم الأول مطلوب";
    if (!formData.lastName) newErrors.lastName = "اسم العائلة مطلوب";
    if (!formData.email) newErrors.email = "البريد الإلكتروني مطلوب";
    if (!formData.phone) newErrors.phone = "رقم الهاتف مطلوب";
    if (!formData.company) newErrors.company = "اسم الشركة مطلوب";
    if (!formData.branches) newErrors.branches = "كم عدد الفروع مطلوب";
    if (!formData.terms) newErrors.terms = "يجب الموافقة على البنود والشروط";
    if (!formData.privacyPolicy)
      newErrors.privacyPolicy = "يجب الموافقة على سياسة الخصوصية";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("تم إرسال النموذج بنجاح!");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        branches: "",
        terms: false,
        privacyPolicy: false,
      });
    }
  };

  return (
    <form
      className="bg-white p-6 rounded-lg shadow-2xl space-y-4"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700 text-right"
          >
            الاسم الأول <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={`mt-1 p-2 block w-full bg-gray-100 border ${
              errors.firstName ? "border-red-500" : "border-gray-300"
            } rounded-full text-right text-black focus:ring focus:ring-blue-200`}
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700 text-right"
          >
            اسم العائلة <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={`mt-1 p-2 block w-full bg-gray-100 border ${
              errors.lastName ? "border-red-500" : "border-gray-300"
            } rounded-full text-right text-black focus:ring focus:ring-blue-200`}
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName}</p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 text-right"
        >
          البريد الإلكتروني <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`mt-1 p-2 block w-full bg-gray-100 border ${
            errors.email ? "border-red-500" : "border-gray-300"
          } rounded-full text-right text-black focus:ring focus:ring-blue-200`}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700 text-right"
        >
          رقم الهاتف <span className="text-red-500">*</span>
        </label>
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <span className="p-2 w-1/3 flex justify-center bg-gray-100 border border-gray-300 rounded-full text-black text-sm">
            Saudi Arabia
          </span>
          <div
            className={`flex items-center w-2/3 bg-gray-100 border ${
              errors.phone ? "border-red-500" : "border-gray-300"
            } rounded-full focus-within:ring focus-within:ring-blue-200`}
          >
            <span className="p-2 text-black">+966</span>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="flex-1 p-2 bg-transparent rounded-full text-black text-end focus:outline-none"
              placeholder="55XXXXXXX"
            />
          </div>
        </div>
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
      </div>

      <div>
        <label
          htmlFor="company"
          className="block text-sm font-medium text-gray-700 text-right"
        >
          اسم الشركة <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className={`mt-1 p-2 block w-full bg-gray-100 border ${
            errors.company ? "border-red-500" : "border-gray-300"
          } rounded-full text-right text-black focus:ring focus:ring-blue-200`}
        />
        {errors.company && (
          <p className="text-red-500 text-sm">{errors.company}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="branches"
          className="block text-sm font-medium text-gray-700 text-right"
        >
          كم عدد الفروع <span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          id="branches"
          name="branches"
          value={formData.branches}
          onChange={handleChange}
          className={`mt-1 p-2 block w-full bg-gray-100 border ${
            errors.branches ? "border-red-500" : "border-gray-300"
          } rounded-full text-right text-black focus:ring focus:ring-blue-200`}
        />
        {errors.branches && (
          <p className="text-red-500 text-sm">{errors.branches}</p>
        )}
      </div>

      <div className="flex gap-2 justify-end">
        <label
          htmlFor="terms"
          className="ml-2 text-sm text-gray-700 text-right"
        >
          <span className="text-red-500">*</span>
          بتحديد هذا المربع، أؤكد أنني قرأت ووافقت على{" "}
          <a href="/terms" className="text-blue-500 underline">
            البنود والشروط
          </a>
        </label>
        <input
          type="checkbox"
          id="terms"
          name="terms"
          checked={formData.terms}
          onChange={handleChange}
          className={`mt-1 ${errors.terms ? "border-red-500" : ""}`}
        />
      </div>
      {errors.terms && <p className="text-red-500 text-sm">{errors.terms}</p>}

      <div className="flex gap-2 justify-end">
        <label
          htmlFor="privacyPolicy"
          className="ml-2 text-sm text-gray-700 text-right"
        >
          <span className="text-red-500">*</span>
          باستخدامك للموقع ، فإنك توافق على جمعنا لبيناتك الشخصية واستخدامها
          وتخزينها بالأسلوب المبين في{" "}
          <a href="/privacy-policy" className="text-blue-500 underline">
            سياسة الخصوصية
          </a>
        </label>

        <input
          type="checkbox"
          id="privacyPolicy"
          name="privacyPolicy"
          checked={formData.privacyPolicy}
          onChange={handleChange}
          className={`mt-1 ${errors.privacyPolicy ? "border-red-500" : ""}`}
        />
      </div>
      {errors.privacyPolicy && (
        <p className="text-red-500 text-sm">{errors.privacyPolicy}</p>
      )}

      <button
        type="submit"
        className="w-full bg-primary-30 text-white py-2 px-4 rounded-full hover:bg-blue-900"
      >
        إرسال
      </button>
    </form>
  );
};

export default Form;
