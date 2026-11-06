import React from "react";
import { useLanguageContext } from "../../context/LanguageContext";
import EmployeeCard from "./EmployeeCard";
import styles from "./Team.module.css";

const Team = () => {
  const { t } = useLanguageContext();
  return (
    <section className={`container containerFlex ${styles.container}`}>
      <div className={styles.titleContainer}>
        <h2 className={`title ${styles.title}`}>
          <span>{t.team.title[0]}</span>
          <span>{t.team.title[1]}</span>
        </h2>
        <p className={`paragraph ${styles.subtitle}`}>{t.team.subtitle}</p>
      </div>
      <ul className={styles.cards}>
        {t.team.members.map((employee) => (
          <EmployeeCard
            name={employee.name}
            role={employee.role}
            description={employee.description}
            imageSrc={employee.imageSrc}
          />
        ))}
      </ul>
    </section>
  );
};

export default Team;
