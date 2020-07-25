<p align="center">
  <a href="https://platzi.com/cursos/web-performance" target="_blank">
    <img alt="Curso Optimizacion Web en Platzi" src="https://static.platzi.com/media/achievements/badge-optimizacion-web-183eef1c-d7e3-4f43-b680-f12f428c6484.png" width="60" />
  </a>
</p>
<h1 align="center">
  Proyecto del Curso: Optimización Web
</h1>
<p align="center">
  <a href="https://platzi-optimizacion-web.netlify.app" target="_blank">
    <img alt="Netlify Status" src="https://api.netlify.com/api/v1/badges/35ae5664-8756-4e3a-bb0c-d341283c5dca/deploy-status" width="130" />
  </a>
</p>

[Curso de optimización web](https://platzi.com/cursos/web-performance) dictado por [@jonalvarezz](https://twitter.com/jonalvarezz) para [Platzi](https://platzi.com)

* [Cómo trabajar en este proyecto?](#-cómo-trabajar-en-este-proyecto)
* [Guía rápida](#-gu%C3%ADa-rápida)
* [Optimizaciones aplicadas](#-optimizaciones-aplicadas)
* [Encontraste un error o mejora?](#-encontraste-un-error-o-mejora)

### 🔎 Cómo trabajar en este proyecto?
El curso es totalmente práctico y progresivo este repositorio sólo existe como una guía para cuando lo necesites. Puedes realizar todo el curso en tu propio proyecto y tu propio repositorio.

Avanzamos en el curso a un nuevo tema y no puedes o no quieres completar los cambios anteriores para continuar? 
Empieza desde la etiqueta git correspondiente al módulo del curso.


1.  Actualiza la información de las etiquetas:
    
    > Anteriormente debiste clonar este repositorio tal como lo hicimos en clase.

    ```sh
    git fetch --tags
    ```
    

1.  Lista las etiquetas disponibles:

    ```sh
    git tag
    ```
    
    Deberías ver algo como:

    ```sh
    0-inicio
    1-css
    2-webfonts
    3-imagenes
    4-javascript
    ...
    ```

1.  Inicia un nuevo branch desde el punto que desees:

    ```sh
    git checkout -b el-nombre-de-mi-branch etiqueta-elegida

    # Por ejemplo, para iniciar desde el módulo 4-javascript
    git checkout -b jonalvarezz-javascript 4-javascript
    ```

    Eso es todo, ya puedes iniciar con todos los cambios incluídos hasta ese módulo. En la [sección Tags de GitHub](https://github.com/jonalvarezz/platzi-optimizacion-web/tags), encuentras más información de cada etiqueta.
    

#### Bonus: Cómo subo mis cambios a otro repositorio?
Git permite manejar varios repositorios remotos en una misma copia local. [Aquí encuentras más información](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes) y te dejaré el cheatsheet a continuación:
```sh
# Crea tu nuevo repositorio en GitHub/GitLab/otro. 
# Asumamos la URL es git@github.com:jonalvarezz/mi-repo-mas-bello.git
# Agrega el nuevo remote

git remote add mi-repo git@github.com:jonalvarezz/mi-repo-mas-bello.git

# Para push
git push mi-repo branch-a-hacer-push


# Para pull
git pull mi-repo branch-a-hacer-push
```


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
1. Automatiza Performance Audits con Lighthouse y GitHub Actions.


### 🐞 Encontraste un error o mejora?
Ayuda a otros estudiantes con eso que acabas de descubrir que haría este curso y respositorio mucho mejor.
* En [Issues](https://github.com/jonalvarezz/platzi-optimizacion-web/issues/new) puedes reportar errores, agregar sugerencias y comentarios.
* Por su parte, los [Pull Request](https://github.com/jonalvarezz/platzi-optimizacion-web/pulls) siempre estarán abiertos para recibir mejoras puntuales.

Happy hacking!
