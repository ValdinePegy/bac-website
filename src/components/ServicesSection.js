import React from "react";
import { useTranslation } from "react-i18next";

const ServicesSection = () => {
  const { t } = useTranslation();

  // Services avec description spécifique
  const services = [
    {
      key: "fiscal",
      icon: "💼",
      bgColor: "bg-blue-100",
      description: t("home.details.fiscal_advice.points", { returnObjects: true })
    },
    {
      key: "legal",
      icon: "⚖️",
      bgColor: "bg-green-100",
      description: t("home.details.legal_advice.points", { returnObjects: true })
    },
    {
      key: "audit",
      icon: "📊",
      bgColor: "bg-yellow-100",
      description: t("home.details.audit.points", { returnObjects: true })
    },
    {
      key: "training",
      icon: "🎓",
      bgColor: "bg-purple-100",
      description: [t("Offre des formations dans le domaine")]
    }
  ];

  return (
    <section className="py-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">
        {t("home.services.title")}
      </h2>
      <p className="text-center mb-6 text-gray-600">{t("home.services.description")}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-md ${service.bgColor} transition transform hover:scale-105`}
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-blue-700">
              {t(`home.services.${service.key}`)}
            </h3>
            <ul className="list-disc ml-4 text-gray-700">
              {service.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;

