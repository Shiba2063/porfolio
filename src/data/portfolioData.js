import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaFacebook
} from "react-icons/fa";
export const SKILLS_TECH = [
  { name: "React.js", pct: 75 },
  { name: "JavaScript", pct: 80 },
  { name: "HTML & CSS", pct: 88 },
  { name: "Python", pct: 65 },
  { name: "MySQL / Databases", pct: 60 },
  { name: "Git & Version Control", pct: 70 },
];

export const SKILLS_SOFT = [
  { name: "Communication", pct: 88 },
  { name: "Leadership", pct: 85 },
  { name: "Teamwork", pct: 90 },
  { name: "Problem Solving", pct: 85 },
  { name: "Public Speaking", pct: 80 },
  { name: "Creativity", pct: 87 },
];

export const PROJECTS = [
   {
    emoji: "🌐",
    title: "Personal Portfolio",
    desc: "A modern, responsive portfolio website built with React.js featuring dark/light mode, animations, and an AI chatbot.",
    tags: ["React.js", "CSS", "Framer Motion"],
    color: "linear-gradient(135deg,#0d1520,#162035)",
    live: "https://shibaportfolio.vercel.app/",
    github: "https://github.com/Shiba2063/text-analyzer-app-byshiba.git"

  },
 {
  emoji: "📝",
  title: "Text Analyzer App",
  desc: "A powerful text analysis web application that provides word count, character count, text formatting, preview, and reading time estimation with a clean responsive UI.",
  tags: ["React.js", "Bootstrap", "JavaScript"],
  color: "linear-gradient(135deg,#0d1520,#1a2238)",
  live: "https://text-analyzer-app-byshiba.vercel.app/",
  github: "https://github.com/Shiba2063/text-analyzer-app-byshiba.git"
},
  {
    emoji: "⛅", title: "Weather App",
    desc: "Real-time weather forecast app with location detection, 7-day forecasts, and beautiful animated UI.",
    tags: ["JavaScript", "OpenWeatherAPI", "HTML/CSS"],
    color: "linear-gradient(135deg,#0d1220,#0a1a30)",
  },
  {
    emoji: "🤖", title: "AI Chatbot",
    desc: "Intelligent chatbot with NLP-based responses, context awareness, and a modern conversational UI.",
    tags: ["Python", "NLP", "Flask"],
    color: "linear-gradient(135deg,#14101e,#1a0d28)",
  },
  {
    emoji: "🏏", title: "Sports Management App",
    desc: "Complete sports management platform for scheduling matches, tracking scores, and managing team rosters.",
    tags: ["React.js", "Node.js", "MongoDB"],
    color: "linear-gradient(135deg,#141008,#1a180a)",
  },
];

export const SPORTS = [
  { emoji: "🏏", name: "Cricket", desc: "Passionate about batting & team strategy" },
  { emoji: "⚽", name: "Football", desc: "Midfielder with strong game sense" },
  { emoji: "🏐", name: "Volleyball", desc: "Team player, loves the net game" },
  { emoji: "🏀", name: "Basketball", desc: "Quick reflexes, court vision" },
  { emoji: "📚", name: "Reading", desc: "Tech, self-help & sci-fi books" },
  { emoji: "💻", name: "Tech Exploration", desc: "Always learning new tools" },
  { emoji: "🎯", name: "Leadership", desc: "Mentoring peers & leading teams" },
  { emoji: "🤝", name: "Team Activities", desc: "Collaborative projects & events" },
];

export const EXPERIENCE_CARDS = [
  { icon: "🏆", title: "Event Coordination", desc: "Actively organized and participated in college tech events, seminars, and hackathons at NCIT, developing strong organizational skills." },
  { icon: "💼", title: "Team Leadership", desc: "Led multiple project teams during academic assignments, managing timelines, delegating tasks, and delivering quality outcomes." },
  { icon: "🎤", title: "Public Speaking", desc: "Presented technical topics in class seminars and workshops, building confidence and communication abilities." },
  { icon: "🔬", title: "Technical Learning", desc: "Self-taught multiple frameworks and languages beyond the curriculum, driven by curiosity and passion for software development." },
  { icon: "🌏", title: "Community Involvement", desc: "Engaged with local tech communities and online developer forums to stay current with industry trends." },
  { icon: "📱", title: "Collaborative Projects", desc: "Built full-stack applications in group settings, fostering skills in code review, documentation, and agile methodologies." },
];

export const CERTS = [
  { icon: "🎓", name: "BEIT — Nepal College of Information Technology", badge: "Ongoing" },
  { icon: "📜", name: "JavaScript Algorithms — freeCodeCamp", badge: "Completed" },
  { icon: "🎯", name: "React.js Fundamentals — Udemy", badge: "Completed" },
  { icon: "🌐", name: "Web Development Bootcamp", badge: "Completed" },
  { icon: "🔒", name: "Cybersecurity Awareness — Coursera", badge: "Completed" },
  { icon: "☁️", name: "Cloud Computing Basics — AWS", badge: "In Progress" },
];

export const TIMELINE = [
  { year: "2021", title: "SEE — NEB", desc: "Completed School Leaving Examination with distinction.", amber: false },
  { year: "2023", title: "+2 Science (NEB)", desc: "Completed Higher Secondary with Computer Science focus.", amber: false },
  { year: "2024", title: "Enrolled at NCIT", desc: "Started BEIT at Nepal College of Information Technology.", amber: true },
  { year: "2024", title: "First  Project", desc: "Built Student Management System ", amber: false },
  { year: "2025", title: "Web Dev Specialization", desc: "Deepened React.js skills, started freelance projects.", amber: true },
  { year: "2028 ✦", title: "Expected Graduation", desc: "Complete BEIT and step into the global tech industry.", amber: false },
];

export const CHAT_RESPONSES = {
  skills: "💡 Shiba is skilled in React.js, JavaScript, HTML/CSS, Python & MySQL. He's also strong in soft skills like leadership, teamwork & public speaking!",
  projects: "🚀 Shiba has built a Portfolio Website, Student Management System, Weather App, AI Chatbot, and a Sports Management App. More coming soon!",
  education: "🎓 Shiba is currently pursuing BEIT (Bachelor of Engineering in Information Technology) at Nepal College of Information Technology (NCIT), Kathmandu.",
  hobbies: "🏏 Shiba loves cricket, football, volleyball & basketball! Off the field, he enjoys reading tech books and exploring new technologies.",
  goals: "🌟 Shiba aims to become a full-stack developer, contribute to open-source, and eventually build tech products that solve real problems in Nepal & beyond.",
  contact: "📬 You can reach Shiba at shiba.241520@ncit.edu.np or connect on LinkedIn/GitHub. Check the Contact section for full details!",
  ncit: "🏫 Nepal College of Information Technology (NCIT) is one of Nepal's leading IT colleges, affiliated with Pokhara University, known for producing top tech talent.",
  default: "🤔 Great question! Shiba is a passionate BEIT student from Nepal. Ask me about his skills, projects, education, hobbies, or goals!",
};

export const SUGGESTIONS = ["Skills", "Projects", "Education", "Hobbies", "Goals", "Contact"];

export const TESTIMONIALS = [
  { text: "Shiba consistently shows dedication and curiosity in class. His project work reflects both technical depth and creative thinking.", name: "Prof. Ramesh Parajuli", role: "Faculty, NCIT", emoji: "👨‍🏫" },
  { text: "Working with Shiba on our group project was fantastic. He leads with clarity and always brings positive energy to the team.", name: "Ram Dhital", role: "Classmate & Team Member", emoji: "👤" },
  { text: "Shiba's passion for technology is infectious. He's always the first to learn something new and share it with others.", name: "Swikrity Khadka", role: "Study Group Partner", emoji: "👩‍💻" },
];

export const CONTACT_INFO = [
  { icon: <FaEnvelope />, label: "Email", val: "shiba.241520@ncit.edu.np" },
  { icon: <FaPhone />, label: "Phone", val: "+977-9745671893" },
  { icon: <FaMapMarkerAlt />, label: "Location", val: "Kathmandu, Nepal" },
  { icon: <FaLinkedin />, label: "LinkedIn", val: "https://www.linkedin.com/in/shiba-bhatta-43823b38b" },
  { icon: <FaGithub />, label: "GitHub", val: "https://github.com/Shiba2063" },
  { icon: <FaFacebook />, label: "Facebook", val: "https://facebook.com/shiba.bhatta.2025" },
];