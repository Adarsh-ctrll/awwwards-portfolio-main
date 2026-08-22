// index.js
export const servicesData = [
  {
    title: "Full Stack Development",
    description:
      "Building responsive and scalable web applications using modern frontend and backend technologies with secure authentication and real-time features.",
    items: [
      {
        title: "Frontend",
        description: "(React.js, Next.js, Tailwind CSS)",
      },
      {
        title: "Backend",
        description: "(Node.js, Express.js, REST APIs)",
      },
      {
        title: "Database",
        description: "(MongoDB, MySQL)",
      },
    ],
  },

  {
    title: "Data Analytics",
    description:
      "Transforming raw data into actionable insights through visualization, analysis, and statistical techniques.",
    items: [
      {
        title: "Data Analysis",
        description: "(Python, Pandas, NumPy)",
      },
      {
        title: "Visualization",
        description: "(Power BI, Excel, Matplotlib)",
      },
      {
        title: "SQL",
        description: "(Data Cleaning, Queries, Joins)",
      },
    ],
  },

  {
    title: "Programming & DSA",
    description:
      "Strong understanding of algorithms, data structures, and object-oriented programming for solving complex coding problems.",
    items: [
      {
        title: "C++",
        description: "(STL, OOP)",
      },
      {
        title: "Data Structures",
        description: "(Arrays, Trees, Graphs, DP)",
      },
      {
        title: "Problem Solving",
        description: "(LeetCode, Competitive Programming)",
      },
    ],
  },

  {
    title: "Tools & Technologies",
    description:
      "Experienced with modern development tools, version control, deployment platforms, and collaborative workflows.",
    items: [
      {
        title: "Git & GitHub",
        description: "(Version Control)",
      },
      {
        title: "Vercel",
        description: "(Deployment & Hosting)",
      },
      {
        title: "Postman",
        description: "(API Testing)",
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
  name: "StaySense — NYC Airbnb Room Type Predictor",
  description:
    "A machine learning-powered web application that predicts Airbnb room types from listing details, with class probability estimates through an interactive web interface with Shap.",
  href: "https://staysense-shap.onrender.com/",
  github: "https://github.com/Adarsh-ctrll/staysense-shap",
  image: "/assets/projects/staysense.png",
  bgImage: "/assets/backgrounds/blanket.jpg",
  frameworks: [
    { id: 1, name: "Python" },
    { id: 2, name: "Scikit-learn" },
    { id: 3, name: "Pandas" },
    { id: 4, name: "NumPy" },
    { id: 5, name: "FastAPI" },
    { id: 6, name: "JavaScript" },
  ],
},
{
  id: 5,
  name: "DocuMind AI",
  description:
    "An AI-powered RAG application that lets users upload PDF documents and ask questions grounded in the document content using semantic retrieval and LLM-powered responses.",
  href: "https://bookmindai-kgalf2tkleljjvbycvape8.streamlit.app/",
  github: "https://github.com/Adarsh-ctrll/BookmindAI",
  image: "/assets/projects/documind.png",
  bgImage: "/assets/backgrounds/blanket.jpg",
  frameworks: [
    { id: 1, name: "Python" },
    { id: 2, name: "LangChain" },
    { id: 3, name: "Streamlit" },
    { id: 4, name: "ChromaDB" },
    { id: 5, name: "HuggingFace" },
    { id: 6, name: "Mistral AI" },
    { id: 7, name: "RAG" },
  ],
},
{
  id: 6,
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
  id: 7,
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
  id: 8,
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
  id: 9,
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
  { name: "LinkedIn", href: "https://www.linkedin.com/in/adarshkumar-aspire/" },
  { name: "GitHub", href: "https://github.com/Adarsh-ctrll" },
];
