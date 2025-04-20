import { useRef } from 'react';
import ColorThief from 'colorthief';
import { gsap } from 'gsap';

export default function ImageUploader() {
  const imgRef = useRef(null);
  const paletteRef = useRef(null);

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    imgRef.current.src = url;
    imgRef.current.onload = () => {
      extractColors();
    };
  };

  const extractColors = () => {
    const colorThief = new ColorThief();
    // Obtiene los 5 colores dominantes
    const palette = colorThief.getPalette(imgRef.current, 5);
    renderPalette(palette);
  };

  const renderPalette = (palette) => {
    const container = paletteRef.current;
    container.innerHTML = ''; // limpia paleta previa
    palette.forEach((rgb, i) => {
      const [r, g, b] = rgb;
      const div = document.createElement('div');
      div.className = 'w-16 h-16 rounded';
      div.style.backgroundColor = `rgb(${r},${g},${b})`;
      container.appendChild(div);
      // Animación GSAP: fade-in y slide desde abajo
      gsap.from(div, { opacity: 0, y: 20, delay: i * 0.1, duration: 0.5 });
    });
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <input
        type="file"
        accept="image/*"
        onChange={handleFile}
        className="p-2 border rounded"
      />
      <img
        ref={imgRef}
        src="/placeholder.png"
        alt="Preview"
        crossOrigin="anonymous"
        className="max-w-xs rounded shadow"
      />
      <div
        ref={paletteRef}
        className="flex space-x-2 mt-4"
      ></div>
    </div>
  );
}
