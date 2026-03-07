import '../styles.css';

const ProjectItem = ({ item }) => {
  const isExternal = item.onWebSite;

  return (
    <article className="project-card">
      <img src={item.src} alt={item.alt} loading="lazy" />

      <h3>{item.title}</h3>

      <div className="tech-div">
        {item.technologies.map((tech, idx) => (
          <span key={`${item.id}-${idx}`} className="technologie">
            {tech}
          </span>
        ))}
      </div>

      <p className="text-card">{item.text}</p>

      <a
        className="project-btn"
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {isExternal ? 'Ver proyecto 🐝' : 'Ver en GitHub 🚀'}
      </a>
    </article>
  );
};

const Projects = ({ projectsList }) => {
  return (
    <section id="projects" className="projects">
      <h2>Proyectos</h2>

      <div className="project-grid">
        {projectsList.map(project => (
          <ProjectItem key={project.id} item={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
