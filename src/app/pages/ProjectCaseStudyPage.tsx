import { Link, useParams } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { projects } from '../data/projects';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function ProjectCaseStudyPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="min-h-[70vh] pt-36 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl mb-5">Case Study Not Found</h1>
          <p className="text-secondary">This project link is invalid or the case study was not added yet.</p>
          <Link
            to="/projects"
            className="inline-flex mt-10 bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-accent transition-all"
          >
            Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft size={18} />
          Back to Projects
        </Link>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-card rounded-2xl overflow-hidden border border-border shadow-lg"
          >
            <ImageWithFallback src={project.image} alt={project.title} className="w-full h-[420px] object-cover" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <span className="text-primary tracking-[0.25em] uppercase text-sm">{project.category} Case Study</span>
            <h1 className="text-5xl mt-4">{project.title}</h1>
            <p className="text-secondary mt-5 text-lg leading-relaxed">{project.description}</p>

            <div className="flex flex-wrap gap-2 mt-6">
              {project.tech.map((tech) => (
                <span key={tech} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-3 mt-8">
              <button
                onClick={() => window.open(project.liveUrl, '_blank')}
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-accent transition-all"
              >
                Live Demo
              </button>
              <button
                onClick={() => window.open(project.githubUrl, '_blank')}
                className="bg-card border border-primary text-foreground px-6 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
              >
                GitHub
              </button>
            </div>
          </motion.div>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-2xl border border-primary/30 bg-background/95 p-7 sm:p-9 shadow-[0_10px_30px_rgba(201,161,43,0.08)] hover:shadow-[0_18px_44px_rgba(201,161,43,0.18)] transition-all duration-500"
        >
          <div className="mb-8">
            <span className="inline-flex rounded-full bg-primary/10 text-primary px-4 py-2 text-sm">
              Case Study Breakdown
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl mb-3 text-primary">The Challenge</h2>
              <p className="text-secondary text-base leading-relaxed">{project.caseStudy.challenge}</p>
            </div>
            <div>
              <h2 className="text-3xl mb-3 text-primary">The Approach</h2>
              <p className="text-secondary text-base leading-relaxed">{project.caseStudy.solution}</p>
            </div>
          </div>

          <div className="my-10 h-px bg-border" />

          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl mb-4 text-primary">Methodologies &amp; Tools</h3>
              <div className="flex flex-wrap gap-2">
                {[...project.tech, ...project.caseStudy.architecture].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-primary/30 bg-transparent px-3 py-1 text-secondary text-sm hover:text-primary hover:border-primary/60 transition-colors duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl mb-4 text-primary">Key Results</h3>
              <ul className="space-y-3">
                {project.caseStudy.outcomes.map((metric) => (
                  <li key={metric.label} className="text-secondary text-base flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>
                      {metric.value} {metric.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>
      </div>
    </section>
  );
}
