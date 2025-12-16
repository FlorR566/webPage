import '../styles.css';

const ABOUT_TEXT = (
  <>
    Hola! Soy Florencia Rodriguez, Desarrolladora Frontend en formación con
    enfoque en <strong>React</strong>. Actualmente curso la
    <strong> Tecnicatura Universitaria en Programación</strong> en la
    Universidad Tecnológica Nacional
    <strong> (UTN)</strong>.
    <br />
    <br />
    Trabajo con componentes, estados, hooks, manejo de formularios y consumo de
    APIs usando fetch o axios. También manejo <strong>HTML</strong>,{' '}
    <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>Python</strong> y
    herramientas como <strong>Git/ GitHub</strong>, <strong>npm</strong> y{' '}
    <strong>Json-server</strong>.
    <br />
    Me interesa seguir mejorando como desarrolladora frontend y aplicar buenas
    prácticas en cada proyecto.
  </>
);

const About = () => {
  return (
    <section id="about" className="about">
      <h2>Sobre mí</h2>
      <p>{ABOUT_TEXT}</p>
    </section>
  );
};

export default About;
