import "./App.css";
import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import HowItWorks from "./components/HowItWorks/HowItWorks";

const App = () => {
  return (
    <LanguageProvider>
      <Header />
      <Hero />
      <About/>
      <WhyChooseUs/>
      <HowItWorks/>
    </LanguageProvider>
  );
};

export default App;
