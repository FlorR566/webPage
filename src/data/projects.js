import img1 from '/src/lady-valentina.png';
import img2 from '/src/random-user-explorer-lightMode.png';
import img3 from '/src/weather-app.png';
import img4 from '/src/to-do-list.png';

const PROJECTS = [
  {
    id: 1,
    src: img1,
    alt: 'Lady Valentina App',
    title: 'Lady Valentina',
    text: 'Sitio web para comercio de carteras, desarrollada con React, JavaScript y CSS. Incluye diseño responsive y optimización SEO para mejorar el posicionamiento. Actualmente trabajando en la integración del Backend.',
    href: 'https://ladyvalentina.vercel.app/',
    onWebSite: true,
  },
  {
    id: 2,
    src: img2,
    alt: 'Random-user-explorer-lightMode',
    title: 'RandomUser Explorer',
    text: 'Aplicación que consume una API externa para gestionar datos de usuarios. Implementa un gráfico dinámico para visualizar estadísticas demográficas en tiempo real.',
    href: 'https://florr566.github.io/RandomUser-Grapher/',
    onWebSite: true,
  },
  {
    id: 3,
    src: img3,
    alt: 'Weather App',
    title: 'Weather App',
    text: 'Dashboard climático en tiempo real que utiliza una API externa. Posee una interfaz dinámica que cambia su estética según el estado del clima actual.',
    href: 'https://github.com/FlorR566/Weather-App-FR',
    onWebSite: false,
  },
  {
    id: 4,
    src: img4,
    alt: 'To-Do List',
    title: 'To-Do List',
    text: 'Aplicación interactiva para gestionar tareas, con almacenamiento local, desarrollada en JavaScript, CSS y HTML.',
    href: 'https://florr566.github.io/TO-DO-List/',
    onWebSite: true,
  },
];

export default PROJECTS;
