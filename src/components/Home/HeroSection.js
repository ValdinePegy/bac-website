import React from "react";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section
      className="relative bg-gray-50 py-24 text-gray-800 flex flex-col items-center justify-center"
    >
      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
        <h1 className="text-5xl font-bold drop-shadow-sm">
          {t("home.welcome_message")}
        </h1>
        <p className="text-xl text-gray-600">{t("home.subtext")}</p>
        <p className="text-lg italic font-medium text-orange-700 bg-orange-100 px-6 py-2 rounded-lg shadow-sm max-w-md mx-auto">
          {t("home.slogan")}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
