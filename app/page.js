import Header from './Header';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Footer from './Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col flex-1 scroll-smooth">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Footer dark={false}/>
    </main>
  )
}
