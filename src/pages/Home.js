import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  // Fonction pour afficher une liste de points
  const renderList = (items) => (
    <ul className="list-disc ml-6">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );

  return (
    <div className="p-6">
      {/* Titre principal */}
      <h1 className="text-3xl font-bold">{t("home.title")}</h1>
      <p className="mt-2">{t("home.description")}</p>
      <p className="text-sm text-gray-600">{t("home.license")}</p>

      {/* Localisation et contact */}
      <h2 className="text-xl font-semibold mt-6">📍 {t("home.location")}</h2>
      <p>📞 {t("home.contact.phone")}</p>
      <p>✉️ {t("home.contact.email")}</p>

      {/* Slogan */}
      <h2 className="text-xl italic font-semibold mt-6 text-blue-600">{t("home.slogan")}</h2>

      {/* Services */}
      <h2 className="text-2xl font-semibold mt-6">📌 {t("home.services.title")}</h2>
      <p className="mt-2">{t("home.services.description")}</p>
      {renderList([
        t("home.services.fiscal"),
        t("home.services.legal"),
        t("home.services.audit"),
        t("home.services.training")
      ])}

      {/* Domaines d'expertise */}
      <h2 className="text-2xl font-semibold mt-6">📌 {t("home.specialties.title")}</h2>
      <p className="mt-2">{t("home.specialties.description")}</p>
      {renderList([
        t("home.specialties.accounting"),
        t("home.specialties.taxation"),
        t("home.specialties.business_law"),
        t("home.specialties.legal_secretariat"),
        t("home.specialties.expatriate_management"),
        t("home.specialties.governance")
      ])}

      {/* Détails des services */}
      <h2 className="text-2xl font-semibold mt-6">📌 {t("home.details.fiscal_advice.title")}</h2>
      {renderList(t("home.details.fiscal_advice.points", { returnObjects: true }))}

      <h2 className="text-2xl font-semibold mt-6">📌 {t("home.details.legal_advice.title")}</h2>
      {renderList(t("home.details.legal_advice.points", { returnObjects: true }))}

      <h2 className="text-2xl font-semibold mt-6">📌 {t("home.details.audit.title")}</h2>
      {renderList(t("home.details.audit.points", { returnObjects: true }))}

      {/* Boutons d'actions */}
      <div className="mt-6 flex gap-4">
        <button className="p-3 bg-blue-500 text-white rounded-lg">{t("home.cta.contact")}</button>
        <button className="p-3 bg-green-500 text-white rounded-lg">{t("home.cta.appointment")}</button>
      </div>
    </div>
  );
}
