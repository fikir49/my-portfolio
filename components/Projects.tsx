"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { projects, type Project } from '@/data/projects';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleDeepDive = (project: Project) => {
    setSelectedProject(project);
  };

  const closeDeepDive = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-text-primary">
            Projects
          </h2>
          <p className="text-text-secondary mb-12 max-w-2xl">
            Featured powerhouse systems: Academia Vault for decentralized P2P document security, and FiscalAPro for AI-driven financial sovereignty.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              onDeepDive={handleDeepDive}
            />
          ))}
        </div>
      </div>

      {/* Deep Dive Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-tech-black/80 backdrop-blur-sm"
            onClick={closeDeepDive}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="max-w-4xl w-full max-h-[80vh] overflow-y-auto bg-tech-surface border border-tech-border rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-tech-green">
                   {selectedProject?.deepDive?.title}
                  </h3>
                  <button
                    onClick={closeDeepDive}
                    className="text-text-secondary hover:text-text-primary transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="prose prose-invert max-w-none">
                  <div className="text-text-primary whitespace-pre-line leading-relaxed">
                   {selectedProject?.deepDive?.content}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-tech-border">
                  <div className="flex items-center gap-4">
                    <div className="flex flex-wrap gap-2">
                      {selectedProject?.tech?.map((tech: string) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm bg-tech-dark text-tech-cyan border border-tech-border rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
