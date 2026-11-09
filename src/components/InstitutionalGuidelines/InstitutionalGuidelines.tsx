import React from "react";
import { useLanguageContext } from "../../context/LanguageContext";
import styles from "./InstitutionalGuidelines.module.css"

const InstitutionalGuidelines = () => {
  const { t } = useLanguageContext();
  return (
    <section className={`container ${styles.container}`}>
      <h2 className="read-only">{t.institutional_guidelines.title}</h2>
      <ul className={`containerFlex ${styles.itemContainer}`}>
        {t.institutional_guidelines.description.map((element) => (
          <li>
            <h3 className={styles.itemTitle}>{element.title}</h3>
            <p className={styles.paragraph}>{element.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default InstitutionalGuidelines;
