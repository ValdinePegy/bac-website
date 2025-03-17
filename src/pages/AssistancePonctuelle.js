// src/pages/AssistancePonctuelle.js
import AnnualTaxRegulation from "../components/AssistancePonctuelle/AnnualTaxRegulation";
import DSFTaxReview from "../components/AssistancePonctuelle/DSFTaxReview";
import ForeignExchange from "../components/AssistancePonctuelle/ForeignExchange";
import AgencyServices from "../components/AssistancePonctuelle/AgencyServices";
import TransferPricing from "../components/AssistancePonctuelle/TransferPricing";
import TaxDisputes from "../components/AssistancePonctuelle/TaxDisputes";
import ContactInfo from "../components/About/ContactInfo";

const AssistancePonctuelle = () => {
  return (
    <div className="space-y-6 p-6">
      <AnnualTaxRegulation />
      <DSFTaxReview />
      <ForeignExchange />
      <AgencyServices />
      <TransferPricing />
      <TaxDisputes />
      <ContactInfo />
    </div>
  );
};

export default AssistancePonctuelle;
