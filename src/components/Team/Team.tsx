
import EmployeeCard from "./EmployeeCard";
import styles from "./Team.module.css";
import Carrossel from "../ui/Carrossel";
import useMedia from "../../hooks/useMedia";
import { useLanguageContext } from "../../context/LanguageContext";

const Team = () => {
  const { t } = useLanguageContext();
  const media87rem = useMedia("(max-width: 87rem)");

  return (
    <section className={`container containerFlex ${styles.container}`}>
      
      <div className={styles.titleContainer}>
        <h2 className={`title ${styles.title}`}>
          <span>{t.team.title[0]}</span>
          <span>{t.team.title[1]}</span>
        </h2>
        <p className={`paragraph ${styles.subtitle}`}>{t.team.subtitle}</p>
      </div>

      {!media87rem ? (
        <ul className={styles.cards}>
          {t.team.members.map((employee) => (
            <li key={employee.name}>
              <EmployeeCard
                name={employee.name}
                role={employee.role}
                description={employee.description}
                imageSrc={employee.imageSrc}
                
              />
            </li>
          ))}
        </ul>
      ) : (
        <Carrossel>
          {t.team.members.map((employee) => (
            <EmployeeCard
              name={employee.name}
              role={employee.role}
              description={employee.description}
              imageSrc={employee.imageSrc}
              key={employee.name}
            />
          ))}
        </Carrossel>
      )}

    </section>
  );
};

export default Team;
