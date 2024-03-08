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
  fullstack,
  smartLock,
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
    id: "blog",
    title: "Blog",
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
  {
    title: "Full stack Developer (MERN)",
    icon: fullstack,
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
      "Conducted 100+ code reviews, emphasizing high code quality through coding best practices.",
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
      "Experienced in Monorepo setup, contributing to 110+ private npm packages, enhancing streamlined development and maximizing code reusability across projects.",
      "Implementing robust automated workflows with GitHub Actions and Dependabot, saving the team 2+ hours daily and a 25% decrease in outdated dependencies.",
      "Played a pivotal role in achieving a smooth React Native upgrade.",
      "Significant contributor to the development of the Biometric Authentication module.",
      "Implemented push notifications through Xtremepush platforms, enhancing communication channels and contributing to organizational satisfaction.",
    ],
  },
];

const achievements = [
  {
    achievement:
      "Initiated Tech Tuesday meetups and avoided multiple production issues by discussing, documenting and implementing best solutions collaboratively.",
    company: "IGT",
  },
  {
    achievement:
      "Achieved building own CI/CD system with Fastlane, saving the team 6+ hours per day for build generation, beta and store releases.",
    company: "Rently",
  },
  {
    achievement:
      "Developed a dynamic Front-end React Native Web app along with Node.js backend for Fastlane, achieving 70% faster APK & IPA generation which led to increase in productivity.",
    company: "Rently",
  },
  {
    achievement:
      "Achieved a 100% test case coverage by implementing the Appium framework for automated tests.",
    company: "Rently",
  },
  {
    achievement:
      "Achieved moving Jenkins from a local machine to AWS EC2 cloud with Docker, which saved us 4 hours of daily manual work for test automation.",
    company: "Rently",
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
    name: "Smart Lock App",
    description:
      "Android application that seamlessly integrates with IoT (Internet of Things) technology, enabling users to effortlessly connect with a smart lock through a user-friendly UI. This app empowers users to generate and manage smart lock codes, facilitating secure and convenient locking and unlocking operations via Bluetooth communication within the Android application. Experience the ease of controlling and managing access to your smart lock using state-of-the-art technology right at your fingertips.",
    tags: [
      {
        name: "android",
        color: "blue-text-gradient",
      },
      {
        name: "java",
        color: "green-text-gradient",
      },
      {
        name: "IoT(smart-home)",
        color: "pink-text-gradient",
      },
      {
        name: "smart-locks",
        color: "orange-text-gradient",
      },
    ],
    image: smartLock,
    source_code_link: "https://github.com/Bharathkdev/SmartLockApp",
  },
];

const githubLink = "https://github.com/Bharathkdev";

const linkedinLink = "https://www.linkedin.com/in/bharathrna/";

const blogLink =
  "https://engineering.rently.com/fastlane-build-and-ship-your-app-autonomously/";

export {
  Introduction,
  services,
  technologies,
  experiences,
  achievements,
  projects,
  blogLink,
  githubLink,
  linkedinLink,
  projectsIntro,
};
