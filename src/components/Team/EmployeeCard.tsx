import React from "react";

import styles from "./EmployeeCard.module.css";

type IEmployeeCard = {
  name: string;
  role: string;
  description: string[];
  imageSrc: string;
  shortBio: string
};

const EmployeeCard = ({ name, role, description, imageSrc, shortBio }: IEmployeeCard) => {
  const [openCard, setOpenCard] = React.useState(false);

  return (
    <div className={styles.containerCard} onClick={() => setOpenCard((prev) => !prev)}>

      <h3>{name}</h3>
      <span className={styles.role}>{role}</span>
      <span className={styles.shortBio}>{shortBio}</span>
      <img src={imageSrc} alt={name} width={240} height={240} loading="lazy" />

      {openCard && (
        <span className={styles.description}>
          {description.map((s) => (
            <span style={{ display: "block", marginTop: "0.5rem" }}>{s}</span>
          ))}
        </span>
      )}
      
    </div>
  );
};

export default EmployeeCard;
