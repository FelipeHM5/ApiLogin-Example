const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

dotenv.config(); // Cargar variables de entorno
const app = express();

app.use(cors({
    origin: "http://localhost:3000", // Ruta para comunicarse con el frontend
}));
app.use(express.json());

// Conectar a la base de datos
connectDB();    

// Rutas
app.use('/api/auth', authRoutes);

//Puerto del servidor
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));