//Pagina de login com os usuários cadastrados
const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');

// Define a rota POST '/login' e associa ao método login do AuthController
router.post('/login', AuthController.login);
// Exporta o router para ser usado em outros arquivos da aplicação
module.exports = router