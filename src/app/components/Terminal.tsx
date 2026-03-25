import { motion } from 'motion/react';
import { Terminal as TerminalIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Terminal() {
  const [currentLine, setCurrentLine] = useState(0);

const terminalLines = [
  { command: '> role.current', output: 'Full Stack Developer' },

  { command: '> experience.total', output: '1 year experience (10 months developer + 2 months internship)' },

  { command: '> focus.stack', output: 'React | JavaScript | Python | Django | REST APIs' },

  { command: '> database.systems', output: 'PostgreSQL | MySQL | SQL' },

  { command: '> workflow', output: 'Responsive UI development + API integration + debugging & optimization' },

  { command: '> tools.used', output: 'Git | GitHub | VS Code | Vite | Cloud deployment' },

  { command: '> availability', output: 'Open to full-time Full Stack Developer opportunities' },
];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLine((prev) => (prev < terminalLines.length - 1 ? prev + 1 : 0));
    }, 1500);

    return () => clearInterval(timer);
  }, [terminalLines.length]);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary tracking-[0.3em] uppercase text-sm">Developer Console</span>
          <h2 className="text-5xl mt-4">Experience Terminal</h2>
          <p className="text-secondary mt-4 max-w-2xl mx-auto">
            Live snapshot of current role, stack depth, and development workflow.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-2xl border border-primary/25 bg-card/90 backdrop-blur-sm"
        >
          <div className="bg-gradient-to-r from-primary/12 via-card to-primary/8 px-4 py-3 flex items-center gap-2 border-b border-primary/20">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-primary/55"></div>
              <div className="w-3 h-3 rounded-full bg-primary/75"></div>
              <div className="w-3 h-3 rounded-full bg-primary"></div>
            </div>
            <div className="flex items-center gap-2 ml-4">
              <TerminalIcon size={16} className="text-primary" />
              <span className="text-secondary text-sm">experience-console@portfolio:~$</span>
            </div>
          </div>

          <div className="p-6 font-mono text-sm bg-background/65">
            {terminalLines.map((line, index) => (
              <motion.div
                key={line.command}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: currentLine >= index ? 1 : 0, y: currentLine >= index ? 0 : 10 }}
                transition={{ duration: 0.3 }}
                className="mb-4"
              >
                <div className="text-primary mb-1 flex items-center gap-2">
                  <span className="text-primary">-&gt;</span>
                  <span>{line.command}</span>
                  <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 1 }}>
                    _
                  </motion.span>
                </div>
                <div className="text-secondary pl-6">{line.output}</div>
              </motion.div>
            ))}

            {currentLine >= terminalLines.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-6 text-primary flex items-center gap-2"
              >
                <span>-&gt;</span>
                <span>|</span>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
