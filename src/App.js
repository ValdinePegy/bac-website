// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import AssistancePermanente from "./pages/AssistancePermanente";
import AssistancePonctuelle from "./pages/AssistancePonctuelle";
import Navbar from "./components/NavBar";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/permanente" element={<AssistancePermanente />} />
        <Route path="/ponctuelle" element={<AssistancePonctuelle />} />
      </Routes>
    </Router>
  );
}
