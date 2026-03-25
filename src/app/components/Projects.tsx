  import { motion } from 'motion/react';
  import { ExternalLink, Github, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
  import { Link } from 'react-router';
  import { useEffect, useMemo, useState } from 'react';
  import { ImageWithFallback } from './figma/ImageWithFallback';
  import { projectCategories, projects, type ProjectCategory } from '../data/projects';

  interface ProjectsProps {
    limit?: number;
    showViewAll?: boolean;
    enableFilters?: boolean;
  }

  export function Projects({ limit, showViewAll = false, enableFilters = false }: ProjectsProps) {
    const [selectedCategory, setSelectedCategory] = useState<'All' | ProjectCategory>('All');
    const [activeIndex, setActiveIndex] = useState(0);
    const isHomeShowcase = !enableFilters && showViewAll;
    const isProjectsPage = enableFilters;

    const visibleProjects = useMemo(() => {
      const filtered =
        selectedCategory === 'All' ? projects : projects.filter((project) => project.category === selectedCategory);

      return typeof limit === 'number' ? filtered.slice(0, limit) : filtered;
    }, [selectedCategory, limit]);

    useEffect(() => {
      if (!isHomeShowcase || visibleProjects.length < 2) {
        return;
      }

      const intervalId = window.setInterval(() => {
        setActiveIndex((current) => (current + 1) % visibleProjects.length);
      }, 4200);

      return () => window.clearInterval(intervalId);
    }, [isHomeShowcase, visibleProjects.length]);

    useEffect(() => {
      if (activeIndex >= visibleProjects.length) {
        setActiveIndex(0);
      }
    }, [activeIndex, visibleProjects.length]);

    const handlePrev = () => {
      if (visibleProjects.length === 0) {
        return;
      }
      setActiveIndex((current) => (current - 1 + visibleProjects.length) % visibleProjects.length);
    };

    const handleNext = () => {
      if (visibleProjects.length === 0) {
        return;
      }
      setActiveIndex((current) => (current + 1) % visibleProjects.length);
    };

    return (
      <section
        id="projects"
        className={`px-4 sm:px-6 lg:px-8 bg-muted/30 ${isProjectsPage ? 'py-16' : 'py-24'} ${
          isHomeShowcase ? 'relative overflow-hidden' : ''
        }`}
      >
        {isHomeShowcase && (
          <>
            <div className="pointer-events-none absolute -top-28 -left-16 h-72 w-72 rounded-full bg-primary/12 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 right-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          </>
        )}
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-center ${isProjectsPage ? 'mb-10' : 'mb-16'}`}
          >
            <span className="text-primary tracking-[0.3em] uppercase text-sm">Portfolio</span>
            <h2 className={`mt-3 ${isProjectsPage ? 'text-4xl' : 'text-5xl'}`}>
              {isHomeShowcase ? 'Selected Work' : 'Featured Projects'}
            </h2>
            <p className={`text-secondary mt-3 mx-auto ${isProjectsPage ? 'max-w-xl text-base' : 'max-w-2xl'}`}>
              {isHomeShowcase
                ? 'Four production-grade builds with architecture decisions, measurable outcomes, and case-study depth.'
                : 'A selection of my recent work and personal projects'}
            </p>
          </motion.div>

          {enableFilters && (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-center justify-center gap-2.5 mb-9"
            >
              {projectCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 rounded-full border text-base transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground border-primary shadow-lg'
                      : 'bg-card text-foreground border-border hover:border-primary'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          )}

          {isHomeShowcase ? (
            <div className="relative rounded-[2rem] border border-primary/25 bg-gradient-to-br from-background via-muted/30 to-background px-4 py-10 sm:px-8 sm:py-14 shadow-xl overflow-hidden">
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -top-20 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl"
                animate={{ opacity: [0.25, 0.5, 0.25], scale: [0.95, 1.05, 0.95] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-primary/10 to-transparent" />

              {visibleProjects.length > 0 && (
                <div className="relative">
                  <button
                    onClick={handlePrev}
                    className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-background/80 text-foreground backdrop-blur-sm hover:bg-primary/10 transition-colors"
                    aria-label="Previous project"
                  >
                    <ChevronLeft size={28} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-background/80 text-foreground backdrop-blur-sm hover:bg-primary/10 transition-colors"
                    aria-label="Next project"
                  >
                    <ChevronRight size={28} />
                  </button>

                  <div className="hidden lg:block">
                    {(() => {
                      const prevIndex = (activeIndex - 1 + visibleProjects.length) % visibleProjects.length;
                      const nextIndex = (activeIndex + 1) % visibleProjects.length;
                      const prevProject = visibleProjects[prevIndex];
                      const nextProject = visibleProjects[nextIndex];

                      return (
                        <>
                          <article className="absolute left-6 top-14 w-[31%] rounded-3xl border border-primary/20 bg-card/75 p-5 opacity-45 scale-[0.88] backdrop-blur-sm">
                            <ImageWithFallback src={prevProject.image} alt={prevProject.title} className="h-28 w-full rounded-2xl object-cover mb-4" />
                            <h3 className="text-4xl text-foreground/80 mb-2">{prevProject.title}</h3>
                            <p className="text-secondary line-clamp-2">{prevProject.description}</p>
                          </article>
                          <article className="absolute right-6 top-14 w-[31%] rounded-3xl border border-primary/20 bg-card/75 p-5 opacity-45 scale-[0.88] backdrop-blur-sm">
                            <ImageWithFallback src={nextProject.image} alt={nextProject.title} className="h-28 w-full rounded-2xl object-cover mb-4" />
                            <h3 className="text-4xl text-foreground/80 mb-2">{nextProject.title}</h3>
                            <p className="text-secondary line-clamp-2">{nextProject.description}</p>
                          </article>
                        </>
                      );
                    })()}
                  </div>

                  <motion.article
                    key={visibleProjects[activeIndex].slug}
                    initial={{ opacity: 0, y: 20, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.35 }}
                    className="relative mx-auto w-full max-w-xl rounded-3xl border border-primary/35 bg-card/95 p-5 sm:p-7 shadow-[0_20px_70px_rgba(201,161,43,0.22)] hover:shadow-[0_24px_80px_rgba(201,161,43,0.35)] transition-shadow duration-500 z-10 backdrop-blur-sm"
                  >
                    <ImageWithFallback
                      src={visibleProjects[activeIndex].image}
                      alt={visibleProjects[activeIndex].title}
                      className="h-44 sm:h-52 w-full rounded-2xl object-cover mb-6"
                    />

                    <h3 className="text-4xl sm:text-5xl text-foreground mb-3">{visibleProjects[activeIndex].title}</h3>
                    <p className="text-secondary text-lg leading-relaxed mb-5">
                      {visibleProjects[activeIndex].description}
                    </p>

                    <div className="grid gap-2 mb-7">
                      {visibleProjects[activeIndex].tech.slice(0, 3).map((tech) => (
                        <div key={tech} className="flex items-center gap-2 text-foreground/90 text-xl">
                          <span className="h-2 w-2 rounded-full bg-primary" />
                          <span>{tech}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <Link
                        to={`/projects/${visibleProjects[activeIndex].slug}`}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3 text-lg text-primary-foreground hover:bg-accent transition-colors"
                      >
                        Explore More
                        <ArrowUpRight size={18} />
                      </Link>
                      <button
                        onClick={() => window.open(visibleProjects[activeIndex].githubUrl, '_blank')}
                        className="inline-flex items-center gap-2 rounded-xl border border-primary/40 px-5 py-3 text-foreground/90 hover:bg-primary/15 transition-colors"
                      >
                        <Github size={16} />
                        Code
                      </button>
                      <button
                        onClick={() => window.open(visibleProjects[activeIndex].liveUrl, '_blank')}
                        className="inline-flex items-center gap-2 rounded-xl border border-primary/30 px-5 py-3 text-foreground/90 hover:bg-primary/15 transition-colors"
                      >
                        <ExternalLink size={16} />
                        Live
                      </button>
                    </div>
                  </motion.article>

                  <div className="mt-8 flex items-center justify-center gap-3">
                    {visibleProjects.map((project, index) => (
                      <button
                        key={project.slug}
                        onClick={() => setActiveIndex(index)}
                        className={`h-3 rounded-full transition-all duration-300 ${
                          index === activeIndex ? 'w-8 bg-primary' : 'w-3 bg-primary/35 hover:bg-primary/60'
                        }`}
                        aria-label={`Go to ${project.title}`}
                      />
                    ))}
                  </div>

                  {showViewAll && (
                    <motion.div
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="mt-10"
                    >
                      <div
                        className="relative overflow-hidden rounded-3xl border border-primary/25"
                        style={{
                          backgroundImage: `url(${visibleProjects[(activeIndex + 2) % visibleProjects.length].image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
                        <div className="relative px-6 py-8 sm:px-10 sm:py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                          <div className="max-w-xl">
                            <p className="text-primary tracking-[0.2em] uppercase text-xs mb-2">More Portfolio</p>
                            <h3 className="text-3xl">Explore all projects and case studies</h3>
                            <p className="text-secondary mt-2">
                              Open the complete project archive for architecture notes, outcomes, and implementation details.
                            </p>
                          </div>
                          <Link
                            to="/projects"
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3 text-primary-foreground hover:bg-accent transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,161,43,0.45)]"
                          >
                            View More Projects
                            <ArrowUpRight size={18} />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
              {visibleProjects.map((project, index) => (
                <motion.article
                  key={project.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-border group"
                >
                  <Link to={`/projects/${project.slug}`} className="block relative overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-44 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>

                  <div className="p-4">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="text-xl leading-tight">{project.title}</h3>
                      <span className="text-xs uppercase tracking-wider bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>

                    <p className="text-secondary mb-3 leading-relaxed line-clamp-2">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 4).map((tech) => (
                        <span key={tech} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <button
                        onClick={() => window.open(project.liveUrl, '_blank')}
                        className="bg-primary text-primary-foreground px-3 py-2.5 rounded-lg hover:bg-accent transition-all duration-300 flex items-center justify-center gap-1.5 text-sm"
                      >
                        <ExternalLink size={14} />
                        Live
                      </button>
                      <button
                        onClick={() => window.open(project.githubUrl, '_blank')}
                        className="bg-card border border-primary text-foreground px-3 py-2.5 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center gap-1.5 text-sm"
                      >
                        <Github size={14} />
                        GitHub
                      </button>
                      <Link
                        to={`/projects/${project.slug}`}
                        className="bg-card border border-border text-foreground px-3 py-2.5 rounded-lg hover:border-primary transition-all duration-300 flex items-center justify-center gap-1.5 text-sm"
                      >
                        <ArrowUpRight size={14} />
                        Details
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}

          {showViewAll && !isHomeShowcase && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <Link
                to="/projects"
                className="inline-flex bg-primary text-primary-foreground px-10 py-4 rounded-full hover:bg-accent transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
              >
                See All Projects
              </Link>
            </motion.div>
          )}
        </div>
      </section>
    );
  }
