import imgHoster1 from '/src/Hoster-Modal-Mtto.png';
// import imgHoster2 from '/src/Hoster-Login.png';
// import imgHoster3 from '/src/Hoster-Mantenimiento.png';
// import imgHoster4 from '/src/Hoster-Dashboard.png';
import imgLadyValentina1 from '/src/lady-valentina-otoño.png';
//import imgLadyValentina2 from '/src/lady-valentina-navidad.png';
import img2 from '/src/random-user-explorer-lightMode.png';
import img3 from '/src/weather-app.png';
import img4 from '/src/to-do-list.png';

const PROJECTS = [
  {
    id: 1,
    src: imgHoster1,
    alt: 'Hoster',
    title: 'Hoster',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    text: 'Hoster es un PMS para hoteles rurales medianos. Digitaliza la operación diaria: reservas, check-in/out, servicios, y genera análisis mensuales con IA para identificar patrones de ocupación.',
    href: 'https://i006-hoster-fullstack-develop.vercel.app/',
    onWebSite: true,
  },
  {
    id: 2,
    src: imgLadyValentina1,
    alt: 'Lady Valentina App',
    title: 'Lady Valentina',
    technologies: [
      'React',
      'JavaScript',
      'CSS',
      'Node.js',
      'Express',
      'MongoDB',
    ],
    text: 'Catálogo digital para una marca de marroquinería. El enfoque es crear una experiencia de compra fluida mediante un diseño minimalista y mobile-first. Actualmente integrando un panel administrativo (Backend) para la gestión dinámica de stock.',
    href: 'https://ladyvalentina.vercel.app/',
    onWebSite: true,
  },
  {
    id: 3,
    src: img2,
    alt: 'Random-user-explorer-lightMode',
    title: 'RandomUser Explorer',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    text: 'Aplicación que consume una API externa para gestionar datos de usuarios. Implementa un gráfico dinámico para visualizar estadísticas demográficas en tiempo real.',
    href: 'https://florr566.github.io/RandomUser-Grapher/',
    onWebSite: true,
  },
  {
    id: 4,
    src: img3,
    alt: 'Weather App',
    title: 'Weather App',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    text: 'Dashboard climático en tiempo real que utiliza una API externa. Posee una interfaz dinámica que cambia su estética según el estado del clima actual.',
    href: 'https://github.com/FlorR566/Weather-App-FR',
    onWebSite: false,
  },
  {
    id: 5,
    src: img4,
    alt: 'To-Do List',
    title: 'To-Do List',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    text: 'Aplicación interactiva para gestionar tareas, implementa LocalStorage para la persistencia de datos con almacenamiento local.',
    href: 'https://florr566.github.io/TO-DO-List/',
    onWebSite: true,
  },
];

export default PROJECTS;
