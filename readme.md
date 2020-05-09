# Proyecto Curso de Optimización Web Platzi

Curso de optimización web dictado por [@jonalvarezz](https://twitter.com/jonalvarezz) para [Platzi](https://platzi.com)

### 🚀 Optimizaciones aplicadas

1. Elimina bloqueo en etiquetas `script`.
1. Convierte los estilos en Mobile First.
1. Carga los estilos para Desktop con baja prioridad en Móvil.
1. Agiliza HTTP handshake con otros dominios de recursos.
1. Reduce Paints en la animacion hover de los items del carousel.
1. Reduce complejidad de selectores CSS.
1. Desbloquea la carga del logo.
1. Evita texto invisible durante la carga (FOIT).
1. Reduce el tamaño del logo en 90%.
1. Minimiza requests HTTP con SVG.
1. Aplica Lazy load para las imágenes.
1. Evita _Layout Shifts_.
1. Compila el código para producción.
1. Utiliza un servidor para producción.
1. Agrega analizador del bundle: `npm run dev|build -- --analyze`
1. Uso conciente de Tree Shaking.
1. Mejora TTI por 5 seg.
1. Reduce el tamaño del Bundle un 70% gzipped.
1. Divide el bundle en dos archivos (code splitting)
1. Aplica lazy load para la librería del modal.
1. Renderiza el contenido principal desde nuestro propio servidor node (SSR).
1. Pre-renderiza el contenido principal de forma estática (SSG).
1. Deploy en Netlify.
1. Genera el contenido estático cada semana con GitHub Actions.
1. Guarda assets en el cache del navegador con Service Workers.

### 🤖 Guía Rápida

1.  **Empieza a desarrollar.**

    Instala dependencias

    ```sh
    npm install
    ```

    Inicia el proyecto

    ```sh
    npm run dev
    ```

    El sitio estará disponible en http://localhost:3000.

    Happy hacking!

1.  **Para producción.**

    Construye el proyecto

    ```sh
    npm run build
    ```

    El sitio podrá ser accedido como un sitio estático.

    Un servidor de archivos estático está incluido y se puede iniciar con

    ```sh
    npm start
    ```

    El sitio estará disponible en http://localhost:5000.
