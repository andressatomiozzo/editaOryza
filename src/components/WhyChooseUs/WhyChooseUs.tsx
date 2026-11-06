import React from "react";
import { useLanguageContext } from "../../context/LanguageContext";
import BenefitCard from "./BenefitCard";

import styles from "./WhyChooseUs.module.css";

const WhyChooseUs = () => {
  const { t } = useLanguageContext();

  return (
    <section className={`container ${styles.bgContainer}`}>
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
            <BenefitCard title={b.title} description={b.description} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseUs;
