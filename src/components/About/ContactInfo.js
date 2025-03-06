import React from "react";
import { useTranslation } from "react-i18next";

const ContactInfo = () => {
  const { t } = useTranslation();

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          {t("about.contact.title")}
        </h3>
        <p className="text-gray-700">
          <strong>{t("about.contact.manager.name")}:</strong> {t("about.contact.manager.phone")}
        </p>
        <p className="text-gray-700">
          <strong>Email:</strong> {t("about.contact.office.general_email")}
        </p>
        <p className="text-gray-700">
          <strong>Adresse:</strong> {t("about.contact.office.address")}
        </p>
      </div>
    </section>
  );
};

export default ContactInfo;
