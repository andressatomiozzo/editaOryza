import { useLanguageContext } from "../../context/LanguageContext";
import useScrollY from "../../hooks/useScrollY";

import styles from "./InstitutionalGuidelines.module.css";

const InstitutionalGuidelines = () => {
  const { t } = useLanguageContext();
  const { ref, passed } = useScrollY<HTMLElement>(200);

  return (
    <section id="institutional-guidelines" ref={ref} className={`${passed ? "animeLeft" : ""}  container ${styles.container}`}>
      <h2 className="read-only">{t.institutional_guidelines.title}</h2>
      <ul className={`containerFlex ${styles.itemContainer}`}>
        {t.institutional_guidelines.description.map((element) => (
          <li key={element.title}>
            <h3 className={styles.itemTitle}>{element.title}</h3>
            <p className={styles.paragraph}>{element.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default InstitutionalGuidelines;
