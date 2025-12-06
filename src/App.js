import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";

import WorkPage from "./Pages/Work/WorkPage";
import ProjectsPage from "./Pages/Projects/ProjectsPage";
import SkillsPage from "./Pages/Skills/SkillsPage";
import { ThemeProvider } from './context/ThemeContext';
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import './styles/global.css';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/work" element={<WorkPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
