import { motion } from 'motion/react';
import { Github, Star, GitFork, Eye } from 'lucide-react';

export function GitHubActivity() {
  const repos = [
    {
      name: 'react-dashboard-template',
      description: 'Modern React dashboard template with TypeScript and TailwindCSS',
      stars: 234,
      forks: 45,
      watchers: 18,
      language: 'TypeScript',
    },
    {
      name: 'nodejs-api-boilerplate',
      description: 'Production-ready Node.js REST API boilerplate with best practices',
      stars: 189,
      forks: 32,
      watchers: 12,
      language: 'JavaScript',
    },
    {
      name: 'python-automation-scripts',
      description: 'Collection of useful Python automation scripts for developers',
      stars: 156,
      forks: 28,
      watchers: 9,
      language: 'Python',
    },
  ];

  // Mock contribution data
  const contributions = Array.from({ length: 52 }, (_, week) =>
    Array.from({ length: 7 }, (_, day) => ({
      day,
      week,
      count: Math.floor(Math.random() * 10),
    }))
  ).flat();

  const getColor = (count: number) => {
    if (count === 0) return 'bg-muted';
    if (count < 3) return 'bg-primary/30';
    if (count < 6) return 'bg-primary/60';
    return 'bg-primary';
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary tracking-[0.3em] uppercase text-sm">Open Source</span>
          <h2 className="text-5xl mt-4">GitHub Activity</h2>
          <p className="text-secondary mt-4 max-w-2xl mx-auto">
            Contributing to open source and building in public
          </p>
        </motion.div>

        {/* Contribution Graph */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl p-8 shadow-lg mb-12 border border-border overflow-x-auto"
        >
          <div className="flex items-center gap-3 mb-6">
            <Github className="text-foreground" size={28} />
            <h3 className="text-2xl">Contribution Activity</h3>
          </div>
          
          <div className="flex gap-1 mb-4 min-w-[800px]">
            {Array.from({ length: 52 }, (_, week) => (
              <div key={week} className="flex flex-col gap-1">
                {Array.from({ length: 7 }, (_, day) => {
                  const contrib = contributions.find(c => c.week === week && c.day === day);
                  return (
                    <motion.div
                      key={day}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: week * 0.005 }}
                      className={`w-3 h-3 rounded-sm ${getColor(contrib?.count || 0)} hover:ring-2 hover:ring-primary transition-all cursor-pointer`}
                      title={`${contrib?.count || 0} contributions`}
                    />
                  );
                })}
              </div>
            ))}
          </div>
          
          <div className="flex items-center gap-4 text-sm text-secondary">
            <span>Less</span>
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-sm bg-muted"></div>
              <div className="w-3 h-3 rounded-sm bg-primary/30"></div>
              <div className="w-3 h-3 rounded-sm bg-primary/60"></div>
              <div className="w-3 h-3 rounded-sm bg-primary"></div>
            </div>
            <span>More</span>
          </div>
        </motion.div>

        {/* Popular Repositories */}
        <div className="grid md:grid-cols-3 gap-6">
          {repos.map((repo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border hover:border-primary cursor-pointer"
              onClick={() => window.open('https://github.com', '_blank')}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-xl mb-2">{repo.name}</h4>
                  <p className="text-sm text-secondary">{repo.description}</p>
                </div>
                <Github size={24} className="text-foreground flex-shrink-0" />
              </div>

              <div className="flex items-center gap-4 text-sm text-secondary mb-4">
                <div className="flex items-center gap-1">
                  <Star size={16} className="text-primary" />
                  <span>{repo.stars}</span>
                </div>
                <div className="flex items-center gap-1">
                  <GitFork size={16} className="text-primary" />
                  <span>{repo.forks}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye size={16} className="text-primary" />
                  <span>{repo.watchers}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span className="text-sm text-secondary">{repo.language}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
