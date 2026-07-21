import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const socialIcons = [
  {
    id: 1,
    target: '_blank',
    rel: 'noopener noreferrer',
    href: 'https://www.linkedin.com/in/florenciamabelrodriguez/',
    Icon: FaLinkedinIn,
  },
  {
    id: 2,
    target: '_blank',
    rel: 'noopener noreferrer',
    href: 'https://github.com/FlorR566',
    Icon: FaGithub,
  },

  {
    id: 3,
    isEmail: true,
    email: 'florodriguez.dev@gmail.com',
    Icon: MdEmail,
  },
];

export default socialIcons;
