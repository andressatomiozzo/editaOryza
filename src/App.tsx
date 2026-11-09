import "./App.css";
import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Team from "./components/Team/Team";
import InstitutionalGuidelines from "./components/InstitutionalGuidelines/InstitutionalGuidelines";
import Partners from "./components/Partners/Partners";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <LanguageProvider>
      <Header />
      <Hero />
      <About/>
      <WhyChooseUs/>
      <HowItWorks/>
      <Team/>
      <InstitutionalGuidelines/>
      <Partners/>
      <Contact/>
      <Footer/>
    </LanguageProvider>
  );
};

export default App;
