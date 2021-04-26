const express = require('express');
const router = express.Router();
const customers = require('../controllers/customersController');

router.use(express.json());
router.get('/', customers.getAll);
router.get('/:id', customers.get);
router.get('/:email', customers.getByEmail);
router.post('/', customers.create);
router.put('/:id', customers.update);
router.delete('/:id', customers.delete);

module.exports = router;