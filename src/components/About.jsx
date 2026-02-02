import '../styles.css';
/* eslint-disable no-unused-vars */
import { motion } from 'motion/react';

const ABOUT_TEXT = (
  <>
    Soy
    <strong className="strong"> React Frontend Developer</strong> y estudiante
    de{' '}
    <strong className="strong">
      Tecnicatura Universitaria en Programación
    </strong>{' '}
    en la UTN.
    <br />
    Me dedico a crear interfaces intuitivas y escalables, manejando{' '}
    <strong className="strong">React</strong>,{' '}
    <strong className="strong">JavaScript</strong>,{' '}
    <strong className="strong">HTML</strong> y{' '}
    <strong className="strong">CSS</strong>, siempre priorizando las buenas
    prácticas y el <strong className="strong">SEO</strong>. <br /> Actualmente,
    estoy expandiendo mi stack hacia el backend con{' '}
    <strong className="strong">MERN</strong>, profundizando en Node.js, Express
    y MongoDB para construir soluciones de punta a punta. <br />
    Cuento con una formación avanzada en{' '}
    <strong className="strong">Licenciatura en Administración</strong> y
    experiencia en áreas de <strong className="strong">abastecimiento</strong> y{' '}
    <strong className="strong">compras</strong>.
    <br /> Me interesa seguir mejorando como React Frontend Developer y aplicar
    buenas prácticas en cada proyecto.
  </>
);

const About = () => {
  return (
    <section id="about" className="about">
      <h2>Sobre mí</h2>

      <motion.div
        className="circle-frame"
        animate={{
          y: [10, -10, 10],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <img
          className="about-illustration"
          src="src/chicaDev.svg"
          alt="Ilustración de una chica programadora"
        />
      </motion.div>

      <div className="textBox-mobileView">
        <p>{ABOUT_TEXT}</p>
      </div>
    </section>
  );
};

export default About;
