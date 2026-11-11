import { useLanguageContext } from "../../context/LanguageContext";
import ButtonLink from "../ui/ButtonLink";
import useScrollY from "../../hooks/useScrollY";

import styles from "./Hero.module.css";

const Hero = () => {
  const { t } = useLanguageContext();

  return (
    <section id="home" className={`animeLeft ${styles.bgContainer}`}>
      <div className="container">
        <div className={styles.content}>
          <h1 className="title">
            <span>{t.hero.title[0]}</span>
            <span>{t.hero.title[1]}</span>
          </h1>
          <p className="paragraph">{t.hero.subtitle}</p>
          <ul className={styles.buttons}>
            <li>
              <ButtonLink variant="link1" href="#contact" color="var(--color-highlight1)">
                {t.hero.cta_buttons.start}
              </ButtonLink>
            </li>
            <li>
              <ButtonLink variant="link2" href="#differentiators" color="var(--color-highlight2)">
                {t.hero.cta_buttons.know}
              </ButtonLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
