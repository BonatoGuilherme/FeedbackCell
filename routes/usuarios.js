//Pagina de login com os usuários cadastrados
const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');

router.post('/login', AuthController.login);
module.exports = router