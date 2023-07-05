import Header from './Header';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col flex-1 scroll-smooth">
      <Header />
      <About />
      <Skills />
      <Projects />
    </main>
  )
}
