const express = require('express');
const router = express.Router();
const inventory = require('../controllers/inventoryController');

router.get('/', inventory.getAll);
router.get('/:id', inventory.get);
router.post('/', inventory.create);
router.put('/:id', inventory.update);
router.delete('/:id', inventory.delete);

module.exports = router;