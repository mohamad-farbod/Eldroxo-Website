import React from 'react';
import { GrReactjs } from 'react-icons/gr';
import { ImHtmlFive } from 'react-icons/im';
import { SiSass } from 'react-icons/si';
import styles from './homePage.module.scss';
import { skills } from '../../About/Data';
import SingleProject from './Projects/singleProject';
import { useHistory } from 'react-router-dom';

const HomePage = () => {
  const history = useHistory();
  return (
    <>
      <div className={styles['home-container']}>
        <section className={styles['welcome-container']}>
          <h1>Welcome to my portfolio</h1>
          <div className={styles['profile-container']}>
            <p>
              My name is <span>M</span>ohamad <span>F</span>arbod. I'm a
              frontend web developer that tries to build great apps with
              <span> R</span>eact framework. My favorite sport is{' '}
              <span> F</span>
              ootball and my favorite teams are <span> C</span>helsea and{' '}
              <span> J</span>
              uventus.
            </p>
          </div>

          <div className={styles['icons-container']}>
            <ul>
              <li>
                <ImHtmlFive />
              </li>
              <li>
                <SiSass />
              </li>
              <li>
                <GrReactjs />
              </li>
            </ul>
          </div>
        </section>
        <section className={styles['skills-container']}>
          <h1>My Skills</h1>
          <div className={styles['skills-list']}>
            {' '}
            <ul>
              {skills.map((item) => {
                return (
                  <li>
                    <span> {item.icon}</span>
                    <input
                      type="range"
                      name={item.name}
                      min="0"
                      step="1"
                      max="10"
                      value={item.value}
                    />
                    <span>
                      {' '}
                      <label for={item.name}>{item.name}</label>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>{' '}
          <button onClick={() => history.push('/about')}>
            Resume and Contact
          </button>
        </section>
        <section className={styles['projects-container']}>
          <h1>Projects</h1>
          <SingleProject />
        </section>
      </div>
    </>
  );
};

export default HomePage;
