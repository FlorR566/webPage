import '../styles.css';

const SocialLinks = ({ socialIcons }) => {
  return (
    <div className="iconsDiv">
      {/* eslint-disable-next-line no-unused-vars */}
      {socialIcons.map(({ id, href, target, rel, Icon }) => (
        <a key={id} href={href} target={target} rel={rel} className="hover">
          <Icon className="socialIcono" />
        </a>
      ))}
    </div>
  );
};

const Contact = ({ Icons }) => {
  return (
    <section id="contact" className="contact">
      <h2>Contacto</h2>
      <SocialLinks socialIcons={Icons} />
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
  );
};

export default Contact;
