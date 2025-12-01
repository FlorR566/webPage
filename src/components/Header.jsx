import '../styles.css';

const Header = () => {
  return (
    <div>
      <header>
        <nav>
          <div id="inicio" className="logo">
            <a href="#hero">Florencia Rodriguez 🌸🐝</a>
          </div>
          <ul className="nav-links">
            <li>
              <a href="#about">Sobre mí</a>
            </li>
            <li>
              <a href="#projects">Proyectos</a>
            </li>
            <li>
              <a href="#contact">Contacto</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
