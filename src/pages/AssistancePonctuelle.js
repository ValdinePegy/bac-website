import { useTranslation } from "react-i18next";

export default function AssistancePonctuelle() {
  const { t } = useTranslation();

  const renderList = (items) => (
    <ul className="list-disc ml-6">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{t("assistance_ponctuelle.title")}</h1>

      {/* Régularisation Fiscale et Sociale Annuelle sur Salaire */}
      <h2 className="text-2xl font-semibold mt-6">{t("assistance_ponctuelle.annual_tax_regulation.title")}</h2>
      {renderList(t("assistance_ponctuelle.annual_tax_regulation.items", { returnObjects: true }))}

      {/* Revue Fiscale de la DSF */}
      <h2 className="text-2xl font-semibold mt-6">{t("assistance_ponctuelle.dsf_tax_review.title")}</h2>
      {renderList(t("assistance_ponctuelle.dsf_tax_review.items", { returnObjects: true }))}

      {/* Assistance en Matière de Change */}
      <h2 className="text-2xl font-semibold mt-6">{t("assistance_ponctuelle.foreign_exchange.title")}</h2>
      {renderList(t("assistance_ponctuelle.foreign_exchange.items", { returnObjects: true }))}

      {/* Assistance en Matière d’Agence */}
      <h2 className="text-2xl font-semibold mt-6">{t("assistance_ponctuelle.agency_services.title")}</h2>
      {renderList(t("assistance_ponctuelle.agency_services.items", { returnObjects: true }))}

      {/* Assistance en Matière de Prix de Transfert */}
      <h2 className="text-2xl font-semibold mt-6">{t("assistance_ponctuelle.transfer_pricing.title")}</h2>
      {renderList(t("assistance_ponctuelle.transfer_pricing.items", { returnObjects: true }))}

      {/* Assistance aux Contrôle et Contentieux Fiscaux */}
      <h2 className="text-2xl font-semibold mt-6">{t("assistance_ponctuelle.tax_disputes.title")}</h2>

      {/* Contrôle sur Pièces */}
      <h3 className="text-xl font-semibold mt-4">{t("assistance_ponctuelle.tax_disputes.pieces_control.title")}</h3>
      {renderList(t("assistance_ponctuelle.tax_disputes.pieces_control.items", { returnObjects: true }))}

      {/* Contrôle sur Place */}
      <h3 className="text-xl font-semibold mt-4">{t("assistance_ponctuelle.tax_disputes.onsite_control.title")}</h3>
      {renderList(t("assistance_ponctuelle.tax_disputes.onsite_control.items", { returnObjects: true }))}

      {/* Suivi de la Procédure Administrative */}
      <h3 className="text-xl font-semibold mt-4">{t("assistance_ponctuelle.tax_disputes.administrative_procedure.title")}</h3>
      {renderList(t("assistance_ponctuelle.tax_disputes.administrative_procedure.items", { returnObjects: true }))}

      {/* Recours Préalable devant l’Administration */}
      <h3 className="text-xl font-semibold mt-4">{t("assistance_ponctuelle.tax_disputes.preliminary_appeal.title")}</h3>
      {renderList(t("assistance_ponctuelle.tax_disputes.preliminary_appeal.items", { returnObjects: true }))}

      {/* Recours Contentieux devant la Chambre Administrative */}
      <h3 className="text-xl font-semibold mt-4">{t("assistance_ponctuelle.tax_disputes.judicial_appeal.title")}</h3>
      {renderList(t("assistance_ponctuelle.tax_disputes.judicial_appeal.items", { returnObjects: true }))}
    </div>
  );
}

