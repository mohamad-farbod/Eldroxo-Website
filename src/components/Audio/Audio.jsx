import React, { useState } from "react";
import styles from "./Audio.module.scss";
import { AiFillCloseCircle } from "react-icons/ai";
import music from "./music.mp3";

const Audio = () => {
  const [showAudio, setShowAudio] = useState(true);
  return (
    <div>
      {showAudio && (
        <div className={styles["audio"]}>
          <audio src={music} controls autoPlay={true}></audio>{" "}
          <div
            className={styles["audio-close"]}
            onClick={() => setShowAudio(false)}
          >
            <AiFillCloseCircle />
          </div>
        </div>
      )}
    </div>
  );
};

export default Audio;
