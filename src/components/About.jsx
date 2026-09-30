import '../styles.css';
/* eslint-disable no-unused-vars */
import { motion } from 'motion/react';

const ABOUT_TEXT = (
  <>
    Soy
    <strong className="strong"> Full Stack Developer</strong> con experiencia en
    <strong className="strong"> React</strong>,{' '}
    <strong className="strong"> TypeScript</strong>,{' '}
    <strong className="strong"> Node.js</strong> y{' '}
    <strong className="strong"> MongoDB</strong>.
    <br />
    Construyo y despliego aplicaciones de punta a punta, desde la interfaz hasta
    la API y la base de datos.
    <br /> En lo académico, soy estudiante de la
    <strong className="strong">
      {' '}
      Tecnicatura Universitaria en Programación
    </strong>{' '}
    en UTN, tengo una formación avanzada en{' '}
    <strong className="strong">Licenciatura en Administración</strong> y
    experiencia laboral, en áreas de{' '}
    <strong className="strong">abastecimiento</strong> y{' '}
    <strong className="strong">compras</strong>.
    <br />
    Me enfoco en crear interfaces que sean intuitivas y escalables, priorizando
    las buenas prácticas y el <strong className="strong"> SEO</strong>.
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
