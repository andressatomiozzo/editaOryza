import Challenge from "./Challenge";
import Solution from "./Solution";
import useScrollY from "../../hooks/useScrollY";

import styles from "./About.module.css";

const About = () => {
  const { ref, passed } = useScrollY<HTMLElement>(250);

  return (
    <section ref={ref} className={`${passed ? "animeLeft" : ""} container ${styles.bgContainer}`}>
      <Challenge />
      <Solution />
    </section>
  );
};

export default About;
