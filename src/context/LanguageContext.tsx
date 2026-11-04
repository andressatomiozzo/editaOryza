import React, { type PropsWithChildren } from "react";
import en from "../content/EN-WebsiteContent.json";
import pt from "../content/PT-WebsiteContent.json";

type Language = "en" | "pt";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof en;
}

const translations = { en, pt };

const LanguageContext = React.createContext<LanguageContextType | null>(null);

export const useLanguageContext = () => {
  const language = React.useContext(LanguageContext);
  if (!language) throw new Error("useContext deve estar dentro de um Provider");
  return language;
};

export const LanguageProvider = ({ children }: PropsWithChildren) => {
  const [language, setLanguage] = React.useState<Language>("pt");
  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
