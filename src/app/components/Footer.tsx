import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Heart, FileDown } from 'lucide-react';
import { Link } from 'react-router';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Experience', to: '/experience' },
    { name: 'Projects', to: '/projects' },
    { name: 'Contact', to: '/contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/PoojaBai-K', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/poojabai04', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:pk535811235@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="border-t border-primary/25">
      <div className="bg-primary py-10 px-4 sm:px-6 lg:px-8 text-[#1f1a10]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <h3 className="text-4xl mb-3">
              <span className="text-[#f4e8cd]">Pooja</span> Bai K
            </h3>
            <p className="text-[rgba(31,26,16,0.9)] leading-relaxed max-w-xl mb-5">
  Junior Full Stack Developer building responsive web applications using React, JavaScript, Python, and Django. Focused on creating clean user interfaces, reliable backend APIs, and scalable database-driven systems.
</p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="bg-[#f3e6c8]/80 p-2.5 rounded-xl border border-[#c8a24a] hover:bg-[#f8efd9] transition-all duration-300"
                  title={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3"
          >
            <h4 className="text-3xl mb-3">Navigation</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.to} className="text-[rgba(31,26,16,0.9)] hover:text-black transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4"
          >
            <h4 className="text-3xl mb-3">Get In Touch</h4>
            <div className="grid sm:grid-cols-2 gap-3">
              <a
                href="mailto:pk535811235@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#c8a24a] bg-[#f3e6c8]/80 px-4 py-2 hover:bg-[#f8efd9] transition-colors"
              >
                <Mail size={16} />
                Email
              </a>
              <a
                href="Pooja Resume Update (1).pdf"
                download="Pooja-Bai-K-Resume.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#c8a24a] bg-[#f3e6c8]/80 px-4 py-2 hover:bg-[#f8efd9] transition-colors"
              >
                <FileDown size={16} />
                Resume
              </a>
              <a
                href="https://linkedin.com/in/poojabai04"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#c8a24a] bg-[#f3e6c8]/80 px-4 py-2 hover:bg-[#f8efd9] transition-colors"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                href="https://github.com/PoojaBai-K"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#c8a24a] bg-[#f3e6c8]/80 px-4 py-2 hover:bg-[#f8efd9] transition-colors"
              >
                <Github size={16} />
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="bg-background py-4 px-4 sm:px-6 lg:px-8 border-t border-primary/25">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto text-secondary flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm"
        >
          <p>&copy; {currentYear} Pooja Bai K. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart size={15} className="text-primary fill-primary" /> and React
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
