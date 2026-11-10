import { useLanguageContext } from "../../context/LanguageContext";
import useScrollY from "../../hooks/useScrollY";

import ufrgsImg from "../../assets/images/partners/UFRGS.png";
import iceBiotImg from "../../assets/images/partners/IECBiot.png";
import fapergsImg from "../../assets/images/partners/FAPERGS.png";
import sebraeImg from "../../assets/images/partners/SEBRAE.png";

import styles from "./Partners.module.css";

const logos = [
  {
    imgUrl: ufrgsImg,
    description: "UFRGS",
  },
  {
    imgUrl: iceBiotImg,
    description: "IECBiot",
  },
  {
    imgUrl: fapergsImg,
    description: "FAPERGS",
  },
  {
    imgUrl: sebraeImg,
    description: "SEBRAE",
  },
  {
    imgUrl: sebraeImg,
    description: "SEBRAE",
  },
  {
    imgUrl: sebraeImg,
    description: "SEBRAE",
  },
];

const Partners = () => {
  const { t } = useLanguageContext();
  const { ref, passed } = useScrollY<HTMLDivElement>(250);

  return (
    <section className={styles.container}>
      <div ref={ref} className={`${passed ? "animeLeft" : ""} container`}>
        <div className={styles.titleContainer}>
          <h2 className={`title ${styles.title}`}>{t.partners.title}</h2>
          <p className={`paragraph ${styles.paragraph}`}>{t.partners.description}</p>
        </div>

        <ul className={styles.liContainer}>
          {logos.map((logo, i) => (
            <li key={logo.description + i} aria-label={`${logo.description} logo`} className={styles.liContent}>
              <img src={logo.imgUrl} alt={logo.description} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Partners;
