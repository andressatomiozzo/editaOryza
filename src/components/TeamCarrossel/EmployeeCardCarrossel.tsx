import React from "react";

import styles from "./EmployeeCardCarrossel.module.css";

type IEmployeeCard = {
  name: string;
  role: string;
  description: string[];
  imageSrc: string;
};

const EmployeeCardCarrossel = ({ name, role, description, imageSrc }: IEmployeeCard) => {
  const [openCard, setOpenCard] = React.useState(false);

  return (
    <div className={styles.containerCard} onClick={() => setOpenCard((prev) => !prev)}>

      <h3>{name}</h3>
      <span className={styles.role}>{role}</span>
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

export default EmployeeCardCarrossel;
