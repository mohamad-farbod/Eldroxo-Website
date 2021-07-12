import React, { useState, useEffect } from "react";
import styles from "./SingleTeam.module.css";
import * as actionTypes from "../FootStore/FootActions";
import { useDispatch } from "react-redux";

const SingleTeam = ({
  name,
  image,
  league,
  singleTeamSelect,
  players,
  length,
  leagueChanged,
}) => {
  const { goalKeeper, defenders, midfielders, attackers } = players;

  const [showPlayers, setShowPlayers] = useState(false);

  useEffect(() => {
    setShowPlayers(false);
  }, [leagueChanged]);

  const toggleTeam = () => {
    setShowPlayers(true);
  };

  const dispatch = useDispatch();

  const goalkeeperSelect = (goalKeeper) =>
    dispatch({ type: actionTypes.GOALKEEPERSELECT, player: goalKeeper });
  const defenderSelect = (item) =>
    dispatch({ type: actionTypes.DEFENDERSELECT, player: item });

  const midfielderSelect = (item) =>
    dispatch({ type: actionTypes.MIDFIELDERSELECT, player: item });
  const attackerSelect = (item) =>
    dispatch({ type: actionTypes.ATTACKERSELECT, player: item });

  const onGoalkeeperSelect = (item) => {
    goalkeeperSelect(item);
  };
  const onMidfielderSelect = (item) => {
    midfielderSelect(item);
  };
  const onDefenderSelect = (item) => {
    defenderSelect(item);
  };
  const onAttackerSelect = (item) => {
    attackerSelect(item);
  };

  return (
    <>
      <div
        className={`${styles["container"]} ${
          length === 1 ? styles["container-big"] : null
        }`}
      >
        <div>
          <h4>{name}</h4>
        </div>

        <div
          onClick={() => {
            singleTeamSelect(name);
            toggleTeam();
          }}
          className={styles["card-container"]}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div>
          <h5>League: {league}</h5>
        </div>
      </div>
      {showPlayers && (
        <div className={styles["players-container"]}>
          <h4>
            Goalkeeper:
            <span
              className={styles["single-player"]}
              onClick={() => onGoalkeeperSelect(goalKeeper)}
            >
              {goalKeeper}
            </span>
          </h4>
          <h4>
            Defenders:
            {defenders.map((item, index) => (
              <span
                key={index}
                className={styles["single-player"]}
                onClick={() => onDefenderSelect(item)}
              >
                {item}
              </span>
            ))}
          </h4>
          <h4>
            Midfielders:
            {midfielders.map((item, index) => (
              <span
                key={index}
                className={styles["single-player"]}
                onClick={() => onMidfielderSelect(item)}
              >
                {item}
              </span>
            ))}
          </h4>
          <h4>
            Attackers:
            {attackers.map((item, index) => (
              <span
                key={index}
                className={styles["single-player"]}
                onClick={() => onAttackerSelect(item)}
              >
                {item}
              </span>
            ))}
          </h4>
        </div>
      )}
    </>
  );
};

export default SingleTeam;
