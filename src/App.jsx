// src/App.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects"; // <-- Import
import Events from "./pages/Events";     // <-- Import
import Membership from "./pages/Membership"; // <-- Import
import Contact from "./pages/Contact";   // <-- Import
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />   {/* <-- Uncomment */}
          <Route path="/events" element={<Events />} />       {/* <-- Uncomment */}
          <Route path="/membership" element={<Membership />} /> {/* <-- Uncomment */}
          <Route path="/contact" element={<Contact />} />     {/* <-- Uncomment */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;