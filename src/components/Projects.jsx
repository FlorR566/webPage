import '../styles.css';

const Projects = () => {
  return (
    <>
      <section id="projects" className="projects">
        <h2>Proyectos</h2>
        <div className="project-grid">
          <div className="project-card">
            <a
              className="project-a"
              href="https://ladyvalentina.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/src/lady-valentina.png"
                alt="Lady Valentina App"
                width="270"
                height="150"
              />

              <h3>Lady Valentina</h3>
              <p>
                Landing page para un comercio de carteras, desarrollada con
                React, JavaScript y CSS. Diseño responsive adaptado a
                dispositivos móviles. Proyecto actualmente en desarrollo.
              </p>
            </a>
          </div>

          <div className="project-card">
            <a
              className="project-a"
              href="https://florr566.github.io/RandomUser-Grapher/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/src/random-user-explorer-lightMode.png"
                alt="random-user-explorer-lightMode"
                width="180"
                height="150"
              />
              {/* <img
                src="/src/random-user-explorer-darkMode.png"
                alt="random-user-explorer-darkMode"
                width="150"
                height="150"
              /> */}

              <h3>RandomUser Explorer</h3>
              <p>
                Herramienta para obtener datos de usuarios random, mediante una
                API. Incluye un gráfico que muestra la cantidad de mujeres y
                hombres.
              </p>
            </a>
          </div>

          <div className="project-card">
            <a
              className="project-a"
              href="https://florr566.github.io/Weather-App-FR/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/src/weather-app.png"
                alt="Weather-app"
                width="270"
                height="150"
              />
              <h3>Weather App</h3>
              <p>
                Aplicación para consultar el clima en tiempo real: temperatura,
                humedad y más, consumiendo una API externa.
              </p>
            </a>
          </div>

          <div className="project-card">
            <a
              className="project-a"
              href="https://florr566.github.io/TO-DO-List/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/src/to-do-list.png"
                alt="To-do-list"
                width="270"
                height="150"
              />
              <h3>To-Do List</h3>
              <p>
                Aplicación interactiva para gestionar tareas, con almacenamiento
                local, desarrollada en JavaScript, CSS y HTML.
              </p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
