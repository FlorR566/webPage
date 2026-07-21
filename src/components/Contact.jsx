import { useState } from 'react';
import '../styles.css';

const SocialLinks = ({ socialIcons }) => {
  const [copiedId, setCopiedId] = useState(null);

  const handleEmailClick = async (e, id, email) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(email);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('No se pudo copiar el email:', err);
    }
  };

  return (
    <div className="iconsDiv">
      {socialIcons.map(({ id, href, target, rel, isEmail, email, Icon }) => (
        <div key={id} className="iconWrapper">
          {isEmail ? (
            <a
              href={`mailto:${email}`}
              onClick={e => handleEmailClick(e, id, email)}
              className="hover"
            >
              <Icon className="socialIcono" />
            </a>
          ) : (
            <a href={href} target={target} rel={rel} className="hover">
              <Icon className="socialIcono" />
            </a>
          )}
          {isEmail && copiedId === id && (
            <span className="copiedMessage">¡Copiado!</span>
          )}
        </div>
      ))}
    </div>
  );
};

const Contact = ({ Icons }) => {
  return (
    <section id="contact" className="contact">
      <h2>Medios de contacto</h2>
      <SocialLinks socialIcons={Icons} />
    </section>
  );
};

export default Contact;
