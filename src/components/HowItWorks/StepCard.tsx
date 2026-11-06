import React from "react";
import styles from "./StepCard.module.css";

type IStepCard = {
  number: number;
  title: string;
  description: string;
};

const StepCard = ({ number, title, description }: IStepCard) => {
  return (
    <li className={styles.liContent}>
      <span>{number}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};

export default StepCard;
