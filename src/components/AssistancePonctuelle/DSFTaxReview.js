import React from "react";
import { useTranslation } from "react-i18next";

const DSFTaxReview = () => {
  const { t } = useTranslation();

  return (
    <section className="p-6 bg-gray-50 shadow-md rounded-lg mb-6">
      <h3 className="text-2xl font-semibold mb-4">
        {t("assistance_ponctuelle.dsf_tax_review.title")}
      </h3>
      <ul className="list-disc ml-6 space-y-2 text-gray-700">
        {t("assistance_ponctuelle.dsf_tax_review.items", { returnObjects: true }).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default DSFTaxReview;
