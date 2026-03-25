import { Terminal } from '../components/Terminal';
import { Experience } from '../components/Experience';
import { ExperiencePlaybook } from '../components/ExperiencePlaybook';

export function ExperiencePage() {
  return (
    <>
      <Experience />
      <ExperiencePlaybook />
      <Terminal />
    </>
  );
}
