const express = require('express');
const router = express.Router();
const CelularController = require('../controllers/CelularController');

//implementa like
router.post('/:id/like', CelularController.like);

//implementa deslike
router.post('/:id/deslike', CelularController.deslike);

module.exports = router;