import { useTranslation } from "react-i18next";

export default function AssistancePermanente() {
  const { t } = useTranslation();

  // Fonction pour afficher une liste sous forme de <ul>
  const renderList = (items) => (
    <ul className="list-disc ml-6">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{t("assistance_permanente.title")}</h1>

      {/* Travaux de Comptabilité */}
      <h2 className="text-2xl font-semibold mt-6">{t("assistance_permanente.accounting.title")}</h2>
      {renderList(t("assistance_permanente.accounting.items", { returnObjects: true }))}

      {/* Travaux liés à l'Emploi */}
      <h2 className="text-2xl font-semibold mt-6">{t("assistance_permanente.employment.title")}</h2>
      {renderList(t("assistance_permanente.employment.items", { returnObjects: true }))}

      {/* Travaux de Fiscalité */}
      <h2 className="text-2xl font-semibold mt-6">{t("assistance_permanente.tax.title")}</h2>
      {renderList(t("assistance_permanente.tax.items", { returnObjects: true }))}

      {/* Travaux Juridiques */}
      <h2 className="text-2xl font-semibold mt-6">{t("assistance_permanente.legal.title")}</h2>

      {/* Assistance Juridique */}
      <h3 className="text-xl font-semibold mt-4">{t("assistance_permanente.legal.assistance.title")}</h3>
      {renderList(t("assistance_permanente.legal.assistance.items", { returnObjects: true }))}

      {/* Secrétariat Juridique */}
      <h3 className="text-xl font-semibold mt-4">{t("assistance_permanente.legal.secretariat.title")}</h3>
      {renderList(t("assistance_permanente.legal.secretariat.items", { returnObjects: true }))}

      {/* Centre de Gestion Agréé */}
      <h2 className="text-2xl font-semibold mt-6">{t("assistance_permanente.management_center.title")}</h2>
      {renderList(t("assistance_permanente.management_center.items", { returnObjects: true }))}

      {/* Gestion des Non-Résidents */}
      <h2 className="text-2xl font-semibold mt-6">{t("assistance_permanente.non_residents.title")}</h2>
      {renderList(t("assistance_permanente.non_residents.items", { returnObjects: true }))}
    </div>
  );
}
