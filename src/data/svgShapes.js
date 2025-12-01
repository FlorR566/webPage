// src/data/svgShapes.js
// --------------------------------------
// PATHS CENTRALIZADOS (rutas que se repiten)
// --------------------------------------
export const PATHS = {
  shape1: 'M137.771 13.1345L131.531 8.46632L138.694 5.3955L137.771 13.1345Z',
  shape2: 'M133.896 21.25H126.104L130 14.5L133.896 21.25Z',
  shape3: 'M164.47 5.19166L158.594 10.3102L157.099 2.66112L164.47 5.19166Z',
  shape4: 'M151.824 23.4234L146.757 17.5024L154.419 16.0742L151.824 23.4234Z',
  shape5: 'M183.65 8.36344L182.825 16.1127L176.525 11.5239L183.65 8.36344Z',
  shape6: 'M175.896 25.25H168.104L172 18.5L175.896 25.25Z',

  shape7: 'M194.896 25.25H187.104L191 18.5L194.896 25.25Z',
  shape8: 'M206.148 22.5743L199.264 18.9215L205.87 14.7853L206.148 22.5743Z',
  shape9: 'M213.957 33.0431L206.171 33.3837L209.769 26.4699L213.957 33.0431Z',
  shape10: 'M200.476 31.3512L194.39 36.2185L193.217 28.5134L200.476 31.3512Z',
  shape11: 'M204.915 62.0716L198.516 57.6231L205.569 54.3052L204.915 62.0716Z',
  shape12: 'M206.115 43.1795L201.52 49.4738L198.365 42.3467L206.115 43.1795Z',

  // GRIS/TURQUESA/VERDE Paths
  shapeR1: 'M20.18 77.4156L15.9046 70.9002L23.6858 70.4546L20.18 77.4156Z',
  shapeR2: 'M36.0435 64.0086L29.5066 59.7661L36.4498 56.2253L36.0435 64.0086Z',
  shapeR3: 'M21.6595 44.3707L20.8139 52.1176L14.5266 47.5117L21.6595 44.3707Z',
  shapeR4: 'M38.3004 36.6765L32.9966 42.3861L30.703 34.9373L38.3004 36.6765Z',
  shapeR5: 'M18.1556 33.9495L11.5018 29.8926L18.3426 26.1578L18.1556 33.9495Z',
  shapeR6: 'M38.8271 83.1949L31.4954 85.8361L32.8735 78.165L38.8271 83.1949Z',
  shapeR7: 'M47.4809 86.7022L47.8717 78.9191L54.4178 83.1491L47.4809 86.7022Z',
  shapeR8: 'M49.7501 74.3515L47.9537 66.7684L55.4201 69.004L49.7501 74.3515Z',
  shapeR9: 'M69.1248 82.4427L63.7529 76.7971L71.3289 74.9669L69.1248 82.4427Z',
  shapeR10: 'M65.2974 94.6149L57.6213 95.9597L60.2945 88.6386L65.2974 94.6149Z',
  shapeR11: 'M16.9488 93.9397L10.43 89.6693L17.3883 86.1581L16.9488 93.9397Z',
  shapeR12: 'M84.2288 93.3161L77.1565 90.043L83.5277 85.5538L84.2288 93.3161Z',
};

// --------------------------------------
// COLORES CENTRALIZADOS
// --------------------------------------
export const COLORS = {
  // Violeta
  violetaA: '#7a657dff',
  violetaB: '#492c70ff',

  // Purpura
  purpuraA: '#5c498eff',

  // Azul Gris
  azulGrisA: '#555879',
  azulGrisB: '#46375aff',

  // Gris
  gris: '#748DAE',

  // Turquesa
  turquesaA: '#4DA1A9',
  turquesaB: '#6A9AB0',

  // Verde
  verdeA: '#84AE92',
  verdeB: '#4A9782',
};

// --------------------------------------
// FUNCIÓN PARA CREAR SHAPES
// --------------------------------------
const createShape = (id, className, fill, d) => ({
  id,
  className,
  fill,
  d,
});

// --------------------------------------
// ARRAY PRINCIPAL
// --------------------------------------
export const svgShapes = [
  // ----- VIOLETA -----
  createShape('violeta-1', 'violetaA', COLORS.violetaA, PATHS.shape1),
  createShape('violeta-2', 'violetaA', COLORS.violetaA, PATHS.shape2),
  createShape('violeta-3', 'violetaA', COLORS.violetaA, PATHS.shape3),
  createShape('violeta-4', 'violetaA', COLORS.violetaA, PATHS.shape4),
  createShape('violeta-5', 'violetaA', COLORS.violetaA, PATHS.shape5),
  createShape('violeta-6', 'violetaA', COLORS.violetaA, PATHS.shape6),
  createShape('purpura-1', 'violetaB', COLORS.violetaB, PATHS.shape7),
  createShape('purpura-2', 'violetaB', COLORS.violetaB, PATHS.shape8),
  createShape('purpura-3', 'violetaB', COLORS.violetaB, PATHS.shape9),
  createShape('purpura-4', 'violetaB', COLORS.violetaB, PATHS.shape10),
  createShape('purpura-5', 'violetaB', COLORS.violetaB, PATHS.shape11),
  createShape('purpura-6', 'violetaB', COLORS.violetaB, PATHS.shape12),

  // ----- PURPURA (ANTES "ROJO") -----
  createShape('purpura-1', 'purpura', COLORS.purpuraA, PATHS.shape1),
  createShape('purpura-2', 'purpura', COLORS.purpuraA, PATHS.shape2),
  createShape('purpura-3', 'purpura', COLORS.purpuraA, PATHS.shape3),
  createShape('purpura-4', 'purpura', COLORS.purpuraA, PATHS.shape4),
  createShape('purpura-5', 'purpura', COLORS.purpuraA, PATHS.shape5),
  createShape('purpura-6', 'purpura', COLORS.purpuraA, PATHS.shape6),

  // ----- AZUL GRIS (ANTES "NARANJA") -----
  createShape('azulgris-1', 'azulgris', COLORS.azulGrisA, PATHS.shape1),
  createShape('azulgris-2', 'azulgris', COLORS.azulGrisA, PATHS.shape2),
  createShape('azulgris-3', 'azulgris', COLORS.azulGrisA, PATHS.shape3),
  createShape('azulgris-4', 'azulgris', COLORS.azulGrisA, PATHS.shape4),
  createShape('azulgris-5', 'azulgris', COLORS.azulGrisA, PATHS.shape5),
  createShape('azulgris-6', 'azulgris', COLORS.azulGrisA, PATHS.shape6),
  createShape('purpura-1', 'azulgrisB', COLORS.azulGrisB, PATHS.shape7),
  createShape('purpura-2', 'azulgrisB', COLORS.azulGrisB, PATHS.shape8),
  createShape('purpura-3', 'azulgrisB', COLORS.azulGrisB, PATHS.shape9),
  createShape('purpura-4', 'azulgrisB', COLORS.azulGrisB, PATHS.shape10),
  createShape('purpura-5', 'azulgrisB', COLORS.azulGrisB, PATHS.shape11),
  createShape('purpura-6', 'azulgrisB', COLORS.azulGrisB, PATHS.shape12),

  // ----- GRIS -----
  createShape('gris-1', 'gris', COLORS.gris, PATHS.shapeR1),
  createShape('gris-2', 'gris', COLORS.gris, PATHS.shapeR2),
  createShape('gris-3', 'gris', COLORS.gris, PATHS.shapeR3),
  createShape('gris-4', 'gris', COLORS.gris, PATHS.shapeR4),
  createShape('gris-5', 'gris', COLORS.gris, PATHS.shapeR5),
  createShape('gris-6', 'gris', COLORS.gris, PATHS.shapeR6),
  createShape('gris-7', 'gris', COLORS.gris, PATHS.shapeR7),
  createShape('gris-8', 'gris', COLORS.gris, PATHS.shapeR8),
  createShape('gris-9', 'gris', COLORS.gris, PATHS.shapeR9),
  createShape('gris-10', 'gris', COLORS.gris, PATHS.shapeR10),
  createShape('gris-11', 'gris', COLORS.gris, PATHS.shapeR11),
  createShape('gris-12', 'gris', COLORS.gris, PATHS.shapeR12),

  // ----- TURQUESA (ANTES “AMARILLO”) -----
  createShape('turquesa-1', 'turquesa', COLORS.turquesaA, PATHS.shapeR1),
  createShape('turquesa-2', 'turquesa', COLORS.turquesaA, PATHS.shapeR2),
  createShape('turquesa-3', 'turquesa', COLORS.turquesaA, PATHS.shapeR3),
  createShape('turquesa-4', 'turquesa', COLORS.turquesaA, PATHS.shapeR4),
  createShape('turquesa-5', 'turquesa', COLORS.turquesaA, PATHS.shapeR5),
  createShape('turquesa-6', 'turquesa', COLORS.turquesaB, PATHS.shapeR6),
  createShape('turquesa-7', 'turquesa', COLORS.turquesaB, PATHS.shapeR7),
  createShape('turquesa-8', 'turquesa', COLORS.turquesaB, PATHS.shapeR8),
  createShape('turquesa-9', 'turquesa', COLORS.turquesaB, PATHS.shapeR9),
  createShape('turquesa-10', 'turquesa', COLORS.turquesaB, PATHS.shapeR10),
  createShape('turquesa-11', 'turquesa', COLORS.turquesaB, PATHS.shapeR11),
  createShape('turquesa-12', 'turquesa', COLORS.turquesaB, PATHS.shapeR12),

  // ----- VERDE -----
  createShape('verde-1', 'verde', COLORS.verdeA, PATHS.shapeR1),
  createShape('verde-2', 'verde', COLORS.verdeA, PATHS.shapeR1),
  createShape('verde-3', 'verde', COLORS.verdeA, PATHS.shapeR2),
  createShape('verde-4', 'verde', COLORS.verdeA, PATHS.shapeR3),
  createShape('verde-5', 'verde', COLORS.verdeA, PATHS.shapeR4),
  createShape('verde-6', 'verde', COLORS.verdeA, PATHS.shapeR5),
  createShape('verde-7', 'verde', COLORS.verdeB, PATHS.shapeR6),
  createShape('verde-8', 'verde', COLORS.verdeB, PATHS.shapeR7),
  createShape('verde-9', 'verde', COLORS.verdeB, PATHS.shapeR8),
  createShape('verde-10', 'verde', COLORS.verdeB, PATHS.shapeR9),
  createShape('verde-11', 'verde', COLORS.verdeB, PATHS.shapeR10),
  createShape('verde-12', 'verde', COLORS.verdeB, PATHS.shapeR11),
  createShape('verde-13', 'verde', COLORS.verdeB, PATHS.shapeR12),
];
