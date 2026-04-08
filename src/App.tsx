/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Curriculum } from "./components/Curriculum";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Teachers } from "./components/Teachers";
import { UpcomingClasses } from "./components/UpcomingClasses";
import { Pricing } from "./components/Pricing";
import { Testimonials } from "./components/Testimonials";
import { Enrollment } from "./components/Enrollment";
import { Partners } from "./components/Partners";
import { Footer } from "./components/Footer";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { TermsOfService } from "./components/TermsOfService";

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash);
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  if (currentPath === "#privacy-policy") {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20">
          <PrivacyPolicy />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentPath === "#terms-of-service") {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20">
          <TermsOfService />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Curriculum />
        <WhyChooseUs />
        <Teachers />
        <UpcomingClasses />
        <Pricing />
        <Testimonials />
        <Enrollment />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}


