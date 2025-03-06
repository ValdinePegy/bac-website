import React from "react";
import { useTranslation } from "react-i18next";

const CGAInfo = () => {
  const { t } = useTranslation();

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          {t("about.cga.title")}
        </h3>
        <p className="text-gray-700 mb-4">{t("about.cga.description")}</p>
        <ul className="list-disc ml-6 text-gray-600">
          {t("about.cga.points", { returnObjects: true }).map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CGAInfo;
