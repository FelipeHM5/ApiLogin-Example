# Autenticación con React y Node.js

![](https://files.readme.io/320345b-React_Logo_256x256.png) ![](https://cdn.iconscout.com/icon/free/png-256/free-node-js-icon-svg-png-download-1174925.png?f=webp) 

## Descripcion
Aplicación web que permite a los usuarios registrarse, iniciar sesión y acceder a un dashboard seguro. Implementa autenticación mediante JWT y almacenamiento de datos en MongoDB.

Este proyecto sirve como base para cualquier aplicación web que requiera autenticación, y puede ser expandido para agregar perfiles de usuario, recuperación de contraseñas o integración con APIs externas.


## Tecnologias utilizadas
### Frontend 
React, React Router y CSS 
### Backend 
Node.js y Express
### Bases de datos
MongoDB
### Seguridad
JWT para autenticación, bcrypt para encriptar contraseñas.
### Herramientas
Postman para pruebas, Git y GitHub para control de versiones.

## Instalación y configuración

#### 1️⃣ Clonar el repositorio

	git clone https://github.com/FelipeHM5/ApiLogin-Example
	cd tu-repo

#### 2️⃣ Backend

    cd backend
	npm install
- Crear archivo .env con tus variables de entorno, por ejemplo:

		PORT=10000
		MONGO_URI=mongodb://localhost:27017/nombre_db
		JWT_SECRET=tu_secreto

- Iniciar servidor

		npm start

#### 3️⃣ Frontend

	cd ../frontend
	npm install
	npm start
- Esto levantará la app de React en http://localhost:3000.

## Uso

1. Abrir la aplicación en el navegador (http://localhost:3000).

2. Registrarse con un nuevo usuario.

3. Iniciar sesión con las credenciales creadas.

4. Acceder al Dashboard que solo está disponible para usuarios autenticados.

### Estructura del proyecto

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
### Notas importantes
- No subir node_modules ni archivos .env al repositorio.

- Todas las dependencias están en package.json. Ejecuta npm install al clonar el proyecto.

- JWT se utiliza para proteger rutas, y las contraseñas se encriptan con bcrypt antes de guardarlas en MongoDB.





