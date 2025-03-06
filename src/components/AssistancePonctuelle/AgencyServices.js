import React from "react";
import { useTranslation } from "react-i18next";

const AgencyServices = () => {
  const { t } = useTranslation();

  return (
    <section className="p-6 bg-white shadow-md rounded-lg mb-6">
      <h3 className="text-2xl font-semibold mb-4">
        {t("assistance_ponctuelle.agency_services.title")}
      </h3>
      <ul className="list-disc ml-6 space-y-2 text-gray-700">
        {t("assistance_ponctuelle.agency_services.items", { returnObjects: true }).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default AgencyServices;
