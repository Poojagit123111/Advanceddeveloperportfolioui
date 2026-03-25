import { motion } from "motion/react";
import { Brain, Code2, FlaskConical, Rocket } from "lucide-react";

const steps = [
  {
    id: "planning",
    icon: Brain,
    title: "Planning",
    summary: "Understanding requirements and designing scalable solutions.",
    bullets: [
      "Feature planning and user flow design",
      "UI/UX structure from Figma designs",
      "Database and API planning",
    ],
  },
  {
    id: "development",
    icon: Code2,
    title: "Development",
    summary: "Building scalable web and application solutions.",
    bullets: [
      "Frontend development with React",
      "Backend APIs and database integration",
      "Mobile-friendly responsive design",
    ],
  },
  {
    id: "testing",
    icon: FlaskConical,
    title: "Optimization",
    summary: "Maintaining reliability and performance.",
    bullets: [
      "Debugging and feature testing",
      "Cross-browser compatibility",
      "Performance optimization",
    ],
  },
  {
    id: "deployment",
    icon: Rocket,
    title: "Deployment",
    summary: "Launching applications with optimized performance.",
    bullets: [
      "CI/CD gates for lint, tests, preview",
      "Bundle budget + monitoring hooks",
      "Post-release triage dashboard",
    ],
  },
];

export function AboutVisualCategories() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(201,161,43,0.14),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(117,99,255,0.14),transparent_30%)] blur-3xl opacity-70" />
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary tracking-[0.3em] uppercase text-sm">Option 3</span>
          <h2 className="text-5xl mt-4">My Development Process</h2>
          <p className="text-secondary mt-4 max-w-3xl mx-auto">
            A production-minded path I follow on every build: plan with clarity, engineer with intent, validate hard, and launch with confidence.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 sm:left-6 lg:left-1/2 lg:-translate-x-1/2 h-full w-px bg-gradient-to-b from-primary/40 via-primary/10 to-transparent pointer-events-none" />
          <div className="grid lg:grid-cols-2 gap-7">
            {steps.map((step, index) => (
              <motion.article
                key={step.id}
                initial={{ opacity: 0, y: 40, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.55, delay: index * 0.06, type: "spring", stiffness: 120 }}
                viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                className="group relative rounded-3xl border border-border/70 bg-card/90 backdrop-blur-xl p-6 sm:p-7 shadow-[0_18px_50px_-22px_rgba(0,0,0,0.45)] overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/10 via-accent/5 to-background" />
                <div className="relative flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary border border-primary/30 shadow-inner">
                    <step.icon size={22} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary">Step {index + 1}</span>
                     
                    </div>
                    <h3 className="text-3xl mt-2 mb-2">{step.title}</h3>
                    <p className="text-secondary leading-relaxed">{step.summary}</p>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + index * 0.05 }}
                  className="mt-6 grid gap-2"
                >
                  {step.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-center gap-3 text-foreground">
                      <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_0_6px_rgba(201,161,43,0.15)]" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.25 + index * 0.05, duration: 0.4 }}
                  className="mt-6 rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 px-5 py-4 text-sm text-secondary"
                >
                  Momentum note: micro-interactions, staged reveals, and animated gradients keep this flow feeling alive.
                </motion.div>
              </motion.article>
            ))}
          </div>


        </div>
      </div>
    </section>
  );
}

