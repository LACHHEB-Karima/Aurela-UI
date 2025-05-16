import React from "react";
import { FaExchangeAlt, FaHeadphonesAlt } from "react-icons/fa";
import { BsPatchCheckFill } from "react-icons/bs";

const Feature = ({ icon, title, subtitle }) => (
  <div className="flex flex-col items-center text-center px-4">
    <div className="text-4xl mb-2">{icon}</div>
    <h3 className="font-semibold text-lg mb-1">{title}</h3>
    <p className="text-gray-500">{subtitle}</p>
  </div>
);

const Features = () => {
  return (
    <div className="flex justify-around py-12 bg-white">
      <Feature
        icon={<FaExchangeAlt />}
        title="Easy Exchange Policy"
        subtitle="We offer hassle free exchange policy"
      />
      <Feature
        icon={<BsPatchCheckFill />}
        title="7 Days Return Policy"
        subtitle="We provide 7 days free return policy"
      />
      <Feature
        icon={<FaHeadphonesAlt />}
        title="Best customer support"
        subtitle="we provide 24/7 customer support"
      />
    </div>
  );
};

export default Features;
