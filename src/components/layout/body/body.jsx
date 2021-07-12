import React from "react";
import styles from "./body.module.css";

const body = (props) => {
  return (
    <div className={styles.bodyContainer}>
      <div className={styles.chelseaBG}></div>
      <div className={styles.pizzaBG}></div>
    </div>
  );
};

export default body;
