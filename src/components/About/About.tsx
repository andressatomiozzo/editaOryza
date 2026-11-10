import Challenge from './Challenge'
import Solution from './Solution'

import styles from "./About.module.css"

const About = () => {
  return (
    <section className={`container ${styles.bgContainer}`}>
      <Challenge/>
      <Solution/>
    </section>
  )
}

export default About
