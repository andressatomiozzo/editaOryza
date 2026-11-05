import React from "react";
import styles from "./Solution.module.css";
import { useLanguageContext } from "../../context/LanguageContext";
import ButtonLink from "../ui/ButtonLink";

const Solution = () => {
  const { t } = useLanguageContext();

  return (
    <div className={`containerFlex ${styles.container}`}>
      <div>
        <h2 className={`title2 ${styles.title}`}>{t.about.solution.title}</h2>
        <p className={`paragraph ${styles.paragraph}`}>{t.about.solution.description}</p>
      </div>
      <ButtonLink variant="link1" href="#" color="var(--color-highlight2)">
        {t.about.solution.cta_link}
      </ButtonLink>
    </div>
  );
};

export default Solution;
