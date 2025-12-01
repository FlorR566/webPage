import '../styles.css';
import './shapesBackground.css';

const Hero = () => {
  return (
    <div className="shapes-content">
      <section id="hero" className="hero">
        <div className="hero-content">
          <h1>¡Hola! Soy Flor 👩🏼‍💻</h1>
          <h3>Desarrolladora web en formación, bienvenid@ a mi página web!</h3>
          <a href="#projects" className="btn">
            Ver proyectos
          </a>
        </div>
      </section>
    </div>
  );
};

export default Hero;
