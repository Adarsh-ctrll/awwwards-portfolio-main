// index.js
export const servicesData = [
  {
    title: "FullStack Development",
    description:
      "Your business deserves a fast, secure, and future-proof digital foundation. I develop custom web apps with clean architecture, optimized databases, and seamless integrations—ensuring reliability at every layer.",
    items: [
      {
        title: "Backend Engineering",
        description: "(REST/GraphQL APIs, Microservices, Auth Systems)",
      },
      {
        title: "Frontend Excellence",
        description: "(React, Vue, TypeScript, Interactive UI/UX)",
      },
      {
        title: "Database Design",
        description: "(SQL/NoSQL Optimization, Scalable Structures)",
      },
    ],
  },
  {
    title: "DevOps & Cloud Solutions",
    description:
      "Deploying software shouldn't be a gamble. I automate infrastructure, enforce security, and leverage cloud platforms (AWS/Azure) to keep your app running smoothly—24/7, at any scale.",
    items: [
      {
        title: "CI/CD Pipelines",
        description: "(GitHub Actions, Docker, Kubernetes)",
      },
      {
        title: "Server Management ",
        description: "(Linux, Nginx, Load Balancing)",
      },
      {
        title: "Performance Tuning",
        description: "(Caching, Compression, Lighthouse 90+ Scores)",
      },
    ],
  },
  {
    title: "Security & Optimization",
    description:
      "Slow or hacked apps destroy trust. I harden security (XSS/SQLI protection, OAuth) and optimize bottlenecks so your app stays fast, safe, and scalable as you grow.",
    items: [
      {
        title: "Code Audits",
        description: "(Refactoring, Tech Debt Cleanup)",
      },
      {
        title: "Pen Testing",
        description: "(Vulnerability Assessments)",
      },
      {
        title: "SEO Tech Stack",
        description: "(SSR, Metadata, Structured Data)",
      },
    ],
  },
  {
    title: "Web & Mobile Apps",
    description:
      "A clunky interface can sink even the best ideas. I craft responsive, pixel perfect web and mobile apps (React Native/Flutter) that users love—bridging design and functionality seamlessly.",
    items: [
      {
        title: "Cross-Platform Apps",
        description: "(Single codebase for iOS/Android/Web)",
      },
      {
        title: "PWAs",
        description: "(Offline mode, Push Notifications)",
      },
      {
        title: "E-Commerce",
        description: "(Checkout flows, Payment Gateways, Inventory APIs)",
      },
    ],
  },
];
export const projects = [
{
  id: 1,
  name: "Loopr - Social Learning Platform",
  description:
    "A full-stack social platform where students connect, share posts, upload stories and short loops, chat in real time, follow peers, track learning roadmaps, and post anonymous confessions. Built with secure authentication, Socket.IO messaging, and cloud media storage.",
  href: "https://loopr-seven.vercel.app",
  github:"https://github.com/Adarsh-ctrll/Loopr-Roadmap",
  image: "/assets/projects/loopr.jpg", // your project screenshot
  bgImage: "/assets/backgrounds/blanket.jpg",
  frameworks: [
    { id: 1, name: "React" },
    { id: 2, name: "Node.js" },
    { id: 3, name: "Express.js" },
    { id: 4, name: "MongoDB" },
    { id: 5, name: "Socket.IO" },
    { id: 6, name: "Tailwind CSS" },
    { id: 7, name: "Cloudinary" },
  ],
},
{
  id: 2,
  name: "Srijan AI",
  description:
    "An AI-powered SaaS platform that transforms natural language prompts into production-ready, responsive websites with live editing, deployment, authentication, and a credit-based generation system.",
  href: "https://srijanai-1.onrender.com/",
  github: "https://github.com/Adarsh-ctrll/SrijanAI",
  image: "/assets/projects/srijanai.png",
  bgImage: "/assets/backgrounds/ai.jpg",
  frameworks: [
    { id: 1, name: "React.js" },
    { id: 2, name: "Node.js" },
    { id: 3, name: "Express.js" },
    { id: 4, name: "MongoDB" },
    { id: 5, name: "Firebase" },
    { id: 6, name: "OpenRouter AI" },
    { id: 7, name: "Monaco Editor" },
    { id: 8, name: "Stripe" },
    { id: 9, name: "JWT" },
    { id: 10, name: "Tailwind CSS" },
  ],
},
{
  id: 3,
  name: "PeerPrep - Random Study Partner Platform",
  description:
    "A real-time platform that matches students with random peers for video or voice discussions based on shared interests like DSA, Frontend, Machine Learning, English Speaking, and Interview Preparation. Features secure authentication, instant matching, live communication, and interest-based pairing.",
  href: "https://peerprep-smart.vercel.app/",
  github:"https://github.com/Adarsh-ctrll/peerprep-smart",
  image: "/assets/projects/peerprep.jpg",
  bgImage: "/assets/backgrounds/blanket.jpg",
  frameworks: [
    { id: 1, name: "Next.js" },
    { id: 2, name: "React" },
    { id: 3, name: "Node.js" },
    { id: 4, name: "Socket.IO" },
    { id: 5, name: "ZEGOCLOUD" },
    { id: 6, name: "MongoDB" },
    { id: 7, name: "Tailwind CSS" },
  ],
},

{
  id: 4,
  name: "Heart Stroke Prediction Application",
  description:
    "A machine learning-powered web application that predicts heart stroke risk using clinical data with real-time predictions through an interactive Streamlit interface.",
  href: "https://heart-disease-app-9whfnakpetyqhdwdutm9ch.streamlit.app/",
  github: "https://github.com/Adarsh-ctrll/heart-disease-app",
  image: "/assets/projects/heartstroke.jpg",
  bgImage: "/assets/backgrounds/blanket.jpg",
  frameworks: [
    { id: 1, name: "Python" },
    { id: 2, name: "Streamlit" },
    { id: 3, name: "Scikit-learn" },
    { id: 4, name: "Pandas" },
    { id: 5, name: "NumPy" },
  ],
},
{
  id: 5,
  name: "SpyderBoard - Real-Time Whiteboard",
  description:
    "A collaborative whiteboard built with React and ZEGO SuperBoard SDK, featuring real-time drawing, text, shapes, eraser, laser pointer.",
  // href: "https://spyderboard.vercel.app/",
  github: "https://github.com/Adarsh-ctrll/WhiteBoard",
  image: "/assets/projects/spyderboard.jpg",
  bgImage: "/assets/backgrounds/blanket.jpg",
  frameworks: [
    { id: 1, name: "React" },
    { id: 2, name: "Tailwind CSS" },
    { id: 3, name: "ZEGO SuperBoard SDK" },
    { id: 4, name: "Real-Time Collaboration" },
    { id: 5, name: "Vite" },
  ],
},
{
  id: 6,
  name: "Analyzing Astronomical Naming Trends",
  description:
    "A data analysis project exploring naming patterns across 500+ stars from 88 constellations using Python, Power BI, and statistical visualization techniques.",
  href: "",
  github: "https://github.com/AdarshKumar/astronomical-naming-trends",
  image: "/assets/projects/astronomy-analysis.png",
  bgImage: "/assets/backgrounds/blanket.jpg",
  frameworks: [
    { id: 1, name: "Python" },
    { id: 2, name: "Pandas" },
    { id: 3, name: "Matplotlib" },
    { id: 4, name: "Power BI" },
    { id: 5, name: "Excel" },
  ],
},
  {
  id: 7,
  name: "Smart Bathroom Cleaning Tracker",
  description:
    "An IoT-based smart cleaning management system that digitizes restroom maintenance using RFID authentication, real-time logging, and automated monitoring through Google Sheets.",
  href: "",
  github: "https://github.com/AdarshKumar/smart-bathroom-cleaning-tracker",
  image: "/assets/projects/bathroom-tracker.png",
  bgImage: "/assets/backgrounds/blanket.jpg",
  frameworks: [
    { id: 1, name: "ESP32" },
    { id: 2, name: "RFID RC522" },
    { id: 3, name: "Google Apps Script" },
    { id: 4, name: "Google Sheets" },
    { id: 5, name: "IoT" },
  ],
},
];
export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/ali.sanatidev/reels/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/ali-sanati/" },
  { name: "GitHub", href: "https://github.com/Ali-Sanati" },
];
