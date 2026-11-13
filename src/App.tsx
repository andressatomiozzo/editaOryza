import "./App.css";
import React from "react";
import { LanguageProvider } from "./context/LanguageContext";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Team from "./components/Team/Team";
import TeamCarrossel from "./components/TeamCarrossel/TeamCarrossel";
import InstitutionalGuidelines from "./components/InstitutionalGuidelines/InstitutionalGuidelines";
import Partners from "./components/Partners/Partners";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  const footerRef = React.useRef<HTMLElement>(null);
  
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <About/>
        <WhyChooseUs/>
        <HowItWorks/>
        <Team/>
        <TeamCarrossel/>
        <InstitutionalGuidelines/>
        <Partners/>
        <Contact footerRef={footerRef}/>
      </main>
      <Footer footerRef={footerRef}/>
    </LanguageProvider>
  );
};

export default App;
