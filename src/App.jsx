import { Routes, Route } from "react-router-dom";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import AboutMePage from "./pages/AboutMePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AboutMePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
