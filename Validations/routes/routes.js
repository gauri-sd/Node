const express = require('express');
const router = express.Router();

const product_controller = require('../controllers/controller');

router.get('/test', product_controller.test);
router.post('/create', product_controller.product_create);
router.get('/get-all', product_controller.get_all);
router.get('/:id', product_controller.get_one);
router.put('/:id/update', product_controller.product_update);
router.delete('/:id/delete', product_controller.product_delete);

module.exports = router;
