# Rick and Morty API Project

Este es el archivo README para tu proyecto utilizando la API de Rick and Morty. El proyecto se desarrollará utilizando las tecnologías React, Node.js, Express, Sequelize y PostgreSQL.

## Descripción del proyecto

El objetivo de este proyecto es crear una aplicación web que consuma la API de Rick and Morty y muestre información sobre los personajes de la serie. Los usuarios podrán buscar personajes, ver detalles individuales de cada uno y guardar sus personajes favoritos en una base de datos.

La aplicación se dividirá en dos partes principales: el frontend desarrollado en React y el backend desarrollado en Node.js con Express. La base de datos PostgreSQL se utilizará para almacenar la información de los personajes favoritos.

## Requisitos previos

Antes de comenzar con el proyecto, asegúrate de tener instalado lo siguiente:

- Node.js: [Descargar Node.js](https://nodejs.org)
- PostgreSQL: [Descargar PostgreSQL](https://www.postgresql.org/download/)

## Configuración del proyecto

Sigue los siguientes pasos para configurar el proyecto en tu máquina local:

1. Clona este repositorio en tu máquina local:  
   ```
   git clone <URL del repositorio>
   ```

2. Ve al directorio del proyecto:
   ```
   cd rick-and-morty-api-project
   ```

3. Instala las dependencias del frontend y del backend:
   ```
   cd frontend
   npm install
   
   cd ../backend
   npm install
   ```

4. Configura la base de datos PostgreSQL:
   - Crea una base de datos en PostgreSQL para el proyecto.
   - Copia el archivo `.env.example` y renómbralo a `.env`.
   - Abre el archivo `.env` y configura las variables de entorno para la conexión a la base de datos PostgreSQL.

5. Ejecuta las migraciones de la base de datos:
   ```
   npx sequelize-cli db:migrate
   ```

6. Inicia el servidor backend:
   ```
   npm start
   ```

7. Inicia el servidor frontend:
   ```
   cd ../frontend
   npm start
   ```

8. Accede a la aplicación en tu navegador web:
   ```
   http://localhost:3000
   ```

## Estructura del proyecto

El proyecto está estructurado de la siguiente manera:

- `backend`: Contiene el código del servidor backend.
  - `config`: Configuración de la base de datos y otras variables de entorno.
  - `controllers`: Controladores de Express para manejar las rutas y las solicitudes HTTP.
  - `migrations`: Migraciones de la base de datos utilizando Sequelize.
  - `models`: Modelos de la base de datos utilizando Sequelize.
  - `routes`: Definición de las rutas de la API.
  - `seeders`: Datos iniciales para poblar la base de datos.
  - `app.js`: Archivo principal del backend.

- `frontend`: Contiene el código del frontend.
  - `public`: Archivos estáticos y el archivo `index.html`.
  - `src`: Código fuente del frontend.
    - `components`: Componentes React reutilizables.
    - `pages`: Páginas principales de la aplicación.
    - `services`: Servicios para interactuar con la API de Rick and Morty y la API backend.
    - `App.js`: Componente principal de la aplicación.
    - `index.js`: Punto de entrada del frontend.

## Contribución

Si deseas contribuir a este proyecto, sigue los siguientes pasos:

1. Crea un nuevo `branch` para tus cambios:
   ```
   git checkout -b feature/nombre-de-la-funcionalidad
   ```

2. Realiza tus cambios y asegúrate de que las pruebas pasen correctamente.

3. Realiza un commit de tus cambios:
   ```
   git commit -m "Agregar descripción de los cambios"
   ```

4. Envía tus cambios al repositorio remoto:
   ```
   git push origin feature/nombre-de-la-funcionalidad
   ```

5. Abre una solicitud de extracción (pull request) en GitHub y describe tus cambios detalladamente.

## Licencia

Este proyecto se distribuye bajo la licencia MIT. Consulta el archivo `LICENSE` para más información.

## Recursos adicionales

- [Documentación de React](https://reactjs.org/docs)
- [Documentación de Node.js](https://nodejs.org/en/docs)
- [Documentación de Express](https://expressjs.com)
- [Documentación de Sequelize](https://sequelize.org)
- [Documentación de PostgreSQL](https://www.postgresql.org/docs)
