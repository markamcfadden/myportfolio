import { Routes, Route } from "react-router-dom";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import AboutMePage from "./pages/AboutMePage";
import SkillsPage from "./pages/SkillsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AboutMePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/skills" element={<SkillsPage />} />
    </Routes>
  );
}

export default App;
