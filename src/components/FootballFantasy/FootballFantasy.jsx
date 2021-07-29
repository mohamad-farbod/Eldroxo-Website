import React, { useState, useEffect } from "react";
import styles from "./FootballFantasy.module.css";
import Leagueform from "./LeagueForm/Leagueform";
import Pitch from "./Pitch/Pitch";

import SingleTeam from "./SingleTeam/SingleTeam";
import { allTeams } from "./teamService";
import { useSelector } from "react-redux";
import HomeButton from "../HomeButton/HomeButton";

const FootballFantasy = () => {
  const [teams, setTeams] = useState(allTeams);
  const [league, setLeague] = useState("All Leagues");
  const backdrop = useSelector((state) => state.showBackdrop);

  const leagueSelectHandler = (e) => {
    const item = e.target.value;
    setLeague(item);
  };

  const singleTeamHandler = (team) => {
    setTeams(allTeams.filter((item) => item.name === team));
  };

  useEffect(() => {
    if (league === "All Leagues") {
      setTeams(allTeams);
    } else {
      setTeams(allTeams.filter((team) => team.league === league));
    }
  }, [league]);

  return (
    <>
      <div className={styles["fantasy-container"]}>
        <HomeButton />
        {backdrop && <div className={styles["backdrop"]}></div>}
        <div className={styles["league-container"]}>
          <Leagueform leagueValue={league} leagueSelect={leagueSelectHandler} />
        </div>
        <div className={styles["container"]}>
          <div className={styles["left-side"]}>
            {teams.map((item) => {
              return (
                <SingleTeam
                  length={teams.length}
                  leagueChanged={league}
                  key={item.id}
                  {...item}
                  singleTeamSelect={singleTeamHandler}
                />
              );
            })}
          </div>
          <div className={styles["pitch-container"]}>
            <Pitch />
          </div>
        </div>
        <div className={styles["pitch-bg"]}></div>
      </div>
    </>
  );
};

export default FootballFantasy;
