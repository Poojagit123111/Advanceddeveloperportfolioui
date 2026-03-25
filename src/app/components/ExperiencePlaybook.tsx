import { motion } from 'motion/react';
import { Layers3, Rocket, Users, ShieldCheck } from 'lucide-react';

const playbookBlocks = [
  {
    title: 'Product Thinking',
    icon: Layers3,
    detail:
      'Translate requirements into clear component structure and delivery steps before coding starts.',
    highlights: ['Task breakdown', 'Reusable component planning', 'Feature-first priorities'],
  },
  {
    title: 'Execution Rhythm',
    icon: Rocket,
    detail:
      'Deliver reliable increments through focused sprints, review-ready pull requests, and quick iteration cycles.',
    highlights: ['Weekly sprint goals', 'PR workflow', 'Fast feedback loops'],
  },
  {
    title: 'Code Quality Habits',
    icon: Users,
    detail:
      'Keep code maintainable with naming clarity, consistent patterns, and careful testing before merge.',
    highlights: ['Readable code style', 'Bug prevention checks', 'Refactor-first mindset'],
  },
  {
    title: 'Growth Mindset',
    icon: ShieldCheck,
    detail:
      'Level up quickly by documenting learnings, improving every release, and adopting stronger engineering practices.',
    highlights: ['Learning logs', 'Post-release review', 'Continuous improvement'],
  },
];

export function ExperiencePlaybook() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-20 left-12 h-64 w-64 rounded-full bg-primary/12 blur-3xl"
        animate={{ opacity: [0.22, 0.45, 0.22], scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary tracking-[0.3em] uppercase text-sm">Developer Framework</span>
          <h2 className="text-5xl mt-4">How I Work as a Developer</h2>
          <p className="text-secondary mt-4 max-w-3xl mx-auto">
            Practical workflow built from real project execution, focused on strong fundamentals and consistent product delivery.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-7">
          {playbookBlocks.map((block, index) => (
            <motion.article
              key={block.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group rounded-2xl border border-border bg-card p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-primary/40 transition-all duration-400"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-3xl">{block.title}</h3>
                <div className="rounded-xl bg-primary/10 p-2.5 group-hover:bg-primary/20 transition-colors">
                  <block.icon className="text-primary" size={20} />
                </div>
              </div>
              <p className="text-secondary leading-relaxed mb-5">{block.detail}</p>
              <div className="space-y-2">
                {block.highlights.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
