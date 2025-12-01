import Header from './components/Header';
import ShapesBackground from './components/ShapesBackground';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      {/* HERO SECTION DENTRO DE SHAPESBACKGROUND */}
      {/* SVG DE FONDO */}
      <ShapesBackground />
      {/* ABOUT SECTION */}
      <About />
      {/* PROJECTS SECTION */}
      <Projects />
      {/* CONTACT SECTION */}
      <Contact />
      <Footer />
    </>
  );
}
