import { ImHtmlFive, ImCss3 } from 'react-icons/im';
import {
  SiSass,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiRedux,
  SiTypescript,
  SiJest,
  SiNextDotJs,
  SiOctopusdeploy,
  SiCypress,
} from 'react-icons/si';

export const skills = [
  { name: 'React', value: 9.5, icon: <SiReact /> },
  { name: 'Next JS', value: 9.5, icon: <SiNextDotJs /> },
  { name: 'TailWind CSS', value: 10, icon: <SiTailwindcss /> },

  { name: 'Redux (Saga)', value: 9, icon: <SiRedux /> },
  { name: 'Typescript', value: 9, icon: <SiTypescript /> },
  { name: 'Cypress', value: 8, icon: <SiCypress /> },
  { name: 'React Testing Libray', value: 8, icon: <SiOctopusdeploy /> },

  { name: 'HTML', value: 10, icon: <ImHtmlFive /> },
  { name: 'CSS', value: 9.5, icon: <ImCss3 /> },
  { name: 'SASS', value: 9.5, icon: <SiSass /> },
  { name: 'Vanilla Javascript', value: 9, icon: <SiJavascript /> },
  { name: 'Jest', value: 8, icon: <SiJest /> },
];

export const education = [
  'BSc in Electronical Engineering from Shahid Chamran University of Ahvaz',
  'MSc in Electronical Engineering (Image Processing) from Shahid Chamran University of Ahvaz',
];

export const softwares = [
  'Microsoft Office',
  'Visual Studio Code',
  'Figma',
  'Altium Designer',
];
