import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextJs,
  redux,
  tailwind,
  angular,
  nodejs,
  mongodb,
  java,
  mysql,
  git,
  aptihealthWeb,
  aptihealthApp,
  zealWeb,
  zealApp,
  rollWeb,
  rollApp,
  linkedIn,
  github,
} from "../assets/";
import Sovanza from '../assets/company/sovanza.png';
import HashStack from '../assets/company/hashstack.png';
import User from '../assets/company/user.png';

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "NodeJs Developer",
    icon: backend,
  },
   
  {
    title: "Javascript Developer",
    icon: creator,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
 
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextJs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [

  {
    title: "Frontend Developer",
    company_name: "Self-employed",
    company_website: "",
    icon: User,
    iconBg: "#E6DEDD",
    date: "April 2024 - Present",
    points: [
      "Developed and customized Shopify stores, including theme editing, product integration, and responsive design enhancements.",

"Created professional-grade LaTeX documents, including technical reports, resumes, and formatted academic content.",

"Delivered freelance React.js projects for clients based in the UK and Germany, focusing on dynamic front-end interfaces and performance optimization.",

"Collaborated with international clients to gather requirements, implement feedback, and ensure timely delivery of high-quality web solutions.",
    ],
  },
 
  {
    title: "Frontend Intern",
    company_name: "Sovanza",
    company_website: "https://sovanza.com/",
    icon: Sovanza,
    iconBg: "#E6DEDD",
    date: "January 2024 – March 2024",
    points: [
      "Built responsive and interactive user interfaces using React.js, HTML, CSS, and JavaScript.",

"Utilized React hooks (useState, useEffect) and component-based architecture to manage UI logic efficiently.",

"Integrated RESTful APIs and handled asynchronous data rendering.",

"Ensured cross-browser compatibility and mobile responsiveness for a seamless user experience.",
    ],
  },
  {
    title: "MERN Stack Intern",
    company_name: "HashStack Developers",
    company_website: "https://hashstackdevelopers.com/",
    icon: HashStack,
    iconBg: "#E6DEDD",
    date: "June 2023 – July 2023",
    points: [
      "Contributed to full-stack web development projects using the MERN stack (MongoDB, Express.js, React, Node.js) to build dynamic, scalable, and responsive web applications.",
      "Developed and maintained RESTful APIs, ensuring efficient data retrieval and manipulation.",
      "Collaborated with cross-functional teams to design and implement user-friendly interfaces, enhancing user experience", 
      "Collaborated with senior developers to implement RESTful APIs, manage backend logic, and enhance front-end functionality for a seamless user experience.",
    ],
  },
  
];

const projects = [
  {
    name: "Aptihealth Web",
    description:
      "Revolutionizing mental healthcare in New York State with a user-friendly platform for personalized therapy and progress tracking. Provides the digital gateway to comprehensive behavioral healthcare.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: aptihealthWeb,
    hosted_link: "https://www.aptihealth.com/",
  },
  {
    name: "Aptihealth App",
    description:
      "Access top-notch mental healthcare anytime, anywhere in New York State with our innovative app. Track your progress, schedule appointments, and connect with expert therapists for personalized care.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "sendbird",
        color: "green-text-gradient",
      },
      {
        name: "twilio",
        color: "pink-text-gradient",
      },
    ],
    image: aptihealthApp,
    hosted_link: "https://apps.apple.com/us/app/aptihealth/id1477170874",
  },
  {
    name: "Zeal Web",
    description:
      "The Zeal website elevates the experience of enjoying activities with trusted friends, fostering connections and making every interaction exciting.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: zealWeb,
    hosted_link: "https://getzeal.co/",
  },
  {
    name: "Zeal App",
    description:
      "Discover a world of activities with friends through Zeal, an engaging platform. Create events, post updates, chat, and enjoy in-person activities hassle-free. Boost your social life with Zeal!",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "sendgrid",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: zealApp,
    hosted_link:
      "https://apps.apple.com/us/app/zeal-activities-with-friends/id6446917140",
  },
  {
    name: "Roll Web",
    description:
      "The Roll website is the gateway to the future of decentralized communities and digital assets. It allows users to seamlessly earn, redeem, send, and trade social tokens.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "formik",
        color: "pink-text-gradient",
      },
    ],
    image: rollWeb,
    hosted_link: "https://app.tryroll.com/",
  },
  {
    name: "Roll App",
    description:
      "Join the future of decentralized communities and digital assets with Roll. Earn, redeem, send, and trade social tokens on this innovative platform. Experience transparent transactions and captivating UI design.",
    tags: [
      {
        name: "react-native-web",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "storybook",
        color: "pink-text-gradient",
      },
    ],
    image: rollApp,
    hosted_link:
      "https://play.google.com/store/apps/details?id=com.roll&hl=en_GB",
  },
];

const personalInfo = {
  name: "Abdullah",
  fullName: "Abdullah Ahmad",
  email: "abdullah.ahmad3579@gmail.com",
  role: "Software Engineer",
  about: `I'm a skilled Software Engineer with hands-on experience in JavaScript and XML, and strong expertise in modern frameworks like React.js, React Native, and Node.js. I’m a fast learner who thrives in collaborative environments, working closely with clients to build efficient, scalable, and user-friendly solutions that solve real-world problems. Let’s bring your ideas to life with clean, impactful code.`,
  projectsIntro: `The following projects showcase my skills and experience through real-world examples of my work. Each project includes a brief description and a live demo, highlighting my ability to solve complex problems, work with diverse technologies, and manage projects efficiently.`,
};

const publicUrls = {
  resume:
    "https://drive.google.com/file/d/1DLwdMrHRsXwsdgJx73Jl-e5wiiRNnIIW/view?usp=drive_link",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "www.linkedin.com/in/abdullah-ahmad-a00913259",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/Abdullahahmad666",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
