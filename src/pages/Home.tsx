import React, { Suspense, lazy } from "react";
import OptimizationSection from "../components/OptimizationSection";
import Hero from "../components/Hero";
import ContactUsSection from "../components/ContactUsSection";
import OurCustomers from "../components/OurCustomers";
import WebBasedSolution from "../components/WebBasedSolution";
import ValueProposition from "../components/ValueProposition";
import SolutionsSection from "../components/SolutionsSection";
import CertificationsSection from "../components/CertificationsSection";

const ContactUsSectionLazy = lazy(() => import("../components/ContactUsSection"));

const Home = () => {
  return (
    <>
      <Hero />
      <WebBasedSolution />
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <ValueProposition />

        <SolutionsSection />
{/* 
        <CertificationsSection /> */}

        <OurCustomers />
        <OptimizationSection />
        <Suspense fallback={null}>
          <ContactUsSectionLazy />
        </Suspense>
      </main>
    </>
  );
};

export default Home;
