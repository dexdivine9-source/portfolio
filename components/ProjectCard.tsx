"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";

interface ProjectProps {
  name: string;
  description: string | null;
  tags: string[];
  repoUrl: string;
  demoUrl?: string | null;
  stars?: number;
}

export default function ProjectCard({
  name,
  description,
  tags,
  repoUrl,
  demoUrl,
  stars = 0,
}: ProjectProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -6 }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="group relative flex flex-col justify-between p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-cyan-500/50 transition-all duration-300 shadow-xl backdrop-blur-sm overflow-hidden"
    >
      {/* Subtle glow on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div>
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-200 capitalize">
            {name.replace(/-/g, " ")}
          </h3>
          {stars > 0 && (
            <span className="flex items-center gap-1 text-xs text-neutral-500">
              <Star size={12} className="text-amber-400 fill-amber-400" />
              {stars}
            </span>
          )}
        </div>

        <p className="text-neutral-400 text-sm mb-5 leading-relaxed line-clamp-2">
          {description || "A high-performance web application built with modern standards."}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {tags.filter(Boolean).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold bg-cyan-500/10 text-cyan-400 rounded-md border border-cyan-500/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-5">
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-xs font-semibold text-neutral-400 hover:text-white transition-colors"
        >
          <Github size={15} /> GitHub Repo
        </a>
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ExternalLink size={15} /> Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}
