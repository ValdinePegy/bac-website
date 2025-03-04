import React from "react";
import i18n from "../i18n";

const LanguageSwitcher = () => (
  <div className="flex space-x-2">
    <button
      className="px-3 py-1 border border-white rounded-md hover:bg-white hover:text-blue-500 transition"
      onClick={() => i18n.changeLanguage("fr")}
    >
      🇫🇷 Français
    </button>
    <button
      className="px-3 py-1 border border-white rounded-md hover:bg-white hover:text-blue-500 transition"
      onClick={() => i18n.changeLanguage("en")}
    >
      🇺🇸 English
    </button>
  </div>
);

export default LanguageSwitcher;
