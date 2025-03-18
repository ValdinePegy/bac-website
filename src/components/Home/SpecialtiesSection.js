import React from "react";
import { useTranslation } from "react-i18next";

const SpecialtiesSection = () => {
  const { t } = useTranslation();

  // Domaines d'expertise avec icônes et descriptions courtes
  const specialties = [
    {
      key: "accounting",
      icon: "📊",
      description: "Gestion comptable et audit financier."
    },
    {
      key: "taxation",
      icon: "💼",
      description: "Optimisation fiscale et gestion des déclarations."
    },
    {
      key: "business_law",
      icon: "⚖️",
      description: "Conseil en droit des affaires et rédaction de contrats."
    },
    {
      key: "legal_secretariat",
      icon: "📝",
      description: "PV des Assemblées et gestion des formalités légales"
    },
    {
      key: "expatriate_management",
      icon: "🌍",
      description: "Accompagnement des expatriés et gestion des visas."
    },
    {
      key: "governance",
      icon: "📈",
      description: "Management stratégique et optimisation des organisations."
    }
  ];

  return (
    <section className="py-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">{t("home.specialties.title")}</h2>
      <p className="text-center mb-6">{t("home.specialties.description")}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {specialties.map((spec, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-2xl transition">
            <div className="text-4xl mb-4">{spec.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{t(`home.specialties.${spec.key}`)}</h3>
            <p className="text-gray-700">{spec.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialtiesSection;
