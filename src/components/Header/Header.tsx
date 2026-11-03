import React from "react";
import { useLanguageContext } from "../../hooks/LanguageContext";

import Logo from "../../assets/icons/logo01.svg?react";
import ButtonLink from "../ui/ButtonLink";
import Button from "../ui/Button";

const Header = () => {
  const { t, language, setLanguage } = useLanguageContext();
  // console.log(language);
  return (
    <header>
      <Logo />
      <nav>
        <ul aria-label="Main sections">
          {t.header.navigation.map((d) => (
            <li key={d.id}>
              <ButtonLink variant="link3" href={d.id} color="var(--color-highlight2)">
                {d.print}
              </ButtonLink>
            </li>
          ))}
        </ul>
      </nav>
      <nav>
        <ul aria-label="Languages">
          <li>
            <Button
              variant={language === "pt" ? "button1" : "button3"}
              color="var(--color-highlight2)"
              onClick={() => setLanguage("pt")}
            >
              {t.header.languages[0]}
            </Button>
          </li>
          <li>
            <Button
              variant={language === "en" ? "button1" : "button3"}
              color="var(--color-highlight2)"
              onClick={() => setLanguage("en")}
            >
              {t.header.languages[1]}
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
