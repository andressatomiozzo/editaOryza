import "./App.css";
import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";

const App = () => {
  return (
    <LanguageProvider>
      <Header />
      <Hero />
      <About/>
    </LanguageProvider>
  );
};

export default App;
