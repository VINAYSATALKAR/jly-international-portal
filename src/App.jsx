// src/App.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects"; // <-- Import
import Events from "./pages/Events";     // <-- Import
import Contact from "./pages/Contact";   // <-- Import
import './index.css';
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPAge";
import MembershipPage from "./pages/MembershipPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/services" element={<ServicesPage/>} />
          <Route path="/projects" element={<Projects />} />   {/* <-- Uncomment */}
          <Route path="/events" element={<Events />} />       {/* <-- Uncomment */}
          <Route path="/membership" element={<MembershipPage/>} /> {/* <-- Uncomment */}
          <Route path="/contact" element={<Contact />} />     {/* <-- Uncomment */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;