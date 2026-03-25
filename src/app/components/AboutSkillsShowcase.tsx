import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import type { ComponentType } from 'react';
import { Braces, Layers3, Server, Workflow } from 'lucide-react';

type SkillTrack = {
  name: string;
  level: number;
};

type SkillDomain = {
  id: string;
  label: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  summary: string;
  skills: SkillTrack[];
  tags: string[];
};

const domains: SkillDomain[] = [
  {
    id: 'frontend',
    label: 'Frontend Systems',
    icon: Layers3,
    summary: 'Building responsive interfaces with reusable React components, clear state structure, and user-focused interaction patterns.',
    skills: [
      { name: 'React + TypeScript', level: 85 },
      { name: 'UI Architecture', level: 95 },
      { name: 'Animation & Motion', level: 86 },
      { name: 'Accessibility', level: 84 },
    ],
    tags: ['Design Systems', 'Tailwind', 'Framer Motion', 'Vite'],
  },
  {
    id: 'backend',
    label: 'Backend Platforms',
    icon: Server,
    summary: 'Implementing APIs and business logic with practical structure, validation, and integration-ready responses.',
    skills: [
      { name: 'Django - Python', level: 85 },
      { name: 'Python Services', level: 90 },
      { name: 'Auth + Security', level: 83 },
      { name: 'REST API Design', level: 89 },
    ],
    tags: ['PostgreSQL', 'FastAPI', 'RDBMS', 'JWT'],
  },
  {
    id: 'delivery',
    label: 'Delivery Workflow',
    icon: Workflow,
    summary: 'Following sprint-based delivery with review-ready pull requests, bug fixes, and stable release support.',
    skills: [
      { name: 'Git Workflow', level: 80 },
      { name: 'Testing Strategy', level: 82 },
      { name: 'Release Management', level: 80 },
      { name: 'Performance Audits', level: 84 },
    ],
    tags: ['Netlify', 'Render', 'Monitoring', 'Release Notes'],
  },
  {
    id: 'core',
    label: 'Engineering Core',
    icon: Braces,
    summary: 'Problem solving with readable code, debugging discipline, and continuous skill growth through real project work.',
    skills: [
      { name: 'System Thinking', level: 88 },
      { name: 'Code Quality', level: 92 },
      { name: 'Debugging', level: 90 },
      { name: 'Team Collaboration', level: 89 },
    ],
    tags: ['Architecture', 'Refactoring', 'Documentation', 'Mentoring'],
  },
];

export function AboutSkillsShowcase() {
  const [activeDomain, setActiveDomain] = useState(domains[0]);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary tracking-[0.3em] uppercase text-sm">Capabilities</span>
          <h2 className="text-5xl mt-4">Advanced Skills Matrix</h2>
          <p className="text-secondary mt-4 max-w-3xl mx-auto">
            Developer capability map based on frontend implementation, backend integration, and real-world delivery practice.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-7">
          <div className="lg:col-span-4 rounded-3xl border border-primary/20 bg-card/80 p-4 sm:p-5 backdrop-blur-sm">
            <div className="space-y-3">
              {domains.map((domain) => {
                const isActive = activeDomain.id === domain.id;
                return (
                  <button
                    key={domain.id}
                    onClick={() => setActiveDomain(domain)}
                    className={`w-full rounded-2xl border px-4 py-4 text-left transition-all duration-300 ${
                      isActive
                        ? 'border-primary bg-primary/10 shadow-[0_0_24px_rgba(201,161,43,0.2)]'
                        : 'border-border bg-background/70 hover:border-primary/35'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="rounded-xl bg-primary/15 p-2">
                          <domain.icon className="text-primary" size={18} />
                        </div>
                        <span>{domain.label}</span>
                      </div>
                      <span className={`h-2.5 w-2.5 rounded-full ${isActive ? 'bg-primary' : 'bg-border'}`} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
            <motion.article
                key={activeDomain.id}
                initial={{ opacity: 0, y: 12, scale: 0.99 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.99 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-3xl border border-primary/20 bg-card p-6 sm:p-8 shadow-lg"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
                />
                <div className="relative">
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div>
                      <h3 className="text-4xl mb-2">{activeDomain.label}</h3>
                      <p className="text-secondary max-w-2xl">{activeDomain.summary}</p>
                    </div>
                    <div className="rounded-xl border border-primary/30 bg-primary/10 p-3">
                      <activeDomain.icon className="text-primary" size={24} />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    {activeDomain.skills.map((skill, index) => (
                      <div key={skill.name} className="rounded-xl border border-border bg-background/70 p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-foreground">{skill.name}</span>
                          <span className="text-primary">{skill.level}%</span>
                        </div>
                        <div className="h-2.5 rounded-full bg-muted overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 0.9, delay: index * 0.08, ease: 'easeOut' }}
                            className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {activeDomain.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-sm text-primary">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
