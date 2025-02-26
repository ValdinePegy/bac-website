import { useTranslation } from "react-i18next";

export default function About() {
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
      <h1 className="text-3xl font-bold">{t("about.title")}</h1>
      <p className="mt-2">{t("about.intro")}</p>
      <p className="mt-2">{t("about.description")}</p>

      <h2 className="text-2xl font-semibold mt-6">{t("about.cga.title")}</h2>
      <p>{t("about.cga.description")}</p>
      {renderList(t("about.cga.points", { returnObjects: true }))}

      <h2 className="text-2xl font-semibold mt-6">{t("about.mission.title")}</h2>
      <p>{t("about.mission.description")}</p>

      <h2 className="text-2xl font-semibold mt-6">{t("about.vision.title")}</h2>
      <p>{t("about.vision.description")}</p>

      <h2 className="text-2xl font-semibold mt-6">{t("about.team.title")}</h2>
      <p>{t("about.team.description")}</p>

      <h2 className="text-2xl font-semibold mt-6">{t("about.contact.title")}</h2>
      <p><strong>{t("about.contact.manager.name")}</strong> - {t("about.contact.manager.role")}</p>
      <p>{t("about.contact.manager.certifications")}</p>
      {renderList(t("about.contact.manager.email", { returnObjects: true }))}
      <p>📞 {t("about.contact.manager.phone")}</p>
      <p>📍 {t("about.contact.office.address")}</p>
      <p>📧 {t("about.contact.office.general_email")}</p>
    </div>
  );
}
