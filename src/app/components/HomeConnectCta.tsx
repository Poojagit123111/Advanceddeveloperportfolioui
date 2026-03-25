import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

export function HomeConnectCta() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto rounded-[2.5rem] border border-primary/20 bg-gradient-to-br from-[#f4efe3] to-[#f1ead9] p-10 md:p-16 shadow-[0_10px_35px_rgba(0,0,0,0.06)] relative overflow-hidden"
      >
        <div className="absolute inset-0 pattern-surface opacity-50" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl leading-tight">
            Let&apos;s Connect and Build
            <span className="text-primary"> Something Advanced</span>
          </h2>
          <p className="text-secondary text-lg md:text-2xl mt-6 max-w-3xl mx-auto">
            From strategy to launch: architecture, clean code, performance, and execution that ships real value.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-12"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 rounded-full hover:bg-accent transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              Start The Conversation
              <ArrowRight size={22} />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
