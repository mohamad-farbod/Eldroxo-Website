import React from "react";
import styles from "./navbar.module.css";
import eldroxo from "../../../data/images/eldroxo.jpg";
import { NavLink } from "react-router-dom";

import { navbarData } from "./navbarData";

const Navbar = () => {
  return (
    <div className={styles["navbar"]}>
      <div className={styles.logo}>
        <img src={eldroxo} alt="" />
      </div>
      <div className={styles["links-container"]}>
        <ul>
          {navbarData.map((item) => (
            <li key={item.id}>
              <div className={styles.description}>
                <NavLink
                  exact
                  to={item.path}
                  activeClassName={styles["nav-active"]}
                >
                  {item.name}
                </NavLink>
                {item.description ? (
                  <span>
                    <p>{item.description}</p>
                  </span>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
