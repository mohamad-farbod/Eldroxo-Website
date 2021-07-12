import React, { useState } from "react";
import styles from "./Pitch.module.css";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import * as actionTypes from "../FootStore/FootActions";

const Pitch = () => {
  const [modal, setModal] = useState(false);

  const [teamName, setTeamName] = useState("");

  //redux state
  const goalkeeper = useSelector((state) => state.goalkeeper);
  const defenders = useSelector((state) => state.defenders);
  const midfielders = useSelector((state) => state.midfielders);
  const attackers = useSelector((state) => state.attackers);

  //redux dipsatch
  const dispatch = useDispatch();
  const setBackdrop = () => dispatch({ type: actionTypes.SHOWBACKDROP });
  const hideBackdrop = () => dispatch({ type: actionTypes.HIDEBACKDROP });

  //Clicking submit button under pitch
  const teamSubmit = () => {
    setModal(true);
    setBackdrop();
  };

  //team name after submit
  const teamTyped = (e) => {
    const team = e.target.value;
    setTeamName(team);
  };

  const teamSubmittedHandler = (e) => {
    e.preventDefault();
    setModal(false);
    hideBackdrop();
    setTeamName("");
  };

  const teamCancelledHandler = (e) => {
    e.preventDefault();
    setModal(false);
    hideBackdrop();
    setTeamName("");
  };
  //

  return (
    <>
      <div className={styles["pitch"]}>
        <div className={styles["attackers"]}>
          {attackers.map((item, index) => (
            <span key={index} className={styles["single-player"]}>
              <h3>{item}</h3>
            </span>
          ))}
        </div>
        <div className={styles["midfielders"]}>
          {midfielders.map((item, index) => (
            <span key={index} className={styles["single-player"]}>
              <h3>{item}</h3>
            </span>
          ))}
        </div>
        <div className={styles["defenders"]}>
          {defenders.map((item, index) => (
            <span key={index} className={styles["single-player"]}>
              <h3>{item}</h3>
            </span>
          ))}
        </div>
        <div className={styles["goalkeeper"]}>
          <span className={styles["single-player"]}>
            <h3>{goalkeeper}</h3>
          </span>
        </div>
      </div>
      <div className={styles["btn-container"]}>
        <button onClick={teamSubmit}>Submit Team</button>
      </div>
      {modal && (
        <Modal
          teamName={teamName}
          teamNameHandler={teamTyped}
          teamSubmitted={teamSubmittedHandler}
          teamCancelled={teamCancelledHandler}
        />
      )}
    </>
  );
};

export default Pitch;
