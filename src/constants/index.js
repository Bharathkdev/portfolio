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
  evently,
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
  "I'm a Software Engineer with around 5 years of experience in developing robust Mobile and Web applications using frameworks like React Native, React, Node.js for enterprise-level applications and recognized for ensuring excellence and uniformity across every stage of software development initiatives.";

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
      "Led the development of a Smart home Application with 5000+ daily active users working on IoT, VWO (A/B testing), MQTT, Bluetooth, Payment gateway, Maps, Heap, Sentry, App Center & Firebase.",
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
      "Implementing robust automated workflows with GitHub Actions and Dependabot, saving the team 2+ hours daily & efficiently managing the outdated dependencies.",
      "Played a pivotal role in achieving a smooth React Native upgrade.",
      "Significant contributor to the development of the native Biometric Authentication module.",
      "Leveraging native APIs & SDKs for both Android & iOS integration (Objective-C/ Java).",
      "Integrating the customer engagement platform Xtremepush, resulting in enhanced customer engagement, boosting company revenues.",
    ],
  },
];

const achievements = [
  {
    achievement:
      "Initiated Tech Tuesday meetups and eliminated multiple production issues by discussing, documenting and implementing best solutions collaboratively.",
    company: "IGT",
  },
  {
    achievement:
      "Achieved building own CI/CD system with Fastlane, saving the team 6+ hours per day for build generation, beta and store releases.",
    company: "Rently",
  },
  {
    achievement:
      "Developed a dynamic Front-end React app along with Node.js backend for Fastlane, achieving 70% faster APK & IPA generation which led to increase in productivity.",
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
  {
    achievement:
      "Optimized app performance & user experience by 25% by integrating Firebase Performance Monitoring & shopify react-native-performance libraries.",
    company: "Rently",
  },
  {
    achievement:
      "Integrated payment gateways (Authorize.net & Stripe), conducted A/B testing for subscription plans, resulting in a 7% increase in company revenue.",
    company: "Rently",
  },
  {
    achievement:
      "Efficiently addressed 200+ bugs, resulting in increased app ratings to 4.7 on Android and 4.8 on iOS.",
    company: "Rently & IGT",
  },
  {
    achievement:
      "Released 10+ React native mobile applications in both iOS App Store & Google Play Store with automated releases(Fastlane).",
    company: "Rently & IGT",
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
    name: "Event Platform",
    description:
      "Built on Next.js 14, the events application stands as a comprehensive, full-stack platform with MongoDB backed database for managing events. With a fully responsive user interface, it serves as a hub, spotlighting diverse events taking place globally. Featuring seamless payment processing through Stripe, you have the capability to purchase tickets for any event or even initiate and manage your own events.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "orange-text-gradient",
      },
    ],
    image: evently,
    source_code_link: "https://github.com/Bharathkdev/event_platform",
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
