import React from "react";
import { useTranslation } from "react-i18next";

const MissionVision = () => {
  const { t } = useTranslation();

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Carte Mission */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {t("about.mission.title")}
          </h3>
          <p className="text-gray-700">{t("about.mission.description")}</p>
        </div>
        
        {/* Carte Vision */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {t("about.vision.title")}
          </h3>
          <p className="text-gray-700">{t("about.vision.description")}</p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
