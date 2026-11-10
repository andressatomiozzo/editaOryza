import BenefitCard from "./BenefitCard";
import { useLanguageContext } from "../../context/LanguageContext";
import useScrollY from "../../hooks/useScrollY";

import styles from "./WhyChooseUs.module.css";

const WhyChooseUs = () => {
  const { t } = useLanguageContext();
  const { ref, passed } = useScrollY<HTMLElement>(250);

  return (
    <section ref={ref} className={`${passed ? "animeLeft" : ""} container ${styles.bgContainer}`}>
      <div className={`${styles.content}`}>
        <div className={`containerFlex ${styles.text}`}>
          <h2 className={`title ${styles.title}`}>
            <span>{t.about.why_choose_us.title[0]}</span>
            <span>{t.about.why_choose_us.title[1]}</span>
          </h2>
          <p className={`paragraph ${styles.paragraph}`}>{t.about.why_choose_us.subtitle}</p>
        </div>
        <ul className={styles.cards}>
          {t.about.why_choose_us.benefits.map((b) => (
            <BenefitCard title={b.title} description={b.description} key={b.title} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseUs;
