import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  rently,
  igt,
  expressjs,
  graphql,
  firebase,
  android,
  ios,
  moneymanager,
  ecommerce,
  projectManagement,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Download Resume",
  },
];

const Introduction =
  "I'm a Software Engineer with more than 4.5 years of experience in developing robust Mobile and Web applications using frameworks like React Native, React, Node.js for enterprise-level applications and recognized for ensuring excellence and uniformity across every stage of software development initiatives.";

const projectsIntro =
  "Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.";

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
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
    name: "Android",
    icon: android,
  },
  {
    name: "iOS",
    icon: ios,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: expressjs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "GraphQL",
    icon: graphql,
  },
  {
    name: "firebase",
    icon: firebase,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Senior React Native Developer",
    company_name: "Rently",
    icon: rently,
    iconBg: "#383E56",
    date: "June 2019 - May 2023",
    points: [
      "Led the development of a Smart home Application with 5000+ daily active users working on IoT, VWO (A/B testing), Payment gateway, Maps, Heap, Sentry, App Center & Firebase.",
      "Spearheading the development and maintenance of 3 diverse applications, while adeptly handling 10 white-labeled applications.",
      "Pioneered in MQTT & Bluetooth Hardware(BLE) integration for accessing 12+ iOT devices (Hubs, Smart Locks, Sensors, etc.) from the application User Interface.",
      "Integrated Beans Map, effectively addressing the user navigation challenge and contributing to a 10% rise in app downloads.",
      "Practical knowledge in code signing, app store reviews & code push.",
      "Conducted 100+ code reviews, emphasizing clean code through coding best practices.",
      "Competent in UI/UX design patterns, with a hands on approach for creating visually appealing & user-centric interfaces using Figma, Adobe, Miro & React Native elements library.",
      "Mentored 10+ junior developers to deliver multiple modules in the Smart Home application.",
      "Facilitated Authentication (AWS and Azure SSO) & in-app chat (ADA Chatbot) integrations.",
    ],
  },
  {
    title: "Software Engineer Dev 2",
    company_name: "IGT",
    icon: igt,
    iconBg: "#E6DEDD",
    date: "May 2023 - Present",
    points: [
      "Engaging in the development of complex responsive UI components for lottery gaming application with 2000+ daily active users.",
      "Experienced in Monorepo setup, actively contributing to 110+ private npm packages.",
      "Implementing robust automated workflows using GitHub Actions and Dependabot.",
      "Played a pivotal role in achieving a smooth React Native upgrade.",
      "Significant contributor to the development of the Biometric Authentication module.",
      "Implementing push notifications through Firebase Cloud Messaging & Xtremepush platforms.",
    ],
  },
];

const projects = [
  {
    name: "Money Manager App",
    description:
      "Introducing the Money Manager App, a React Native application tailored for easy income and expense management. This user-friendly app seamlessly integrates Victory charts for intuitive data visualization and relies on a robust Firebase backend for real-time updates and data security. With its simple interface, users can efficiently handle financial transactions while gaining clear insights through visualized data, making financial management a breeze.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
      {
        name: "victory-native-charts",
        color: "orange-text-gradient",
      },
    ],
    image: moneymanager,
    source_code_link: "https://github.com/Bharathkdev/expenseTrackerApp",
  },
  {
    name: "E-Commerce App",
    description:
      "Explore the React Native E-Commerce App for a seamless shopping experience. Captivating UI, intricate product cards, and an immersive Product Details feature for a truly enchanting experience. Effortlessly find products with the robust Search Functionality. Prioritizes clean code practices with TypeScript Integration for enhanced readability and maintainability. Enjoy a visually appealing design for effortless product exploration and purchase.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "redux-toolkit",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/Bharathkdev/RNShop",
  },
  {
    name: "Project Management",
    description:
      "Effortlessly navigate project management and define clear goals using this cutting-edge React web application. Featuring a sleek and polished interface powered by Tailwind CSS, it streamlines the process of creating projects and articulating well-defined goals.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "vite",
        color: "orange-text-gradient",
      },
    ],
    image: projectManagement,
    source_code_link: "https://github.com/Bharathkdev/react-project-management",
  },
];

export {
  Introduction,
  services,
  technologies,
  experiences,
  projects,
  projectsIntro,
};
