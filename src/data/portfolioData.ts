export interface Project {
  title: string;
  tech: string;
  thumbnail: string;
  github: string;
  description?: string;
}

export interface Certificate {
  title: string;
  tech: string;
  thumbnail: string;
  fileUrl?: string;
}

export interface TechItem {
  name: string;
  icon: string;
  color: string;
}

export const personalInfo = {
  name: "Mukilan S",
  title: "AI/ML Specialist & Full-Stack Developer",
  location: "Chennai, Tamil Nadu",
  email: "mukilans25361@gmail.com",
  github: "https://github.com/Mukilan-s18",
  githubUsername: "Mukilan-s18",
  linkedin: "https://linkedin.com/in/mukilan-s2486",
  summary:
    "Aspiring Artificial Intelligence and Machine Learning specialist with expertise in Python, deep learning, and predictive analytics. Proven track record of developing end-to-end AI solutions and leveraging modern software engineering practices to solve complex technical challenges.",
  education: {
    degree: "B.Tech in Artificial Intelligence and Machine Learning",
    institution: "Rajalakshmi Engineering College",
    graduation: "Expected Graduation: 2028",
  },
  experience: [
    {
      role: "Internship in Generative AI",
      company: "Altruisty Innovation Pvt Ltd",
      date: "February 2026",
      details: [
        "Completed a 15-day internship in Generative AI, gaining valuable experience and insights into the field.",
      ],
    },
  ],
};

export const techStack: TechItem[] = [
  { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB", color: "#3776AB" },
  { name: "PyTorch", icon: "https://cdn.simpleicons.org/pytorch/EE4C2C", color: "#EE4C2C" },
  { name: "TensorFlow", icon: "https://cdn.simpleicons.org/tensorflow/FF6F00", color: "#FF6F00" },
  { name: "Scikit-Learn", icon: "https://cdn.simpleicons.org/scikitlearn/F7931E", color: "#F7931E" },
  { name: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi/009688", color: "#009688" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/FFFFFF", color: "#FFFFFF" },
  { name: "React.js", icon: "https://cdn.simpleicons.org/react/61DAFB", color: "#61DAFB" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6", color: "#3178C6" },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED", color: "#2496ED" },
  { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase/3ECF8E", color: "#3ECF8E" },
  { name: "NumPy", icon: "https://cdn.simpleicons.org/numpy/013243", color: "#013243" },
  { name: "Pandas", icon: "https://cdn.simpleicons.org/pandas/150458", color: "#150458" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E", color: "#F7DF1E" },
  { name: "SQL", icon: "https://cdn.simpleicons.org/mysql/4479A1", color: "#4479A1" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/FFFFFF", color: "#FFFFFF" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933", color: "#339933" },
  { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/FFCA28", color: "#FFCA28" },
];

export const projects: Project[] = [
  {
    title: "GraphOne AI Data Pipeline",
    tech: "Python • FastAPI • LLM • Docker",
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2068&auto=format&fit=crop",
    github: "https://github.com/Mukilan-s18/GraphOne-ai-data-intelligence-pipeline",
    description: "Graph-based AI data intelligence pipeline for structured & unstructured knowledge processing.",
  },
  {
    title: "StampedeZero - Crowd Safety AI",
    tech: "YOLOv8 • PyTorch • FastAPI • React",
    thumbnail: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop",
    github: "https://github.com/Mukilan-s18/StampedeZero",
    description: "Real-time computer vision crowd density monitoring and early warning system.",
  },
  {
    title: "Industrial Operations Brain",
    tech: "LangGraph • Gemini • RAG • Next.js",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    github: "https://github.com/Mukilan-s18/Industrial-Operations-Brain",
    description: "Agentic AI pipeline utilizing RAG and LangGraph for industrial manufacturing operations.",
  },
  {
    title: "Ecosphere Management Platform",
    tech: "Next.js • Supabase • TypeScript",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    github: "https://github.com/Mukilan-s18/Ecosphere-Management-Platform",
    description: "Environmental monitoring and sustainability tracking dashboard.",
  },
  {
    title: "Defect Detection System",
    tech: "PatchCore • WideResNet50 • PyTorch",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    github: "https://github.com/Mukilan-s18/Defect-Detection",
    description: "Industrial visual anomaly & defect detection system powered by PatchCore.",
  },
  {
    title: "Pump Diagnosis Challenge",
    tech: "ResNet18 • STFT • Transfer Learning",
    thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop",
    github: "https://github.com/Mukilan-s18/PumpDiagnosisChallenge",
    description: "Acoustic & vibration signal fault diagnosis for industrial machinery.",
  },
  {
    title: "Predictive Analytics Engine - FIFA World Cup",
    tech: "Scikit-Learn • XGBoost • React • Firebase",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    github: "https://github.com/Mukilan-s18",
    description: "Machine learning pipeline using Elo ratings and Monte Carlo simulations (10,000+ runs).",
  },
  {
    title: "AeroWeather Dashboard",
    tech: "React 18 • Vite • OpenWeather API • GitHub Actions",
    thumbnail: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=2065&auto=format&fit=crop",
    github: "https://github.com/Mukilan-s18",
    description: "Real-time atmospheric weather analytics & forecasting radar dashboard.",
  },
  {
    title: "MNIST ANN Digit Classifier",
    tech: "TensorFlow • Keras • Gradio • Python",
    thumbnail: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
    github: "https://github.com/Mukilan-s18",
    description: "Artificial Neural Network digit classification model achieving 98.08% accuracy.",
  },
];

export const certificates: Certificate[] = [
  {
    title: "Applied Machine Learning and AI (CII)",
    tech: "Machine Learning",
    thumbnail: "/assets/Certifications/Certificate.png",
    fileUrl: "/assets/Certifications/Certificate.png",
  },
  {
    title: "Machine Learning Onramp",
    tech: "MathWorks",
    thumbnail: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
    fileUrl: "/assets/Certifications/ML_certificate.pdf",
  },
  {
    title: "Deep Learning Onramp",
    tech: "MathWorks",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
    fileUrl: "/assets/Certifications/certificate DL.pdf",
  },
  {
    title: "Data Analytics Job Simulation",
    tech: "Deloitte",
    thumbnail: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2070&auto=format&fit=crop",
    fileUrl: "/assets/Certifications/Data Analytics Job Simulation By Deloitte.pdf",
  },
  {
    title: "Cybersecurity Job Simulation",
    tech: "Deloitte",
    thumbnail: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
    fileUrl: "/assets/Certifications/Deloitte cyberjob simulation.pdf",
  },
  {
    title: "NPTEL Certification I",
    tech: "NPTEL / IIT",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    fileUrl: "/assets/Certifications/Nptel 1_compressed.pdf",
  },
  {
    title: "NPTEL Certification II",
    tech: "NPTEL / IIT",
    thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
    fileUrl: "/assets/Certifications/Nptel 2.pdf",
  },
  {
    title: "Navigating an Entry Level Job Search",
    tech: "LinkedIn Learning",
    thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2070&auto=format&fit=crop",
    fileUrl: "/assets/Certifications/CertificateOfCompletion_Navigating an EntryLevel Job Search.pdf",
  },
];
