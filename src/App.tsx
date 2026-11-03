import "./App.css";
import { LanguageProvider } from "./hooks/LanguageContext";
import Header from "./pages/Header";

const App = () => {
  return (
    <LanguageProvider>
      <Header />
    </LanguageProvider>
  );
};

export default App;
