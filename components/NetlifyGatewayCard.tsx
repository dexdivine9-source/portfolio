"use client";

import { motion } from "framer-motion";
import { ExternalLink, Layers, Zap, Globe } from "lucide-react";

interface NetlifyGatewayCardProps {
  netlifyUrl: string;
}

const TAGS = [
  "Next.js Apps",
  "React SPAs",
  "MVPs",
  "API Experiments",
  "UI Showcases",
  "Live Demos",
];

export default function NetlifyGatewayCard({ netlifyUrl }: NetlifyGatewayCardProps) {
  return (
    <motion.a
      href={netlifyUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ scale: 1.015 }}
      className="group relative block w-full rounded-3xl overflow-hidden border border-neutral-800 hover:border-cyan-500/40 transition-all duration-300 shadow-2xl"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-neutral-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_50%,rgba(6,182,212,0.08),transparent)]" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6,182,212,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6,182,212,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Animated glow border on hover */}
      <div className="absolute inset-0 rounded-3xl ring-0 group-hover:ring-1 ring-cyan-500/20 transition-all duration-500" />

      <div className="relative z-10 grid md:grid-cols-2 gap-8 p-10 md:p-14 items-center min-h-[420px]">

        {/* Left — text content */}
        <div className="flex flex-col justify-center">
          {/* Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase w-fit">
            <Zap size={11} />
            Project Hub · Netlify
          </div>

          <h3 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-4 group-hover:text-cyan-50 transition-colors duration-300">
            View All My
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Live Projects →
            </span>
          </h3>

          <p className="text-neutral-400 leading-relaxed mb-8 max-w-sm">
            A curated library of live apps, MVPs, and experiments — all deployed and
            running in production. No screenshots. Real, clickable demos.
          </p>

          {/* CTA chip */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-cyan-500 text-neutral-950 font-bold text-sm w-fit group-hover:bg-cyan-400 transition-colors duration-200 shadow-lg shadow-cyan-500/20">
            <Globe size={16} />
            Open Project Library
            <ExternalLink size={14} />
          </div>
        </div>

        {/* Right — tag cloud + icon stack */}
        <div className="flex flex-col items-center justify-center gap-6">
          {/* Big icon */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-3xl bg-cyan-500/20 blur-2xl scale-150" />
            <div className="relative p-6 rounded-3xl bg-neutral-800/80 border border-neutral-700 group-hover:border-cyan-500/40 transition-colors duration-300">
              <Layers className="text-cyan-400" size={64} strokeWidth={1.5} />
            </div>
          </motion.div>

          {/* Tag cloud */}
          <div className="flex flex-wrap justify-center gap-2">
            {TAGS.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.3 }}
                className="px-3 py-1 text-xs font-semibold bg-neutral-800 border border-neutral-700 text-neutral-400 rounded-lg"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.a>
  );
}
