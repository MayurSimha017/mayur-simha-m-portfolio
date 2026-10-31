// ============================================================
// portfolioData.js — Portfolio Data Source
// This one file controls ALL the text and links on the website.
// ============================================================

export const personalInfo = {
  name: "Mayur Simha M",
  firstName: "Mayur Simha M",
  brandName: "Mayur Simha M", // shown in the preloader, navbar and footer
  title: "Python Full Stack Developer & Cloud Engineer",
  location: "Bengaluru, India",
  phone: "+91 7829477745",
  emails: {
    primary: "mayursimha17@gmail.com",
    secondary: "",
  },
  summary: "Python Developer exploring Cloud Computing and Infrastructure, with hands-on experience building web applications, REST APIs, and cloud projects.",
  resumeUrl: "/Mayur_OptimisedResume.pdf", // put the PDF inside /public
};

// TAP Academy — the academy you trained with. Used in the footer credit.
export const academy = {
  name: "TAP Academy",
  url: "https://thetapacademy.com/",
};

export const socialLinks = {
  github: "https://www.github.com/MayurSimha017",
  linkedin: "https://www.linkedin.com/in/mayursimha",
  instagram: "",
};

export const heroContent = {
  greeting: "Hi, I'm Mayur Simha M",
  titleHighlight: "Python Developer & Cloud Engineer",
  subtitle: "AIML graduate passionate about building robust Python web apps, scalable REST APIs, and resilient cloud infrastructure.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:mayursimha17@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Mayur_OptimisedResume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  // HTML is allowed here (it is rendered with dangerouslySetInnerHTML)
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Mayur Simha M</span>, an Artificial Intelligence and Machine Learning engineering graduate based in Bengaluru, India. I have a strong interest in Python development, cloud computing, and IT infrastructure—building practical web applications, exploring AWS services, and working with Linux and computer networks while sharpening my skills through the placement training program at TAP Academy.`,
  techStack: ["Python", "Django", "React", "AWS", "Linux", "MySQL"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world products",
  description: "A structured engineering approach blending full-stack software development with cloud and networking principles.",
  cards: [
    { number: "01", title: "Research", text: "Analyze project goals, evaluate technology choices, and plan scalable data models and cloud architectures." },
    { number: "02", title: "Design", text: "Architect responsive user interfaces, design modular REST API endpoints, and structure relational databases." },
    { number: "03", title: "Develop", text: "Build reliable backend services with Python and Django, craft dynamic React frontends, and configure network environments." },
    { number: "04", title: "Deploy", text: "Provision AWS cloud resources, manage Linux server environments, and verify seamless network connectivity." },
  ],
  endText: "Ready to ship!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming",
      skills: [{ name: "Python" }, { name: "JavaScript" }, { name: "SQL" }],
    },
    {
      title: "Web Development",
      skills: [{ name: "React.js" }, { name: "Django" }, { name: "Django REST Framework" }, { name: "HTML & CSS" }],
    },
    {
      title: "Databases",
      skills: [{ name: "MySQL" }, { name: "SQLite" }, { name: "Oracle SQL" }],
    },
    {
      title: "Tools & Cloud",
      skills: [{ name: "AWS" }, { name: "Linux" }, { name: "Git & GitHub" }, { name: "Cisco Packet Tracer" }, { name: "VS Code" }],
    },
  ],
};

export const leadershipList = [
  {
    title: "Hackathon Leadership",
    description: "Led a cross-functional student team during college hackathons, coordinating technical development, task distribution, and timely project delivery.",
    role: "Team Lead",
    badge: "Hackathons",
  },
  {
    title: "College Project Leadership",
    description: "Coordinated academic project initiatives involving collaborative sprint planning, repository management, and peer code reviews.",
    role: "Project Coordinator",
    badge: "Projects",
  },
  {
    title: "NSS Activities",
    description: "Participated actively in college-level National Service Scheme (NSS) social initiatives and community development drives.",
    role: "NSS Volunteer",
    badge: "Community",
  },
  {
    title: "Sports Club",
    description: "Actively engaged in college sports club events, fostering team synergy, resilience, and sportsmanship.",
    role: "Active Member",
    badge: "Sports",
  },
];

export const internshipsList = [
  {
    organization: "QSpiders",
    role: "Python Full Stack Development Trainee",
    duration: "January 2026 – June 2026",
    skills: ["Web Application Development", "REST API Integration", "Relational Database Design", "Agile Team Collaboration"],
    tech: ["Python", "Django", "MySQL", "HTML", "CSS", "JavaScript"],
  },
  {
    organization: "Cloud Synergies",
    role: "CloudOps Trainee",
    duration: "July 2026 – Present (Expected: Dec 2026)",
    skills: ["AWS Cloud Infrastructure", "Linux System Administration", "Network Troubleshooting", "DevOps Fundamentals"],
    tech: ["AWS", "Linux", "TCP/IP", "VLAN", "Routing & Switching", "DevOps"],
  },
];

export const softSkillsList = [
  { name: "Team Collaboration", icon: "🤝", desc: "Coordinating smoothly with peers in hackathons and cross-functional teams to build integrated software solutions." },
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down complex programming and networking challenges into methodical, manageable components." },
  { name: "Analytical Thinking", icon: "📈", desc: "Evaluating system performance, diagnosing network connectivity bottlenecks, and optimizing backend logic." },
  { name: "Leadership", icon: "👑", desc: "Guiding team members with clear direction, active listening, and structured task prioritization." },
];

export const projects = [
  {
    id: "smart-warehouse-system",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "Smart Warehouse Management System",
    description: "A full-featured web application for managing warehouse operations, monitoring real-time stock levels, and gaining inventory insights through an analytics dashboard with an integrated AI assistant.",
    techTags: ["Python", "Django", "Django REST Framework", "React.js", "Oracle SQL"],
    links: { github: "https://github.com/MayurSimha017/Smart-Warehouse-System", demo: "" },
    isFlagship: true,
  },
  {
    id: "ai-interview-coach",
    number: "02",
    badge: null,
    title: "AI Interview Coach",
    description: "An AI-powered interview preparation platform that dynamically generates job-specific questions and evaluates spoken applicant responses with real-time feedback.",
    techTags: ["Python", "Django", "React.js", "Gemini API", "Web Speech API"],
    links: { github: "https://github.com/MayurSimha017/AI-Interview-Coach", demo: "" },
    isFlagship: false,
  },
  {
    id: "office-network-lab",
    number: "03",
    badge: null,
    title: "Office Network Troubleshooting Lab",
    description: "A simulated enterprise office network built in Cisco Packet Tracer to practice device configuration, diagnose connectivity bottlenecks, and troubleshoot routing and switching.",
    techTags: ["Cisco Packet Tracer", "VLAN", "Routing", "Switching", "DHCP", "DNS"],
    links: { github: "https://github.com/MayurSimha017/office-network-troubleshooting-lab", demo: "" },
    isFlagship: false,
  },
];

// Used only by the optional Certificates component (bonus step)
export const certificates = {
  featured: [
    { name: "Python Full Stack Development", issuer: "QSpiders", icon: "🏅" },
    { name: "CloudOps & AWS Training", issuer: "Cloud Synergies", icon: "☁️" },
  ],
  viewAllUrl: "https://www.linkedin.com/in/mayursimha",
};

export const education = {
  degree: "B.E. in Artificial Intelligence and Machine Learning",
  institution: "Jyothy Institute of Technology",
  cgpa: "2022 - 2026",
  graduation: "2026",
  twelfth: "",
  tenth: "",
};

export const footerContent = {
  taglines: [
    "Python Full Stack Developer & Cloud Engineer",
    "Python · Django · AWS · React · Linux",
    "Building resilient web apps and cloud infrastructure",
  ],
  credential: "B.E. AIML — Jyothy Institute of Technology",
  copyright: `© ${new Date().getFullYear()} Mayur Simha M | Built with React`,
};

// EmailJS — read from .env.local (variables must start with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
