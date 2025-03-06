import React from "react";
import { useTranslation } from "react-i18next";

const TaxDisputes = () => {
  const { t } = useTranslation();

  const renderSection = (sectionKey) => (
    <div className="mb-6">
      <h4 className="text-xl font-semibold text-gray-800 mb-2">
        {t(`assistance_ponctuelle.tax_disputes.${sectionKey}.title`)}
      </h4>
      <ul className="list-disc ml-6 space-y-2">
        {t(`assistance_ponctuelle.tax_disputes.${sectionKey}.items`, { returnObjects: true }).map((item, index) => (
          <li key={index} className="text-gray-700">{item}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className="p-6 bg-white shadow-md rounded-lg mb-6">
      <h3 className="text-2xl font-semibold mb-4">
        {t("assistance_ponctuelle.tax_disputes.title")}
      </h3>
      {renderSection("pieces_control")}
      {renderSection("onsite_control")}
      {renderSection("administrative_procedure")}
      {renderSection("preliminary_appeal")}
      {renderSection("judicial_appeal")}
    </section>
  );
};

export default TaxDisputes;
