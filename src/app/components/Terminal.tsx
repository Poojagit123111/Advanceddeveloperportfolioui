import { motion } from 'motion/react';
import { Terminal as TerminalIcon } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Terminal() {
  const [currentLine, setCurrentLine] = useState(0);

  const terminalLines = [
    { command: '> whoami', output: 'Full Stack Developer', delay: 0 },
    { command: '> tech-stack', output: 'React | Node.js | Python | MySQL', delay: 1 },
    { command: '> current-status', output: 'Building scalable applications', delay: 2 },
    { command: '> hobbies', output: 'Coding • UI Design • Open Source', delay: 3 },
    { command: '> availability', output: 'Open to new opportunities', delay: 4 },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLine((prev) => (prev < terminalLines.length - 1 ? prev + 1 : prev));
    }, 1500);
    return () => clearInterval(timer);
  }, []);

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
          <h2 className="text-5xl mt-4">Terminal Info</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-2xl border border-[#333]"
        >
          {/* Terminal Header */}
          <div className="bg-[#2d2d2d] px-4 py-3 flex items-center gap-2 border-b border-[#333]">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <div className="flex items-center gap-2 ml-4">
              <TerminalIcon size={16} className="text-[#22c55e]" />
              <span className="text-[#888] text-sm">alex-chen@portfolio:~$</span>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 font-mono text-sm">
            {terminalLines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: currentLine >= index ? 1 : 0, y: currentLine >= index ? 0 : 10 }}
                transition={{ duration: 0.3 }}
                className="mb-4"
              >
                <div className="text-[#22c55e] mb-1 flex items-center gap-2">
                  <span className="text-[#10b981]">➜</span>
                  <span>{line.command}</span>
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                  >
                    _
                  </motion.span>
                </div>
                <div className="text-[#94a3b8] pl-6">{line.output}</div>
              </motion.div>
            ))}
            
            {currentLine >= terminalLines.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-6 text-[#22c55e] flex items-center gap-2"
              >
                <span className="text-[#10b981]">➜</span>
                <span>█</span>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
