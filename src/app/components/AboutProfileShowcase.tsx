import { motion } from "motion/react";
import { Link } from "react-router";
import { Briefcase, Code2, FolderKanban, GitBranch, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const metrics = [
  { label: "Total Experience", value: "12 months", icon: Briefcase },
  { label: "Professional Work", value: "10 months", icon: FolderKanban },
  { label: "Internship", value: "2 months", icon: Code2 },
  { label: "Core Stack", value: "React + Python", icon: GitBranch },
];

export function AboutProfileShowcase() {
  return (
    <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary tracking-[0.3em] uppercase text-sm">Profile</span>
          <h1 className="text-5xl mt-4">Full-Stack & Software Developer</h1>
          <p className="text-secondary mt-4 max-w-3xl mx-auto">
            I build responsive web apps, scalable APIs, and production-ready features with a calm, systematic approach.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          <motion.article
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 rounded-3xl border border-primary/25 bg-card/90 p-6 sm:p-8 shadow-xl backdrop-blur-sm"
          >
            <div className="rounded-2xl overflow-hidden mb-7">
              <ImageWithFallback
                src="public/about1.jpeg"
                alt="Team whiteboarding product flows"
                className="w-full h-64 sm:h-72 object-cover object-center"
              />
            </div>
            <h2 className="text-4xl mb-4">About Me</h2>
<div className="space-y-4 text-secondary leading-relaxed mb-7">
  <p>
    <span className="font-semibold text-foreground">Who I am:</span> Full-stack developer based in Chennai with 1+ year of experience building responsive web applications and scalable backend systems. I enjoy creating clean user interfaces and reliable backend services that work together to deliver smooth digital experiences.
  </p>

  <p>
    <span className="font-semibold text-foreground">Tech I use:</span> React, JavaScript, Python, Django, Django REST Framework, Tailwind CSS, HTML, CSS, PostgreSQL, MySQL, and Git for version control.
  </p>

  <p>
    <span className="font-semibold text-foreground">Experience:</span> Worked on multiple projects including a Human Resource Management System, an overseas education consultancy website, and a news aggregation platform, focusing on API integration, responsive UI development, and database-driven applications.
  </p>

  <p>
    <span className="font-semibold text-foreground">Current focus:</span> Actively looking for full-time opportunities where I can contribute to real-world products while continuing to strengthen my skills in full-stack development and modern web technologies.
  </p>
</div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-primary-foreground hover:bg-accent transition-all duration-300 hover:shadow-[0_0_24px_rgba(201,161,43,0.4)]"
              >
                View Projects
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-primary/35 px-6 py-3 hover:bg-primary/10 transition-colors"
              >
                Contact Me
              </Link>
            </div>
          </motion.article>

          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-5"
          >
            {metrics.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-2xl border border-border bg-card p-5 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-xl mb-1">{item.value}</div>
                    <p className="text-secondary">{item.label}</p>
                  </div>
                  <div className="rounded-xl bg-primary/10 p-2.5">
                    <item.icon className="text-primary" size={20} />
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.22 }}
              className="rounded-2xl border border-primary/30 bg-card p-5 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs tracking-[0.25em] uppercase text-primary mb-1">Current Status</div>
                  <p className="text-foreground font-semibold">Open to full-time developer opportunities</p>
                  <p className="text-secondary">Excited to work on modern web applications, scalable systems, and product-driven teams.</p>
                </div>
                <div className="rounded-xl bg-primary/10 p-2.5">
                  <Sparkles className="text-primary" size={18} />
                </div>
              </div>
              <p className="text-primary mt-4 text-sm font-semibold">Open to Work – Full-Stack Developer Opportunities</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/10 to-card p-5"
            >
              <div className="flex items-center gap-2 mb-2 text-primary">
                <Sparkles size={18} />
                <span className="tracking-[0.2em] uppercase text-xs">Current Focus</span>
              </div>
              <p className="text-foreground">
                Building React + TypeScript and Python/Django REST experiences, tightening performance budgets, and polishing E2E testing so releases are hire-ready.
              </p>
            </motion.div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
