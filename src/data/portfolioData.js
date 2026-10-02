export const personalInfo = {
  name: "Madhuram Donawat",
  title: "Computer Science Student & Aspiring Software Developer",
  headline: "Building with Software, AI & Modern Technology",
  roles: [
    "Aspiring Software Developer",
    "Computer Science Student",
    "Full-Stack Web Enthusiast",
    "AI & LLM Integration Explorer",
    "Problem Solver"
  ],
  summary: "Final-year Computer Science student seeking an entry-level software developer role to apply strong programming fundamentals and problem-solving skills in a real-world engineering environment.",
  about: [
    "I am a Computer Science and Engineering undergraduate at Mahakal Institute of Technology with a deep interest in software development, programming fundamentals, and modern artificial intelligence.",
    "My hands-on experience revolves around engineering full-stack web applications, integrating Large Language Models (LLMs) to solve real user challenges, and implementing robust database architectures.",
    "Driven by core computer science principles—ranging from data structures and object-oriented design to relational DBMS—I focus on writing clean, maintainable code and developing practical applications that bridge software engineering and intelligent AI systems."
  ],
  contact: {
    phone: "+91 9174531909",
    email: "madhuramdonawat@gmail.com",
    location: "Dewas, India",
    linkedin: "https://www.linkedin.com/in/madhuramdonawat",
    github: "https://github.com/Madhuram1412",
    resumePdf: "./Madhuram_Donawat_Resume.pdf"
  },
  avatar: "./profile.jpg",
  status: "Open to Software Developer Roles & Opportunities"
};

export const educationData = [
  {
    id: "mit",
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Mahakal Institute of Technology",
    period: "08/2023 – 05/2027",
    location: "Ujjain, India",
    status: "In Progress",
    description: "Pursuing bachelor's degree in Computer Science and Engineering with an emphasis on programming fundamentals, software development, data structures, and database systems.",
    highlights: [
      "Rigorous coursework in Data Structures, Algorithms, OOP, and DBMS",
      "Software engineering principles and web system architectures",
      "Practical project development focusing on full-stack web and AI/LLM integration"
    ]
  },
  {
    id: "class-12",
    degree: "Senior Secondary (Class XII)",
    institution: "Padmaja Higher Secondary School",
    period: "04/2021 – 03/2022",
    location: "Dewas, India",
    status: "Completed",
    description: "Completed senior secondary schooling with a solid grounding in Science and Mathematics, fostering strong analytical and algorithmic thinking.",
    highlights: [
      "Core focus on Mathematics, Physics, and Chemistry",
      "Analytical reasoning and mathematical problem-solving",
      "Active participant in science seminars and academic competitions"
    ]
  },
  {
    id: "class-10",
    degree: "Secondary (Class X)",
    institution: "Padmaja Higher Secondary School",
    period: "04/2019 – 03/2020",
    location: "Dewas, India",
    status: "Completed",
    description: "Completed secondary education establishing a strong academic foundation across science, mathematics, and foundational computing concepts.",
    highlights: [
      "High academic achievement across standard curriculum",
      "Foundation in basic computer sciences and quantitative logic",
      "Comprehensive secondary schooling"
    ]
  }
];

export const skillCategories = [
  { id: "all", label: "All Skills", count: 17 },
  { id: "languages", label: "Programming & Web", count: 7 },
  { id: "ai", label: "AI / ML", count: 4 },
  { id: "concepts", label: "Concepts", count: 3 },
  { id: "tools", label: "Tools", count: 3 }
];

export const skillsData = [
  // Programming & Web Technologies
  { name: "Python", category: "languages", level: "Core", proficiency: 92, icon: "Terminal", desc: "Scripting, algorithmic logic, backend services, and AI/LLM integrations" },
  { name: "C", category: "languages", level: "Core", proficiency: 86, icon: "Cpu", desc: "Low-level programming fundamentals, pointers, and memory operations" },
  { name: "C++", category: "languages", level: "Core", proficiency: 90, icon: "Code2", desc: "Object-oriented programming, data structures, and algorithmic problem solving" },
  { name: "JavaScript", category: "languages", level: "Web", proficiency: 88, icon: "FileCode", desc: "Interactive frontend logic, DOM manipulation, and dynamic web application workflows" },
  { name: "SQL", category: "languages", level: "Data", proficiency: 89, icon: "Database", desc: "Relational queries, schema design, joins, and data manipulation" },
  { name: "HTML", category: "languages", level: "Web", proficiency: 92, icon: "Layout", desc: "Semantic structure, responsive document hierarchy, and web accessibility" },
  { name: "CSS", category: "languages", level: "Web", proficiency: 88, icon: "Palette", desc: "Modern layouts, responsive design, styling, and animations" },

  // Tools
  { name: "Git/GitHub", category: "tools", level: "Tool", proficiency: 89, icon: "GitBranch", desc: "Version control, commit workflows, code repository management, and collaboration" },
  { name: "VS Code", category: "tools", level: "Tool", proficiency: 94, icon: "Laptop", desc: "Primary code editor, debugging environment, extensions, and workflow productivity" },
  { name: "MySQL", category: "tools", level: "Tool", proficiency: 87, icon: "Server", desc: "Relational database management, table creation, indexing, and data persistence" },

  // Concepts
  { name: "Data Structures", category: "concepts", level: "Foundation", proficiency: 90, icon: "Binary", desc: "Arrays, Linked Lists, Stacks, Queues, Trees, Hash Tables, and complexity analysis" },
  { name: "OOP", category: "concepts", level: "Foundation", proficiency: 91, icon: "Layers", desc: "Encapsulation, Abstraction, Inheritance, and Polymorphism in practical software design" },
  { name: "DBMS", category: "concepts", level: "Foundation", proficiency: 89, icon: "Table2", desc: "Database modeling, normalization, relational integrity, ACID properties, and query optimization" },

  // AI / ML
  { name: "Generative AI", category: "ai", level: "Advanced", proficiency: 90, icon: "Sparkles", desc: "Prompt architecture, generative workflows, and content generation pipelines" },
  { name: "Agentic AI", category: "ai", level: "Advanced", proficiency: 87, icon: "Brain", desc: "Autonomous agent reasoning, goal orientation, and multi-step action planning" },
  { name: "RAG Models", category: "ai", level: "Advanced", proficiency: 88, icon: "Network", desc: "Retrieval-Augmented Generation for grounded, contextual knowledge retrieval" },
  { name: "LLM Integration", category: "ai", level: "Advanced", proficiency: 91, icon: "Cpu", desc: "Seamlessly connecting Large Language Models into full-stack web applications" }
];

export const projectsData = [
  {
    id: "vocabo",
    title: "Vocabo",
    subtitle: "Interactive Vocabulary Learning Platform",
    category: "Personal / Academic Project",
    type: "Full-Stack Web & AI Application",
    shortDesc: "An interactive vocabulary learning platform that helps users learn, practice, and improve English vocabulary through personalized exercises.",
    detailedDesc: "Vocabo is a comprehensive full-stack web application created to transform English vocabulary acquisition. By integrating modern AI/LLM-based capabilities, the platform dynamically generates contextual examples, tailored explanations, and adaptive learning content matched to individual user performance.",
    features: [
      "AI/LLM-based contextual examples tailored to the user's progress",
      "AI-generated explanations for nuanced vocabulary definitions and usage",
      "Personalized learning content based on user performance tracking",
      "Dynamic quizzes and interactive retention assessments",
      "Comprehensive vocabulary management for bookmarking and revision",
      "Full-stack web application with an intuitive, engaging learning interface"
    ],
    technologies: [
      "Python",
      "JavaScript",
      "HTML",
      "CSS",
      "SQL",
      "MySQL",
      "Generative AI",
      "LLM Integration"
    ],
    github: "https://github.com/Madhuram1412",
    hasCode: true,
    accent: "from-cyan-500/25 via-blue-500/15 to-transparent",
    borderGlow: "group-hover:border-cyan-400",
    badgeColor: "bg-cyan-500/15 text-cyan-300 border-cyan-400/40"
  },
  {
    id: "citizen-ai",
    title: "Citizen AI",
    subtitle: "AI-Powered Citizen Assistance Platform",
    category: "Personal / Academic Project",
    type: "Full-Stack Web & Conversational AI Application",
    shortDesc: "An AI-powered citizen assistance platform designed to help users access relevant information and services through an intuitive conversational interface.",
    detailedDesc: "Citizen AI bridges the gap between complex public services and citizen needs. Engineered with AI/LLM capabilities, the platform understands citizen queries in natural language, performs contextual information retrieval, and delivers clear, accessible responses to streamline public service interaction.",
    features: [
      "AI/LLM capabilities to understand complex citizen queries naturally",
      "Contextual, easy-to-understand conversational responses",
      "Contextual information retrieval system for public services",
      "Support and guidance interface for streamlined citizen assistance",
      "Intuitive full-stack web application designed for high accessibility",
      "Interactive conversational user interface with instant response flows"
    ],
    technologies: [
      "Python",
      "JavaScript",
      "HTML",
      "CSS",
      "SQL",
      "Generative AI",
      "Agentic AI",
      "RAG Models",
      "LLM Integration"
    ],
    github: "https://github.com/Madhuram1412",
    hasCode: true,
    accent: "from-fuchsia-500/25 via-purple-500/15 to-transparent",
    borderGlow: "group-hover:border-fuchsia-400",
    badgeColor: "bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-400/40"
  }
];

export const experienceData = [
  {
    id: "exp-vocabo",
    role: "Project Developer — Vocabo",
    category: "Personal / Academic Project",
    period: "Academic Project",
    summary: "Built an interactive vocabulary learning platform with integrated AI/LLM personalized exercises and full-stack architecture.",
    bullets: [
      "Developed an interactive vocabulary learning platform that helps users learn, practice, and improve English vocabulary through personalized exercises.",
      "Integrated AI/LLM-based features to generate contextual examples, explanations, and personalized learning content based on user performance.",
      "Implemented a full-stack web application with user progress tracking, quizzes, vocabulary management, and an engaging learning interface."
    ],
    skillsUsed: ["Python", "JavaScript", "HTML", "CSS", "SQL", "MySQL", "Generative AI", "LLM Integration"]
  },
  {
    id: "exp-citizen-ai",
    role: "Project Developer — Citizen AI",
    category: "Personal / Academic Project",
    period: "Academic Project",
    summary: "Engineered an AI-powered citizen assistance platform utilizing LLM capabilities and conversational interfaces.",
    bullets: [
      "Developed an AI-powered citizen assistance platform to help users access relevant information and services through a conversational interface.",
      "Integrated AI/LLM capabilities to understand citizen queries and provide contextual, easy-to-understand responses.",
      "Designed a full-stack web application with an intuitive interface for citizen interaction, information retrieval, and service support."
    ],
    skillsUsed: ["Python", "JavaScript", "HTML", "CSS", "SQL", "Generative AI", "Agentic AI", "RAG Models", "LLM Integration"]
  }
];

export const highlightsData = [
  {
    title: "Full-Stack Development",
    icon: "Layout",
    description: "Designing end-to-end web architectures featuring responsive frontends (HTML, CSS, JavaScript) and structured backends with database integration.",
    tags: ["HTML", "CSS", "JavaScript", "Python", "Full-Stack"],
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    border: "group-hover:border-cyan-400"
  },
  {
    title: "AI / LLM Integration",
    icon: "Cpu",
    description: "Connecting Large Language Models with application workflows to generate contextual responses, personalized content, and intelligent features.",
    tags: ["LLM Integration", "Python", "API Orchestration"],
    gradient: "from-indigo-500/20 via-purple-500/10 to-transparent",
    border: "group-hover:border-indigo-400"
  },
  {
    title: "Generative AI",
    icon: "Sparkles",
    description: "Utilizing generative techniques to create adaptive learning material, conversational assistance, and contextual natural language outputs.",
    tags: ["Generative AI", "Prompt Architecture"],
    gradient: "from-purple-500/20 via-fuchsia-500/10 to-transparent",
    border: "group-hover:border-fuchsia-400"
  },
  {
    title: "Agentic AI",
    icon: "Brain",
    description: "Exploring goal-oriented agentic workflows that break down user intents into structured action steps and contextual query execution.",
    tags: ["Agentic AI", "Goal Execution", "Workflows"],
    gradient: "from-pink-500/20 via-rose-500/10 to-transparent",
    border: "group-hover:border-pink-400"
  },
  {
    title: "RAG Models",
    icon: "Network",
    description: "Retrieval-Augmented Generation architectures to ground AI answers in accurate, verifiable documents and domain information.",
    tags: ["RAG Models", "Information Retrieval", "Contextual Grounding"],
    gradient: "from-violet-500/20 via-indigo-500/10 to-transparent",
    border: "group-hover:border-violet-400"
  },
  {
    title: "Database Technologies",
    icon: "Database",
    description: "Relational database design, query optimization with SQL, schema normalization, and persistent storage management with MySQL.",
    tags: ["SQL", "MySQL", "DBMS", "Data Integrity"],
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    border: "group-hover:border-amber-400"
  },
  {
    title: "Programming Fundamentals",
    icon: "Terminal",
    description: "Solid conceptual footing in Data Structures, Object-Oriented Programming (OOP), and algorithmic problem solving across Python, C, and C++.",
    tags: ["Data Structures", "OOP", "Python", "C", "C++"],
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    border: "group-hover:border-emerald-400"
  }
];
