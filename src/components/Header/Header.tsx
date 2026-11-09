import React from "react";
import { useLanguageContext } from "../../context/LanguageContext";
import LogoIcon from "../../assets/icons/logo01.svg?react";
import MenuIcon from "../../assets/icons/menu.svg?react";
import ButtonLink from "../ui/ButtonLink";
import Button from "../ui/Button";

import styles from "./Header.module.css";
import useMedia from "../../hooks/useMedia";

const Header = () => {
  const { t, language, setLanguage } = useLanguageContext();
  const media64rem = useMedia("(max-width: 64rem)");
  const [menu, setMenu] = React.useState<boolean>(false);
  return (
    <header className={`${styles.container}`}>
      <div className={`containerFlex container ${styles.content}`}>
        <a href="#" className={styles.logo}>
          <LogoIcon />
        </a>
        <nav>
          <ul aria-label="Languages" className={`containerFlex ${styles.languagesBtns}`}>
            <li>
              <Button
                variant={language === "pt" ? "button1" : "button3"}
                color="var(--color-highlight2)"
                onClick={() => setLanguage("pt")}
                aria-label="Português"
              >
                {t.header.languages[0]}
              </Button>
            </li>
            <li>
              <Button
                variant={language === "en" ? "button1" : "button3"}
                color="var(--color-highlight2)"
                onClick={() => setLanguage("en")}
                aria-label="English"
              >
                {t.header.languages[1]}
              </Button>
            </li>
          </ul>
        </nav>
        {media64rem && (
          <Button
            variant="button3"
            color="var(--color-highlight2"
            className={styles.menuIcon}
            onClick={() => setMenu((prev) => !prev)}
            aria-label="Open/Close button"
          >
            <MenuIcon />
          </Button>
        )}
        {(!media64rem || menu) && (
          <nav className={styles.linkBtnsContainer}>
            <ul aria-label="Main sections" className={`containerFlex ${styles.linkBtns}`}>
              {t.header.navigation.map((d) => (
                <li key={d.id}>
                  <ButtonLink variant="link3" href={d.id} color="var(--color-highlight2)">
                    {d.print}
                  </ButtonLink>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
