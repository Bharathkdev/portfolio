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
  aora,
  Portfolio,
  customKeyboard,
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
  "I'm a Software Engineer with 5 years of experience in developing robust full-stack Mobile and Web applications using frameworks such as React Native, React.js, Next.js and Node.js. I specialize in crafting complex applications and am known for ensuring excellence and uniformity across every stage of software development initiatives.";

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
    title: "Senior Software Developer",
    company_name: "Rently",
    icon: rently,
    iconBg: "#383E56",
    date: "June 2019 - May 2023",
    points: [
      "Led the development of a web & mobile Smart home Rental Application with 5000+ daily active users working on IoT, VWO (A/B testing), MQTT, Bluetooth, Payment gateway, Maps, Heap, Sentry, App Center & Firebase.",
      "Spearheading the development and maintenance of 3 diverse applications, while adeptly handling 10 white-labeled applications.",
      "Pioneered in MQTT & Bluetooth Hardware(BLE) integration for accessing 12+ iOT devices (Hubs, Smart Locks, Sensors, etc.) from the application User Interface.",
      "Integrated Beans Map, effectively addressing the user navigation challenge and contributing to a 10% rise in app downloads.",
      "Practical knowledge in code signing, app store reviews & code push.",
      "Conducted 100+ code reviews, emphasizing high code quality through coding best practices.",
      "Competent in UI/UX design patterns, with a hands on approach for creating visually appealing & user-centric interfaces using Figma, Adobe, Miro, Material UI & React Native elements library.",
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
      "Leading the development of complex, responsive UI components using React and React Native for a lottery gaming application, which serves over 2,000 daily active users.",
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
      "Developed a dynamic Full stack CI/CD system with React, Node.js, Websockets & SQLite DB for Fastlane, achieving 70% faster APK & IPA generation & significantly boosting productivity",
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
      "Optimized app performance & user experience by 25% by integrating Firebase Performance Monitoring & shopify performance libraries.",
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
      "Released 10+ React & React native applications in production environments successfully with automated releases(Fastlane).",
    company: "Rently & IGT",
  },
];

const projects = [
  {
    name: "3D Portfolio",
    description:
      "Discover my interactive 3D portfolio crafted in React, Three.js, React Three Fiber, React Three Drei, Tailwind CSS, and Framer Motion. Experience a unique three-dimensional perspective, responsive design with Tailwind CSS, and captivating animations powered by Framer Motion. Stay connected effortlessly with integrated email functionality.",
    tags: [
      {
        name: "reactjs",
        color: "violet-text-gradient",
      },
      {
        name: "threejs",
        color: "blue-text-gradient",
      },
      {
        name: "react-three-fiber",
        color: "green-text-gradient",
      },
      {
        name: "react-three-drei",
        color: "pink-text-gradient",
      },
      {
        name: "framer-motion",
        color: "orange-text-gradient",
      },
    ],
    image: Portfolio,
    sourceCode: "https://github.com/Bharathkdev/portfolio",
    linkedinPost: "https://www.linkedin.com/posts/bharathrna_reactjs-threejs-tailwindcss-activity-7179008939152273408-fBbD?utm_source=share&utm_medium=member_desktop",
  },
  {
    name: "Event Platform",
    description:
      "Built on Next.js 14, the events application stands as a comprehensive, full-stack platform with MongoDB backed database for managing events. With a fully responsive user interface, it serves as a hub, spotlighting diverse events taking place globally. Featuring seamless payment processing through Stripe, you have the capability to purchase tickets for any event or even initiate and manage your own events.",
    tags: [
      {
        name: "reactjs",
        color: "violet-text-gradient",
      },
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
    sourceCode: "https://github.com/Bharathkdev/event_platform",
    linkedinPost: "https://www.linkedin.com/posts/bharathrna_reactjs-nextjs-mongodb-activity-7178368379722821632-ESkr?utm_source=share&utm_medium=member_desktop",
  },
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
        name: "javascript",
        color: "violet-text-gradient",
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
    sourceCode: "https://github.com/Bharathkdev/expenseTrackerApp",
    linkedinPost: "https://www.linkedin.com/posts/bharathrna_reactnative-javascript-firebase-activity-7118224386054135808-VeKD?utm_source=share&utm_medium=member_desktop",
  },
  {
    name: "Expo Full-Stack Video Sharing App",
    description:
      "Aora is a comprehensive React Native Expo app for video streaming and sharing. It features seamless video playback, robust authentication, dynamic home screens with animations, full-text search, and user-friendly interfaces. Users can upload, favorite, and search for videos, while enjoying smooth navigation and responsive design across devices. Built with technologies like Appwrite for backend services and Nativewind for styling, Aora offers a modern and engaging experience for video enthusiasts.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "expo",
        color: "violet-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "appwrite",
        color: "pink-text-gradient",
      },
      {
        name: "native-wind",
        color: "orange-text-gradient",
      },
    ],
    image: aora,
    sourceCode: "https://github.com/Bharathkdev/full_stack_expo_app",
    linkedinPost: "https://www.linkedin.com/posts/bharathrna_a-full-stack-react-native-video-streaming-activity-7199439106756468736-ZXqI?utm_source=share&utm_medium=member_desktop",
  },
  {
    name: "Custom Keyboard App",
    description:
      "I challenged myself to design a high-performance single-screen app with impressive visuals, creating a custom keyboard for seamless text manipulation and complex cursor positioning. I incorporated animations, a dynamic glowing border, stylish fonts, emojis, and images. Optimizing performance involved advanced calculations and memoization techniques, ensuring smooth functionality even with over 1000 characters.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "react-native-animated",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "orange-text-gradient",
      },
      {
        name: "performance-optimisation",
        color: "pink-text-gradient",
      },
      {
        name: "layout-calculations",
        color: "violet-text-gradient",
      },
    ],
    image: customKeyboard,
    sourceCode: "https://github.com/Bharathkdev/custom_keyboard",
    linkedinPost: "https://www.linkedin.com/posts/bharathrna_hello-all-i-recently-challenged-myself-activity-7205568376868401152-tHcu?utm_source=share&utm_medium=member_desktop",
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
    sourceCode: "https://github.com/Bharathkdev/RNShop",
    linkedinPost: "",
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
