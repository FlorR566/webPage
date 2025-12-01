import '../styles.css';

const Contact = () => {
  return (
    <>
      <section id="contact" className="contact">
        <h2>Contacto</h2>
        <div className="div-icons">
          <a
            href="https://www.linkedin.com/in/florenciamabelrodriguez/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="img-linkedin"
              src="/src/linkedIn-icon.svg"
              alt="LinkedIn Icon"
              width="40"
              height="40"
            />
          </a>

          <a
            href="https://github.com/FlorR566"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="img-github"
              src="/src/github-icon.svg"
              alt="GitHub Icon"
              width="34"
              height="34"
            />
          </a>
        </div>

        <p>
          O a través de un correo a{' '}
          <a
            href="mailto:florodriguez.dev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            florodriguez.dev@gmail.com
          </a>
        </p>
      </section>
    </>
  );
};

export default Contact;
