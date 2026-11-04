import "./App.css";
import { LanguageProvider } from "./hooks/LanguageContext";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

const App = () => {
  return (
    <LanguageProvider>
      <Header />
      <Hero />
    </LanguageProvider>
  );
};

export default App;
