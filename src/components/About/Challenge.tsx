import React from "react";
import styles from "./Challenge.module.css";
import { useLanguageContext } from "../../context/LanguageContext";

const Challenge = () => {
  const { t } = useLanguageContext();

  return (
    <div className={`${styles.container}`}>
      <h2 className={`title2 ${styles.title}`}>{t.about.challenge.title}</h2>
      <p className="paragraph">{t.about.challenge.description}</p>
    </div>
  );
};

export default Challenge;
