import StepCard from "./StepCard";
import ButtonLink from "../ui/ButtonLink";
import { useLanguageContext } from "../../context/LanguageContext";

import styles from "./HowItWorks.module.css";

const HowItWorks = () => {
  const { t } = useLanguageContext();
  
  return (
    <section className={styles.bgContainer}>
      <div className={`container containerFlex ${styles.container}`}>
        <h2 className={`title ${styles.title}`}>{t.how_it_works.title}</h2>
        <ul className={styles.stepsList}>
          {t.how_it_works.steps.map((step) => (
            <StepCard number={step.step_number} title={step.title} description={step.description} key={step.step_number}/>
          ))}
        </ul>
        <ButtonLink href="#" variant="link1" color="var(--color-highlight1)">
          {t.how_it_works.cta_button}
        </ButtonLink>
      </div>
    </section>
  );
};

export default HowItWorks;
