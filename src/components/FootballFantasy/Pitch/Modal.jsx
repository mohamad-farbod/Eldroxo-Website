import React from "react";
import styles from "./Pitch.module.css";

const Modal = ({ teamName, teamNameHandler, teamSubmitted, teamCancelled }) => {
  return (
    <div className={styles["modal"]}>
      <form action="" className={styles["form-container"]}>
        <label htmlFor="teamName">
          <h3>Please Enter Your Team Name</h3>
        </label>
        <input
          type="text"
          name="teamName"
          value={teamName}
          onChange={teamNameHandler}
        />
        <div>
          <h3>Are you sure you want to submit this team?</h3>{" "}
          <button
            type="submit"
            onClick={teamSubmitted}
            disabled={teamName.length <= 3}
            className={`${styles["btn"]} ${styles["btn-submit"]}`}
          >
            YES
          </button>
          <button
            onClick={teamCancelled}
            className={`${styles["btn"]} ${styles["btn-cancel"]}`}
          >
            CANCEL
          </button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
