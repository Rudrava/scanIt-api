const express = require('express');

const router = express.Router();

router.post('/item');
router.get('/items');
router.get('/item/:id');
router.patch('/item');
router.delete('/ite,');
module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Item
 *   description: Item routes
 */
