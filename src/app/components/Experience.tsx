import { motion } from 'motion/react';
import { Briefcase, Calendar } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      company: 'TechCorp Solutions',
      role: 'Senior Full Stack Developer',
      period: '2022 - Present',
      description: 'Leading development of cloud-based SaaS platform serving 50K+ users. Architected microservices infrastructure and mentored junior developers.',
      achievements: [
        'Reduced API response time by 60%',
        'Implemented CI/CD pipeline',
        'Led team of 5 developers',
      ],
    },
    {
      company: 'Digital Innovations Inc',
      role: 'Full Stack Developer',
      period: '2020 - 2022',
      description: 'Developed e-commerce platform and customer management systems using React, Node.js, and PostgreSQL.',
      achievements: [
        'Built features used by 100K+ customers',
        'Improved page load speed by 45%',
        'Integrated payment gateways',
      ],
    },
    {
      company: 'StartupHub',
      role: 'Software Developer',
      period: '2019 - 2020',
      description: 'Created web applications for various clients using modern JavaScript frameworks and responsive design principles.',
      achievements: [
        'Delivered 15+ client projects',
        'Maintained 98% client satisfaction',
        'Implemented RESTful APIs',
      ],
    },
    {
      company: 'Freelance',
      role: 'Freelance Developer',
      period: '2018 - 2019',
      description: 'Provided web development services to small businesses and startups, specializing in custom website development and maintenance.',
      achievements: [
        'Completed 30+ projects',
        'Built portfolio of satisfied clients',
        'Established development workflow',
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary tracking-[0.3em] uppercase text-sm">Career Path</span>
          <h2 className="text-5xl mt-4">Work Experience</h2>
          <p className="text-secondary mt-4 max-w-2xl mx-auto">
            My professional journey in software development
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-5 h-5 bg-primary rounded-full border-4 border-background hidden md:block"></div>

                <div className="md:ml-20 bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-border hover:border-primary">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl mb-2">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-primary mb-2">
                        <Briefcase size={18} />
                        <span className="text-lg">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-secondary bg-muted px-4 py-2 rounded-lg">
                      <Calendar size={18} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-secondary mb-4 leading-relaxed">{exp.description}</p>

                  <div className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                        <span className="text-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
