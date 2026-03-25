import { motion } from 'motion/react';
import { Briefcase, Calendar } from 'lucide-react';

export function Experience() {
  const experiences = [
  {
    company: 'Manha Facility Management, Chennai',
    role: 'Full Stack Developer',
    period: 'May 2025 – Mar 2026',
    description:
      'Worked on developing responsive web features and backend integrations for internal business systems using React, JavaScript, and Django-based APIs.',
    achievements: [
      'Developed responsive UI components using React, HTML, and CSS',
      'Improved page load performance by around 25%',
      'Integrated REST APIs for dynamic data handling between frontend and backend',
      'Collaborated with the development team using Git and Agile workflows',
    ],
  },
  {
    company: 'Manha Facility Management, Chennai',
    role: 'Full Stack Developer Intern',
    period: 'Feb 2025 – Apr 2025',
    description:
      'Supported development of full-stack modules while gaining practical experience with frontend frameworks and backend API integration.',
    achievements: [
      'Built web modules using HTML, CSS, JavaScript, and Django',
      'Assisted in creating and integrating REST APIs',
      'Debugged application issues and improved system performance',
      'Collaborated with developers on feature implementation and testing',
    ],
  },
  {
    company: '8Queens Pvt Ltd, Chennai',
    role: 'Web Developer Intern',
    period: 'Nov 2024 – Dec 2024',
    description:
      'Worked on designing and improving responsive web pages while supporting frontend maintenance and usability improvements.',
    achievements: [
      'Developed responsive web pages using HTML, CSS, and JavaScript',
      'Enhanced UI/UX by improving layout and accessibility',
      'Fixed frontend bugs and optimized website performance',
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
