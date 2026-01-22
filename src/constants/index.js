// PROJECTS
export const myProjects = [
  {
    id: 1,
    title: "Voice Virtual Assistant with ElevenLabs",
    description:
      "An AI-powered voice assistant built with Python and ElevenLabs Conversational AI, enabling natural voice interactions with real-time speech recognition and synthesis.",
    subDescription: [
      "Integrated ElevenLabs Conversational AI API for natural language processing and voice synthesis.",
      "Implemented real-time audio interface for seamless voice input and output interactions.",
      "Built dynamic conversation handling with agent response callbacks and user transcript processing.",
      "Configured personalized assistant with custom prompts, user scheduling, and context-aware responses.",
    ],
    href: "https://github.com/asishadimulapu/Voice-Virtual-Assistant-with-ElevenLabs",
    logo: "",
    image: "",
    tags: [
      { id: 1, name: "Python" },
      { id: 2, name: "ElevenLabs" },
      { id: 3, name: "AI/ML" },
    ],
  },
  {
    id: 2,
    title: "Universal SQL AI Engine",
    description:
      "Production-ready AI-powered SQL query generator with dynamic schema introspection. Transform natural language questions into safe, optimized SQL queries.",
    subDescription: [
      "Built dynamic schema introspection supporting SQLite, MySQL, and PostgreSQL databases.",
      "Integrated Groq AI for intelligent natural language to SQL query generation.",
      "Implemented secure query execution with SQL injection protection and SELECT-only validation.",
      "Created modern glassmorphism dashboard with JWT auth, rate limiting, and query analytics.",
    ],
    href: "https://github.com/asishadimulapu/Sql-Ai-Engine",
    logo: "",
    image: "",
    tags: [
      { id: 1, name: "Node.js" },
      { id: 2, name: "PostgreSQL" },
      { id: 3, name: "Groq AI" },
      { id: 4, name: "Express" },
    ],
  },
  {
    id: 3,
    title: "AI Agent-Based DeepFake Detection",
    description:
      "Multi-agent forensic system for detecting deepfakes and manipulated images using EfficientNetV2-S deep learning with 97% validation accuracy.",
    subDescription: [
      "Developed multi-agent forensic framework with ELA, Pixel Artifact, Frequency Domain, and Noise Pattern agents.",
      "Trained EfficientNetV2-S model achieving 98% training and 97% validation accuracy for Real/Fake classification.",
      "Built interactive Streamlit web app with image upload, AI predictions, and forensic visualizations.",
      "Implemented metadata forensics, cryptographic hashing, and exportable JSON/HTML reports.",
    ],
    href: "https://github.com/ShrutiKandagatla/DeepFakeDetection_AIagents",
    logo: "",
    image: "",
    tags: [
      { id: 1, name: "Python" },
      { id: 2, name: "PyTorch" },
      { id: 3, name: "Streamlit" },
      { id: 4, name: "OpenCV" },
    ],
  },
];

// SOCIALS
export const mySocials = [
  {
    name: "Github",
    href: "https://github.com/asishadimulapu/",
    icon: "/assets/logos/github.png",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/asish-adimulapu/",
    icon: "/assets/socials/linkedIn.svg",
  },
];

// WORK EXPERIENCE

export const experiences = [
  {
    title: "Technical Team Lead",
    job: "Metaverse Club, Anurag University",
    date: "2023-Present",
    contents: [
      "Led technical workshops and coding sessions on AR/VR and emerging technologies.",
      "Mentored students in hands-on development and real-world problem solving.",
      "Coordinated team-based technical initiatives and learning activities.",
    ],
  },
  {
    title: "B.Tech in AI & Machine Learning",
    job: "Anurag University, Hyderabad",
    date: "2022-2026 (Expected)",
    contents: [
      "Relevant Coursework: Data Structures, Machine Learning, Web Development, DBMS.",
      "Certified: Google AI/ML Virtual Internship (AICTE), Infosys Springboard DSA, Scaler Academy Java.",
      "Hands-on experience with MERN stack, Python, TensorFlow, and Azure cloud deployments.",
    ],
  },
];
