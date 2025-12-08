import React, { useState, useMemo, useEffect } from 'react';

// ==========================================
// 0. ICONS
// ==========================================

const IconWrapper = ({ children, size = 24, className = "", ...props }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    {...props}
  >
    {children}
  </svg>
);

// Standard Icons
const Menu = (p) => <IconWrapper {...p}><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></IconWrapper>;
const X = (p) => <IconWrapper {...p}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></IconWrapper>;
const Github = (p) => <IconWrapper {...p}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></IconWrapper>;
const Linkedin = (p) => <IconWrapper {...p}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></IconWrapper>;
const ExternalLink = (p) => <IconWrapper {...p}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></IconWrapper>;
const Code = (p) => <IconWrapper {...p}><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></IconWrapper>;
const User = (p) => <IconWrapper {...p}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></IconWrapper>;
const Briefcase = (p) => <IconWrapper {...p}><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></IconWrapper>;
const DollarSign = (p) => <IconWrapper {...p}><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></IconWrapper>;
const LogIn = (p) => <IconWrapper {...p}><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" x2="3" y1="12" y2="12"/></IconWrapper>;
const ChevronRight = (p) => <IconWrapper {...p}><path d="m9 18 6-6-6-6"/></IconWrapper>;
const Filter = (p) => <IconWrapper {...p}><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></IconWrapper>;
const Search = (p) => <IconWrapper {...p}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></IconWrapper>;
const Settings = (p) => <IconWrapper {...p}><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.47a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.39a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></IconWrapper>;
const HelpCircle = (p) => <IconWrapper {...p}><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></IconWrapper>;
const Mail = (p) => <IconWrapper {...p}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></IconWrapper>;
const ArrowLeft = (p) => <IconWrapper {...p}><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></IconWrapper>;
const Zap = (p) => <IconWrapper {...p}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></IconWrapper>;
const Layout = (p) => <IconWrapper {...p}><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="9" y2="21"/></IconWrapper>;
const Database = (p) => <IconWrapper {...p}><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></IconWrapper>;
const Terminal = (p) => <IconWrapper {...p}><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></IconWrapper>;
const Layers = (p) => <IconWrapper {...p}><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></IconWrapper>;
const BookOpen = (p) => <IconWrapper {...p}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></IconWrapper>;
const Globe = (p) => <IconWrapper {...p}><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></IconWrapper>;
const Trophy = (p) => <IconWrapper {...p}><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></IconWrapper>;
const Star = (p) => <IconWrapper {...p}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></IconWrapper>;
const CheckCircle = (p) => <IconWrapper {...p}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></IconWrapper>;
const Send = (p) => <IconWrapper {...p}><line x1="22" x2="11" y1="2" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></IconWrapper>;
const Shield = (p) => <IconWrapper {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></IconWrapper>;

// Brand Icons
const GoogleIcon = (props) => (
  <svg className="w-5 h-5 mr-3" viewBox="0 0 36 36" fill="none" role="img" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill="#4285F4" d="M34.5 18.0001c0-1.2982-.112-2.5855-.327-3.8344H18v7.2691h9.3276c-.3986 2.0673-1.611 3.8647-3.4172 5.0935l6.0886 4.7081c3.5517-3.2685 5.6277-8.1065 5.6277-13.2363z"/>
    <path fill="#34A853" d="M18 36c5.0042 0 9.2291-1.6441 12.3059-4.4795l-6.0886-4.7081c-1.6792 1.1235-3.8304 1.7876-6.2173 1.7876-4.7937 0-8.852-3.14-10.2917-7.4479H1.4745l-0.1017 4.8872c3.0858 6.0963 9.4329 10.1607 16.6272 10.1607z"/>
    <path fill="#FBBC04" d="M7.7083 21.0827c-.2016-.6052-.3179-1.2335-.3179-1.8797s.1163-1.2745.3179-1.8797V11.229H1.5768c-.6896 1.3653-1.0768 2.9109-1.0768 4.5829s.3872 3.2176 1.0768 4.5829l6.1315 4.7431c-.0245-1.1894-.0245-2.404-.0245-3.6264z"/>
    <path fill="#EA4335" d="M18 7.0003c3.4831 0 6.5866 1.1969 9.0357 3.5134l5.3183-5.187C29.2267 1.8341 23.9686 0 18 0c-7.1943 0-13.5414 4.0644-16.6272 10.1607l6.1315 4.7431c1.4397-4.3079 5.5034-7.4479 10.2917-7.4479z"/>
  </svg>
);

const GitHubIcon = (props) => (
    <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12 0.297c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.207 11.387 0.6.111 0.82-.258 0.82-.577 0-0.284-0.011-1.036-0.016-2.039-3.336 0.725-4.04-1.608-4.04-1.608-0.546-1.385-1.332-1.756-1.332-1.756-1.087-0.745 0.082-0.73 0.082-0.73 1.205 0.085 1.838 1.237 1.838 1.237 1.07 1.832 2.809 1.303 3.493 0.997 0.108-0.775 0.418-1.303 0.762-1.603-2.665-0.301-5.464-1.333-5.464-5.942 0-1.312 0.467-2.385 1.237-3.228-0.124-0.301-0.536-1.523 0.117-3.181 0 0 1.008-0.323 3.301 1.235 0.959-0.266 1.984-0.398 3.007-0.403 1.023 0.005 2.049 0.137 3.007 0.403 2.293-1.558 3.3-1.235 3.3-1.235 0.654 1.658 0.242 2.88 0.117 3.181 0.769 0.843 1.236 1.916 1.236 3.228 0 4.622-2.8 5.636-5.474 5.932 0.43 0.372 0.814 1.102 0.814 2.223 0 1.603-0.015 2.899-0.015 3.297 0 0.319 0.219 0.693 0.829 0.575C20.566 22.091 24 17.599 24 12.297 24 5.671 18.627 0.297 12 0.297z"/>
    </svg>
);

// ==========================================
// 1. DATA 
// ==========================================
const USERS = [
  {
    id: 1,
    name: "Kartikey Chaudhary",
    role: "Full Stack Developer",
    bio: "I am a passionate developer currently in my first year, aiming to build digital experiences that matter.",
    email: "kartikey@gmail.com",
    skills: { 
      frontend: ["React", "Tailwind", "JS"], 
      backend: ["Node.js", "Express", "MongoDB"], 
      tools: ["Git", "API Design"] 
    },
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80",
    color: "cyan",
  },
  {
    id: 2,
    name: "Srujan Tagalpallewar",
    role: "UI/UX Designer",
    bio: "I design interfaces that are not just beautiful but intuitive.",
    email: "srujan@gmail.com",
    skills: { 
      frontend: ["Figma", "Adobe XD", "CSS3"], 
      backend: ["Prototyping", "User Flow"], 
      tools: ["Design Systems"] 
    },
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=800&q=80",
    color: "purple",
  },
  {
    id: 3,
    name: "Palak Dasauni",
    role: "Frontend Developer",
    bio: "Specializing in responsive web design and modern JavaScript frameworks.",
    email: "palak@gmail.com",
    skills: { 
      frontend: ["HTML5", "SASS", "Vue.js"], 
      backend: ["Firebase", "Auth"], 
      tools: ["Webpack", "SEO"] 
    },
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=800&q=80",
    color: "emerald",
  },
  {
    id: 4,
    name: "Ayush Bharti",
    role: "Backend Engineer",
    bio: "Building robust APIs and scalable database architectures is my forte.",
    email: "ayush@gmail.com",
    skills: { 
      frontend: ["HTML", "Basic JS"], 
      backend: ["Python", "Django", "Postgres"], 
      tools: ["Docker", "AWS"] 
    },
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?fit=crop&w=800&q=80",
    color: "blue",
  },
  {
    id: 5,
    name: "Eshita Modi",
    role: "Product Manager",
    bio: "Bridging the gap between business requirements and technical solutions.",
    email: "eshita@gmail.com",
    skills: { 
      frontend: ["Jira", "Notion"], 
      backend: ["Agile", "Scrum"], 
      tools: ["User Stories"] 
    },
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=800&q=80",
    color: "pink",
  },
  {
    id: 6,
    name: "Aadya Agrawal",
    role: "Data Analyst",
    bio: "Turning raw data into actionable business insights.",
    email: "aadya@gmail.com",
    skills: { 
      frontend: ["Tableau", "PowerBI"], 
      backend: ["SQL", "Python"], 
      tools: ["Statistics"] 
    },
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?fit=crop&w=800&q=80",
    color: "orange",
  },
];

// Helper to generate rich data for anyone (even if not explicitly defined)
const getDetailedData = (user) => {
  // Default structure
  const defaults = {
    badges: ["FAST LEARNER", "CLEAN CODE", "GLOBAL MINDSET"],
    availability: {
      status: "Available",
      timezone: "UTC-7 (PST)",
      response: "< 2 Hours"
    },
    arsenal: {
      frontend: user.skills.frontend || [],
      backend: user.skills.backend || [],
      tools: user.skills.tools || []
    },
    projects: [
      { 
        title: "Finance App UI", 
        desc: "Award-winning mobile banking interface design focused on accessibility.", 
        tags: ["Figma", "iOS"], 
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80" 
      },
      { 
        title: "Travel Booking Flow", 
        desc: "Streamlined user flow increasing conversion by 25%.", 
        tags: ["Adobe XD", "Prototyping"], 
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80" 
      }
    ],
    education: {
      school: "National Institute of Design",
      degree: "Master of Design",
      year: "2019-2021"
    },
    languages: ["English", "Hindi", "German"],
    awards: [
      { title: "Best UI Design 2024", org: "Dribbble Awards" },
      { title: "Google UX Certificate", org: "Coursera" }
    ]
  };

  // Custom overrides for specific people could go here if needed
  if (user.role.includes("Developer")) {
    defaults.education.school = "Indian Institute of Technology";
    defaults.education.degree = "B.Tech Computer Science";
    defaults.awards = [{title: "Hackathon Winner", org: "SmartIndia"}, {title: "AWS Certified", org: "Amazon"}];
    defaults.projects[0].title = "E-Commerce Platform";
    defaults.projects[0].tags = ["React", "Node.js"];
  }

  return { ...user, ...defaults };
};


// ==========================================
// 2. COMPONENTS
// ==========================================

// --- Navbar ---
const Navbar = ({ activePage, setActivePage, toggleSidebar }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', icon: User, id: 'home' },
    { name: 'Portfolio', icon: Code, id: 'portfolio' },
    { name: 'Hire', icon: Briefcase, id: 'hire' },
    { name: 'Freelance', icon: DollarSign, id: 'freelance' },
    { name: 'Login', icon: LogIn, id: 'login' },
  ];

  return (
    <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50 h-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo & Sidebar Toggle */}
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleSidebar}
              className="text-gray-400 hover:text-white focus:outline-none hidden md:block"
              title="Toggle Sidebar"
            >
              <Menu size={24} />
            </button>
            
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => setActivePage('home')}>
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-2">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <span className="text-white font-bold text-xl tracking-tight">HirePortfolio</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => setActivePage(link.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-2
                    ${activePage === link.id 
                      ? 'bg-gray-800 text-blue-400' 
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                >
                  <link.icon size={16} />
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 absolute w-full border-b border-gray-700 z-50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  setActivePage(link.id);
                  setIsMenuOpen(false);
                }}
                className={`w-full text-left block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2
                  ${activePage === link.id 
                    ? 'bg-gray-900 text-white' 
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
              >
                <link.icon size={16} />
                {link.name}
              </button>
            ))}
             <button
                onClick={() => {
                  toggleSidebar();
                  setIsMenuOpen(false);
                }}
                className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white flex items-center gap-2"
              >
                <Filter size={16} /> Filters & Options
              </button>
          </div>
        </div>
      )}
    </nav>
  );
};

// --- Sidebar Component (Updated for Minimal Variant) ---
const Sidebar = ({ isOpen, toggle, activeRole, setActiveRole, searchQuery, setSearchQuery, variant = 'default' }) => {
  return (
    <aside 
      className={`
        bg-gray-900 border-r border-gray-800 transition-all duration-300 ease-in-out z-40
        fixed top-16 bottom-0 overflow-y-auto
        md:relative md:top-0 md:bottom-auto md:h-auto md:overflow-visible
        ${isOpen ? 'w-64 translate-x-0' : 'w-0 -translate-x-full md:translate-x-0 md:w-0'}
      `}
    >
      <div className={`p-4 w-64 ${!isOpen && 'hidden'}`}>
        {/* Sidebar Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-white font-bold text-lg flex items-center gap-2">
            <Filter size={18} className="text-blue-500"/> {variant === 'minimal' ? 'Options' : 'Filters'}
          </h3>
          <button onClick={toggle} className="md:hidden text-gray-400">
            <X size={20} />
          </button>
        </div>

        {variant === 'default' ? (
          <>
            {/* Content Section 1: Search */}
            <div className="mb-6">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search skills..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-gray-800 text-gray-300 text-sm rounded-lg pl-9 pr-3 py-2 border border-gray-700 focus:outline-none focus:border-blue-500"
                />
                <Search className="absolute left-3 top-2.5 text-gray-500" size={14} />
              </div>
            </div>

            {/* Content Section 2: Roles */}
            <div className="mb-6">
              <h4 className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-3">Filter by Role</h4>
              <div className="space-y-2">
                <label 
                  onClick={() => setActiveRole('All')}
                  className={`flex items-center space-x-2 text-sm cursor-pointer group ${activeRole === 'All' ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}
                >
                  <div className={`w-4 h-4 border rounded flex items-center justify-center ${activeRole === 'All' ? 'border-blue-500 bg-blue-500/20' : 'border-gray-600'}`}>
                    {activeRole === 'All' && <div className="w-2 h-2 bg-blue-500 rounded-sm"></div>}
                  </div>
                  <span>All Roles</span>
                </label>
                {['Frontend', 'Backend', 'Full Stack', 'UI/UX', 'Product', 'Data'].map((role) => (
                  <label 
                    key={role} 
                    onClick={() => setActiveRole(role)}
                    className={`flex items-center space-x-2 text-sm cursor-pointer group ${activeRole === role ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}
                  >
                    <div className={`w-4 h-4 border rounded flex items-center justify-center ${activeRole === role ? 'border-blue-500 bg-blue-500/20' : 'border-gray-600 group-hover:border-blue-500'}`}>
                      {activeRole === role && <div className="w-2 h-2 bg-blue-500 rounded-sm"></div>}
                    </div>
                    <span>{role}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Content Section 3: Availability */}
            <div className="mb-6">
              <h4 className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-3">Availability</h4>
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-gray-300 text-sm cursor-pointer">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  <span>Available Now</span>
                </label>
                <label className="flex items-center space-x-2 text-gray-300 text-sm cursor-pointer">
                  <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                  <span>In 2 Weeks</span>
                </label>
              </div>
            </div>
          </>
        ) : (
          /* Minimal Sidebar Content for Hire Page */
          <div className="mb-6">
             <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 mb-6">
               <h4 className="text-white text-sm font-bold mb-2">Hiring Support</h4>
               <p className="text-xs text-gray-400 mb-3">Not sure who you need? We can help you define the role.</p>
               <button className="text-xs bg-blue-600/20 text-blue-400 px-3 py-2 rounded border border-blue-600/30 hover:bg-blue-600/30 w-full">Schedule Call</button>
             </div>
          </div>
        )}

        <hr className="border-gray-800 my-6" />

        {/* Content Section 4: Quick Links */}
        <div>
          <h4 className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-3">Resources</h4>
          <ul className="space-y-3">
             <li className="flex items-center gap-3 text-gray-400 hover:text-blue-400 text-sm cursor-pointer transition-colors">
               <Settings size={16} /> Settings
             </li>
             <li className="flex items-center gap-3 text-gray-400 hover:text-blue-400 text-sm cursor-pointer transition-colors">
               <HelpCircle size={16} /> Help Center
             </li>
             <li className="flex items-center gap-3 text-gray-400 hover:text-blue-400 text-sm cursor-pointer transition-colors">
               <Mail size={16} /> Contact Support
             </li>
          </ul>
        </div>
        
        {/* Call to Action Box (Only on Default sidebar) */}
        {variant === 'default' && (
          <div className="mt-8 bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-lg p-4 border border-blue-500/30">
            <h5 className="text-white text-sm font-bold mb-1">Need a custom team?</h5>
            <p className="text-gray-400 text-xs mb-3">We can build a squad for you.</p>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs py-2 rounded transition-colors">
              Get Quote
            </button>
          </div>
        )}
      </div>
    </aside>
  );
};

// --- Portfolio Card ---
const PortfolioCard = ({ person, onViewProfile }) => {
  const colorMap = {
    cyan: "from-cyan-400",
    purple: "from-purple-400",
    emerald: "from-emerald-400",
    blue: "from-blue-400",
    pink: "from-pink-400",
    orange: "from-orange-400",
  };

  const gradientFrom = colorMap[person.color] || "from-blue-400";
  const allSkills = [...person.skills.frontend, ...person.skills.backend].slice(0, 3);

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-blue-500 hover:shadow-2xl transition-all duration-300 flex flex-col h-full group">
      <div className="p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <div className="flex-shrink-0">
          <div className={`w-24 h-24 rounded-full p-1 bg-gradient-to-br ${gradientFrom} to-blue-600`}>
            <img 
              src={person.avatar} 
              alt={person.name} 
              className="w-full h-full rounded-full bg-gray-900 object-cover"
            />
          </div>
        </div>
        <div className="flex-1 text-center sm:text-left">
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
            {person.name}
          </h3>
          <p className="text-blue-400 font-medium text-sm mb-3 uppercase tracking-wide">
            {person.role}
          </p>
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start mb-4">
            {allSkills.map((skill, index) => (
              <span 
                key={index} 
                className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-md border border-gray-600"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-auto bg-gray-900/50 p-4 border-t border-gray-700 flex justify-between items-center">
        <span className="text-xs text-gray-500">Available for hire</span>
        <button 
          onClick={() => onViewProfile(person)}
          className="text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors flex items-center gap-1"
        >
          View Profile <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

// --- Portfolio Grid ---
const PortfolioGrid = ({ isSidebarOpen, toggleSidebar, activeRole, searchQuery, onSelectMember }) => {
  const filteredMembers = useMemo(() => {
    return USERS.filter(user => {
      const matchesRole = activeRole === 'All' || user.role.includes(activeRole);
      const matchesSearch = 
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        Object.values(user.skills).flat().some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesRole && matchesSearch;
    });
  }, [activeRole, searchQuery]);

  return (
    <div className="flex-1 bg-gray-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Meet Our Team
            </h2>
            <p className="text-gray-400 max-w-2xl">
              Browse through our talented team of developers and designers.
            </p>
          </div>
          {!isSidebarOpen && (
            <button 
              onClick={toggleSidebar}
              className="md:hidden flex items-center gap-2 bg-gray-800 text-gray-200 px-4 py-2 rounded-lg text-sm border border-gray-700"
            >
              <Filter size={16} /> Filters
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredMembers.map((member) => (
            <PortfolioCard key={member.id} person={member} onViewProfile={onSelectMember} />
          ))}
          {filteredMembers.length === 0 && (
             <div className="col-span-full text-center py-20 bg-gray-900 rounded-xl border border-gray-800">
                <User size={48} className="mx-auto text-gray-700 mb-4" />
                <h3 className="text-white font-bold text-xl">No team members found</h3>
                <p className="text-gray-500">Try adjusting your filters.</p>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

// --- NEW MEMBER PROFILE (Detailed) ---
function MemberProfile({ baseMember, onHire, onBack }) {
  const member = getDetailedData(baseMember);
  const colors = {
    cyan: "text-cyan-400",
    purple: "text-purple-400",
    emerald: "text-emerald-400",
    blue: "text-blue-400",
    pink: "text-pink-400",
    orange: "text-orange-400",
  };
  const accentColor = colors[member.color] || "text-blue-400";
  const [firstName, ...lastName] = member.name.split(" ");

  return (
    <div className="min-h-screen bg-[#0B0E14] text-gray-300 font-sans">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <button 
          onClick={onBack} 
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors bg-[#1C1F26] px-4 py-2 rounded-full text-sm font-medium border border-[#2F333A]"
        >
          <ArrowLeft size={16}/> Back to Team
        </button>
      </div>

      <div className="flex flex-col items-center justify-center text-center px-4 pb-16 relative overflow-hidden">
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-${member.color}-900/20 rounded-full blur-[120px] pointer-events-none`}></div>
        <div className="relative z-10 animate-fade-in-up">
           <div className="inline-block px-3 py-1 mb-6 rounded-full border border-gray-700 bg-gray-900/50 text-[10px] tracking-widest uppercase text-gray-400">
             Hello_World
           </div>
           <h1 className="text-6xl md:text-8xl font-black text-white mb-4 tracking-tight">
             I'm <span className={`text-transparent bg-clip-text bg-gradient-to-r from-white to-${member.color}-500`}>{firstName}</span>
           </h1>
           <p className="text-xl md:text-2xl text-gray-400 font-light mb-8 flex items-center justify-center gap-3">
             {member.role} <span className="text-gray-600">•</span> Problem Solver
           </p>
           <div className="flex flex-wrap justify-center gap-3 mb-10">
              {member.badges.map((badge, idx) => (
                <span key={idx} className="px-4 py-1.5 rounded-full bg-[#1C1F26] border border-[#2F333A] text-xs font-bold text-gray-300 flex items-center gap-2">
                   {idx === 0 ? "🚀" : idx === 1 ? "💻" : "🌍"} {badge}
                </span>
              ))}
           </div>
           <div className="flex items-center justify-center gap-4">
              <button 
                onClick={() => onHire(member)}
                className={`bg-gradient-to-r from-${member.color}-600 to-${member.color}-500 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-${member.color}-500/25 hover:shadow-${member.color}-500/40 hover:-translate-y-1 transition-all flex items-center gap-2`}
              >
                <Briefcase size={18} /> Hire Me
              </button>
              <div className="flex gap-2">
                <button className="p-3 rounded-full bg-[#1C1F26] hover:bg-gray-700 text-gray-400 hover:text-white transition-colors border border-[#2F333A]"><Github size={20}/></button>
                <button className="p-3 rounded-full bg-[#1C1F26] hover:bg-gray-700 text-gray-400 hover:text-white transition-colors border border-[#2F333A]"><Linkedin size={20}/></button>
                <button className="p-3 rounded-full bg-[#1C1F26] hover:bg-gray-700 text-gray-400 hover:text-white transition-colors border border-[#2F333A]"><Mail size={20}/></button>
              </div>
           </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-20">
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
               <section>
                 <div className="flex items-center gap-2 mb-4 text-white font-bold text-xl">
                    <User className={accentColor} size={24} /> About
                 </div>
                 <div className="bg-[#11141B] p-8 rounded-2xl border border-[#1F232C] leading-relaxed text-gray-400">
                    <p className="mb-4">{member.bio}</p>
                    <p>Highly skilled in creating scalable, robust web applications. Passionate about clean code, user-centric design, and optimizing performance for millions of users. Always eager to learn new technologies and contribute to open-source communities.</p>
                 </div>
               </section>
               <section>
                 <div className="flex items-center gap-2 mb-4 text-white font-bold text-xl">
                    <Zap className={accentColor} size={24} /> Technical Expertise
                 </div>
                 <div className="flex flex-wrap gap-2 mb-6">
                    {member.arsenal.frontend.map((skill) => (
                      <span key={skill} className="px-4 py-2 bg-[#161922] border border-[#252A36] rounded-lg text-sm text-gray-300 hover:border-gray-500 transition-colors cursor-default">
                        {skill}
                      </span>
                    ))}
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-[#11141B] p-6 rounded-2xl border border-[#1F232C] hover:border-[#2F333A] transition-colors">
                       <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 text-blue-400"><Layout size={20}/></div>
                       <h3 className="text-white font-bold mb-4">Frontend</h3>
                       <ul className="space-y-2 text-sm text-gray-400">
                          {member.arsenal.frontend.map(s => <li key={s} className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>{s}</li>)}
                       </ul>
                    </div>
                     <div className="bg-[#11141B] p-6 rounded-2xl border border-[#1F232C] hover:border-[#2F333A] transition-colors">
                       <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4 text-emerald-400"><Database size={20}/></div>
                       <h3 className="text-white font-bold mb-4">Backend</h3>
                       <ul className="space-y-2 text-sm text-gray-400">
                          {member.arsenal.backend.map(s => <li key={s} className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>{s}</li>)}
                       </ul>
                    </div>
                     <div className="bg-[#11141B] p-6 rounded-2xl border border-[#1F232C] hover:border-[#2F333A] transition-colors">
                       <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4 text-orange-400"><Terminal size={20}/></div>
                       <h3 className="text-white font-bold mb-4">Tools</h3>
                       <ul className="space-y-2 text-sm text-gray-400">
                          {member.arsenal.tools.map(s => <li key={s} className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>{s}</li>)}
                       </ul>
                    </div>
                 </div>
               </section>
               <section>
                 <div className="flex items-center gap-2 mb-6 text-white font-bold text-xl">
                    <Layers className={accentColor} size={24} /> Featured Projects
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {member.projects.map((project, idx) => (
                      <div key={idx} className="bg-[#11141B] rounded-2xl overflow-hidden border border-[#1F232C] group hover:border-[#3a4150] transition-all">
                         <div className="h-48 overflow-hidden relative">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10"></div>
                            <img src={project.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={project.title} />
                         </div>
                         <div className="p-6">
                            <h4 className="text-white font-bold text-lg mb-2">{project.title}</h4>
                            <p className="text-sm text-gray-400 mb-4 line-clamp-2">{project.desc}</p>
                            <div className="flex justify-between items-center">
                               <div className="flex gap-2">
                                  {project.tags.map(t => <span key={t} className="text-[10px] px-2 py-1 bg-[#1C1F26] rounded-md text-gray-300 border border-[#2F333A]">{t}</span>)}
                               </div>
                               <button className="text-gray-500 hover:text-white"><ExternalLink size={16}/></button>
                            </div>
                         </div>
                      </div>
                    ))}
                 </div>
               </section>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[#11141B] p-6 rounded-2xl border border-[#1F232C]">
                      <h3 className="text-white font-bold mb-4 flex items-center gap-2"><BookOpen size={18} className="text-blue-400"/> Education</h3>
                      <div>
                         <div className="text-white font-medium">{member.education.school}</div>
                         <div className="text-gray-400 text-sm">{member.education.degree}</div>
                         <div className="text-gray-600 text-xs mt-1">{member.education.year}</div>
                      </div>
                  </div>
                  <div className="bg-[#11141B] p-6 rounded-2xl border border-[#1F232C]">
                      <h3 className="text-white font-bold mb-4 flex items-center gap-2"><Globe size={18} className="text-emerald-400"/> Languages</h3>
                      <div className="flex gap-2 flex-wrap">
                          {member.languages.map(l => (
                            <span key={l} className="px-3 py-1 bg-[#1C1F26] border border-[#2F333A] rounded-lg text-sm text-gray-300">
                               {l}
                            </span>
                          ))}
                      </div>
                  </div>
               </div>
            </div>
            <div className="lg:col-span-1 space-y-6">
               <div className="bg-[#11141B] p-6 rounded-2xl border border-[#1F232C] sticky top-24">
                  <h3 className="text-white font-bold text-lg mb-6">Availability</h3>
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-[#1F232C]">
                     <span className="text-gray-400 text-sm">Current Status</span>
                     <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs rounded-full font-medium border border-emerald-500/20 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> {member.availability.status}
                     </span>
                  </div>
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-[#1F232C]">
                     <span className="text-gray-400 text-sm">Timezone</span>
                     <span className="text-white text-sm font-medium">{member.availability.timezone}</span>
                  </div>
                  <div className="flex items-center justify-between mb-8">
                     <span className="text-gray-400 text-sm">Response Time</span>
                     <span className="text-white text-sm font-medium">{member.availability.response}</span>
                  </div>
                  <button 
                     onClick={() => onHire(member)}
                     className="w-full bg-white text-black font-bold py-3 rounded-xl hover:bg-gray-200 transition-colors flex justify-center items-center gap-2"
                  >
                     Hire Me
                  </button>
               </div>
               <div className="bg-[#11141B] p-6 rounded-2xl border border-[#1F232C]">
                  <h3 className="text-white font-bold mb-4 flex items-center gap-2"><Trophy size={18} className="text-yellow-400"/> Awards</h3>
                  <div className="space-y-4">
                     {member.awards.map((award, i) => (
                        <div key={i} className="flex gap-3">
                           <Star size={16} className="text-yellow-500 mt-0.5 shrink-0"/>
                           <div>
                              <div className="text-white text-sm font-medium">{award.title}</div>
                              <div className="text-gray-500 text-xs">{award.org}</div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}

// --- NEW LOGIN PAGE COMPONENTS ---

const IllustrationPanel = () => (
    <div className="hidden lg:flex flex-col items-center justify-center w-1/2 p-8 text-center">
        {/* Glow Animation Style */}
        <style>{`
            @keyframes glow {
                0% { box-shadow: 0 0 10px rgba(56, 189, 248, 0.4); }
                50% { box-shadow: 0 0 30px rgba(56, 189, 248, 0.8); }
                100% { box-shadow: 0 0 10px rgba(56, 189, 248, 0.4); }
            }
            .h-logo-container {
                animation: glow 3s ease-in-out infinite;
            }
        `}</style>
        
        <h1 className="text-4xl font-extrabold mb-4 tracking-tight text-white">
            Unlock Your <span className="text-sky-400">Creative Potential</span>
        </h1>
        <p className="mb-10 text-xl text-gray-400 max-w-sm">
            Connect with top talent, collaborate, and build amazing things together.
        </p>
        
        <div className="w-full max-w-sm h-auto relative flex justify-center items-center py-10">
            <div className="h-logo-container rounded-full p-6 bg-[#0B0F17] border border-sky-500/30">
                <svg className="w-32 h-32" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{stopColor: '#38bdf8', stopOpacity: 1}} />
                            <stop offset="100%" style={{stopColor: '#1e3a8a', stopOpacity: 1}} />
                        </linearGradient>
                    </defs>
                    <circle cx="100" cy="100" r="90" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="8 8" opacity="0.4"/>
                    {/* The H Shape */}
                    <rect x="65" y="50" width="20" height="100" rx="10" fill="url(#logoGradient)"/>
                    <rect x="115" y="50" width="20" height="100" rx="10" fill="url(#logoGradient)"/>
                    <rect x="65" y="90" width="70" height="20" rx="5" fill="url(#logoGradient)"/>
                    {/* Decorative Dots */}
                    <circle cx="40" cy="60" r="6" fill="#34d399" opacity="0.9"/>
                    <circle cx="160" cy="140" r="6" fill="#facc15" opacity="0.9"/>
                    <circle cx="160" cy="40" r="6" fill="#ef4444" opacity="0.9"/>
                    <circle cx="40" cy="160" r="6" fill="#c084fc" opacity="0.9"/>
                </svg>
            </div>
        </div>
        
        <p className="mt-12 text-md text-gray-500 max-w-sm">
            Log in now to manage your portfolio and discover new projects.
        </p>
    </div>
);

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [status, setStatus] = useState({ message: '', isError: false, isVisible: false });

    const displayStatus = (msg, isError = true) => {
        setStatus({ message: msg, isError: isError, isVisible: true });
        if (!isError) {
            setTimeout(() => {
                setStatus({ message: '', isError: false, isVisible: false });
                setEmail('');
                setPassword('');
            }, 3000);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus({ message: '', isError: false, isVisible: false });

        if (!email) return displayStatus("Email address is required.");
        if (!/^\S+@\S+\.\S+$/.test(email)) return displayStatus("Please enter a valid email address.");
        if (!password) return displayStatus("Password is required.");
        if (password.length < 6) return displayStatus("Password must be at least 6 characters long.");

        displayStatus("Login successful! Redirecting...", false);
    };

    const statusClasses = status.isVisible 
        ? (status.isError ? "bg-red-900/50 border border-red-800 text-red-200" : "bg-green-900/50 border border-green-800 text-green-200")
        : "hidden";

    return (
        <div className="w-full lg:w-1/2 p-6 sm:p-12 flex items-center justify-center bg-[#0d111c]">
            <div className="bg-[#161b22] border border-[#2f333a] rounded-3xl p-8 max-w-md w-full shadow-2xl">
                <h2 className="text-3xl font-bold text-center mb-2 text-white">Welcome Back</h2>
                <p className="text-center text-gray-400 mb-8 text-sm">Sign in to continue your journey</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                        <input 
                            type="email" 
                            id="email" 
                            className="bg-[#0d111c] border border-[#2f333a] text-gray-200 w-full p-3.5 rounded-xl focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition-all placeholder-gray-600" 
                            placeholder="you@example.com" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                        <div className="relative">
                            <input 
                                type={showPassword ? "text" : "password"} 
                                id="password" 
                                className="bg-[#0d111c] border border-[#2f333a] text-gray-200 w-full p-3.5 pr-12 rounded-xl focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition-all placeholder-gray-600" 
                                placeholder="••••••••" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button 
                                type="button" 
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 px-4 flex items-center text-xs font-medium text-gray-400 hover:text-sky-400 transition-colors uppercase tracking-wider"
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-between items-center text-sm">
                        <label htmlFor="remember" className="flex items-center text-gray-400 cursor-pointer select-none">
                            <input type="checkbox" id="remember" className="h-4 w-4 rounded border-gray-600 bg-[#0d111c] text-sky-500 focus:ring-sky-500 mr-2 accent-sky-500" /> 
                            Remember me
                        </label>
                        <button type="button" className="text-sky-400 hover:text-sky-300 transition-colors font-medium">Forgot Password?</button>
                    </div>

                    <div className={`p-3 rounded-lg text-sm transition-all duration-300 text-center ${statusClasses}`}>
                        {status.message}
                    </div>

                    <button type="submit" className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 transition-all duration-200 transform hover:-translate-y-0.5">
                        Sign In
                    </button>

                    <div className="relative flex items-center py-2">
                        <div className="flex-grow border-t border-gray-700"></div>
                        <span className="flex-shrink mx-4 text-xs text-gray-500 uppercase tracking-widest">OR</span>
                        <div className="flex-grow border-t border-gray-700"></div>
                    </div>

                    <div className="space-y-3">
                        <button type="button" className="w-full flex items-center justify-center border border-[#2f333a] bg-[#0d111c] text-gray-300 py-3 rounded-xl hover:bg-[#1c222b] hover:border-gray-600 transition-all duration-200 font-medium">
                            <GoogleIcon />
                            Sign in with Google
                        </button>
                        <button type="button" className="w-full flex items-center justify-center border border-[#2f333a] bg-[#0d111c] text-gray-300 py-3 rounded-xl hover:bg-[#1c222b] hover:border-gray-600 transition-all duration-200 font-medium">
                            <GitHubIcon />
                            Sign in with GitHub
                        </button>
                    </div>

                    <p className="text-center mt-6 text-sm text-gray-400">
                        Don’t have an account? 
                        <button className="ml-1 text-sky-400 font-bold hover:text-sky-300 transition-colors">Sign Up</button>
                    </p>
                </form>
            </div>
        </div>
    );
};

// Updated Login Page Wrapper
const LoginPage = () => (
    <div className="min-h-screen flex items-center justify-center bg-[#0d111c] w-full">
        <div className="w-full max-w-7xl flex flex-col lg:flex-row min-h-[600px]">
            <IllustrationPanel />
            <LoginForm />
        </div>
    </div>
);

// --- NEW HIRE TALENT PAGE ---
const HireTalentPage = ({ prefilledMember, onFindTalent }) => {
  const [formData, setFormData] = useState({
    company: '',
    email: '',
    role: 'Full Stack Developer',
    budget: '5k-10k',
    description: ''
  });

  useEffect(() => {
    if (prefilledMember) {
      setFormData(prev => ({
        ...prev,
        description: `I would like to inquire about hiring ${prefilledMember.name} (ID: ${prefilledMember.id}). We are impressed by their experience in ${prefilledMember.skills.frontend[0]} and ${prefilledMember.skills.backend[0]}.`,
        role: prefilledMember.role
      }));
    }
  }, [prefilledMember]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (prefilledMember) {
      alert(`Request Sent! \nWe'll contact ${formData.email} regarding your request for ${prefilledMember.name}.`);
    } else {
      onFindTalent(formData.role);
    }
  };

  const benefits = [
    { icon: Zap, title: "Speedy Hiring", desc: "Get matched with candidates in 48 hours." },
    { icon: Shield, title: "Vetted Talent", desc: "Top 1% of engineers passed our rigorous technical exams." },
    { icon: User, title: "Cultural Fit", desc: "We match for soft skills and team dynamics, not just code." },
  ];

  return (
    <div className="min-h-screen bg-gray-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Copy & Benefits */}
        <div>
          <div className="inline-block px-3 py-1 bg-blue-900/30 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-6">
            For Employers
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {prefilledMember ? `Hire ${prefilledMember.name}` : 'Build your perfect team'} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              {prefilledMember ? 'and start building today.' : 'with HirePortfolio.'}
            </span>
          </h1>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            {prefilledMember 
              ? `${prefilledMember.name} is one of our top performers. Fill out the form to schedule an interview immediately.`
              : 'Stop sifting through hundreds of resumes. We connect you with pre-vetted senior developers, designers, and product managers who are ready to start today.'
            }
          </p>

          <div className="space-y-6">
            {benefits.map((item, idx) => (
              <div key={idx} className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-800 text-blue-400 border border-gray-700">
                    <item.icon size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">{item.title}</h3>
                  <p className="mt-1 text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Intake Form */}
        <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 shadow-2xl">
          <h2 className="text-2xl font-bold text-white mb-6">Tell us who you need</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Company Name</label>
              <input 
                type="text" 
                required
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="Amazon"
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Work Email</label>
              <input 
                type="email" 
                required
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="hiring@company.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Role Needed</label>
                <select 
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                  value={formData.role}
                  onChange={(e) => setFormData({...formData, role: e.target.value})}
                >
                  <option>Full Stack Developer</option>
                  <option>Frontend Developer</option>
                  <option>Backend Engineer</option>
                  <option>UI/UX Designer</option>
                  <option>Product Manager</option>
                  <option>Data Analyst</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Budget Range</label>
                <select 
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                  value={formData.budget}
                  onChange={(e) => setFormData({...formData, budget: e.target.value})}
                >
                  <option>Less than 10k</option>
                  <option>10k - 25k</option>
                  <option>25k - 50k</option>
                  <option>50k - 75k</option>
                  <option>75k - 100k</option>
                  <option>100k+</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Project Details</label>
              <textarea 
                rows="3"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="Briefly describe your tech stack and requirements..."
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-4 rounded-lg shadow-lg transform transition hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              {prefilledMember ? `Send Inquiry for ${prefilledMember.name}` : 'Start Hiring'} <Send size={18} />
            </button>
            
            <p className="text-center text-xs text-gray-500 mt-4">
              <span className="inline-flex items-center gap-1 text-green-500 mr-2"><CheckCircle size={12} /> Verified</span>
              No credit card required for initial consultation.
            </p>
          </form>
        </div>

      </div>
    </div>
  );
};

const PlaceholderPage = ({ title }) => (
  <div className="flex-1 bg-gray-950 flex flex-col items-center justify-center text-center px-4">
    <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
    <p className="text-gray-400">This page is part of the navigation structure.</p>
  </div>
);

const Footer = () => (
  <footer className="bg-gray-900 border-t border-gray-800 pt-10 pb-6 mt-auto">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white text-lg font-bold mb-4">HirePortfolio</h3>
          <p className="text-gray-400 text-sm">
            Connecting top-tier talent with world-class opportunities.
          </p>
        </div>
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-blue-400 cursor-pointer">About Us</li>
            <li className="hover:text-blue-400 cursor-pointer">Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Connect</h3>
          <div className="flex space-x-4">
            <Github className="text-gray-400 hover:text-white cursor-pointer" />
            <Linkedin className="text-gray-400 hover:text-white cursor-pointer" />
            <ExternalLink className="text-gray-400 hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} HirePortfolio Team. All rights reserved.
      </div>
    </div>
  </footer>
);

// ==========================================
// 3. MAIN APP LAYOUT
// ==========================================

export default function App() {
  const [activePage, setActivePage] = useState('portfolio');
  const [selectedMember, setSelectedMember] = useState(null);
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  
  const [activeRole, setActiveRole] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  const handleSelectMember = (member) => {
    setSelectedMember(member);
    setActivePage('profile_details');
    window.scrollTo(0,0);
  };
  
  const handleHireMember = (member) => {
    setSelectedMember(member);
    setActivePage('hire');
    window.scrollTo(0,0);
  };

  const handleTalentSearch = (role) => {
    // Map simplified role names if needed, or stick to direct match
    const roleMapping = {
      'Full Stack Developer': 'Full Stack',
      'Frontend Developer': 'Frontend',
      'Backend Engineer': 'Backend',
      'UI/UX Designer': 'UI/UX',
      'Product Manager': 'Product',
      'Data Analyst': 'Data'
    };
    
    setActiveRole(roleMapping[role] || 'All');
    setActivePage('portfolio');
    window.scrollTo(0,0);
  };

  const renderContent = () => {
    switch(activePage) {
      case 'home': return <PlaceholderPage title="Home Page" />;
      case 'portfolio': 
        return (
          <PortfolioGrid 
             isSidebarOpen={isSidebarOpen} 
             toggleSidebar={toggleSidebar}
             activeRole={activeRole}
             searchQuery={searchQuery}
             onSelectMember={handleSelectMember}
          />
        );
      case 'hire': return <HireTalentPage prefilledMember={selectedMember} onFindTalent={handleTalentSearch} />;
      case 'freelance': return <PlaceholderPage title="Freelance Hub" />;
      case 'login': return <LoginPage />;
      case 'profile_details': 
        return <MemberProfile baseMember={selectedMember} onHire={handleHireMember} onBack={() => setActivePage('portfolio')} />;
      default: 
        return (
          <PortfolioGrid 
             isSidebarOpen={isSidebarOpen} 
             toggleSidebar={toggleSidebar}
             activeRole={activeRole}
             searchQuery={searchQuery}
             onSelectMember={handleSelectMember}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col font-sans">
      <Navbar activePage={activePage} setActivePage={setActivePage} toggleSidebar={toggleSidebar} />
      
      {/* Flex container for Sidebar + Main Content */}
      <div className="flex flex-1 relative">
        {/* Sidebar Logic: Show standard sidebar for Portfolio/Home, minimal for Hire, hide for others */}
        {(activePage === 'portfolio' || activePage === 'home') && (
           <Sidebar 
              isOpen={isSidebarOpen} 
              toggle={toggleSidebar} 
              activeRole={activeRole}
              setActiveRole={setActiveRole}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              variant="default"
           />
        )}
        {activePage === 'hire' && (
           <Sidebar 
              isOpen={isSidebarOpen} 
              toggle={toggleSidebar} 
              activeRole={activeRole}
              setActiveRole={setActiveRole}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              variant="minimal"
           />
        )}
        
        {/* If sidebar is hidden (detail pages), content takes full width. If shown, flex-1 handles it. */}
        <div className="flex-1 w-full bg-gray-950">
           {renderContent()}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}