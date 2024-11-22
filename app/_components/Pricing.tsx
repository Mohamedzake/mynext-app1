import React from "react";

interface PricingPlanProps {
  name: string;
  price: number;
  features: string[];
}

const PricingPlan: React.FC<PricingPlanProps> = ({ name, price, features }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-bold mb-4">{name}</h3>
        <div className="flex items-baseline mb-8">
          <span className="text-4xl font-bold">${price}</span>
          <span className="text-gray-500">/year</span>
        </div>
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg
                className="h-6 w-6 text-green-500 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-black text-1xl">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded">
        Get started
      </button>
    </div>
  );
};

const Pricing: React.FC = () => {
  const pricingPlans = [
    {
      name: "Professional",
      price: 899,
      features: [
        "Add 5 branches",
        "Add unlimited products",
        "Add unlimited clients",
        "Issuing tax invoices",
        "Issuing simplified invoices",
        "Issuing instant invoices",
      ],
    },
    {
      name: "Basic",
      price: 699,
      features: [
        "Add 5 branches",
        "Add unlimited products",
        "Add unlimited clients",
        "Issuing tax invoices",
        "Issuing simplified invoices",
        "Issuing instant invoices",
        "MyCash system + free handled device",
      ],
    },
    {
      name: "Integrated",
      price: 1199,
      features: [
        "Add 5 branches",
        "Add unlimited products",
        "Add unlimited clients",
        "Issuing tax invoices",
        "Issuing simplified invoices",
        "Issuing instant invoices",
        "Issuing tax reports",
        "Issuing inventory reports",
      ],
    },
  ];

  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <PricingPlan
              key={index}
              name={plan.name}
              price={plan.price}
              features={plan.features}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
