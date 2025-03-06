import React from "react";
import { useTranslation } from "react-i18next";

const CTASection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gradient-to-r from-white to-[#FFFAF0] p-8 text-center">
      <h2 className="text-3xl font-bold mb-6">{t("home.slogan")}</h2>
      <div className="mt-4 flex justify-center gap-4">
        <button className="bg-white text-gray-800 border border-gray-300 px-6 py-2 rounded-md shadow-sm hover:bg-gray-100 transition">
            {t("home.cta.contact")}
        </button>
        <button className="bg-green-500 text-white px-6 py-2 rounded-md shadow-sm hover:bg-green-600 transition">
            {t("home.cta.appointment")}
        </button>
    </div>
    </section>
  );
};


export default CTASection;
