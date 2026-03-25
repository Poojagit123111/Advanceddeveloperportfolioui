import { motion } from 'motion/react';
import { Code, Server, Database, Wrench } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 94 },
        { name: 'JavaScript (ES6)', level: 92 },
        { name: 'React.js', level: 90 },
        { name: 'Tailwind CSS', level: 90 },
      ],
    },
    {
      category: 'Backend',
      icon: Server,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Django', level: 90 },
        { name: 'Django REST Framework', level: 88 },
        { name: 'REST API Development', level: 90 },
      ],
    },
    {
      category: 'Database',
      icon: Database,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'PostgreSQL', level: 90 },
        { name: 'MySQL', level: 88 },
        { name: 'SQL', level: 92 },
        { name: 'Basic Database Design', level: 85 },
      ],
    },
    {
      category: 'Tools & Deployment',
      icon: Wrench,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git & GitHub', level: 94 },
        { name: 'VS Code', level: 95 },
        { name: 'Netlify / Render', level: 88 },
        { name: 'Basic Cloud Hosting', level: 82 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary tracking-[0.3em] uppercase text-sm">Technical Skills</span>
          <h2 className="text-5xl mt-4">My Tech Stack</h2>
          <p className="text-secondary mt-4 max-w-2xl mx-auto">
            Proficient in a wide range of modern technologies and frameworks
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-border"
            >
              <div className={`bg-gradient-to-br ${category.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
                <category.icon className="text-white" size={28} />
              </div>
              <h3 className="text-2xl mb-6">{category.category}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-foreground">{skill.name}</span>
                      <span className="text-sm text-secondary">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.1 + index * 0.05, duration: 1 }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
