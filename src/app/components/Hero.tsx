import { motion } from 'motion/react';
import { Github, FileDown, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
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
              <div className="h-px w-12 bg-primary"></div>
              <span className="text-secondary tracking-[0.3em] uppercase text-sm">
                BUILDING • AUTOMATING • SCALING
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-6xl lg:text-7xl xl:text-8xl mb-6 leading-tight"
            >
              Alex Chen
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-secondary mb-8 max-w-xl leading-relaxed"
            >
              Full Stack Developer building scalable web applications and modern digital products. 
              Specializing in React, Node.js, and cloud architecture.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => scrollToSection('#projects')}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-accent transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center gap-2"
              >
                View Projects
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => window.open('https://github.com', '_blank')}
                className="bg-card text-foreground border-2 border-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center gap-2"
              >
                <Github size={20} />
                GitHub
              </button>
              <button
                onClick={() => alert('Resume download started')}
                className="bg-card text-foreground border-2 border-border px-8 py-4 rounded-lg hover:border-primary transition-all duration-300 hover:shadow-lg flex items-center gap-2"
              >
                <FileDown size={20} />
                Resume
              </button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-3xl transform rotate-6"></div>
              <div className="relative bg-card rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1731951039706-0e793240bb32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdCUyMG1hbGV8ZW58MXx8fHwxNzczMDM3OTU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Alex Chen - Full Stack Developer"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
