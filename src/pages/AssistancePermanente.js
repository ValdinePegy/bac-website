import AccountingServices from "../components/AssistancePermanente/AccountingServices";
import EmploymentServices from "../components/AssistancePermanente/EmploymentServices";
import TaxServices from "../components/AssistancePermanente/TaxServices";
import LegalServices from "../components/AssistancePermanente/LegalServices";
import ManagementCenter from "../components/AssistancePermanente/ManagementCenter";
import NonResidentsManagement from "../components/AssistancePermanente/NonResidentsManagement";
import ContactInfo from "../components/About/ContactInfo";

const AssistancePermanente = () => {
  return (
    <div className="space-y-6 p-6">
      <AccountingServices />
      <EmploymentServices />
      <TaxServices />
      <LegalServices />
      <ManagementCenter />
      <NonResidentsManagement />
      <ContactInfo />
    </div>
  );
};

export default AssistancePermanente;

