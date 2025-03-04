// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="p-4 bg-white shadow-md flex justify-between items-center">
      <div className="space-x-6 flex items-center">
        <Link to="/" className="text-gray-700 hover:text-orange-500">{t("navbar.home")}</Link>
        <Link to="/about" className="text-gray-700 hover:text-orange-500">{t("navbar.about")}</Link>
        <Link to="/permanente" className="text-gray-700 hover:text-orange-500">{t("navbar.permanent_assistance")}</Link>
        <Link to="/ponctuelle" className="text-gray-700 hover:text-orange-500">{t("navbar.temporary_assistance")}</Link>
      </div>
      <LanguageSwitcher />
    </nav>
  );
};

export default Navbar;
