// PROJECTS
export const myProjects = [
  {
    id: 1,
    title: "LegalGPT (NyayaSahay) - Indian Law AI Assistant",
    description:
      "A RAG-powered legal chatbot that answers questions about Indian law with grounded, source-backed responses, available on web and mobile.",
    subDescription: [
      "Built a Retrieval-Augmented Generation pipeline with LangChain, sentence-transformer embeddings, and FAISS / pgvector search over Indian legal documents.",
      "Developed a FastAPI backend with JWT auth, conversation memory, document upload (PDF/DOCX), and an admin dashboard.",
      "Created a React web frontend and an Expo (React Native) mobile app sharing the same API.",
      "Shipped with PostgreSQL + Alembic migrations, Redis caching, Docker Compose, and GitHub Actions CI/CD.",
    ],
    href: "https://github.com/asishadimulapu/LegalGpt",
    logo: "",
    image: "",
    tags: [
      { id: 1, name: "FastAPI" },
      { id: 2, name: "LangChain" },
      { id: 3, name: "React" },
      { id: 4, name: "PostgreSQL" },
    ],
  },
  {
    id: 2,
    title: "Device Battery Monitor",
    description:
      "A lightweight Windows app that shows the battery level of wireless mice and headphones right on the taskbar, just like the laptop battery.",
    subDescription: [
      "Reads Bluetooth battery levels for mice, keyboards, and headphones of any brand through Windows' standard APIs.",
      "Implemented a custom read-only protocol driver for 2.4 GHz receiver mice, including charging and sleep detection.",
      "Live taskbar overlay that refreshes on device connect/disconnect, turns red below 20%, and adapts to crowded taskbars.",
      "Built with the C# compiler bundled in Windows (.NET Framework) - no downloads needed - plus unit tests and PowerShell install scripts.",
    ],
    href: "https://github.com/asishadimulapu/device-battery-monitor",
    logo: "",
    image: "",
    tags: [
      { id: 1, name: "C#" },
      { id: 2, name: ".NET" },
      { id: 3, name: "Windows" },
      { id: 4, name: "PowerShell" },
    ],
  },
  {
    id: 3,
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
    id: 4,
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
    id: 5,
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
