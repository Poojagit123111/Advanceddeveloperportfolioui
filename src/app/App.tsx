import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Terminal } from './components/Terminal';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { CaseStudies } from './components/CaseStudies';
import { GitHubActivity } from './components/GitHubActivity';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Terminal />
      <Experience />
      <Projects />
      <CaseStudies />
      <GitHubActivity />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
