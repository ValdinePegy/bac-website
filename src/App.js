import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import AssistancePermanente from "./pages/AssistancePermanente";
import AssistancePonctuelle from "./pages/AssistancePonctuelle";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";

// LanguageSwitcher component
function LanguageSwitcher() {
  return (
    <div className="p-4">
      <button
        className="mr-2 p-2 border border-white rounded"
        onClick={() => i18n.changeLanguage("fr")}
      >
        🇫🇷 Français
      </button>
      <button
        className="p-2 border border-white rounded"
        onClick={() => i18n.changeLanguage("en")}
      >
        🇺🇸 English
      </button>
    </div>
  );
}

// App component
export default function App() {
  return (
    <Router>
      <nav className="p-4 bg-gray-800 text-white">
        <Link to="/" className="mr-4">Accueil</Link>
        <Link to="/about" className="mr-4">À propos</Link>
        <Link to="/permanente" className="mr-4">Assistance Permanente</Link>
        <Link to="/ponctuelle">Assistance Ponctuelle</Link>
      </nav>

      <LanguageSwitcher /> {/* Place LanguageSwitcher here */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/permanente" element={<AssistancePermanente />} />
        <Route path="/ponctuelle" element={<AssistancePonctuelle />} />
      </Routes>
    </Router>
  );
}
