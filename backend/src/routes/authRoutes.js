const express = require("express");
const router = express.Router();
const { register, login, getProfile, editProfile, deleteProfile} = require('../controllers/authController');

// Rutas de autenticación
router.post('/register', register);
router.post('/login', login);
router.get('/users', getProfile);
router.put('/update/:id', editProfile);
router.delete('/delete/:id', deleteProfile);



module.exports = router; // Exportar el router