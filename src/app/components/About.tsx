import { motion } from 'motion/react';
import { Code2, Briefcase, Award, GitBranch } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const highlights = [
    { icon: Code2, label: 'Years Experience', value: '5+' },
    { icon: Briefcase, label: 'Projects Completed', value: '50+' },
    { icon: Award, label: 'Technologies', value: '20+' },
    { icon: GitBranch, label: 'Open Source', value: '30+' },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary tracking-[0.3em] uppercase text-sm">About Me</span>
          <h2 className="text-5xl mt-4">Get to know me better</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
              <div className="relative bg-card rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1623679072629-3aaa0192a391?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc3Mjk2NDQxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Developer workspace"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-secondary mb-6 leading-relaxed">
              I'm a passionate Full Stack Developer with over 5 years of experience in building 
              scalable web applications and digital products. My expertise spans across modern 
              JavaScript frameworks, cloud architecture, and DevOps practices.
            </p>
            <p className="text-lg text-secondary mb-8 leading-relaxed">
              I believe in writing clean, maintainable code and creating user-centric solutions 
              that solve real-world problems. When I'm not coding, I contribute to open-source 
              projects and mentor aspiring developers.
            </p>

            {/* Highlight Cards */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-border"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <item.icon className="text-primary" size={24} />
                    </div>
                  </div>
                  <div className="text-3xl mb-1">{item.value}</div>
                  <div className="text-sm text-secondary">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
