import { svgShapes } from '../data/svgShapes';
import { mobileShapes } from '../data/mobileShapes';
import './shapesBackground.css';
import Hero from './Hero';

export default function ShapesBackground() {
  return (
    <div className="shapes-wrapper">
      {/* SVG Desktop */}
      <svg
        className="shapes-svg desktop-bg"
        viewBox="0 0 220 100"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {svgShapes.map(shape => (
          <path
            key={shape.id}
            d={shape.d}
            fill={shape.fill}
            className={shape.className}
          />
        ))}
      </svg>
      {/* SVG Mobile */}
      <svg
        className="shapes-svg mobile-bg"
        viewBox="0 0 150 150"
        preserveAspectRatio="xMidYMid meet"
      >
        {mobileShapes.map((shape, i) => (
          <path
            key={i}
            d={shape.d}
            fill={shape.fill}
            className={shape.className}
          />
        ))}
      </svg>
      {/* Contenido por encima */}
      <Hero />
    </div>
  );
}
