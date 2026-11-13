import EmployeeCard from "./EmployeeCard";
import Carrossel from "../ui/Carrossel";
import useMedia from "../../hooks/useMedia";
import { useLanguageContext } from "../../context/LanguageContext";
// import useScrollY from "../../hooks/useScrollY";

import styles from "./Team.module.css";

const Team = () => {
  const { t } = useLanguageContext();
  const media87rem = useMedia("(max-width: 87rem)");
  // const { ref, passed } = useScrollY<HTMLDivElement>(250);

  return (
    // <section ref={ref} className={`${passed ? "animeLeft" : ""} container containerFlex ${styles.container}`}>
    <section id="team" className={`container containerFlex ${styles.container}`}>
      <div className={styles.titleContainer}>
        <h2 className={`title ${styles.title}`}>
          <span>{t.team.title[0]}</span>
          <span>{t.team.title[1]}</span>
        </h2>
        <p className={`paragraph ${styles.subtitle}`}>{t.team.subtitle}</p>
      </div>

      <ul className={styles.cards}>
        {t.team.members.map((employee) => (
          <li key={employee.name}>
            <EmployeeCard
              name={employee.name}
              role={employee.role}
              description={employee.description}
              imageSrc={employee.imageSrc}
              shortBio={employee.short_bio}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Team;
