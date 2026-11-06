import type { LiHTMLAttributes, PropsWithChildren } from "react";
import styles from "./BenefitCard.module.css";

type BenefitCard = React.PropsWithChildren<LiHTMLAttributes<HTMLLinkElement>> & {
  title: string;
  description: string;
};

const BenefitCard = ({ title, description }: BenefitCard) => {
  return (
    <li className={styles.listItem}>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};

export default BenefitCard;
