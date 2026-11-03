import { useLanguageContext } from "../../hooks/LanguageContext";

import Logo from "../../assets/icons/logo01.svg?react";
import ButtonLink from "../ui/ButtonLink";
import Button from "../ui/Button";

import styles from "./Header.module.css";

const Header = () => {
  const { t, language, setLanguage } = useLanguageContext();
  // console.log(language);
  return (
    <header className={` ${styles.container}`}>
      <div className={`containerFlex container `}>
        <a href="#"><Logo className={styles.logo} /></a>
        <nav>
          <ul aria-label="Main sections" className={`containerFlex`}>
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
          <ul aria-label="Languages" className={`containerFlex`}>
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
      </div>
    </header>
  );
};

export default Header;
