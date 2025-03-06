import React from "react";
import { useTranslation } from "react-i18next";

const AboutIntro = () => {
  const { t } = useTranslation();

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("about.title")}</h2>
        <p className="text-lg text-gray-700 mb-2">{t("about.intro")}</p>
        <p className="text-gray-600">{t("about.description")}</p>
      </div>
    </section>
  );
};

export default AboutIntro;
