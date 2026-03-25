import { motion } from 'motion/react';
import { ArrowRight, Github, FileDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const terminalScript = [
  'name: Pooja Bai K',
  'role: Full Stack Developer',
  'skills: React, JavaScript, Python, Django, REST APIs, React Native',
  'builds: Web Applications, Software Systems, Mobile Apps',
  'ai_interest: AI Engineering, Machine Learning Exploration',
  'current_focus: Building scalable full-stack applications',
  'status: Open to full-time developer opportunities',
];

export function Hero() {
  const navigate = useNavigate();
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (lineIndex >= terminalScript.length) {
      timer = setTimeout(() => {
        setLineIndex(0);
        setCharIndex(0);
      }, 1800);
      return () => clearTimeout(timer);
    }

    const line = terminalScript[lineIndex];

    if (charIndex <= line.length) {
      timer = setTimeout(() => setCharIndex((value) => value + 1), 32);
    } else {
      timer = setTimeout(() => {
        setLineIndex((value) => value + 1);
        setCharIndex(0);
      }, 520);
    }

    return () => clearTimeout(timer);
  }, [lineIndex, charIndex]);

  const getLineText = (index: number) => {
    if (index < lineIndex) {
      return terminalScript[index];
    }

    if (index === lineIndex && lineIndex < terminalScript.length) {
      return terminalScript[index].slice(0, charIndex);
    }

    return '';
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
            >
              
              <span className="text-secondary tracking-[0.3em] uppercase text-sm">
                BUILDING - LEARNING - SCALING
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-6xl lg:text-7xl xl:text-8xl mb-6 leading-tight"
            >
              Pooja Bai K
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-secondary mb-8 max-w-3xl leading-relaxed text-justify"
            >
              Full-stack developer with hands-on experience building responsive web applications using React, Django, and REST APIs. Focused on clean UI development, scalable backend systems, and delivering reliable digital solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => navigate('/projects')}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-accent transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center gap-2"
              >
                View Projects
                <ArrowRight size={20} />
              </button>
             
              <button
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/Pooja Resume Update (1).pdf';
                  link.download = 'Pooja-Bai-K-Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
               className="bg-card text-foreground border-2 border-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center gap-2"
              >
                <FileDown size={20} />
                Download Resume
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="rounded-2xl border border-[#e2d4bb] bg-[#fbf6ec] shadow-[0_12px_30px_rgba(0,0,0,0.08)] overflow-hidden">
              <div className="bg-[#f2e7d2] border-b border-[#e2d4bb] px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#d88c84]" />
                  <span className="w-3 h-3 rounded-full bg-[#d7b56a]" />
                  <span className="w-3 h-3 rounded-full bg-[#8eb68d]" />
                </div>
                <span className="text-xs text-[#6f6558] font-mono">portfolio-terminal</span>
              </div>

              <div className="px-5 py-6 font-mono text-[13px] sm:text-sm leading-7 text-[#3e3529] min-h-[360px]">
                {terminalScript.map((_, index) => {
                  const typedText = getLineText(index);
                  const isActive = index === lineIndex && lineIndex < terminalScript.length;

                  return (
                    <div key={index} className={`flex items-start gap-2 ${typedText ? 'opacity-100' : 'opacity-40'}`}>
                      <span className="text-primary">$</span>
                      <span>{typedText || '...'}</span>
                      {isActive && (
                        <motion.span
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ duration: 0.9, repeat: Infinity }}
                          className="text-primary"
                        >
                          |
                        </motion.span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
