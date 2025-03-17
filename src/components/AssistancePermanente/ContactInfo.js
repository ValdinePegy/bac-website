import React from "react";
import { useTranslation } from "react-i18next";

const ContactInfo = () => {
  const { t } = useTranslation();

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-gray-700">
          <strong>{t("Adresse Email")}:</strong> {t("advice@bac-cm.com")}
        </p>
      </div>
    </section>
  );
};

export default ContactInfo;
