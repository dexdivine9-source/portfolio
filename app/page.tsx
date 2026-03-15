"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import NetlifyGatewayCard from "@/components/NetlifyGatewayCard";
import {
  MessageCircle,
  Send,
  Mail,
  Linkedin,
  Twitter,
  Github,
  ArrowDown,
  Sparkles,
  Terminal,
  Cpu,
  Rocket,
  Globe,
} from "lucide-react";

// ─── YOUR NETLIFY HUB URL ─────────────────────────────────────────────────────
// Replace this with your actual Netlify profile or team URL, e.g.:
//   "https://app.netlify.com/teams/dexdivine9-source/overview"
const NETLIFY_URL = "https://app.netlify.com/teams/dexdivine9/projects";

// ─── Skills data ──────────────────────────────────────────────────────────────
const SKILLS = [
  { label: "React" },
  { label: "Next.js" },
  { label: "TypeScript" },
  { label: "Tailwind CSS" },
  { label: "Node.js" },
  { label: "UI/UX Design" },
  { label: "Prompt Engineering" },
  { label: "Framer Motion" },
  { label: "REST APIs" },
  { label: "Web3 Basics" },
  { label: "Git & GitHub" },
  { label: "Responsive Design" },
];

// ─── Animation variants ───────────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

// ─── Bento contact card data ──────────────────────────────────────────────────
const contactLinks = [
  {
    id: "whatsapp",
    href: "https://wa.me/2348080327610",
    label: "WhatsApp",
    sublabel: "Direct message for instant replies.",
    icon: MessageCircle,
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    hover: "hover:border-green-400/50",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-2",
    large: true,
  },
  {
    id: "email",
    href: "mailto:adeniyidivine34@gmail.com",
    label: "Email",
    sublabel: "Professional inquiries welcome.",
    icon: Mail,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    hover: "hover:border-blue-400/50",
    colSpan: "md:col-span-2",
    rowSpan: "",
    large: false,
  },
  {
    id: "telegram",
    href: "https://t.me/Divine_dex",
    label: "Telegram",
    sublabel: null,
    icon: Send,
    color: "text-sky-400",
    bg: "bg-sky-500/10",
    border: "border-sky-500/20",
    hover: "hover:border-sky-400/50",
    colSpan: "",
    rowSpan: "",
    large: false,
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/divine-adeniyi-5836633a1",
    label: "LinkedIn",
    sublabel: null,
    icon: Linkedin,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    hover: "hover:border-indigo-400/50",
    colSpan: "",
    rowSpan: "",
    large: false,
  },
  {
    id: "x",
    href: "https://x.com/dex_divine",
    label: "Follow on X",
    sublabel: "Thoughts on tech & engineering.",
    icon: Twitter,
    color: "text-white",
    bg: "bg-neutral-900",
    border: "border-neutral-700",
    hover: "hover:border-neutral-500",
    colSpan: "md:col-span-2",
    rowSpan: "",
    large: false,
  },
];

// ─── Grid background ──────────────────────────────────────────────────────────
function GridBackground() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(rgba(6,182,212,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(6,182,212,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    />
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function PortfolioPage() {
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.15], [0, -40]);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 overflow-x-hidden">

      {/* ════════════════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════════════════ */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6 text-center">
        <GridBackground />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_55%,rgba(6,182,212,0.09),transparent)] pointer-events-none" />

        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="relative z-10 flex flex-col items-center"
        >
          {/* Availability badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase"
          >
            <Sparkles size={12} />
            Available for opportunities
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 leading-none"
          >
            <span className="text-white">Adeniyi</span>{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Divine
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            <span className="text-neutral-300 font-medium">Software Engineer</span>
            <span className="text-neutral-600 mx-2">—</span>
            Building high-scale web applications with React, Next.js, and TypeScript.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <button
              onClick={scrollToProjects}
              className="px-8 py-4 rounded-full bg-cyan-500 text-neutral-950 font-bold text-sm tracking-wide hover:bg-cyan-400 active:scale-95 transition-all duration-200 shadow-lg shadow-cyan-500/20"
            >
              View My Work
            </button>
            <button
              onClick={scrollToContact}
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 font-semibold text-sm hover:border-neutral-600 hover:text-white transition-all duration-200"
            >
              Get in Touch
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-600"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SKILLS CLOUD
      ════════════════════════════════════════════════════════════════════ */}
      <section className="border-y border-neutral-900 py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xs text-cyan-500 font-semibold uppercase tracking-widest text-center mb-8"
          >
            Tech Stack &amp; Tools
          </motion.p>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {SKILLS.map((skill) => (
              <motion.span
                key={skill.label}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-sm font-semibold text-neutral-300 cursor-default hover:border-cyan-500/40 transition-colors duration-200"
              >
                <Terminal size={13} className="text-cyan-500" />
                {skill.label}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          MY JOURNEY
      ════════════════════════════════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-6 py-28">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-xs text-cyan-500 font-semibold uppercase tracking-widest mb-3">
              Background
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 flex items-center gap-3">
              <Cpu className="text-cyan-500 shrink-0" size={32} />
              The Journey
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-5">
              I started by mastering the fundamentals of the web — HTML, CSS, and JavaScript.
              Today I leverage{" "}
              <span className="text-neutral-200 font-medium">AI-assisted workflows</span> and
              modern tooling to ship high-performance applications at speed.
            </p>
            <p className="text-neutral-400 leading-relaxed mb-5">
              My focus is on bridging the gap between complex engineering and intuitive user
              experience — building products that feel effortless to use and are a pleasure to
              maintain under the hood.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              I&apos;m actively looking for{" "}
              <span className="text-cyan-400 font-medium">full-time roles</span> or{" "}
              <span className="text-cyan-400 font-medium">high-impact freelance projects</span>{" "}
              where I can contribute from day one.
            </p>
          </motion.div>

          {/* Stats panel */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: Rocket, value: "10+", label: "Projects shipped", color: "text-cyan-400" },
              { icon: Globe, value: "3+", label: "Years learning", color: "text-blue-400" },
              { icon: Terminal, value: "8+", label: "Technologies", color: "text-indigo-400" },
              { icon: Sparkles, value: "∞", label: "Curiosity", color: "text-amber-400" },
            ].map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="flex flex-col gap-3 p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 transition-colors"
                >
                  <Icon className={stat.color} size={24} />
                  <div>
                    <p className={`text-3xl font-black ${stat.color}`}>{stat.value}</p>
                    <p className="text-sm text-neutral-500 mt-0.5">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          NETLIFY GATEWAY  (replaces GitHub project gallery)
      ════════════════════════════════════════════════════════════════════ */}
      <section ref={projectsRef} id="projects" className="max-w-6xl mx-auto px-6 py-28 border-t border-neutral-900">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-xs text-cyan-500 font-semibold uppercase tracking-widest mb-3">
            Live Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Featured Engineering
          </h2>
        </motion.div>

        <NetlifyGatewayCard netlifyUrl={NETLIFY_URL} />

        {/* Supporting links row */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center gap-4 mt-6"
        >
          <a
            href="https://github.com/dexdivine9-source"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 text-sm font-medium hover:border-neutral-600 hover:text-white transition-all duration-200"
          >
            <Github size={15} />
            Also on GitHub
          </a>
          <span className="text-neutral-700 text-sm">
            All projects are live, deployed, and clickable.
          </span>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          CONTACT BENTO GRID
      ════════════════════════════════════════════════════════════════════ */}
      <section ref={contactRef} id="contact" className="max-w-6xl mx-auto px-6 py-28 border-t border-neutral-900">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-xs text-cyan-500 font-semibold uppercase tracking-widest mb-3">
            Let&apos;s Build Together
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Connect &amp; Collaborate
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[170px] gap-4">
          {contactLinks.map((card) => {
            const Icon = card.icon;
            const cls = [
              "group relative rounded-3xl border transition-all duration-300",
              card.bg,
              card.border,
              card.hover,
              card.colSpan,
              card.rowSpan,
            ]
              .filter(Boolean)
              .join(" ");

            return (
              <motion.a
                key={card.id}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 0.98 }}
                className={cls}
              >
                {card.large ? (
                  <div className="flex flex-col justify-between h-full p-8">
                    <Icon
                      className={`${card.color} group-hover:scale-110 transition-transform duration-300`}
                      size={52}
                    />
                    <div>
                      <p className={`${card.color} font-bold text-2xl mb-1`}>{card.label}</p>
                      {card.sublabel && (
                        <p className="text-neutral-400 text-sm">{card.sublabel}</p>
                      )}
                    </div>
                  </div>
                ) : card.colSpan === "md:col-span-2" ? (
                  <div className="flex items-center justify-between h-full px-8">
                    <div>
                      <p className={`${card.color} font-bold text-xl mb-1`}>{card.label}</p>
                      {card.sublabel && (
                        <p className="text-neutral-400 text-sm">{card.sublabel}</p>
                      )}
                    </div>
                    <Icon
                      className={`${card.color} group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}
                      size={36}
                    />
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center gap-3 h-full">
                    <Icon
                      className={`${card.color} group-hover:scale-110 transition-transform duration-300`}
                      size={32}
                    />
                    <span className={`${card.color} font-bold text-sm`}>{card.label}</span>
                  </div>
                )}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
              </motion.a>
            );
          })}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          FOOTER
      ════════════════════════════════════════════════════════════════════ */}
      <footer className="border-t border-neutral-900 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-600">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-neutral-400 font-medium">Adeniyi Divine</span>
          </p>
          <p className="font-mono text-xs">
            <span className="text-cyan-500">{">"}</span> Built with Next.js 15 &amp; Framer Motion
          </p>
        </div>
      </footer>
    </main>
  );
}
