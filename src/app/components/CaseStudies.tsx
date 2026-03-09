import { motion } from 'motion/react';
import { Target, Lightbulb, Code, TrendingUp } from 'lucide-react';

export function CaseStudies() {
  const caseStudies = [
    {
      title: 'E-Commerce Platform Optimization',
      company: 'ShopSmart Inc.',
      problem: 'High cart abandonment rate (68%) and slow page load times affecting user experience and conversion rates.',
      solution: 'Implemented performance optimization techniques including code splitting, lazy loading, CDN integration, and checkout flow redesign.',
      tech: ['React', 'Next.js', 'Redis', 'AWS CloudFront'],
      results: [
        { metric: 'Page Load Time', value: '-65%', icon: TrendingUp },
        { metric: 'Cart Abandonment', value: '-42%', icon: TrendingUp },
        { metric: 'Conversion Rate', value: '+38%', icon: TrendingUp },
        { metric: 'Revenue Impact', value: '+$2.4M', icon: TrendingUp },
      ],
    },
    {
      title: 'SaaS Dashboard Redesign',
      company: 'DataFlow Solutions',
      problem: 'Users struggling with complex interface and difficulty accessing key metrics. High support ticket volume.',
      solution: 'Redesigned dashboard with intuitive UI/UX, implemented real-time data visualization, and created customizable widgets.',
      tech: ['Vue.js', 'D3.js', 'WebSocket', 'MongoDB'],
      results: [
        { metric: 'User Satisfaction', value: '+85%', icon: TrendingUp },
        { metric: 'Support Tickets', value: '-60%', icon: TrendingUp },
        { metric: 'User Engagement', value: '+125%', icon: TrendingUp },
        { metric: 'Active Users', value: '50K+', icon: TrendingUp },
      ],
    },
  ];

  return (
    <section id="case-studies" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary tracking-[0.3em] uppercase text-sm">Success Stories</span>
          <h2 className="text-5xl mt-4">Case Studies</h2>
          <p className="text-secondary mt-4 max-w-2xl mx-auto">
            Deep dives into real-world problems and their solutions
          </p>
        </motion.div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-card rounded-3xl overflow-hidden shadow-xl border border-border hover:shadow-2xl transition-all duration-500"
            >
              <div className="p-8 lg:p-12">
                {/* Header */}
                <div className="mb-8">
                  <h3 className="text-3xl lg:text-4xl mb-3">{study.title}</h3>
                  <p className="text-primary text-lg">{study.company}</p>
                </div>

                {/* Problem, Solution, Tech */}
                <div className="grid lg:grid-cols-3 gap-8 mb-8">
                  <div className="bg-muted/30 p-6 rounded-2xl">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-red-500/10 p-3 rounded-lg">
                        <Target className="text-red-500" size={24} />
                      </div>
                      <h4 className="text-xl">Problem</h4>
                    </div>
                    <p className="text-secondary leading-relaxed">{study.problem}</p>
                  </div>

                  <div className="bg-muted/30 p-6 rounded-2xl">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-blue-500/10 p-3 rounded-lg">
                        <Lightbulb className="text-blue-500" size={24} />
                      </div>
                      <h4 className="text-xl">Solution</h4>
                    </div>
                    <p className="text-secondary leading-relaxed">{study.solution}</p>
                  </div>

                  <div className="bg-muted/30 p-6 rounded-2xl">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-green-500/10 p-3 rounded-lg">
                        <Code className="text-green-500" size={24} />
                      </div>
                      <h4 className="text-xl">Technologies</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {study.tech.map((tech) => (
                        <span
                          key={tech}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl border border-primary/20">
                  <h4 className="text-2xl mb-6 text-center">Results & Impact</h4>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {study.results.map((result, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + idx * 0.1 }}
                        className="text-center"
                      >
                        <div className="bg-card p-4 rounded-xl shadow-md mb-3 inline-block">
                          <result.icon className="text-primary" size={32} />
                        </div>
                        <div className="text-3xl mb-2">{result.value}</div>
                        <div className="text-sm text-secondary">{result.metric}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
