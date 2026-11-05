import React from "react";
import { useLanguageContext } from "../../context/LanguageContext";
import ButtonLink from "../ui/ButtonLink";

import styles from "./Hero.module.css";

const Hero = () => {
  const { t } = useLanguageContext();

  return (
    <section className={styles.container}>
      <div className="container">
        <div className={styles.content}>
          <h1 className="title">
            <span>{t.hero.title[0]}</span>
            <span>{t.hero.title[1]}</span>
          </h1>
          <p className="paragraph">{t.hero.subtitle}</p>
          <div className={styles.buttons}>
            <ButtonLink variant="link1" href="#" color="var(--color-highlight1)">
              {t.hero.cta_buttons.start}
            </ButtonLink>
            <ButtonLink variant="link2" href="#" color="var(--color-highlight2)">
              {t.hero.cta_buttons.start}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
