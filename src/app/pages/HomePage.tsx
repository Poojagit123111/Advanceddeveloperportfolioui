import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';
import { HomeConnectCta } from '../components/HomeConnectCta';

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects limit={4} showViewAll />
      <HomeConnectCta />
    </>
  );
}
