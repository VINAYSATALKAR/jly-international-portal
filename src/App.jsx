// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/AboutPage"; // Assuming you renamed About to AboutPage
import Services from "./pages/ServicesPAge"; // Assuming you renamed Services to ServicesPage
import Projects from "./pages/ProjectsPage";
import Events from "./pages/EventsPage";
import Membership from "./pages/MembershipPage";
import Contact from "./pages/ContactPage";
import Faq from "./pages/FaqPage";
import Terms from "./pages/TermsPage";
import InvestmentOpportunitiesPage from "./pages/InvestmentOpportunitiesPage";
import WealthConfluencePage from "./pages/WealthConfluencePage";
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/events" element={<Events />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/investment-opportunities" element={<InvestmentOpportunitiesPage />} />
          <Route path="/wealth-confluence" element={<WealthConfluencePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;