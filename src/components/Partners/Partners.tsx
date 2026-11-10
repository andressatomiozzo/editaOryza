import { useLanguageContext } from "../../context/LanguageContext";

import UFRGSIcon from "../../assets/icons/partners/UFRGS.svg?react";
import IECBiotIcon from "../../assets/icons/partners/IECBiot.svg?react";
import FAPERGSIcon from "../../assets/icons/partners/FAPERGS.svg?react";
import SEBRAEIcon from "../../assets/icons/partners/SEBRAE.svg?react";

import styles from "./Partners.module.css";

const logos = [
  {
    icon: <UFRGSIcon />,
    description: "UFRGS",
  },
  {
    icon: <IECBiotIcon />,
    description: "IECBiot",
  },
  {
    icon: <FAPERGSIcon />,
    description: "FAPERGS",
  },
  {
    icon: <SEBRAEIcon />,
    description: "SEBRAE",
  },
  {
    icon: <SEBRAEIcon />,
    description: "SEBRAE",
  },
  {
    icon: <SEBRAEIcon />,
    description: "SEBRAE",
  },
];

const Partners = () => {
  const { t } = useLanguageContext();

  return (
    <section className={styles.container}>
      <div className="container">

        <div className={styles.titleContainer}>
          <h2 className={`title ${styles.title}`}>{t.partners.title}</h2>
          <p className={`paragraph ${styles.paragraph}`}>{t.partners.description}</p>
        </div>

        <ul className={styles.liContainer}>
          {logos.map((logo, i) => (
            <li key={logo.description + i} aria-label={`${logo.description} logo`} className={styles.liContent}>
              {logo.icon}
            </li>
          ))}
        </ul>
        
      </div>
    </section>
  );
};

export default Partners;
