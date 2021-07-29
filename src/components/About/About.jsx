import React from "react";
import styles from "./About.module.scss";
import { skills, education, softwares } from "./Data";
import { AiOutlineGithub, AiOutlineMail } from "react-icons/ai";
import HomeButton from "./../HomeButton/HomeButton";

const About = () => {
  return (
    <div className={styles["about-container"]}>
      <HomeButton />
      <section className={styles["resume-container"]}>
        <h1>Resume Summary</h1>
        <p>
          I've Studied Electronical Engineering at university but I'm more
          interested in web designing. Since 2020 I've started to study the
          Front end of the web and I'm working as a freelancer. After studying
          the basics of HTML, CSS, and Vanilla Javascript, I decided to use the
          React framework.
        </p>
        <div className={styles["contact-container"]}>
          <h1>Contact Info</h1>
          <h3>
            <AiOutlineMail /> Email: <span> Mohamad.Farbod.WD@gmail.com</span>
          </h3>
          <h3>
            <AiOutlineGithub />
            Github:
            <span>
              <a href="https://github.com/mohamad-farbod">Mohamad-Farbod</a>
            </span>
          </h3>
        </div>
      </section>
      <section className={styles["sideItems-container"]}>
        <h1>Education</h1>
        <ul>
          {education.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
        <div className={styles["skills-container"]}>
          <h1>Skills </h1>
          <ul>
            {skills.map((item, index) => {
              return <li key={index}>{item.name}</li>;
            })}
          </ul>
          <div className={styles["skills-container"]}>
            <h1>Softwares</h1>
            <ul>
              {softwares.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
