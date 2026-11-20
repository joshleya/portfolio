import { motion } from 'framer-motion';
import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  Copy,
  GraduationCap,
  Github,
  Heart,
  Mail,
  Menu,
  X,
  MoveUpRight,
  Check,
} from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { ProjectDetails, type Project } from './ProjectDetails';
import { RotatingElement } from './RotatingElement';

const emailAddress = 'joshlinmariyaleya.27csa@licet.ac.in';
const githubProfile = 'https://github.com/joshleya';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

const projects: Project[] = [
  {
    name: 'Jenuvan',
    type: 'BROWSER-BASED AUDIO RECORDING EXTENSION',
    description:
      'A Chrome extension designed to capture audio from the active browser tab and save recordings for later use.',
    theme: 'project-red',
    mark: 'J',
    technologies: [
      'JavaScript',
      'HTML',
      'CSS',
      'Chrome Extension Manifest V3',
      'Chrome Tab Capture API',
      'MediaRecorder API',
      'Web Audio API',
      'Chrome Storage API',
    ],
    highlights: [
      'Captures audio from the active browser tab.',
      'Uses an offscreen document to manage audio recording.',
      'Records audio in WebM format using the MediaRecorder API.',
      'Provides start and stop recording controls, then automatically downloads recordings.',
    ],
    contribution:
      "Worked on the browser extension's recording workflow, including tab audio capture, recording controls, audio processing utilities, and file download functionality.",
    githubUrl: 'https://github.com/joshleya/jenuvan',
  },
  {
    name: 'Marketing Analytics Platform',
    type: 'INDUSTRIAL SALES ANALYTICS DASHBOARD',
    description:
      'A full-stack analytics platform that transforms industrial sales data from Excel spreadsheets into interactive dashboards and business reports.',
    theme: 'project-indigo',
    mark: 'R',
    technologies: [
      'React 19',
      'TypeScript',
      'Node.js',
      'Express.js',
      'Recharts',
      'SheetJS (XLSX)',
      'Tailwind CSS',
    ],
    highlights: [
      'Uploads Excel data and parses, cleans, and validates it.',
      'Interactive sales analysis across customers, products, plants, and segments.',
      'Monthly, quarterly, and financial-year sales trends.',
      'Applies mentor-provided rules, including L2 exclusion, GRN-based financial-year calculation, and sales conversion to crores.',
      'Generates rule-based business insights and exports reports to CSV or Excel.',
    ],
    contribution:
      'Developed dashboard visualizations and data-processing workflows based on requirements provided by the sales department mentor. Refined the application through feedback and validated its outputs against the specified business rules.',
    githubUrl: 'https://github.com/joshleya/Marketing-Analytics-Platform',
    liveUrl: 'https://marketing-analytics-platform-two.vercel.app/',
  },
  {
    name: 'Athelink',
    type: 'SPORTS NETWORKING MOBILE APPLICATION',
    description:
      'A sports networking application concept designed to connect athletes and coaches through profiles, community interactions, and sports-related opportunities.',
    theme: 'project-blue',
    mark: 'A',
    technologies: [
      'React Native',
      'Expo',
      'JavaScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'Axios',
      'React Navigation',
    ],
    highlights: [
      'Developed mobile UI for onboarding, registration, and login prototype workflows.',
      'Designed athlete profile setup and sports dashboard screens.',
      'Built community, user search, post creation, messaging, and opportunities interfaces.',
      'Integrated selected frontend workflows with backend REST APIs.',
      'Implemented a basic MongoDB-backed registration and profile workflow as part of the team project.',
      'Coach profiles, live event/trial management, persistent messaging, and a fully integrated community feed remain unfinished or demo-only.',
    ],
    contribution:
      'Primarily responsible for UI/UX design and React Native frontend development as part of a four-member hackathon team. Developed application screens, navigation, profile workflows, and integrated selected frontend features with available backend APIs.',
    githubUrl: 'https://github.com/joshleya/athelink',
  },
  {
    name: 'Serene',
    type: "WOMEN'S SAFETY AND VOLUNTEER COORDINATION PLATFORM",
    description:
      'A React-based safety coordination prototype connecting people requesting assistance with registered volunteers through SOS requests and location-based coordination.',
    theme: 'project-rose',
    mark: 'S',
    technologies: [
      'React',
      'JavaScript',
      'Firebase Authentication',
      'Firebase Realtime Database',
      'Leaflet',
      'React Leaflet',
      'OpenStreetMap',
    ],
    highlights: [
      'Volunteer registration, login, and approval workflows.',
      'SOS requests with real-time database updates and browser geolocation for user and volunteer locations.',
      'Volunteer availability, SOS acceptance, and safe-code-based rescue completion.',
      'Admin dashboard for volunteer management and incident monitoring.',
      'Interactive maps for location visualization; distance and ETA are approximate estimates.',
      'A prototype, not a production emergency-response system; it does not integrate with police, emergency services, SMS alerts, or external dispatch.',
      'The admin gate uses hardcoded client-side credentials and is not secure role-based authentication.',
    ],
    contribution:
      'Worked on the React application and its safety coordination workflows, integrating Firebase Authentication and Realtime Database with location-aware UI components.',
    githubUrl: 'https://github.com/joshleya/serene',
  },
];

const skillGroups = [
  {
    category: 'Programming',
    skills: [
      { name: 'Java', status: 'Learning' },
      { name: 'JavaScript', status: 'Used' },
      { name: 'TypeScript', status: 'Used' },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML', status: 'Used' },
      { name: 'CSS', status: 'Used' },
      { name: 'React', status: 'Used' },
      { name: 'Tailwind CSS', status: 'Used' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', status: 'Used' },
      { name: 'Express', status: 'Used' },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'MongoDB', status: 'Used' },
      { name: 'Firebase', status: 'Used' },
      { name: 'SQL', status: 'Learning' },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', status: 'Used' },
      { name: 'GitHub', status: 'Used' },
      { name: 'VS Code', status: 'Used' },
      { name: 'Vite', status: 'Used' },
    ],
  },
];

function SectionHeading({
  eyebrow,
  title,
  detail,
}: {
  eyebrow: string;
  title: ReactNode;
  detail: string;
}) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-[-.045em] text-white sm:text-5xl md:text-6xl">
        {title}
      </h2>
      <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">{detail}</p>
    </div>
  );
}

function PortfolioNav({ onNavigate }: { onNavigate: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuToggleRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-8 sm:pt-6">
      <nav className="nav-shell mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-3 sm:px-6">
        <a href="#home" onClick={onNavigate} className="group flex items-center gap-3">
          <span className="monogram grid h-9 w-9 place-items-center rounded-full font-display text-sm font-bold text-white">
            JL
          </span>
          <span className="text-left">
            <span className="block text-xs font-semibold tracking-[.16em] text-white">JOSHLIN LEYA</span>
            <span className="mt-0.5 block text-[9px] tracking-[.2em] text-slate-500">PORTFOLIO · 2026</span>
          </span>
        </a>
        <div className="hidden items-center gap-1 xl:flex">
          {sections.map((section) => (
            <a
              href={`#${section.id}`}
              key={section.id}
              onClick={onNavigate}
              className="nav-link"
            >
              {section.label}
            </a>
          ))}
        </div>
        <a
          href={`mailto:${emailAddress}`}
          className="hidden items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-semibold text-slate-950 transition hover:bg-[#ff6a73] sm:flex"
        >
          Let&apos;s talk <ArrowUpRight size={14} />
        </a>
        <button
          className={`menu-toggle inline-grid h-11 w-11 shrink-0 place-items-center rounded-full border text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff7d85] xl:hidden ${
            menuOpen ? 'menu-toggle-open' : ''
          }`}
          ref={menuToggleRef}
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          aria-controls="portfolio-mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} strokeWidth={2.25} /> : <Menu size={22} strokeWidth={2.25} />}
        </button>
      </nav>
      {menuOpen && (
        <nav
          id="portfolio-mobile-navigation"
          aria-label="Mobile navigation"
          className="nav-mobile mx-auto max-w-7xl rounded-3xl p-4"
        >
          <div className="grid grid-cols-2 gap-2">
            {sections.map((section) => (
              <a
                href={`#${section.id}`}
                key={section.id}
                onClick={() => {
                  onNavigate();
                  setMenuOpen(false);
                }}
                className="rounded-2xl px-4 py-3 text-left text-sm text-slate-300 hover:bg-white/5"
              >
                {section.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" data-portfolio-section className="hero-section relative flex min-h-screen items-center">
      <div className="web-graphic pointer-events-none absolute inset-0" aria-hidden="true">
        <svg viewBox="0 0 900 900" fill="none" className="absolute -right-52 top-12 h-[min(100vw,900px)] w-[min(100vw,900px)] opacity-60">
          <circle cx="450" cy="450" r="410" />
          <circle cx="450" cy="450" r="320" />
          <circle cx="450" cy="450" r="220" />
          <circle cx="450" cy="450" r="110" />
          <path d="M450 40v820M40 450h820M160 160l580 580M740 160 160 740M300 55l150 395 150-395M55 300l395 150-395 150M845 300 450 450l395 150M300 845l150-395 150 395" />
        </svg>
      </div>
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-6 pb-16 pt-32 sm:px-10 lg:grid-cols-[1.2fr_.8fr] lg:px-16">
        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-eyebrow"
          >
            <span className="status-dot" /> COMPUTER SCIENCE · 2023—2027
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-7 max-w-4xl font-display text-[clamp(3.35rem,9vw,8.5rem)] font-semibold leading-[.84] tracking-[-.075em] text-white"
          >
            Joshlin
            <br />
            <span className="hero-name-accent">Mariya Leya.</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <span className="hero-tag">COMPUTER SCIENCE ENGINEERING STUDENT</span>
            <span className="h-px w-8 bg-white/20" />
            <span className="text-sm text-slate-400">Aspiring Software Engineer</span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38 }}
            className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg"
          >
            “I enjoy understanding how things work, building applications and experimenting with
            ideas that solve practical problems.”
          </motion.p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
            Currently exploring software engineering, AI-powered applications and the intersection
            of technology and user experience.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="button-primary">
              Explore My Work <ArrowDown size={15} />
            </a>
            <a href="#contact" className="button-secondary">
              Contact Me <MoveUpRight size={15} />
            </a>
            <a
              href={githubProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary"
            >
              GitHub <Github size={15} />
            </a>
          </div>
          <div className="mt-14 flex items-center gap-3 text-xs tracking-[.15em] text-slate-500">
            <span className="h-px w-10 bg-[#f04452]" /> SCROLL TO EXPLORE
          </div>
        </div>
        <div className="relative z-10 flex min-h-[300px] items-center justify-center lg:min-h-[500px]">
          <div className="orb-orbit orbit-one" aria-hidden="true" />
          <div className="orb-orbit orbit-two" aria-hidden="true" />
          <RotatingElement />
          <div className="absolute bottom-8 right-1 text-[10px] leading-5 tracking-[.2em] text-slate-500">
            INTERACTIVE
            <br />
            WEB STUDY / 01
          </div>
          <span className="absolute left-3 top-1/4 h-2 w-2 rounded-full bg-[#f04452] shadow-[0_0_20px_#f04452]" />
          <span className="absolute bottom-1/4 right-5 h-2 w-2 rounded-full bg-[#4b8ef7] shadow-[0_0_20px_#4b8ef7]" />
        </div>
      </div>
      <div className="hero-index pointer-events-none absolute bottom-8 right-8 hidden font-mono text-[10px] tracking-[.25em] text-slate-600 lg:block">
        01 / 08
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" data-portfolio-section className="section-wrap">
      <div className="section-grid">
        <div>
          <SectionHeading
            eyebrow="01 / ABOUT ME"
            title={<>I learn best by making things.</>}
            detail="I’m a Computer Science Engineering student (2023–2027) interested in both frontend and backend development."
          />
          <p className="max-w-2xl text-sm leading-8 text-slate-400 sm:text-base">
            I enjoy working with Java, software engineering, and problem solving. Through projects,
            I’ve built with React, Node.js, and databases, and I’m interested in AI-powered
            applications and API integration. Practical implementation and experimentation are how
            I learn: I try an idea, see what works, and improve it from there.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          className="about-card relative overflow-hidden rounded-[2rem] p-8 sm:p-10"
        >
          <div className="about-card-mark" aria-hidden="true">JL</div>
          <p className="section-eyebrow">CURRENT CHAPTER</p>
          <h3 className="mt-5 max-w-sm font-display text-3xl font-semibold leading-tight tracking-[-.04em] sm:text-4xl">
            Frontend, backend, and the space between technology and people.
          </h3>
          <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-5 text-xs text-slate-400">
            <span>COMPUTER SCIENCE ENGINEERING</span>
            <span className="text-[#ff6871]">2023—2027</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Projects({
  onSelectProject,
}: {
  onSelectProject: (project: Project, trigger: HTMLButtonElement) => void;
}) {
  return (
    <section id="projects" data-portfolio-section className="section-wrap">
      <SectionHeading
        eyebrow="02 / SELECTED PROJECTS"
        title={<>Projects built around real questions and practical learning.</>}
        detail="Open a project to see what it does, the technologies involved, and my contribution."
      />
      <div className="projects-grid grid gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className={`project-card ${project.theme} group relative flex min-h-[310px] flex-col overflow-hidden rounded-[1.75rem] p-7 sm:p-9`}
          >
            <button
              type="button"
              onClick={(event) => onSelectProject(project, event.currentTarget)}
              aria-haspopup="dialog"
              aria-label={`View details for ${project.name}`}
              className="relative z-10 flex min-h-[254px] w-full flex-1 flex-col cursor-pointer text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff7d85]"
            >
              <span className="flex items-center justify-between">
                <span className="max-w-[72%] text-[10px] font-semibold leading-5 tracking-[.22em] text-slate-400">
                  {project.type}
                </span>
                <span className="text-xs font-mono text-slate-500">VIEW DETAILS ↗</span>
              </span>
              <span className="project-card-art" aria-hidden="true">
                <span>{project.mark}</span>
              </span>
              <span className="mt-16 block max-w-md">
                <span className="block font-display text-3xl font-semibold tracking-[-.045em] sm:text-4xl">
                  {project.name}
                </span>
                <span className="mt-3 block max-w-sm text-sm leading-6 text-slate-400">{project.description}</span>
              </span>
              <span className="mt-auto flex flex-wrap gap-2 pt-6 pr-12">
                {project.technologies.slice(0, 3).map((technology) => (
                  <span key={technology} className="tech-chip">{technology}</span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="tech-chip">+{project.technologies.length - 3}</span>
                )}
              </span>
            </button>
            <a
              href="#experience"
              aria-label={`Continue from ${project.name} to the Experience section`}
              title="Continue to Experience"
              className="project-card-next absolute bottom-7 right-7 z-20 grid h-10 w-10 place-items-center rounded-full border border-white/10 text-slate-300 transition hover:-translate-y-1 hover:translate-x-1 hover:border-white/30 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff7d85] sm:right-9"
            >
              <ArrowUpRight size={16} />
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" data-portfolio-section className="section-wrap">
      <div className="section-grid">
        <div>
          <SectionHeading
            eyebrow="03 / EXPERIENCE"
            title={<>Internship project work.</>}
            detail="My internship experience at Rane Madras Limited centered on a marketing analytics platform for the sales team."
          />
        </div>
        <div className="experience-note">
          <div className="experience-icon"><Braces size={20} /></div>
          <p className="section-eyebrow">RANE MADRAS LIMITED</p>
          <h3 className="mt-4 font-display text-2xl font-semibold tracking-[-.03em]">
            Marketing Analytics Platform
          </h3>
          <ul className="experience-list mt-6 space-y-4">
            <li>Clarified the dashboard requirements with my sales department mentor.</li>
            <li>Worked with Excel sales data and implemented visual reports for monthly, customer-wise, and product-wise analysis.</li>
            <li>Applied business rules supplied by my mentor rather than defining them independently.</li>
            <li>Improved the application based on feedback, then tested the output against the requirements.</li>
          </ul>
          <div className="mt-7 flex flex-wrap gap-2 border-t border-white/10 pt-5">
            {['React', 'TypeScript', 'Node.js', 'Express', 'Excel', 'Recharts'].map((technology) => (
              <span className="tech-chip" key={technology}>{technology}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" data-portfolio-section className="section-wrap">
      <SectionHeading
        eyebrow="04 / TECHNICAL SKILLS"
        title={<>Tools and technologies I’m building with.</>}
        detail="“Used” means I’ve applied it in the projects described here; “Learning” marks areas I’m actively developing."
      />
      <div className="skills-board">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.category}>
            <h3>{group.category}</h3>
            <div className="skill-list">
              {group.skills.map((skill) => (
                <span className="skill-item" key={skill.name}>
                  {skill.name}
                  <span className={`skill-status ${skill.status === 'Learning' ? 'skill-learning' : ''}`}>
                    {skill.status}
                  </span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-5 text-xs leading-6 text-slate-500">
        Also used in project work: Recharts and Excel data processing.
      </p>
    </section>
  );
}

function Education() {
  return (
    <section id="education" data-portfolio-section className="section-wrap">
      <SectionHeading
        eyebrow="05 / EDUCATION"
        title={<>The foundation I’m building on.</>}
        detail="A snapshot of my current academic journey."
      />
      <div className="education-card flex flex-col gap-8 rounded-[1.75rem] p-7 sm:flex-row sm:items-center sm:justify-between sm:p-10">
        <div className="flex items-start gap-5">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#f04452]/10 text-[#ff737c]">
            <GraduationCap size={24} />
          </span>
          <div>
            <p className="section-eyebrow">UNDERGRADUATE STUDIES</p>
            <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-.03em] sm:text-3xl">
              Bachelor of Engineering — Computer Science and Engineering
            </h3>
            <p className="mt-2 text-sm text-slate-400">2023 — 2027</p>
          </div>
        </div>
        <div className="sm:border-l sm:border-white/10 sm:pl-10">
          <p className="section-eyebrow">CURRENT CGPA</p>
          <p className="mt-2 font-display text-5xl font-semibold tracking-[-.06em] text-white">
            8.34<span className="text-[#ff6871]">.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  const activities = [
    {
      label: 'She Forum Girls Club',
      detail: 'Coordinator',
    },
    {
      label: 'College events',
      detail: 'Participation in college events and activities',
    },
    {
      label: 'Hackathons',
      detail: 'Team project experience, including Athelink',
    },
    {
      label: 'Software projects',
      detail: 'Academic and personal project work',
    },
  ];

  return (
    <section id="achievements" data-portfolio-section className="section-wrap">
      <SectionHeading
        eyebrow="06 / ACHIEVEMENTS"
        title={<>Activities beyond the coursework.</>}
        detail="A few genuine activities and experiences that have been part of my student journey."
      />
      <div className="activity-list">
        {activities.map((activity, index) => (
          <div className="activity-row" key={activity.label}>
            <span className="font-mono text-xs text-[#ff7d85]">0{index + 1}</span>
            <h3>{activity.label}</h3>
            <p>{activity.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'error'>('idle');

  const copyEmail = async () => {
    try {
      if (!navigator.clipboard) throw new Error('Clipboard access is unavailable in this browser.');
      await navigator.clipboard.writeText(emailAddress);
      setCopyStatus('copied');
    } catch {
      setCopyStatus('error');
    }
  };

  return (
    <section id="contact" data-portfolio-section className="contact-section relative overflow-hidden">
      <div className="contact-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
        <p className="section-eyebrow">07 / CONTACT</p>
        <h2 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[.95] tracking-[-.06em] sm:text-7xl">
          Let&apos;s talk
          <br />
          <span className="hero-name-accent">about what&apos;s next.</span>
        </h2>
        <p className="mt-6 max-w-xl text-base leading-7 text-slate-400">
          For internship opportunities, project conversations, or a quick hello, email is the best way to reach me.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${emailAddress}`}
            className="button-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#ff7d85]"
          >
            <Mail size={16} /> {emailAddress} <ArrowUpRight size={15} />
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="button-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#ff7d85]"
            aria-label="Copy email address"
          >
            {copyStatus === 'copied' ? <Check size={15} /> : <Copy size={15} />}
            {copyStatus === 'copied' ? 'Email copied' : 'Copy email'}
          </button>
          <a
            href={githubProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="button-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#ff7d85]"
          >
            <Github size={16} /> GitHub <ArrowUpRight size={15} />
          </a>
        </div>
        <p aria-live="polite" role={copyStatus === 'error' ? 'alert' : 'status'} className="mt-3 min-h-5 text-sm text-slate-400">
          {copyStatus === 'error'
            ? 'Could not copy automatically. You can select and copy the email address above.'
            : copyStatus === 'copied'
              ? 'Email address copied to clipboard.'
              : ''}
        </p>
      </div>
    </section>
  );
}

function PortfolioFooter() {
  return (
    <footer className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/10 px-6 py-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
      <span>© {new Date().getFullYear()} Joshlin Mariya Leya</span>
      <span className="inline-flex items-center gap-2">Made with curiosity <Heart size={12} className="text-[#f04452]" /></span>
      <button
        type="button"
        onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
        className="inline-flex items-center gap-2 text-slate-400 hover:text-white"
      >
        Back to top <ArrowDown size={13} className="rotate-180" />
      </button>
    </footer>
  );
}

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const projectTriggerRef = useRef<HTMLButtonElement | null>(null);
  const openProject = (project: Project, trigger: HTMLButtonElement) => {
    projectTriggerRef.current = trigger;
    setSelectedProject(project);
  };
  const closeProject = useCallback(() => {
    setSelectedProject(null);
    requestAnimationFrame(() => projectTriggerRef.current?.focus());
  }, []);

  return (
    <>
      <PortfolioNav onNavigate={() => setSelectedProject(null)} />
      <main>
        <Hero />
        <About />
        <Projects onSelectProject={openProject} />
        <Experience />
        <Skills />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <PortfolioFooter />
      <ProjectDetails project={selectedProject} onClose={closeProject} />
    </>
  );
}
