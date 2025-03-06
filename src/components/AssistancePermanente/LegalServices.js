import React from "react";
import { useTranslation } from "react-i18next";

const LegalServices = () => {
  const { t } = useTranslation();

  return (
    <section className="p-6 bg-white shadow-md rounded-lg mb-6">
      <h3 className="text-2xl font-semibold mb-4">{t("assistance_permanente.legal.title")}</h3>
      
      <div className="mb-6">
        <h4 className="text-xl font-semibold text-gray-800 mb-2">
          {t("assistance_permanente.legal.assistance.title")}
        </h4>
        <ul className="list-disc ml-6 space-y-2">
          {t("assistance_permanente.legal.assistance.items", { returnObjects: true }).map((item, index) => (
            <li key={index} className="text-gray-700">{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-xl font-semibold text-gray-800 mb-2">
          {t("assistance_permanente.legal.secretariat.title")}
        </h4>
        <ul className="list-disc ml-6 space-y-2">
          {t("assistance_permanente.legal.secretariat.items", { returnObjects: true }).map((item, index) => (
            <li key={index} className="text-gray-700">{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LegalServices;
