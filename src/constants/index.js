import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },

  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Software Deveoper Intern (AMTS)",
    company_name: "Salesforce",
    icon: starbucks,
    iconBg: "#accbe1",
    date: "May 2025 - July 2025",
    points: [
      "Dynamic Health Reports: Transformed static cell health reports into flexible, customizable templates,eliminating manual code changes.",
      " NLP-Driven Monitoring Summaries: Integrated NLP with Salesforce AIOps for real-time cell health summaries and monitoring via natural language prompts.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
    {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Diary App",
    description:
      "Built a full-stack Diary Entry Web Application using the MERN stack (MongoDB, Express.js, React.js, Node.js) with secure user authentication, personalized diary creation, and persistent daily entry storage.Implemented an interactive calendar view for seamless entry retrieval and integrated an in-app radio feature to enhance user experience with a soothing journaling environment",
    link: "https://diary-app-4gnw.vercel.app/",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Flash Cards",
    description:
      "Flashcards is a web application built with the MERN stack for organizing and managing study notes. Users can create and delete decks, as well as add and remove flashcards. The app features a responsive design for seamless use across devices, with  full CRUD functionality ",
    link: "https://flashcards-client-iota.vercel.app/#",
  },
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Music Academy",
    description:
      "Music Academy is a frontend web application built with Aceternity UI to manage and explore music courses. Users can browse, enroll in courses, and access music lessons. The app is designed with a responsive interface for smooth use on all devices, with future plans to expand functionality.",
    link: "https://music-academy-navy.vercel.app/",
  },

  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Aviral Solar Power",
    description:
      "Aviral Solar Power is a web application built with the NEXT JS to promote and manage solar energy solutions. Users can explore solar products, learn about renewable energy benefits, and make inquiries. The app features a responsive design, ensuring accessibility across all devices, with scope for further enhancements.",
    link: "https://asp-five.vercel.app/",
  },
  
  
];
