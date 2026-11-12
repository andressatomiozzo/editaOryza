import React from "react";
import { useLanguageContext } from "../../context/LanguageContext";
import useMedia from "../../hooks/useMedia";

import LogoIcon from "../../assets/icons/logo01.svg?react";
import MenuIcon from "../../assets/icons/menu.svg?react";
import ButtonLink from "../ui/ButtonLink";
import Button from "../ui/Button";

import styles from "./Header.module.css";
import { useActiveSection } from "../../hooks/useActiveSection";
import useCLickOutside from "../../hooks/useClickOutside";

const Header = () => {
  const { t, language, setLanguage } = useLanguageContext();

  const media64rem = useMedia("(max-width: 64rem)");
  const [menu, setMenu] = React.useState<boolean>(false);

  const ids = t.header.navigation.map((item) => item.id);
  const active = useActiveSection(ids);

  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const menuRef = React.useRef<HTMLUListElement>(null);
  useCLickOutside([buttonRef, menuRef], () => setMenu(false));

  return (
    <header className={`${styles.container}`}>
      <div className={`containerFlex container ${styles.content}`}>
        <a href="#" className={styles.logo} aria-label="Top of page">
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
            ref={buttonRef}
          >
            <MenuIcon />
          </Button>
        )}
        {(!media64rem || menu) && (
          <nav className={styles.linkBtnsContainer}>
            <ul ref={menuRef} aria-label="Main sections" className={`containerFlex ${styles.linkBtns}`}>
              {t.header.navigation.map((d) => (
                <li key={d.id}>
                  <ButtonLink
                    variant={active === d.id ? "link1" : "link3"}
                    href={`#${d.id}`}
                    color="var(--color-highlight2)"
                    aria-current={active === d.id ? "true" : undefined}
                  >
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
