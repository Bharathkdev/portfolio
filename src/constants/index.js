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
  rently,
  igt,
  graphql,
  android,
  ios,
  moneymanager,
  ecommerce,
  fullstack,
  evently,
  aora,
  portfolio,
  customKeyboard,
  nextjs,
  fastlane,
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
  "I'm a Software Engineer with 5+ years of experience in developing robust full-stack Web and Mobile applications using frameworks such as React.js, React Native, Three.js, Next.js and Node.js. I specialize in crafting complex applications and am known for ensuring excellence and uniformity across every stage of software development initiatives.";

const projectsIntro =
  "The following projects demonstrate my skills and experience through real-world examples of my work. Each project is briefly described, with links to code repositories and relevant LinkedIn posts. They showcase my proficiency in solving complex problems, my passion for learning and integrating diverse technologies, and my adeptness in technical project management and execution.";

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
    name: "Next JS",
    icon: nextjs,
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
    name: "Fastlane",
    icon: fastlane,
  },
];

const experiences = [
  {
    title: "Senior Software Developer",
    company_name: "Rently",
    icon: rently,
    iconBg: "#D77232",
    date: "June 2019 - May 2023",
    points: [
      "Led the development of a web & mobile Smart Home Rental Application with 5000+ daily active users working on IoT, Maps, Animations, Payment gateway, Heap, Sentry & Firebase.",
      "Successfully delivered & maintained 3 React applications, including a full-stack maps navigation application, along with 2 React Native projects.",
      "Promoted Agile methodologies, collaborating with Product Owners and Managers on technical challenges & user insights (Heap & Firebase analytics) to drive project success.",
      "Proficient in unit, integration & end-to-end testing and efficiently addressed 200+ bugs, resulting in increased app ratings to 4.7 on Android and 4.8 on iOS.",
      "Efficiently reduced technical debts by over 40%, optimizing the codebase & enhancing application security.",
      "Skilled in codepush deployment, app store review management, and code signing.",
      "Conducted 100+ code reviews, emphasizing high-quality code through clean code principles.",
      "Mentored 10+ junior developers to deliver multiple modules in the Smart Home application.",
      "Competent in UI/UX design patterns, with a hands on approach for creating visually appealing & user-centric interfaces using Figma, Adobe, Miro & Material UI library.",
      "Facilitated Authentication (AWS and Azure SSO) & in-app chat (ADA Chatbot) integrations."
    ],
  },
  {
    title: "Software Engineer Dev 2",
    company_name: "IGT",
    icon: igt,
    iconBg: "#ffffff",
    date: "May 2023 - Present",
    points: [
      "Leading the development of complex, responsive UI components using React and React Native for a lottery gaming application, which serves over 2,000 daily active users.",
      "Experienced in working with Monorepo architecture & Lerna, with active contributions to the creation & maintenance of over 110+ private npm packages.",
      "Designing captivating 3D animations with Three.js for visually compelling UI enhancements.",
      "Implementing robust automated workflows with Github Actions and Dependabot, saving the team 2+ hours daily & efficiently managing the outdated dependencies.",
      "Played a pivotal role in achieving a smooth React Native upgrade.",
      "Integrating the customer engagement platform Xtremepush, resulting in enhanced customer engagement, boosting company revenues."
    ],
  },
];

const achievements = [
  {
    achievement:
      "Integrated Beans Map(precise Geocoding), effectively addressing the user navigation challenge & contributing to a 40% improvement in user retention.",
    company: "Rently",
  },
  {
    achievement:
      "Effectively completed multiple feature developments, including advanced data visualization & UI/UX enhancements, alongside successful proofs of concept (POCs).",
    company: "Rently",
  },
  {
    achievement:
      "Architected & implemented a full stack CI/CD system for Fastlane using React, Node.js, WebSockets & SQLite DB, leading to a notable increase in overall efficiency and output.",
    company: "IGT",
  },
  {
    achievement:
      "Achieved a 100% tests coverage by implementing the Jest framework for automated tests.",
    company: "Rently",
  },
  {
    achievement:
      "Achieved moving Jenkins from a local machine to AWS EC2 cloud with Docker, which saved us 4 hours of daily manual work for test automation.",
    company: "Rently",
  },
  {
    achievement:
      "Optimized app performance & user experience by 25% by integrating Firebase Performance Monitoring & shopify performance libraries & iterated based on metrics insights.",
    company: "IGT",
  },
  {
    achievement:
      "Integrated payment gateways (Authorize.net & Stripe), conducted A/B testing for subscription plans, resulting in a 7% increase in company revenue.",
    company: "Rently",
  },
  {
    achievement:
      "Initiated Tech Tuesday meetups and eliminated multiple production issues by discussing, documenting and implementing best solutions collaboratively.",
    company: "IGT",
  },
  {
    achievement:
      "Building & deploying 10+ React & React Native applications in production environments.",
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
    image: portfolio,
    sourceCode: "https://github.com/Bharathkdev/portfolio",
    linkedinPost:
      "https://www.linkedin.com/posts/bharathrna_reactjs-threejs-tailwindcss-activity-7179008939152273408-fBbD?utm_source=share&utm_medium=member_desktop",
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
    linkedinPost:
      "https://www.linkedin.com/posts/bharathrna_reactjs-nextjs-mongodb-activity-7178368379722821632-ESkr?utm_source=share&utm_medium=member_desktop",
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
    linkedinPost:
      "https://www.linkedin.com/posts/bharathrna_reactnative-javascript-firebase-activity-7118224386054135808-VeKD?utm_source=share&utm_medium=member_desktop",
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
    linkedinPost:
      "https://www.linkedin.com/posts/bharathrna_a-full-stack-react-native-video-streaming-activity-7199439106756468736-ZXqI?utm_source=share&utm_medium=member_desktop",
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
    linkedinPost:
      "https://www.linkedin.com/posts/bharathrna_hello-all-i-recently-challenged-myself-activity-7205568376868401152-tHcu?utm_source=share&utm_medium=member_desktop",
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
