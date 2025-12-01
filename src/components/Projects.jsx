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
              href="https://florr566.github.io/RandomUser-Grapher/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>RandomUser Explorer</h3>
              <p>
                Herramienta para obtener datos de usuarios random, mediante una
                API. Incluye un gráfico que muestra la cantidad de mujeres y
                hombres.
              </p>

              <img
                src="/src/random-user-explorer-lightMode.png"
                alt="random-user-explorer-lightMode"
                width="180"
                height="150"
              />
              <img
                src="/src/random-user-explorer-darkMode.png"
                alt="random-user-explorer-darkMode"
                width="150"
                height="150"
              />
            </a>
          </div>

          <div className="project-card">
            <a
              className="project-a"
              href="https://florr566.github.io/Weather-App-FR/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Weather App</h3>
              <p>
                Aplicación para consultar el clima en tiempo real: temperatura,
                humedad y más, consumiendo una API externa.
              </p>
              <img
                src="/src/weather-app.png"
                alt="Weather-app"
                width="270"
                height="150"
              />
            </a>
          </div>

          <div className="project-card">
            <a
              className="project-a"
              href="https://florr566.github.io/TO-DO-List/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>To-Do List</h3>
              <p>
                Aplicación interactiva para gestionar tareas, con almacenamiento
                local, desarrollada en JavaScript, CSS y HTML.
              </p>

              <img
                src="/src/to-do-list.png"
                alt="To-do-list"
                width="270"
                height="150"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
