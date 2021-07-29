import React from "react";
import { AiFillHome } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import styles from "./HomeButton.module.scss";

const HomeButton = () => {
  const history = useHistory();
  return (
    <div className={styles["home-button-container"]}>
      <div className={styles["home-button"]}>
        <AiFillHome onClick={() => history.push("/")} />
        {/* <h6>Return to Homepage</h6> */}
      </div>
    </div>
  );
};

export default HomeButton;
