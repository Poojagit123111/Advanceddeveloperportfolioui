import { motion } from "motion/react";
import { Code2, Briefcase, Award, GitBranch } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const highlights = [
    { icon: Code2, label: "Years Experience", value: "1 year" },
    { icon: Briefcase, label: "Projects Delivered", value: "10+" },
    { icon: Award, label: "Tech Stack", value: "Full Stack" },
    { icon: GitBranch, label: "Status", value: "Open to Work" },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative overflow-hidden rounded-[26px] border border-border/60 bg-card/96 backdrop-blur-2xl shadow-[0_35px_90px_-50px_rgba(0,0,0,0.45)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(201,161,43,0.18),transparent_38%),radial-gradient(circle_at_78%_12%,rgba(255,255,255,0.16),transparent_40%),radial-gradient(circle_at_50%_82%,rgba(0,0,0,0.04),transparent_42%)] opacity-90 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/28 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 pt-10 px-4 sm:px-10 relative"
        >
          <span className="text-primary tracking-[0.3em] uppercase text-sm">About Me</span>
          <h2 className="text-5xl mt-4">Get to know me better</h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start px-4 sm:px-10 pb-14 relative">
          {/* Image left */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex"
          >
            <div className="relative rounded-3xl overflow-hidden border border-border bg-card shadow-[0_30px_70px_-38px_rgba(0,0,0,0.45)] w-full">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1600&q=80"
                alt="Collaborative workspace"
                className="w-full h-[34rem] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/45 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Content + cards right */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <p className="text-base sm:text-lg text-secondary leading-relaxed text-justify">
I am a full-stack developer with practical experience building responsive web applications using technologies like React, JavaScript, Python, and Django. I enjoy developing modern user interfaces and connecting them with efficient backend systems and APIs to create smooth and reliable web experiences.
</p>

<p className="text-base sm:text-lg text-secondary leading-relaxed text-justify">
I have worked on several projects such as an HR Management System, a consultancy website, and a news aggregation platform. These projects helped me gain experience in frontend development, backend integration, database management, and deploying web applications.
</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-3"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="bg-card/94 border border-border rounded-2xl p-4 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-primary/12 p-2 rounded-md">
                      <item.icon className="text-primary" size={17} />
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.18em] text-secondary">{item.label}</span>
                  </div>
                  <div className="text-xm font-semibold text-foreground leading-tight">{item.value}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
