// src/App.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import './index.css';
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPAge";
import MembershipPage from "./pages/MembershipPage";
import ProjectsPage from "./pages/ProjectsPage";
import EventsPage from "./pages/EventsPage";
import ContactPage from "./pages/ContactPage";
import FaqPage from "./pages/FaqPage";
import TermsPage from "./pages/TermsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/services" element={<ServicesPage/>} />
          <Route path="/projects" element={<ProjectsPage/>} />   {/* <-- Uncomment */}
          <Route path="/events" element={<EventsPage/>} />       {/* <-- Uncomment */}
          <Route path="/membership" element={<MembershipPage/>} /> {/* <-- Uncomment */}
          <Route path="/contact" element={<ContactPage/>} />     {/* <-- Uncomment */}
          <Route path="/faq" element={<FaqPage/>} />     {/* <-- Uncomment */}
          <Route path="/terms" element={<TermsPage/>} />     {/* <-- Uncomment */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;