import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import DOMPurify from 'dompurify';
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

const ContactForm = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async e => {
    e.preventDefault();

    // Honeypot anti-spam: si el campo oculto tiene valor, es un bot
    if (formRef.current.website.value) return;

    // Sanitizamos y sobreescribimos el valor del input
    const cleanName = DOMPurify.sanitize(formRef.current.name.value);
    const cleanMessage = DOMPurify.sanitize(formRef.current.message.value);

    formRef.current.name.value = cleanName;
    formRef.current.message.value = cleanMessage;

    setStatus('sending');
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
      );
      setStatus('success');
      formRef.current.reset();
      setTimeout(() => setStatus('idle'), 4000);
    } catch (err) {
      console.error('Error al enviar el mensaje:', err);
      setStatus('error');
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="contactForm">
      <div className="formGroup">
        <label htmlFor="name">Nombre</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Tu nombre"
        />
      </div>

      <div className="formGroup">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="tu@email.com"
        />
      </div>

      <div className="formGroup">
        <label htmlFor="message">Mensaje</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          required
          placeholder="Escribí tu mensaje..."
        />
      </div>

      {/* Honeypot: oculto para humanos */}
      <input
        type="text"
        name="website"
        tabIndex="-1"
        autoComplete="off"
        className="honeypot"
      />

      <button type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
      </button>

      {status === 'success' && (
        <p className="formMessage success">
          ¡Mensaje enviado! Te respondo pronto.
        </p>
      )}
      {status === 'error' && (
        <p className="formMessage error">
          Hubo un error. Probá de nuevo o escribime directamente por mail.
        </p>
      )}
    </form>
  );
};

const Contact = ({ Icons }) => {
  return (
    <section id="contact" className="contact">
      <h2>Contacto</h2>
      <ContactForm />
      <p className="contactDivider">o encontrame en:</p>
      <SocialLinks socialIcons={Icons} />
    </section>
  );
};

export default Contact;
