const express = require('express');
const router = express.Router();
const repairs = require('../controllers/repairsController');

router.get('/', repairs.getAll);
router.get('/:id', repairs.get);
router.post('/', repairs.create);
router.put('/:id', repairs.update);
router.delete('/:id', repairs.delete);

module.exports = router;