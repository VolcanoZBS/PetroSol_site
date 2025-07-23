import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Solutions from "./pages/solutions";
import About from "./pages/About";
import Contact from "./pages/Contact";

import ServiceStations from "./pages/solutions/ServiceStations";
import Unattended from "./pages/solutions/Unattended";
import IndustrialCRT from "./pages/solutions/IndustrialCRT";
import TraditionalRetail from "./pages/solutions/TraditionalRetail";
import Payment from "./pages/solutions/Payment";
import CustomSolutions from "./pages/solutions/CustomSolutions";
import Ai from "./pages/solutions/Ai";

const solutionRoutes = [
  { path: "service-stations", element: <ServiceStations /> },
  { path: "unattended", element: <Unattended /> },
  { path: "industrial-crt", element: <IndustrialCRT /> },
  { path: "traditional-retail", element: <TraditionalRetail /> },
  { path: "payment", element: <Payment /> },
  { path: "custom-solutions", element: <CustomSolutions /> },
  { path: "ai", element: <Ai /> },
];

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          {solutionRoutes.map(({ path, element }) => (
            <Route
              key={path}
              path={`/solutions/${path}`}
              element={element}
            />
          ))}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
