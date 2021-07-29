import React from "react";
import styles from "./singleProject.module.scss";
import fantasy from "../images/projects/fantasy.jpg";
import fastfood from "../images/projects/fastfood.jpg";
import { useHistory } from "react-router-dom";

const projects = [
  {
    id: 1,
    name: "Football Fantasy",
    image: fantasy,
    features: ["SASS", "React", "Redux", "Axios"],
    description:
      "A small app to build your favorite team of 5 from the best clubs in the world",
    path: "/footballfantasy",
  },
  {
    id: 2,
    name: "Fastfood Menu",
    image: fastfood,
    features: ["SASS", "React", "Axios"],
    description:
      "A small app to order your favorite food from our fastfood menu",
    path: "/fastfoodmenu",
  },
];

const SingleProject = () => {
  const history = useHistory();

  return (
    <div className={styles["projects-container"]}>
      <ul>
        {projects.map((item) => {
          const { id, path, name, image, features, description } = item;
          return (
            <li key={id} onClick={() => history.push(path)}>
              <div className={styles["single-project-container"]}>
                <h3>{name}</h3>
                <div className={styles["image-container"]}>
                  <img src={image} alt={name} />
                </div>
                <h4>
                  Features: <span>{features.join(", ")}</span>
                </h4>
                <p>{description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SingleProject;
