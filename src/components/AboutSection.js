import React from "react";
import { useTranslation } from "react-i18next";
import officeImage from "../assets/calculation.jpg";

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Texte d'information */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            {t("home.description")}
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            {t("home.license")}
          </p>

          <div className="space-y-2">
            <p className="text-lg text-gray-700 flex items-center">
              📍 <span className="ml-2 font-medium">{t("home.location")}</span>
            </p>
            <p className="text-lg text-gray-700 flex items-center">
              📞 <span className="ml-2">{t("home.contact.phone")}</span>
            </p>
            <p className="text-lg text-gray-700 flex items-center">
              ✉️ <span className="ml-2">{t("home.contact.email")}</span>
            </p>
          </div>
        </div>

        {/* Image avec ombre et effet stylisé */}
        <div className="flex justify-center">
          <img
            src={officeImage}
            alt="Bureau professionnel"
            className="rounded-lg shadow-lg w-full max-w-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
