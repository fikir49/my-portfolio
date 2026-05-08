"use client";

import { motion } from 'framer-motion';
import type { Project } from '@/data/projects';
import { AcademiaFlowAnimation } from './AcademiaFlowAnimation';
import { FiscalAProMockup } from './FiscalAProMockup';

interface ProjectCardProps {
  project: Project;
  index: number;
  onDeepDive?: (project: Project) => void;
}

export function ProjectCard({ project, index, onDeepDive }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: project.id === 'fiscal-a-pro' ? 60 : 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{
        y: -8,
        transition: { duration: 0.2 }
      }}
      className="group relative overflow-hidden rounded-3xl bg-black/20 border border-white/10 shadow-[0_30px_80px_-50px_rgba(0,255,65,0.35)] backdrop-blur-xl transition-all duration-300 hover:border-tech-green hover:shadow-[0_35px_110px_-50px_rgba(0,255,65,0.5)]"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-tech-green/5 to-tech-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-text-primary group-hover:text-tech-green transition-colors duration-200">
              {project.title}
            </h3>
            <p className="text-sm text-text-secondary mt-1">
              {project.innovation}
            </p>
          </div>
          {project.deepDive && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onDeepDive?.(project)}
              className="px-3 py-1 text-xs bg-white/10 text-tech-cyan border border-white/15 rounded-full hover:bg-tech-cyan hover:text-tech-black transition-colors duration-200"
            >
              Deep Dive
            </motion.button>
          )}
        </div>

        {project.id === 'academia-vault' && <AcademiaFlowAnimation />}
        {project.id === 'fiscal-a-pro' && <FiscalAProMockup />}

        {/* Description */}
        <p className="text-text-secondary mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Challenge */}
        <div className="mb-4">
          <p className="text-xs text-text-muted uppercase tracking-wide mb-1">Challenge Solved</p>
          <p className="text-sm text-text-primary">{project.challenge}</p>
        </div>

        {/* Tech Stack */}
        <div>
          <p className="text-xs text-text-muted uppercase tracking-wide mb-2">Tech Stack</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs bg-white/10 text-tech-cyan border border-white/10 rounded-full hover:bg-tech-cyan hover:text-tech-black transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Hover indicator */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg className="w-5 h-5 text-tech-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

