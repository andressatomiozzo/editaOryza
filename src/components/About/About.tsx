import React from 'react'
import Challenge from './Challenge'
import Solution from './Solution'

import styles from "./About.module.css"

const About = () => {
  return (
    <section className={`container ${styles.container}`}>
      <Challenge/>
      <Solution/>
    </section>
  )
}

export default About
