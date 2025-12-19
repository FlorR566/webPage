import '../styles.css';

const ProjectCard = ({ projects }) => {
  return (
    <div className="project-grid">
      {projects.map(item => (
        <div className="project-card" key={item.id}>
          <img src={item.src} alt={item.alt} width="270" height="150" />
          <h3>{item.title}</h3>
          <p>{item.text}</p>

          {item.onWebSite ? (
            <a
              className="project-btn"
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver proyecto 🐝
            </a>
          ) : (
            <a
              className="project-btn"
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver en GitHub 🚀
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

const Projects = ({ projectsList }) => {
  return (
    <section id="projects" className="projects">
      <h2>Proyectos</h2>
      <ProjectCard projects={projectsList} />
    </section>
  );
};

export default Projects;
