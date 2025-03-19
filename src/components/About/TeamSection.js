import React from "react";
import { useTranslation } from "react-i18next";

const TeamSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          {t("about.team.title")}
        </h3>
        <p className="text-gray-700 mb-6">{t("about.team.description")}</p>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold text-gray-800">
            {t("about.contact.manager.name")}
          </h4>
          <p className="text-gray-600">{t("about.contact.manager.role")}</p>
          <p className="text-gray-600">{t("about.contact.manager.subrole")}</p>
          <p className="text-sm text-gray-500">{t("about.contact.manager.certifications")}</p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
