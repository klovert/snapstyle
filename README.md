# SnapStyle

SnapStyle es una aplicación web que permite a diseñadores y creativos generar paletas de colores inspiradoras a partir de cualquier imagen que suban.

## Características

- **Subida de imagen:** El usuario puede cargar una imagen desde su dispositivo.
- **Extracción de paletas:** Utiliza la API de Color Thief para extraer los colores dominantes (hasta 5) de la imagen.
- **Animaciones:** GSAP anima la aparición de cada muestra de color para una experiencia visual atractiva.
- **Modo claro/oscuro:** Detecta la preferencia del sistema o permite alternar manualmente entre temas.

## Tecnologías usadas

- **Astro:** Framework para generar contenido estático y componentes ligeros.
- **Tailwind CSS:** Sistema de utilidades CSS para estilos rápidos y responsivos.
- **GSAP:** Librería para animaciones de alta performance.
- **Color Thief API:** Herramienta para extraer paletas de color de imágenes.
- **JavaScript:** Lógica de extracción, animación y gestión de estado de tema.

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/klovert/snapstyle.git
   cd snapstyle
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```

## Uso

1. Ejecuta el servidor de desarrollo:
   ```bash
   npm run dev
   ```
2. Abre tu navegador en `http://localhost:3000`.
3. Sube una imagen para ver la paleta de colores extraída.
4. Usa el botón de tema para alternar entre modo claro y oscuro.

---

¡Listo! Con SnapStyle puedes inspirarte y crear combinaciones de colores de forma rápida y divertida.


