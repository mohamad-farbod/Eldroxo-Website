import React from "react";
import styles from "./Leagueform.module.css";

const Leagueform = ({ leagueSelect, leagueValue }) => {
  return (
    <>
      <div className={styles["leagueform-container"]}>
        <h2>Please Select a League</h2>
        <select
          name="league"
          id="league"
          value={leagueValue}
          onChange={leagueSelect}
        >
          <option value="All Leagues">All Leagues</option>
          <option value="England">England</option>
          <option value="Italy">Italy</option>
          <option value="Spain">Spain</option>
          <option value="Other">Other</option>
        </select>
      </div>
    </>
  );
};

export default Leagueform;
