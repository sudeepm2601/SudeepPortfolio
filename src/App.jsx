import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/home";
import About from "./pages/about";
import Skills from "./pages/skills";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import RevenueDashboard from "./pages/projectDetails/RevenueDashboard";
import YoutubeDashboard from "./pages/projectDetails/YoutubeDashboard";
import EcommerceDashboard from "./pages/projectDetails/EcommerceDashboard";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
       <Route path="/projects/revenue-dashboard" element={<RevenueDashboard />} />
       <Route
  path="/projects/youtube-dashboard"
  element={<YoutubeDashboard />}
/>

<Route
  path="/projects/ecommerce-dashboard"
  element={<EcommerceDashboard />}
/>
    
    
      </Routes>
    </>
  );
}

export default App;