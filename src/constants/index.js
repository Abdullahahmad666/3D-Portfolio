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
  shopifyy,
  nodejs,
  mongodb,
  java,
  mysql,
  git,

  business,
  
  rangza,
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
    title: "Shopify Developer",
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
    name: "Shopify",
    icon: shopifyy,
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
    name: "Rangza",
    description:
      "A Shopify store offering handmade decoration pieces and customizable templates for personal and event use. I developed and customized the storefront to enhance user experience and support personalized orders.",
    tags: [
      {
        name: "shopify",
        color: "blue-text-gradient",
      },
      {
        name: "liquid",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: rangza,
    hosted_link:
      "https://rangza.net/",
  },
  {
    name: "Business Website",
    description:
      "A web-based platform specializing in bulk purchasing and trading of diverse materials including iron, aluminum, vehicles, and electronics. We connect buyers and suppliers for efficient, large-scale procurement with reliable sourcing.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "business",
        color: "pink-text-gradient",
      },
    ],
    image: business,
    hosted_link: "https://asuppaltrading-website.vercel.app/",
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
    "https://drive.google.com/file/d/1riuFtmc6-ZpXXGC85DAm1LM1w-TWgg1D/view?usp=drive_link",
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
