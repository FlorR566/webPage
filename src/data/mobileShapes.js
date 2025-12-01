// mobileShapes.js
// --------------------------------------
// COLORES PARA MOBILE
// --------------------------------------
export const COLORS = {
  violeta: '#7C4585',
  turquesa: '#4DA1A9',
  rosa: '#F4A6C1',
  verde: '#84AE92',
};

// --------------------------------------
// FACTORY
// --------------------------------------
const createShape = (fill, d, className) => ({
  fill,
  d,
  className,
});

// --------------------------------------
// SHAPES SIMPLIFICADOS PARA MOBILE
// --------------------------------------
export const mobileShapes = [
  createShape(COLORS.rosa, 'M110 100 L130 120 L120 170 Z', 'shape-mobile rosa'),

  createShape(
    COLORS.turquesa,
    'M100 100 A20 20 0 1 1 99.9 100',
    'shape-mobile turquesa'
  ),

  createShape(
    COLORS.verde,
    'M30 170 A10 15 0 1 1 80 190',
    'shape-mobile verde'
  ),

  createShape(
    COLORS.violeta,
    'M20 130 L40 160 L20 170 Z',
    'shape-mobile violeta'
  ),
];
