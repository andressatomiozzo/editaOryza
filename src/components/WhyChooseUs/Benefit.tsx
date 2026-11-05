import type { LiHTMLAttributes, PropsWithChildren } from "react";
import styles from "./Benefit.module.css";

type Benefit = React.PropsWithChildren<LiHTMLAttributes<HTMLLinkElement>> & {
  title: string;
  description: string;
};

const Benefit = ({ title, description }: Benefit) => {
  return (
    <li className={styles.listItem}>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};

export default Benefit;
