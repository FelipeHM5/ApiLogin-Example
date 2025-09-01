Autenticación con React y Node.js

Descripción

Aplicación web fullstack que permite a los usuarios registrarse, iniciar sesión y acceder a un dashboard seguro. Implementa autenticación mediante JWT y almacenamiento de datos en MongoDB.

Este proyecto sirve como base para cualquier aplicación web que requiera autenticación, y puede ser expandido para agregar perfiles de usuario, recuperación de contraseñas o integración con APIs externas.

Tecnologías utilizadas

####Frontend: https://github.com/FelipeHM5/ApiLogin-Example/blob/main/frontend/public/logo192.png

Backend: Node.js, Express.

Base de datos: MongoDB.

Seguridad: JWT para autenticación, bcrypt para encriptar contraseñas.

Herramientas: Postman para pruebas, Git y GitHub para control de versiones.

Instalación y configuración
1️⃣ Clonar el repositorio
git clone https://github.com/FelipeHM5/https://github.com/FelipeHM5/ApiLogin-Example.git
cd tu-repo

2️⃣ Backend
cd backend
npm install


Crear archivo .env con tus variables de entorno, por ejemplo:

PORT=10000
MONGO_URI=mongodb://localhost:27017/nombre_db
JWT_SECRET=tu_secreto


Iniciar el servidor:

npm start

3️⃣ Frontend
cd ../frontend
npm install
npm start


Esto levantará la app de React en http://localhost:3000.

Uso

Abrir la aplicación en el navegador (http://localhost:3000).

Registrarse con un nuevo usuario.

Iniciar sesión con las credenciales creadas.

Acceder al Dashboard que solo está disponible para usuarios autenticados.

Estructura del proyecto
frontend/
├─ src/
│  ├─ components/
│  │  ├─ Login.js
│  │  ├─ Login.css
│  │  ├─ Register.js
│  │  ├─ Register.css
│  │  ├─ Dashboard.js
│  │  ├─ Dashboard.css
│  ├─ App.js
│  ├─ index.js
│  ├─ index.css
backend/
├─ src/
│  ├─ routes/
│  │  └─ auth.js
│  ├─ models/
│  │  └─ User.js
│  ├─ app.js
├─ package.json
├─ .env
.gitignore
README.md

Notas importantes

No subir node_modules ni archivos .env al repositorio.

Todas las dependencias están en package.json. Ejecuta npm install al clonar el proyecto.

JWT se utiliza para proteger rutas, y las contraseñas se encriptan con bcrypt antes de guardarlas en MongoDB.
