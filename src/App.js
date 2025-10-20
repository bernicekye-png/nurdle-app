import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InteractiveNurdleMapPage from "./pages/InteractiveNurdleMapPage";
import NurdleMapPage from "./pages/NurdleMapPage";
import HomePage from "./pages/HomePage";
import AdvocacyPage from "./pages/AdvocacyPage";
import NurdleIdentifierPage from "./pages/NurdleIdentifierPage"; // ✅ NEW IMPORT

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/interactive-map" element={<InteractiveNurdleMapPage />} />
        <Route path="/confidence-map" element={<NurdleMapPage />} />
        <Route path="/advocacy" element={<AdvocacyPage />} />
        <Route path="/identifier" element={<NurdleIdentifierPage />} />
      </Routes>
    </Router>
  );
}

export default App;
