import React from "react";
import { useLanguageContext } from "../../hooks/LanguageContext";

import Logo from "../../assets/icons/logo01.svg?react"

const Header = () => {
  const { t, language, setLanguage } = useLanguageContext();
  return (
    <header>
      <Logo/>
      <nav>
        <ul aria-label="Main sections">
          
        </ul>
      </nav>
      <nav>
        <ul aria-label="Languages">

        </ul>
      </nav>
      
    </header>
  );
};

export default Header;
