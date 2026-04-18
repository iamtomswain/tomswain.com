import { PillNav } from './components/PillNav';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Work } from './components/Work';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <>
      <PillNav />
      <main>
        <Hero />
        <About />
        <Work />
        <Experience />
      </main>
      <Contact />
    </>
  );
}
