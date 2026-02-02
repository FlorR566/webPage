import '../styles.css';
import './shapesBackground.css';
/* eslint-disable no-unused-vars */
import { motion } from 'motion/react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="hero" className="hero">
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants}>
          Hola, soy <br />
          <span>Florencia Rodriguez 👩🏼‍💻 </span>
        </motion.h1>

        <motion.h2 variants={itemVariants} className="job-title">
          React Frontend Developer
        </motion.h2>

        <motion.h3 variants={itemVariants} className="stack-text">
          Actualmente expandiendo mi stack hacia el desarrollo MERN
        </motion.h3>

        <motion.div variants={itemVariants}>
          <motion.a
            href="#projects"
            className="btn"
            whileHover={{
              scale: 1.05,
              boxShadow: '0px 0px 15px rgba(59, 130, 246, 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Ver proyectos
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
