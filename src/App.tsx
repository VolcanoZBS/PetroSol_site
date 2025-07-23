import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home"; // Move your current main content to this component
import Solutions from "./pages/solutions";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ServiceStations from "./pages/solutions/ServiceStations.tsx";
import Unattended from "./pages/solutions/Unattended";
import IndustrialCRT from "./pages/solutions/IndustrialCRT";
import TraditionalRetail from "./pages/solutions/TraditionalRetail";
import Payment from "./pages/solutions/Payment";
import CustomSolutions from "./pages/solutions/CustomSolutions";
import AI from "./pages/solutions/Ai";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route
            path="/solutions/service-stations"
            element={<ServiceStations />}
          />
          <Route path="/solutions/unattended" element={<Unattended />} />
          <Route path="/solutions/industrial-crt" element={<IndustrialCRT />} />
          <Route
            path="/solutions/traditional-retail"
            element={<TraditionalRetail />}
          />
          <Route path="/solutions/payment" element={<Payment />} />
          <Route
            path="/solutions/custom-solutions"
            element={<CustomSolutions />}
          />
          <Route path="/solutions/ai" element={<AI />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
